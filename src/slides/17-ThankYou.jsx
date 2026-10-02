import SlideLayout from '../components/SlideLayout';
import { motion } from 'framer-motion';
import { colors, fonts } from '../theme/tokens';

export default function ThankYou() {
  return (
    <SlideLayout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="heading-serif"
          style={{
            fontSize: 80,
            color: colors.accent,
            lineHeight: 1.1,
          }}
        >
          Thank You
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
          style={{
            fontSize: 24,
            color: colors.textSecondary,
            marginTop: 24,
            fontFamily: fonts.body,
          }}
        >
          Questions?
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5, ease: 'easeOut' }}
          style={{
            marginTop: 48,
            fontSize: 14,
            color: colors.textTertiary,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: fonts.body,
            fontWeight: 500,
          }}
        >
          Session 1 &middot; Generative AI & LLM Foundations
        </motion.div>
      </div>
    </SlideLayout>
  );
}
