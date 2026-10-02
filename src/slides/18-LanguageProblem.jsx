import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import Heading from '../components/Heading';
import Card from '../components/Card';
import { colors, fonts } from '../theme/tokens';

const ease = [0.22, 1, 0.36, 1];

const BankBuildingIcon = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <polygon points="16,3 2,12 30,12" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round" />
    <line x1="6" y1="12" x2="6" y2="26" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="12" x2="12" y2="26" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="12" x2="20" y2="26" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="26" y1="12" x2="26" y2="26" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="2" y1="26" x2="30" y2="26" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const WaterIcon = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M2 12 C6 8, 10 16, 14 12 C18 8, 22 16, 30 12" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M2 19 C6 15, 10 23, 14 19 C18 15, 22 23, 30 19" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M2 26 C6 22, 10 30, 14 26 C18 22, 22 30, 30 26" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

function HighlightedWord({ children, color, bg }) {
  return (
    <span style={{
      color,
      background: bg,
      padding: '2px 8px',
      borderRadius: 5,
      fontWeight: 700,
    }}>
      {children}
    </span>
  );
}

export default function LanguageProblem() {
  return (
    <SlideLayout subtitle="The Problem">
      <Heading tag="The Challenge">How does a machine learn language?</Heading>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25, ease }}
        style={{
          fontSize: 17,
          color: colors.textSecondary,
          lineHeight: 1.6,
          marginBottom: 28,
          marginTop: -4,
        }}
      >
        Language is messy — the same word means completely different things depending on context.
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 0, alignItems: 'center', marginBottom: 24 }}>
        <Card delay={0.35} style={{ padding: '24px 28px' }}>
          <p style={{
            fontSize: 17,
            color: colors.text,
            lineHeight: 1.7,
            margin: 0,
            marginBottom: 20,
          }}>
            "I went to the <HighlightedWord color={colors.accent} bg={colors.accentMuted}>bank</HighlightedWord> to deposit money"
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6, ease }}
            >
              <BankBuildingIcon color={colors.accent} />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7, ease }}
              style={{ fontSize: 15, color: colors.textSecondary, fontWeight: 500 }}
            >
              Financial institution
            </motion.span>
          </div>
        </Card>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.55, ease }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 24px',
            gap: 6,
          }}
        >
          <span style={{ fontSize: 13, color: colors.textTertiary, fontWeight: 500 }}>?</span>
          <span
            className="heading-serif"
            style={{
              fontSize: 32,
              color: colors.text,
              fontWeight: 400,
            }}
          >
            bank
          </span>
          <span style={{ fontSize: 13, color: colors.textTertiary, fontWeight: 500 }}>?</span>
          <span style={{
            fontSize: 11,
            color: colors.textTertiary,
            textAlign: 'center',
            lineHeight: 1.5,
            maxWidth: 100,
            marginTop: 4,
          }}>
            Same word, completely different meaning
          </span>
        </motion.div>

        <Card delay={0.4} style={{ padding: '24px 28px' }}>
          <p style={{
            fontSize: 17,
            color: colors.text,
            lineHeight: 1.7,
            margin: 0,
            marginBottom: 20,
          }}>
            "We sat by the <HighlightedWord color={colors.cyan} bg={colors.cyanMuted}>bank</HighlightedWord> of the river"
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.65, ease }}
            >
              <WaterIcon color={colors.cyan} />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.75, ease }}
              style={{ fontSize: 15, color: colors.textSecondary, fontWeight: 500 }}
            >
              Edge of a river
            </motion.span>
          </div>
        </Card>
      </div>

      <Card delay={0.85} accent style={{ borderLeft: `3px solid ${colors.accent}` }}>
        <p style={{
          fontSize: 16,
          color: colors.textSecondary,
          lineHeight: 1.65,
          margin: 0,
        }}>
          The core challenge: turn words into numbers, capture their meaning, and understand
          how they relate to each other. This is what drove decades of AI research.
        </p>
      </Card>
    </SlideLayout>
  );
}
