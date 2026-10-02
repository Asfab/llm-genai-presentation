import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: '*' },
  transports: ['websocket'],
});

const PORT = process.env.PORT || 3000;
const PIN = process.env.PRESENTER_PIN || '2025';

app.use(express.json());
app.use(express.static(join(__dirname, 'dist')));

app.post('/api/auth', (req, res) => {
  const { pin } = req.body;
  if (pin === PIN) {
    res.json({ ok: true, token: Buffer.from(`${PIN}:${Date.now()}`).toString('base64') });
  } else {
    res.status(401).json({ ok: false });
  }
});

app.get('/api/script', (_req, res) => {
  res.sendFile(join(__dirname, 'SPEAKING_GUIDE.md'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
});

app.get('/remote', (_req, res) => {
  res.sendFile(join(__dirname, 'dist', 'remote.html'));
});

app.get('/{*path}', (_req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

let state = { current: 0 };

io.on('connection', (socket) => {
  let authenticated = false;

  socket.emit('state', state);

  socket.on('auth', (token) => {
    try {
      const decoded = Buffer.from(token, 'base64').toString();
      if (decoded.startsWith(PIN + ':')) {
        authenticated = true;
        socket.emit('auth_ok');
      } else {
        socket.emit('auth_fail');
      }
    } catch {
      socket.emit('auth_fail');
    }
  });

  socket.on('navigate', (dir) => {
    if (!authenticated) return;
    io.emit('navigate', dir);
  });

  socket.on('goto', (idx) => {
    if (!authenticated) return;
    state.current = idx;
    io.emit('goto', idx);
  });

  socket.on('sync', (s) => {
    state = { ...state, ...s };
    socket.broadcast.emit('state', state);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Remote control: http://localhost:${PORT}/remote`);
  console.log(`Presenter PIN: ${PIN}`);
});
