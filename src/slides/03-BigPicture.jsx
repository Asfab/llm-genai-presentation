import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import Heading from '../components/Heading';
import { colors } from '../theme/tokens';

const ease = [0.22, 1, 0.36, 1];

const layers = [
  {
    label: 'Artificial Intelligence',
    desc: 'Machines that mimic human reasoning',
    border: colors.border,
    bg: 'transparent',
    color: colors.text,
    descColor: colors.textTertiary,
    delay: 0.3,
  },
  {
    label: 'Machine Learning',
    desc: 'Systems that learn from data',
    border: colors.borderLight,
    bg: colors.surface,
    color: colors.text,
    descColor: colors.textTertiary,
    delay: 0.5,
  },
  {
    label: 'Deep Learning',
    desc: 'Layered neural networks',
    border: 'rgba(124, 58, 237, 0.18)',
    bg: 'rgba(124, 58, 237, 0.03)',
    color: colors.text,
    descColor: colors.textTertiary,
    delay: 0.7,
  },
  {
    label: 'Generative AI',
    desc: 'Creates entirely new content',
    border: colors.accent,
    bg: colors.accentMuted,
    color: colors.accent,
    descColor: colors.accent,
    delay: 0.9,
    glow: true,
  },
];

const inset = 52;

export default function BigPicture() {
  return (
    <SlideLayout subtitle="Foundations">
      <Heading tag="The Big Picture">AI is a big word</Heading>

      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: 780,
        height: 380,
        margin: '4px auto 0',
      }}>
        {layers.map((layer, i) => {
          const offset = i * inset;
          return (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: layer.delay, ease }}
              style={{
                position: 'absolute',
                top: offset,
                left: offset,
                right: offset,
                bottom: offset,
                border: `1.5px solid ${layer.border}`,
                borderRadius: 16 - i * 2,
                background: layer.bg,
                boxShadow: layer.glow
                  ? '0 0 28px rgba(124, 58, 237, 0.12), inset 0 0 20px rgba(124, 58, 237, 0.04)'
                  : 'none',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 12,
                left: 16,
              }}>
                <div style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: layer.color,
                  lineHeight: 1,
                  marginBottom: 3,
                }}>
                  {layer.label}
                </div>
                <div style={{
                  fontSize: 12,
                  color: layer.descColor,
                  fontWeight: 400,
                  lineHeight: 1.3,
                  opacity: 0.8,
                }}>
                  {layer.desc}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2, ease }}
        style={{
          fontSize: 17,
          color: colors.textSecondary,
          textAlign: 'center',
          marginTop: 36,
          lineHeight: 1.6,
          fontWeight: 400,
        }}
      >
        Each layer builds on the last. Generative AI is the frontier.
      </motion.p>
    </SlideLayout>
  );
}
