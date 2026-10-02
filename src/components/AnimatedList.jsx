import { motion } from 'framer-motion';
import { colors } from '../theme/tokens';

export default function AnimatedList({ items, delay = 0 }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 22 }}>
      {items.map((text, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: delay + i * 0.09, ease: 'easeOut' }}
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: colors.textSecondary,
            display: 'flex',
            alignItems: 'baseline',
            gap: 18,
            lineHeight: 1.55,
          }}
        >
          <span style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: colors.accent,
            flexShrink: 0,
            marginTop: 11,
          }} />
          <span>{text}</span>
        </motion.li>
      ))}
    </ul>
  );
}
