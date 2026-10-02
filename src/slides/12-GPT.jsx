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

function ArrowRight({ delay }) {
  return (
    <motion.svg
      width={14} height={10} viewBox="0 0 14 10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 0.25, delay, ease }}
      style={{ flexShrink: 0 }}
    >
      <line x1={0} y1={5} x2={9} y2={5} stroke={colors.accent} strokeWidth={1.5} />
      <polygon points="8,1 13,5 8,9" fill={colors.accent} />
    </motion.svg>
  );
}

const generationSteps = ['The', 'quick', 'brown', '___'];

export default function GPT() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [predicted, setPredicted] = useState(false);

  useEffect(() => {
    const timers = [];
    generationSteps.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleCount(i + 1), 1800 + i * 800));
    });
    timers.push(setTimeout(() => setPredicted(true), 1800 + generationSteps.length * 800 + 600));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <SlideLayout subtitle="GPT">
      <Heading tag="Decoder Model" sub="Generative Pre-trained Transformer">
        The model that writes your emails
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
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <WordPill text={w} delay={0.2 + i * 0.06} />
            {i < words.length - 1 && <ArrowRight delay={0.4 + i * 0.08} />}
          </div>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.9, ease }}
          style={{
            marginLeft: 12, fontSize: 11, fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.08em', color: colors.accent,
          }}
        >
          Left to Right
        </motion.span>
      </motion.div>

      <Card accent delay={0.5} style={{ marginBottom: 24 }}>
        <div style={{
          fontSize: 11, fontWeight: 600, textTransform: 'uppercase',
          letterSpacing: '0.1em', color: colors.accent, marginBottom: 16,
        }}>
          Next-Word Prediction — how GPT generates
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14, minHeight: 36 }}>
          {generationSteps.map((token, i) => {
            const isBlank = token === '___';
            const visible = i < visibleCount;
            const isFinal = isBlank && predicted;

            if (!visible) return (
              <motion.span
                key={i}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '6px 14px',
                  borderRadius: 6,
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: fonts.body,
                  background: colors.surface,
                  border: `1.5px dashed ${colors.border}`,
                  color: 'transparent',
                  minWidth: 50,
                  letterSpacing: '0.01em',
                }}
              >
                ___
              </motion.span>
            );

            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: 0.35, ease }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '6px 14px',
                  borderRadius: 6,
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: fonts.body,
                  background: isBlank
                    ? (isFinal ? colors.emeraldMuted : colors.accentMuted)
                    : colors.surface,
                  border: `1.5px solid ${isBlank
                    ? (isFinal ? colors.emerald + '50' : colors.accent + '40')
                    : colors.border}`,
                  color: isBlank
                    ? (isFinal ? colors.emerald : colors.accent)
                    : colors.text,
                  letterSpacing: '0.01em',
                  transition: 'background 0.4s, border-color 0.4s, color 0.4s',
                  minWidth: isBlank ? 50 : 'auto',
                }}
              >
                {isFinal ? 'fox' : (isBlank ? '___' : token)}
              </motion.span>
            );
          })}

          {visibleCount > 0 && visibleCount <= generationSteps.length && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
              style={{
                display: 'inline-block', width: 2, height: 20,
                background: colors.accent, borderRadius: 1, marginLeft: 2,
              }}
            />
          )}
        </div>

        <div style={{ minHeight: 48 }}>
          <AnimatePresence mode="wait">
            {visibleCount === 0 && (
              <motion.div key="s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ fontSize: 13, color: colors.textTertiary }}>
                Generating text one token at a time...
              </motion.div>
            )}
            {visibleCount >= 1 && visibleCount < generationSteps.length && (
              <motion.div key="s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    style={{ color: colors.accent, fontSize: 14 }}
                  >
                    &#9654;
                  </motion.div>
                  <span style={{ fontSize: 13, color: colors.accent, fontWeight: 600 }}>
                    Each word is predicted using only what came before it...
                  </span>
                </div>
              </motion.div>
            )}
            {visibleCount >= generationSteps.length && !predicted && (
              <motion.div key="s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 0.6, repeat: 2 }}
                    style={{ width: 8, height: 8, borderRadius: '50%', background: colors.accent }}
                  />
                  <span style={{ fontSize: 13, color: colors.accent, fontWeight: 600 }}>
                    "The" → "quick" → "brown" → predicting next...
                  </span>
                </div>
              </motion.div>
            )}
            {predicted && (
              <motion.div key="s3" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: colors.emerald, fontSize: 18 }}>&#10003;</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: colors.emerald }}>
                    Predicted: "fox" — only using left context, never looking ahead
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
          'GPT only reads left to right \u2014 it predicts the next word based on everything before it',
          'Built for generating: chat, code, creative writing, summarization',
        ]}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' }}
      >
        <Tag color={colors.accent} bg={colors.accentMuted} delay={1.45}>Decoder-Only</Tag>
        <Tag color={colors.warm} bg={colors.warmMuted} delay={1.5}>175B+ Params</Tag>
        <Tag color={colors.textTertiary} delay={1.55}>OpenAI 2018</Tag>
      </motion.div>
    </SlideLayout>
  );
}
