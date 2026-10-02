import { motion } from 'framer-motion';
import { colors } from '../theme/tokens';

export default function FlowDiagram({ steps, delay = 0 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 6 }}>
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delay + i * 0.1, ease: 'easeOut' }}
          style={{ display: 'flex', alignItems: 'center', gap: 6 }}
        >
          <div
            style={{
              background: step.highlight ? colors.accentMuted : colors.surface,
              border: `1px solid ${step.highlight ? colors.accent + '30' : colors.border}`,
              borderRadius: 10,
              padding: '16px 22px',
              textAlign: 'center',
              minWidth: 96,
            }}
          >
            <div style={{
              fontSize: 15,
              fontWeight: 600,
              color: step.highlight ? colors.accent : colors.text,
              letterSpacing: '-0.01em',
            }}>
              {step.label}
            </div>
            {step.sub && (
              <div style={{ fontSize: 12, color: colors.textTertiary, marginTop: 4, fontWeight: 500 }}>
                {step.sub}
              </div>
            )}
          </div>
          {i < steps.length - 1 && (
            <span style={{ color: colors.textTertiary, fontSize: 14, display: 'flex' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
