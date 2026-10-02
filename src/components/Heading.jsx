import { motion } from 'framer-motion';
import { colors, fonts } from '../theme/tokens';

export default function Heading({ children, sub, tag, delay = 0 }) {
  return (
    <div style={{ marginBottom: 44 }}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay, ease: 'easeOut' }}
          style={{
            fontSize: 13,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: colors.accent,
            marginBottom: 16,
            fontFamily: fonts.body,
          }}
        >
          {tag}
        </motion.div>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.06, ease: [0.22, 1, 0.36, 1] }}
        className="heading-serif"
        style={{
          fontSize: 64,
          lineHeight: 1.08,
          letterSpacing: '-0.01em',
          color: colors.text,
        }}
      >
        {children}
      </motion.h1>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.18 }}
          style={{
            fontSize: 20,
            color: colors.textSecondary,
            marginTop: 14,
            lineHeight: 1.6,
            maxWidth: 720,
            fontWeight: 400,
          }}
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
