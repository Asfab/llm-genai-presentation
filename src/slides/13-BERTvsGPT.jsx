import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import Heading from '../components/Heading';
import Card from '../components/Card';
import { colors, fonts } from '../theme/tokens';

const ease = [0.22, 1, 0.36, 1];

const words = ['The', 'cat', 'sat', 'on', 'mat'];

const bertRows = [
  { label: 'Architecture', value: 'Encoder-only' },
  { label: 'Direction', value: 'Bidirectional' },
  { label: 'Training', value: 'Fill in blanks' },
  { label: 'Strength', value: 'Understanding' },
  { label: 'Origin', value: 'Google 2018' },
];

const gptRows = [
  { label: 'Architecture', value: 'Decoder-only' },
  { label: 'Direction', value: 'Left-to-right' },
  { label: 'Training', value: 'Predict next word' },
  { label: 'Strength', value: 'Generation' },
  { label: 'Origin', value: 'OpenAI 2018' },
];

function WordPill({ word, delay, color }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay, ease }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 40,
        padding: '4px 8px',
        fontSize: 11,
        fontWeight: 600,
        fontFamily: fonts.body,
        color: color,
        background: colors.bg,
        border: `1px solid ${colors.border}`,
        borderRadius: 6,
        whiteSpace: 'nowrap',
      }}
    >
      {word}
    </motion.span>
  );
}

function ArrowSvg({ direction, color, delay }) {
  const isRight = direction === 'right';
  return (
    <motion.svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 0.3, delay, ease }}
      style={{ flexShrink: 0 }}
    >
      {isRight ? (
        <>
          <line x1="0" y1="5" x2="10" y2="5" stroke={color} strokeWidth="1.2" />
          <polyline points="8,2 11,5 8,8" stroke={color} strokeWidth="1.2" fill="none" />
        </>
      ) : (
        <>
          <line x1="4" y1="5" x2="14" y2="5" stroke={color} strokeWidth="1.2" />
          <polyline points="6,2 3,5 6,8" stroke={color} strokeWidth="1.2" fill="none" />
        </>
      )}
    </motion.svg>
  );
}

function DirectionDiagram({ label, color, bidirectional, baseDelay }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        flexWrap: 'nowrap',
      }}>
        {words.map((word, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <WordPill word={word} delay={baseDelay + i * 0.04} color={color} />
            {i < words.length - 1 && (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
              }}>
                <ArrowSvg direction="right" color={color} delay={baseDelay + 0.2 + i * 0.04} />
                {bidirectional && (
                  <ArrowSvg direction="left" color={color} delay={baseDelay + 0.25 + i * 0.04} />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: baseDelay + 0.4, ease }}
        style={{
          fontSize: 12,
          fontWeight: 500,
          color: colors.textTertiary,
          fontFamily: fonts.body,
        }}
      >
        {label}
      </motion.span>
    </div>
  );
}

function ComparisonRow({ label, value, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay, ease }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: '10px 0',
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <span style={{ fontSize: 13, color: colors.textTertiary, fontWeight: 500 }}>{label}</span>
      <span style={{ fontSize: 14, color: colors.textSecondary, fontWeight: 500 }}>{value}</span>
    </motion.div>
  );
}

export default function BERTvsGPT() {
  return (
    <SlideLayout subtitle="Comparison">
      <Heading tag="Head to Head">Reader vs writer</Heading>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease }}
        style={{
          display: 'flex',
          gap: 32,
          marginBottom: 28,
          padding: '20px 24px',
          background: colors.surface,
          borderRadius: 12,
          border: `1px solid ${colors.border}`,
        }}
      >
        <DirectionDiagram
          label="Reads in both directions"
          color={colors.cyan}
          bidirectional
          baseDelay={0.2}
        />
        <div style={{
          width: 1,
          background: colors.border,
          alignSelf: 'stretch',
        }} />
        <DirectionDiagram
          label="Reads left to right only"
          color={colors.accent}
          bidirectional={false}
          baseDelay={0.3}
        />
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        gap: 0,
        alignItems: 'stretch',
        marginBottom: 32,
      }}>
        <Card delay={0.35} style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4, ease }}
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: colors.cyan,
              fontFamily: fonts.body,
              marginBottom: 20,
            }}
          >
            BERT
          </motion.div>
          {bertRows.map((row, i) => (
            <ComparisonRow key={row.label} label={row.label} value={row.value} delay={0.45 + i * 0.06} />
          ))}
        </Card>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 48,
        }}>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease }}
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: colors.textTertiary,
              fontFamily: fonts.body,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            vs
          </motion.span>
        </div>

        <Card delay={0.4} style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.45, ease }}
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: colors.accent,
              fontFamily: fonts.body,
              marginBottom: 20,
            }}
          >
            GPT
          </motion.div>
          {gptRows.map((row, i) => (
            <ComparisonRow key={row.label} label={row.label} value={row.value} delay={0.5 + i * 0.06} />
          ))}
        </Card>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9, ease }}
        className="heading-serif"
        style={{
          fontSize: 20,
          color: colors.textSecondary,
          textAlign: 'center',
          lineHeight: 1.6,
        }}
      >
        Not competitors — different tools for different jobs
      </motion.p>
    </SlideLayout>
  );
}
