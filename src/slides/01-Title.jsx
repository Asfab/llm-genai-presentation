import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import { colors, fonts } from '../theme/tokens';

const ease = [0.22, 1, 0.36, 1];

export default function Title() {
  return (
    <SlideLayout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          style={{
            fontSize: 12,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            color: colors.accent,
            marginBottom: 32,
            fontFamily: fonts.body,
          }}
        >
          Session 1
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="heading-serif"
          style={{
            fontSize: 76,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: colors.text,
            margin: 0,
          }}
        >
          Generative AI &<br />
          LLM Foundations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease }}
          style={{
            fontSize: 20,
            color: colors.textSecondary,
            marginTop: 28,
            lineHeight: 1.6,
            maxWidth: 560,
            fontWeight: 400,
          }}
        >
          Understanding the technology behind ChatGPT, DALL·E, and beyond
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          style={{
            position: 'absolute',
            bottom: 32,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 13,
            color: colors.textTertiary,
            fontWeight: 500,
          }}
        >
          <span>March 2026</span>
          <span style={{
            width: 3,
            height: 3,
            borderRadius: '50%',
            background: colors.textTertiary,
          }} />
          <span>RSET</span>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
