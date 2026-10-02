import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import Heading from '../components/Heading';
import Card from '../components/Card';
import { colors } from '../theme/tokens';

const ease = [0.22, 1, 0.36, 1];

const words = ['The', 'cat', 'sat', 'on', 'the', 'mat', 'because', 'it', 'was', 'tired'];

const connections = [
  { from: 7, to: 1, strength: 1.0 },
  { from: 7, to: 9, strength: 0.6 },
  { from: 2, to: 5, strength: 0.55 },
  { from: 1, to: 2, strength: 0.35 },
];

const PILL_W = 72;
const PILL_GAP = 8;
const TOTAL_W = words.length * PILL_W + (words.length - 1) * PILL_GAP;
const PILL_Y = 110;
const PILL_H = 34;

function pillCenterX(index) {
  return index * (PILL_W + PILL_GAP) + PILL_W / 2;
}

function arcPath(fromIdx, toIdx) {
  const x1 = pillCenterX(fromIdx);
  const x2 = pillCenterX(toIdx);
  const dist = Math.abs(x2 - x1);
  const peakY = PILL_Y - 18 - dist * 0.3;
  const midX = (x1 + x2) / 2;
  return `M ${x1} ${PILL_Y - 2} Q ${midX} ${peakY} ${x2} ${PILL_Y - 2}`;
}

function AttentionArc({ fromIdx, toIdx, strength, delay }) {
  const strokeWidth = 1 + strength * 2.5;
  const opacity = 0.25 + strength * 0.55;
  const color = strength > 0.8 ? colors.accent : colors.textTertiary;

  return (
    <motion.path
      d={arcPath(fromIdx, toIdx)}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      opacity={opacity}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity }}
      transition={{ duration: 0.8, delay, ease }}
    />
  );
}

function WordPill({ word, index, isHighlight }) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.04, ease }}
    >
      <rect
        x={pillCenterX(index) - PILL_W / 2}
        y={PILL_Y}
        width={PILL_W}
        height={PILL_H}
        rx={17}
        fill={isHighlight ? colors.accentMuted : colors.surface}
        stroke={isHighlight ? colors.accent : colors.border}
        strokeWidth={isHighlight ? 1.5 : 1}
      />
      <text
        x={pillCenterX(index)}
        y={PILL_Y + PILL_H / 2 + 1}
        textAnchor="middle"
        dominantBaseline="central"
        fill={isHighlight ? colors.accent : colors.text}
        fontSize={14}
        fontWeight={isHighlight ? 600 : 400}
        fontFamily="'DM Sans', system-ui, sans-serif"
      >
        {word}
      </text>
    </motion.g>
  );
}

export default function AttentionBreakthrough() {
  const highlightIndices = new Set([1, 7]);

  return (
    <SlideLayout subtitle="The Breakthrough">
      <Heading
        tag="The Breakthrough"
        sub="Before this, models read words one at a time. This changed everything."
      >
        <span>
          &ldquo;<span style={{ color: colors.accent }}>Attention</span> is all you need&rdquo;
        </span>
      </Heading>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease }}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 24,
        }}
      >
        <svg
          viewBox={`-4 30 ${TOTAL_W + 8} ${PILL_Y + PILL_H + 10}`}
          width={TOTAL_W + 8}
          height={160}
          style={{ overflow: 'visible', maxWidth: '100%' }}
        >
          {connections.map((c, i) => (
            <AttentionArc
              key={i}
              fromIdx={c.from}
              toIdx={c.to}
              strength={c.strength}
              delay={0.7 + i * 0.18}
            />
          ))}
          {words.map((w, i) => (
            <WordPill
              key={i}
              word={w}
              index={i}
              isHighlight={highlightIndices.has(i)}
            />
          ))}
        </svg>
      </motion.div>

      <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
        <Card delay={0.5} style={{ flex: 1 }}>
          <p style={{ fontSize: 16, color: colors.textSecondary, lineHeight: 1.6, margin: 0 }}>
            The model figures out that{' '}
            <span style={{ color: colors.accent, fontWeight: 600 }}>&ldquo;it&rdquo;</span> refers
            to <span style={{ color: colors.accent, fontWeight: 600 }}>&ldquo;the cat&rdquo;</span> —
            not by following rules, but by learning patterns from millions of sentences.
          </p>
        </Card>
        <Card accent delay={0.65} style={{ flex: 1 }}>
          <p style={{
            fontSize: 16,
            color: colors.text,
            lineHeight: 1.6,
            margin: 0,
            fontStyle: 'italic',
            fontFamily: "'Instrument Serif', Georgia, serif",
          }}>
            &ldquo;Like reading an exam question — you don&rsquo;t read left to right,
            you jump to the key words.&rdquo;
          </p>
        </Card>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.0, ease }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '12px 20px',
          background: colors.surface,
          borderRadius: 10,
          border: `1px solid ${colors.border}`,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="3" width="16" height="14" rx="2" stroke={colors.accent} strokeWidth="1.5" />
          <path d="M6 7h8M6 10h6M6 13h4" stroke={colors.accent} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <div style={{ fontSize: 14, color: colors.textSecondary, lineHeight: 1.5 }}>
          <span style={{ fontWeight: 600, color: colors.text }}>Read the paper:</span>{' '}
          &ldquo;Attention Is All You Need&rdquo; — Vaswani et al., Google, 2017.
          The 12-page paper that started the entire LLM revolution.
        </div>
      </motion.div>
    </SlideLayout>
  );
}
