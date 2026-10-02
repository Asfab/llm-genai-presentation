import { motion } from 'framer-motion';
import { colors } from '../theme/tokens';

export default function Card({ children, delay = 0, style = {}, accent = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: colors.surface,
        border: `1px solid ${accent ? colors.borderLight : colors.border}`,
        borderRadius: 12,
        padding: '24px 28px',
        position: 'relative',
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}
