import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import Heading from '../components/Heading';
import Card from '../components/Card';
import { colors, fonts } from '../theme/tokens';

const ease = [0.22, 1, 0.36, 1];

const issues = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="15" stroke={colors.rose} strokeWidth="1.5" />
        <path d="M18 11v10" stroke={colors.rose} strokeWidth="2" strokeLinecap="round" />
        <circle cx="18" cy="26" r="1.5" fill={colors.rose} />
      </svg>
    ),
    title: 'Hallucination',
    desc: 'LLMs confidently generate text that sounds right but is factually wrong',
    color: colors.rose,
    bg: colors.roseMuted,
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="5" y="10" width="26" height="16" rx="3" stroke={colors.warm} strokeWidth="1.5" />
        <path d="M12 18h12M12 22h8" stroke={colors.warm} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="27" cy="10" r="4" fill={colors.warmMuted} stroke={colors.warm} strokeWidth="1.5" />
        <path d="M25.5 10l1 1 2-2" stroke={colors.warm} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Bias',
    desc: 'Models inherit biases from training data — gender, racial, cultural stereotypes',
    color: colors.warm,
    bg: colors.warmMuted,
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="6" width="24" height="24" rx="4" stroke={colors.textTertiary} strokeWidth="1.5" />
        <circle cx="18" cy="18" r="5" stroke={colors.textTertiary} strokeWidth="1.5" />
        <path d="M18 15v3l2 2" stroke={colors.textTertiary} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 13l-3-3M23 13l3-3M13 23l-3 3M23 23l3 3" stroke={colors.textTertiary} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    title: 'Black Box',
    desc: 'Billions of parameters — nearly impossible to explain why a model made a specific decision',
    color: colors.textSecondary,
    bg: colors.surface,
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 6l2.5 7.5H28l-6 4.5 2.5 7.5-7-5-7 5 2.5-7.5-6-4.5h7.5L18 6z" stroke={colors.emerald} strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <circle cx="18" cy="19" r="3" stroke={colors.emerald} strokeWidth="1.2" />
      </svg>
    ),
    title: 'Explainability (XAI)',
    desc: 'Making AI decisions transparent — attention maps, feature attribution, interpretable outputs',
    color: colors.emerald,
    bg: colors.emeraldMuted,
  },
];

export default function EthicsXAI() {
  return (
    <SlideLayout subtitle="Responsibility">
      <Heading tag="Ethics & XAI">The elephant in the room</Heading>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 28 }}>
        {issues.map((item, i) => (
          <Card key={item.title} delay={0.25 + i * 0.1} style={{ padding: '20px 24px' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1, ease }}
                style={{ flexShrink: 0, marginTop: 2 }}
              >
                {item.icon}
              </motion.div>
              <div>
                <div style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: item.color,
                  marginBottom: 6,
                }}>
                  {item.title}
                </div>
                <div style={{
                  fontSize: 14,
                  color: colors.textSecondary,
                  lineHeight: 1.55,
                }}>
                  {item.desc}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9, ease }}
        style={{
          padding: '16px 24px',
          background: colors.accentMuted,
          borderRadius: 10,
          borderLeft: `3px solid ${colors.accent}`,
        }}
      >
        <p style={{
          fontSize: 15,
          color: colors.textSecondary,
          lineHeight: 1.65,
          margin: 0,
        }}>
          <span style={{ fontWeight: 700, color: colors.text }}>Why it matters:</span>{' '}
          Powerful models need guardrails. Understanding what can go wrong is just as important
          as understanding how they work.
        </p>
      </motion.div>
    </SlideLayout>
  );
}
