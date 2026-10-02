import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import Heading from '../components/Heading';
import Card from '../components/Card';
import { colors } from '../theme/tokens';

const ease = [0.22, 1, 0.36, 1];

const tinyLayers = [3, 4, 4, 2];
const tinyX = [10, 28, 46, 64];
const tinyH = 52;

function getTinyY(layerIdx, nodeIdx) {
  const count = tinyLayers[layerIdx];
  const gap = 12;
  const total = (count - 1) * gap;
  const start = (tinyH - total) / 2;
  return start + nodeIdx * gap;
}

function TinyNet() {
  const conns = [];
  for (let l = 0; l < tinyLayers.length - 1; l++)
    for (let i = 0; i < tinyLayers[l]; i++)
      for (let j = 0; j < tinyLayers[l + 1]; j++)
        conns.push({ x1: tinyX[l], y1: getTinyY(l, i), x2: tinyX[l + 1], y2: getTinyY(l + 1, j), l });

  return (
    <svg width="74" height={tinyH} viewBox={`0 0 74 ${tinyH}`}>
      {conns.map((c, i) => (
        <line key={i} x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
          stroke={colors.textTertiary} strokeWidth={0.5} strokeOpacity={0.3} />
      ))}
      {tinyLayers.map((count, l) =>
        Array.from({ length: count }).map((_, i) => (
          <circle key={`${l}-${i}`} cx={tinyX[l]} cy={getTinyY(l, i)} r={3}
            fill={colors.bg} stroke={colors.textTertiary} strokeWidth={1.2} />
        ))
      )}
    </svg>
  );
}

const models = [
  { name: 'BERT', params: '340M', size: 30, opacity: 0.25, connections: '~110M' },
  { name: 'GPT-2', params: '1.5B', size: 50, opacity: 0.4, connections: '~1.5B' },
  { name: 'GPT-3', params: '175B', size: 120, opacity: 0.65, connections: '~175B' },
  { name: 'GPT-4', params: '~1.8T', size: 190, opacity: 0.9, connections: '~1.8T' },
];

const stats = [
  { label: 'Parameters', value: '175B+', color: colors.accent },
  { label: 'Training Data', value: 'Internet-scale', color: colors.cyan },
  { label: 'Compute', value: 'Thousands of GPUs', color: colors.rose },
];

export default function ScaleUp() {
  return (
    <SlideLayout subtitle="Scale">
      <Heading tag="The Leap">Now scale it up</Heading>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '12px 20px',
          background: colors.surface,
          borderRadius: 10,
          border: `1px solid ${colors.border}`,
          marginBottom: 24,
        }}
      >
        <TinyNet />
        <div>
          <div style={{ fontSize: 14, color: colors.text, fontWeight: 600 }}>
            That network you just saw?
          </div>
          <div style={{ fontSize: 13, color: colors.textSecondary, lineHeight: 1.5 }}>
            ~19 nodes, ~60 connections. Enough to learn simple patterns.
            Real LLMs are the <span style={{ fontWeight: 600, color: colors.text }}>same idea</span> — just unimaginably bigger.
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            marginLeft: 'auto',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <svg width="32" height="16" viewBox="0 0 32 16">
            <motion.path
              d="M0 8h24m0 0l-5-4m5 4l-5 4"
              stroke={colors.accent}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.8, ease }}
            />
          </svg>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          gap: 40,
          marginBottom: 28,
          padding: '12px 0',
        }}
      >
        {models.map((m, i) => (
          <div
            key={m.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.18, ease }}
              style={{
                width: m.size,
                height: m.size,
                borderRadius: '50%',
                background: `rgba(124, 58, 237, ${m.opacity})`,
                boxShadow: i === 3 ? `0 0 0 10px ${colors.accentMuted}` : 'none',
                flexShrink: 0,
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.18 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{
                fontSize: 14,
                fontWeight: 700,
                color: colors.text,
                marginBottom: 2,
              }}>
                {m.name}
              </div>
              <div style={{
                fontSize: 11,
                color: colors.textTertiary,
                fontFamily: "'DM Mono', monospace",
              }}>
                {m.params} params
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>

      <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
        {stats.map((s, i) => (
          <Card key={s.label} delay={1.5 + i * 0.1} style={{ flex: 1 }}>
            <div style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: s.color,
              marginBottom: 10,
            }}>
              {s.label}
            </div>
            <div className="heading-serif" style={{
              fontSize: 24,
              color: colors.text,
              lineHeight: 1.2,
            }}>
              {s.value}
            </div>
          </Card>
        ))}
      </div>

      <Card accent delay={1.9}>
        <p style={{
          fontSize: 16,
          color: colors.textSecondary,
          lineHeight: 1.65,
          margin: 0,
          textAlign: 'center',
        }}>
          If each of GPT-3&rsquo;s{' '}
          <span style={{ color: colors.accent, fontWeight: 600 }}>175 billion</span>{' '}
          parameters were a grain of sand, you&rsquo;d need about{' '}
          <span style={{ color: colors.accent, fontWeight: 600 }}>four dump trucks</span>.
        </p>
      </Card>
    </SlideLayout>
  );
}
