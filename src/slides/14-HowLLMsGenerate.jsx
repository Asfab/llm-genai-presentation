import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import Heading from '../components/Heading';
import Card from '../components/Card';
import { colors } from '../theme/tokens';

const ease = [0.22, 1, 0.36, 1];

const promptWords = ['The', 'quick', 'brown'];

const steps = [
  {
    chosen: 'fox',
    candidates: [
      { word: 'fox', pct: 42, highlight: true },
      { word: 'bear', pct: 18 },
      { word: 'dog', pct: 12 },
      { word: 'cat', pct: 8 },
      { word: 'horse', pct: 5 },
    ],
  },
  {
    chosen: 'jumps',
    candidates: [
      { word: 'jumps', pct: 38, highlight: true },
      { word: 'runs', pct: 22 },
      { word: 'leaps', pct: 15 },
      { word: 'sat', pct: 9 },
      { word: 'walked', pct: 4 },
    ],
  },
  {
    chosen: 'over',
    candidates: [
      { word: 'over', pct: 61, highlight: true },
      { word: 'across', pct: 14 },
      { word: 'onto', pct: 10 },
      { word: 'into', pct: 6 },
      { word: 'around', pct: 3 },
    ],
  },
  {
    chosen: 'the',
    candidates: [
      { word: 'the', pct: 72, highlight: true },
      { word: 'a', pct: 12 },
      { word: 'every', pct: 5 },
      { word: 'my', pct: 3 },
      { word: 'some', pct: 2 },
    ],
  },
  {
    chosen: 'lazy',
    candidates: [
      { word: 'lazy', pct: 35, highlight: true },
      { word: 'sleeping', pct: 19 },
      { word: 'old', pct: 14 },
      { word: 'big', pct: 11 },
      { word: 'brown', pct: 7 },
    ],
  },
  {
    chosen: 'dog',
    candidates: [
      { word: 'dog', pct: 55, highlight: true },
      { word: 'cat', pct: 18 },
      { word: 'hound', pct: 8 },
      { word: 'fox', pct: 6 },
      { word: 'rabbit', pct: 4 },
    ],
  },
];

function BarRow({ word, pct, highlight, isInitial }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      height: 28,
    }}>
      <motion.span
        key={word}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          width: 64,
          fontSize: 14,
          fontWeight: highlight ? 700 : 500,
          color: highlight ? colors.accent : colors.textSecondary,
          textAlign: 'right',
          fontFamily: "'DM Mono', monospace",
          flexShrink: 0,
        }}
      >
        {word}
      </motion.span>
      <div style={{
        flex: 1,
        height: 20,
        borderRadius: 4,
        background: colors.surface,
        overflow: 'hidden',
      }}>
        <motion.div
          animate={{ width: `${pct * 1.3}%` }}
          initial={isInitial ? { width: 0 } : false}
          transition={{ duration: 0.5, ease }}
          style={{
            height: '100%',
            borderRadius: 4,
            background: highlight
              ? `linear-gradient(90deg, ${colors.accent}, ${colors.accent}CC)`
              : colors.border,
          }}
        />
      </div>
      <motion.span
        key={`${word}-${pct}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: highlight ? colors.accent : colors.textTertiary,
          width: 36,
          textAlign: 'right',
          fontFamily: "'DM Mono', monospace",
          flexShrink: 0,
        }}
      >
        {pct}%
      </motion.span>
    </div>
  );
}

export default function HowLLMsGenerate() {
  const [stepIdx, setStepIdx] = useState(-1);
  const [visibleCount, setVisibleCount] = useState(0);
  const [isInitial, setIsInitial] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setStepIdx(0);
    }, 1800);
    return () => clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    if (stepIdx < 0 || stepIdx >= steps.length) return;

    const commitTimer = setTimeout(() => {
      setVisibleCount((c) => c + 1);
      setIsInitial(false);

      if (stepIdx < steps.length - 1) {
        timerRef.current = setTimeout(() => {
          setStepIdx((s) => s + 1);
        }, 400);
      }
    }, 1400);

    return () => {
      clearTimeout(commitTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [stepIdx]);

  const currentStep = stepIdx >= 0 ? steps[Math.min(stepIdx, steps.length - 1)] : steps[0];
  const showBars = stepIdx >= 0;

  const contextStr = [
    ...promptWords,
    ...steps.slice(0, Math.max(0, stepIdx)).map((s) => s.chosen),
  ].join(' ');

  return (
    <SlideLayout subtitle="How It Works">
      <Heading tag="Under the Hood">One word at a time</Heading>

      <Card delay={0.3} style={{ marginBottom: 24 }}>
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: colors.textTertiary,
          marginBottom: 16,
        }}>
          Generation Demo
        </div>
        <div style={{
          fontFamily: "'DM Mono', 'SF Mono', 'Fira Code', monospace",
          fontSize: 20,
          lineHeight: 1.8,
          color: colors.text,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '0 10px',
          minHeight: 44,
        }}>
          <span style={{ color: colors.textTertiary, fontSize: 13, fontWeight: 600, marginRight: 4 }}>
            PROMPT
          </span>
          {promptWords.map((word, i) => (
            <motion.span
              key={`p-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              style={{ color: colors.textSecondary }}
            >
              {word}
            </motion.span>
          ))}
          <span style={{
            width: 1,
            height: 20,
            background: colors.border,
            margin: '0 4px',
          }} />
          <AnimatePresence>
            {steps.slice(0, visibleCount).map((s, i) => (
              <motion.span
                key={`g-${i}`}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease }}
                style={{
                  color: i === visibleCount - 1 ? colors.accent : colors.text,
                  fontWeight: i === visibleCount - 1 ? 600 : 400,
                  transition: 'color 0.5s, font-weight 0.5s',
                }}
              >
                {s.chosen}
              </motion.span>
            ))}
          </AnimatePresence>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
            style={{
              display: 'inline-block',
              width: 2,
              height: 22,
              background: colors.accent,
              borderRadius: 1,
              marginLeft: 2,
              verticalAlign: 'middle',
            }}
          />
        </div>
      </Card>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: showBars ? 1 : 0, y: showBars ? 0 : 12 }}
        transition={{ duration: 0.4, ease }}
      >
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: colors.accent,
          marginBottom: 12,
          height: 16,
          overflow: 'hidden',
        }}>
          <span>Predicting next word</span>
          <motion.span
            key={stepIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              color: colors.textTertiary,
              fontWeight: 500,
              textTransform: 'none',
              letterSpacing: '0.02em',
              marginLeft: 8,
            }}
          >
            after &ldquo;{contextStr}&rdquo;
          </motion.span>
        </div>
        <Card style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {currentStep.candidates.map((c, i) => (
              <BarRow
                key={i}
                word={c.word}
                pct={c.pct}
                highlight={c.highlight}
                isInitial={isInitial}
              />
            ))}
          </div>
        </Card>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.6 }}
        style={{
          fontSize: 14,
          color: colors.textTertiary,
          lineHeight: 1.65,
          margin: 0,
          maxWidth: 680,
        }}
      >
        The model scores every possible next word, then picks one.
        Lower temperature = always picks the highest.
        Higher temperature = more random picks.
      </motion.p>
    </SlideLayout>
  );
}
