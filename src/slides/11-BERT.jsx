import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import Heading from '../components/Heading';
import Card from '../components/Card';
import AnimatedList from '../components/AnimatedList';
import Tag from '../components/Tag';
import { colors, fonts } from '../theme/tokens';

const ease = [0.22, 1, 0.36, 1];

const words = ['The', 'cat', 'sat', 'on', 'mat'];

function WordPill({ text, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay, ease }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5px 14px',
        borderRadius: 6,
        fontSize: 14,
        fontWeight: 600,
        fontFamily: fonts.body,
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        color: colors.text,
        letterSpacing: '0.01em',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {text}
    </motion.span>
  );
}

function Chevron({ direction, delay, y }) {
  const points = direction === 'right' ? '0,4 6,0 6,8' : '6,4 0,0 0,8';
  return (
    <motion.svg
      width={6} height={8} viewBox="0 0 6 8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 0.25, delay, ease }}
      style={{ position: 'absolute', top: y, flexShrink: 0 }}
    >
      <polygon points={points} fill={colors.cyan} />
    </motion.svg>
  );
}

function ArrowGap({ index, delay }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', width: 14, position: 'relative', height: 36,
    }}>
      <Chevron direction="right" delay={delay} y={2} />
      <Chevron direction="left" delay={delay + 0.06} y={24} />
    </div>
  );
}

const sentence = ['The', '_____', 'sat', 'on', 'the', 'mat'];

export default function BERT() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1800),
      setTimeout(() => setPhase(2), 3200),
      setTimeout(() => setPhase(3), 4600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <SlideLayout subtitle="BERT">
      <Heading tag="Encoder Model" sub="Bidirectional Encoder Representations from Transformers">
        The model that reads both ways
      </Heading>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15, ease }}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 20,
        }}
      >
        {words.map((w, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <WordPill text={w} delay={0.2 + i * 0.06} />
            {i < words.length - 1 && <ArrowGap index={i} delay={0.4 + i * 0.08} />}
          </div>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.9, ease }}
          style={{
            marginLeft: 12, fontSize: 11, fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.08em', color: colors.cyan,
          }}
        >
          Bidirectional
        </motion.span>
      </motion.div>

      <Card accent delay={0.5} style={{ marginBottom: 24 }}>
        <div style={{
          fontSize: 11, fontWeight: 600, textTransform: 'uppercase',
          letterSpacing: '0.1em', color: colors.cyan, marginBottom: 16,
        }}>
          Masked Language Modeling — how BERT learns
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14, minHeight: 36 }}>
          {sentence.map((token, i) => {
            const isMask = token === '_____';
            const revealed = isMask && phase >= 3;
            const gathering = isMask && phase >= 1 && phase < 3;

            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: gathering ? [1, 1.08, 1] : 1,
                }}
                transition={{
                  opacity: { duration: 0.35, delay: 0.6 + i * 0.06 },
                  scale: gathering ? { duration: 0.8, repeat: Infinity, repeatType: 'reverse' } : {},
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '6px 14px',
                  borderRadius: 6,
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: fonts.body,
                  background: isMask
                    ? (revealed ? colors.emeraldMuted : colors.accentMuted)
                    : colors.surface,
                  border: `1.5px solid ${isMask
                    ? (revealed ? colors.emerald + '50' : colors.accent + '40')
                    : colors.border}`,
                  color: isMask
                    ? (revealed ? colors.emerald : colors.accent)
                    : (phase >= 1 && !isMask ? colors.cyan : colors.text),
                  letterSpacing: '0.01em',
                  transition: 'color 0.4s, background 0.4s, border-color 0.4s',
                  minWidth: isMask ? 56 : 'auto',
                }}
              >
                {revealed ? 'cat' : (isMask ? '[MASK]' : token)}
              </motion.span>
            );
          })}
        </div>

        <div style={{ minHeight: 48 }}>
          <AnimatePresence mode="wait">
            {phase === 0 && (
              <motion.div key="p0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ fontSize: 13, color: colors.textTertiary }}>
                Step 1: Hide a word from the sentence...
              </motion.div>
            )}
            {phase === 1 && (
              <motion.div key="p1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="80" height="24" viewBox="0 0 80 24">
                    <motion.path d="M0 12 Q20 2 40 12 Q60 22 80 12" fill="none" stroke={colors.cyan}
                      strokeWidth={1.5} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8 }} />
                  </svg>
                  <span style={{ fontSize: 13, color: colors.cyan, fontWeight: 600 }}>
                    Step 2: Gathering context from both sides...
                  </span>
                </div>
              </motion.div>
            )}
            {phase === 2 && (
              <motion.div key="p2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 0.6, repeat: 2 }}
                    style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: colors.accent,
                    }}
                  />
                  <span style={{ fontSize: 13, color: colors.accent, fontWeight: 600 }}>
                    Step 3: "sat ___ on the mat" + "The ___" → computing prediction...
                  </span>
                </div>
              </motion.div>
            )}
            {phase >= 3 && (
              <motion.div key="p3" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: colors.emerald, fontSize: 18 }}>&#10003;</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: colors.emerald }}>
                    Predicted: "cat" — using context from the entire sentence
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>

      <AnimatedList
        delay={1.1}
        items={[
          'BERT reads in both directions at once \u2014 it sees the full picture before deciding',
          'Built for understanding: search, classification, question answering',
        ]}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' }}
      >
        <Tag color={colors.cyan} bg={colors.cyanMuted} delay={1.45}>Encoder-Only</Tag>
        <Tag color={colors.warm} bg={colors.warmMuted} delay={1.5}>340M Params</Tag>
        <Tag color={colors.textTertiary} delay={1.55}>Google 2018</Tag>
      </motion.div>
    </SlideLayout>
  );
}
