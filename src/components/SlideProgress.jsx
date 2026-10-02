import { motion } from 'framer-motion';
import { colors } from '../theme/tokens';

export default function SlideProgress({ current, total }) {
  const pct = ((current + 1) / total) * 100;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: 2, background: colors.border, zIndex: 100 }}>
      <motion.div
        initial={false}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: '100%', background: colors.accent, opacity: 0.8 }}
      />
    </div>
  );
}
