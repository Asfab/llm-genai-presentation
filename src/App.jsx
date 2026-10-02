import { useState, useCallback, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import slides from './slides';
import SlideProgress from './components/SlideProgress';
import { colors, fonts } from './theme/tokens';

const STATIC = import.meta.env.VITE_STATIC === 'true';

const socketPromise = STATIC
  ? Promise.resolve(null)
  : import('socket.io-client').then(({ io }) =>
      io({ autoConnect: false, transports: ['websocket'] })
    );

export default function App() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const currentRef = useRef(current);

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  useEffect(() => {
    let sock = null;
    let cancelled = false;
    socketPromise.then((s) => {
      if (cancelled || !s) return;
      sock = s;
      s.connect();

      s.on('navigate', (dir) => {
        setCurrent((c) => {
          const next = c + dir;
          if (next < 0 || next >= total) return c;
          return next;
        });
      });

      s.on('goto', (idx) => {
        if (idx >= 0 && idx < total) setCurrent(idx);
      });

      s.on('state', (st) => {
        if (st.current >= 0 && st.current < total) setCurrent(st.current);
      });
    });

    return () => {
      cancelled = true;
      if (sock) {
        sock.off('navigate');
        sock.off('goto');
        sock.off('state');
        sock.disconnect();
      }
    };
  }, [total]);

  useEffect(() => {
    socketPromise.then((s) => {
      if (s) s.emit('sync', { current });
    });
  }, [current]);

  const go = useCallback(
    (dir) => {
      setCurrent((c) => {
        const next = c + dir;
        if (next < 0 || next >= total) return c;
        return next;
      });
    },
    [total]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'Home') setCurrent(0);
      if (e.key === 'End') setCurrent(total - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, total]);

  const Slide = slides[current];

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: colors.bg,
        fontFamily: fonts.body,
        position: 'relative',
        cursor: 'default',
        userSelect: 'none',
      }}
    >
      <SlideProgress current={current} total={total} />

      <AnimatePresence mode="wait">
        <Slide key={current} />
      </AnimatePresence>

      <div
        style={{
          position: 'fixed',
          bottom: 24,
          right: 36,
          fontSize: 12,
          color: colors.textTertiary,
          fontVariantNumeric: 'tabular-nums',
          fontWeight: 500,
          letterSpacing: '0.04em',
        }}
      >
        {current + 1} / {total}
      </div>

      <div
        onClick={() => go(-1)}
        style={{ position: 'fixed', left: 0, top: 0, width: '12%', height: '100%', cursor: current > 0 ? 'w-resize' : 'default', zIndex: 50 }}
      />
      <div
        onClick={() => go(1)}
        style={{ position: 'fixed', right: 0, top: 0, width: '12%', height: '100%', cursor: current < total - 1 ? 'e-resize' : 'default', zIndex: 50 }}
      />
    </div>
  );
}
