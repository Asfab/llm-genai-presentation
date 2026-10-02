import SlideLayout from '../components/SlideLayout';
import Heading from '../components/Heading';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import { colors, fonts } from '../theme/tokens';

const ease = [0.22, 1, 0.36, 1];

function KeyholeSVG() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <rect x="8" y="4" width="44" height="52" rx="4" fill={colors.textTertiary} opacity={0.15} />
      <rect x="26" y="14" width="8" height="32" rx="2" fill={colors.textTertiary} opacity={0.5} />
    </svg>
  );
}

function WindowSVG() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <rect x="6" y="8" width="48" height="44" rx="4" fill={colors.warm} opacity={0.12} />
      <rect x="12" y="14" width="36" height="32" rx="2" fill={colors.warm} opacity={0.18} />
      <line x1="30" y1="14" x2="30" y2="46" stroke={colors.warm} strokeWidth="2" opacity={0.4} />
      <line x1="12" y1="30" x2="48" y2="30" stroke={colors.warm} strokeWidth="2" opacity={0.4} />
    </svg>
  );
}

function PanoramicSVG() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <rect x="2" y="12" width="56" height="36" rx="6" fill={colors.accent} opacity={0.13} />
      <rect x="6" y="16" width="48" height="28" rx="3" fill={colors.accent} opacity={0.18} />
      <circle cx="18" cy="30" r="4" fill={colors.accent} opacity={0.35} />
      <circle cx="30" cy="30" r="4" fill={colors.accent} opacity={0.35} />
      <circle cx="42" cy="30" r="4" fill={colors.accent} opacity={0.35} />
      <line x1="22" y1="30" x2="26" y2="30" stroke={colors.accent} strokeWidth="1.5" opacity={0.4} />
      <line x1="34" y1="30" x2="38" y2="30" stroke={colors.accent} strokeWidth="1.5" opacity={0.4} />
    </svg>
  );
}

function Arrow({ delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay, ease }}
      style={{ display: 'flex', alignItems: 'center', padding: '0 4px' }}
    >
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
        <path d="M2 10h20m0 0l-6-5m6 5l-6 5" stroke={colors.textTertiary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.div>
  );
}

const eras = [
  {
    icon: KeyholeSVG,
    label: 'RNNs',
    year: '~2014',
    description: 'Read words one by one \u2014 like reading a book through a keyhole',
    color: colors.textTertiary,
    bg: colors.surface,
    highlight: false,
  },
  {
    icon: WindowSVG,
    label: 'LSTMs',
    year: '~2015',
    description: 'Remembered more, but still painfully one word at a time',
    color: colors.warm,
    bg: colors.warmMuted,
    highlight: false,
  },
  {
    icon: PanoramicSVG,
    label: 'Transformers',
    year: '2017',
    description: 'Processed everything at once \u2014 game over for sequential models',
    color: colors.accent,
    bg: colors.accentMuted,
    highlight: true,
  },
];

export default function JourneyToTransformers() {
  return (
    <SlideLayout subtitle="Evolution">
      <Heading tag="Evolution">Why everything before 2017 was slow</Heading>

      <div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center', gap: 0, marginTop: 40 }}>
        {eras.map((era, i) => (
          <div key={era.label} style={{ display: 'flex', alignItems: 'center' }}>
            <Card
              delay={0.3 + i * 0.2}
              accent={era.highlight}
              style={{
                width: 220,
                background: era.bg,
                border: era.highlight
                  ? `1.5px solid ${colors.accent}`
                  : `1px solid ${colors.border}`,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                padding: '28px 20px',
              }}
            >
              <era.icon />
              <div>
                <p style={{
                  margin: 0,
                  fontSize: 20,
                  fontWeight: 600,
                  fontFamily: fonts.body,
                  color: era.color,
                }}>
                  {era.label}
                </p>
                <p style={{
                  margin: '2px 0 0',
                  fontSize: 13,
                  color: colors.textTertiary,
                  fontFamily: fonts.body,
                }}>
                  {era.year}
                </p>
              </div>
              <p style={{
                margin: 0,
                fontSize: 14,
                lineHeight: 1.55,
                color: colors.textSecondary,
                fontFamily: fonts.body,
              }}>
                {era.description}
              </p>
            </Card>
            {i < eras.length - 1 && <Arrow delay={0.5 + i * 0.2} />}
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
