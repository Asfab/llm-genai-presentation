import { motion } from 'framer-motion';
import { colors } from '../theme/tokens';

export default function Tag({ children, color = colors.accent, bg, delay = 0 }) {
  const bgColor = bg || `${color}14`;
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
      style={{
        display: 'inline-block',
        padding: '5px 12px',
        borderRadius: 6,
        fontSize: 12,
        fontWeight: 600,
        background: bgColor,
        color: color,
        letterSpacing: '0.03em',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </motion.span>
  );
}
