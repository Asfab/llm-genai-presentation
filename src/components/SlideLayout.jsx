import { motion } from 'framer-motion';
import { colors } from '../theme/tokens';

export default function SlideLayout({ children, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '48px 72px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: '1320px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        {children}
      </div>
      {subtitle && (
        <div style={{
          position: 'absolute',
          bottom: 28,
          left: 72,
          color: colors.textTertiary,
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          {subtitle}
        </div>
      )}
    </motion.div>
  );
}
