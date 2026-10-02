import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import Heading from '../components/Heading';
import Card from '../components/Card';
import Tag from '../components/Tag';
import { colors, fonts } from '../theme/tokens';

const ease = [0.22, 1, 0.36, 1];

const discriminativeTraits = [
  'Looks at data and answers a question about it',
  'Sorts things into categories',
  'Example: spam filter, image labeling',
];

const generativeTraits = [
  'Learns patterns, then creates new examples',
  'Produces things that never existed before',
  'Example: ChatGPT, DALL\u00B7E, Copilot',
];

function DiscriminativeSVG() {
  return (
    <motion.svg
      width="100%"
      height="132"
      viewBox="0 0 280 132"
      fill="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.45, ease }}
      style={{ display: 'block', margin: '0 auto 16px' }}
    >
      <rect x="16" y="24" width="72" height="72" rx="12" stroke={colors.borderLight} strokeWidth="1.5" fill={colors.surface} />
      <rect x="32" y="50" width="40" height="4" rx="2" fill={colors.textTertiary} />
      <rect x="36" y="60" width="32" height="4" rx="2" fill={colors.textTertiary} opacity="0.5" />
      <circle cx="52" cy="42" r="6" fill={colors.textTertiary} opacity="0.4" />

      <line x1="100" y1="60" x2="152" y2="60" stroke={colors.borderLight} strokeWidth="1.5" />
      <polygon points="152,55 162,60 152,65" fill={colors.textTertiary} />

      <rect x="174" y="30" width="80" height="24" rx="6" stroke={colors.emerald} strokeWidth="1.5" fill={colors.emeraldMuted} />
      <text x="214" y="47" textAnchor="middle" fontSize="12" fontWeight="600" fontFamily={fonts.body} fill={colors.emerald}>Cat</text>

      <rect x="174" y="66" width="80" height="24" rx="6" stroke={colors.border} strokeWidth="1.5" fill="transparent" />
      <text x="214" y="83" textAnchor="middle" fontSize="12" fontWeight="500" fontFamily={fonts.body} fill={colors.textTertiary}>Dog</text>
    </motion.svg>
  );
}

function GenerativeSVG() {
  return (
    <motion.svg
      width="100%"
      height="132"
      viewBox="0 0 280 132"
      fill="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.55, ease }}
      style={{ display: 'block', margin: '0 auto 16px' }}
    >
      <rect x="16" y="40" width="72" height="44" rx="8" stroke={colors.borderLight} strokeWidth="1.5" fill={colors.surface} />
      <rect x="28" y="52" width="48" height="3" rx="1.5" fill={colors.textTertiary} />
      <rect x="28" y="60" width="36" height="3" rx="1.5" fill={colors.textTertiary} opacity="0.5" />
      <rect x="28" y="68" width="42" height="3" rx="1.5" fill={colors.textTertiary} opacity="0.3" />

      <line x1="100" y1="62" x2="138" y2="36" stroke={colors.borderLight} strokeWidth="1.5" />
      <polygon points="136,30 142,36 134,38" fill={colors.textTertiary} />

      <line x1="100" y1="62" x2="138" y2="62" stroke={colors.borderLight} strokeWidth="1.5" />
      <polygon points="138,57 148,62 138,67" fill={colors.textTertiary} />

      <line x1="100" y1="62" x2="138" y2="88" stroke={colors.borderLight} strokeWidth="1.5" />
      <polygon points="134,86 142,88 136,94" fill={colors.textTertiary} />

      <rect x="152" y="18" width="56" height="36" rx="6" stroke={colors.accent} strokeWidth="1.5" fill={colors.accentMuted} />
      <rect x="164" y="30" width="32" height="3" rx="1.5" fill={colors.accent} opacity="0.5" />
      <rect x="164" y="37" width="24" height="3" rx="1.5" fill={colors.accent} opacity="0.3" />

      <rect x="158" y="48" width="44" height="28" rx="6" stroke={colors.warm} strokeWidth="1.5" fill={colors.warmMuted} />
      <rect x="168" y="56" width="24" height="14" rx="3" fill={colors.warm} opacity="0.15" />
      <circle cx="180" cy="62" r="3" fill={colors.warm} opacity="0.4" />

      <rect x="152" y="82" width="56" height="32" rx="6" stroke={colors.cyan} strokeWidth="1.5" fill={colors.cyanMuted} />
      <text x="180" y="100" textAnchor="middle" fontSize="13" fontWeight="600" fontFamily="monospace" fill={colors.cyan} opacity="0.7">{"{ }"}</text>
    </motion.svg>
  );
}

export default function GenVsDisc() {
  return (
    <SlideLayout subtitle="Models">
      <Heading tag="Core Concept">Classify or create</Heading>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <Card delay={0.3}>
          <div style={{ fontSize: 18, fontWeight: 600, color: colors.text, marginBottom: 16 }}>
            Discriminative
          </div>
          <DiscriminativeSVG />
          <div
            className="heading-serif"
            style={{ fontSize: 16, color: colors.textSecondary, marginBottom: 18 }}
          >
            &ldquo;Is this a cat or dog?&rdquo;
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
            {discriminativeTraits.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.55 + i * 0.07 }}
                style={{ fontSize: 14, color: colors.textSecondary, lineHeight: 1.5 }}
              >
                {t}
              </motion.div>
            ))}
          </div>
          <Tag delay={0.75}>Classification</Tag>
        </Card>

        <Card delay={0.4} accent>
          <div style={{ fontSize: 18, fontWeight: 600, color: colors.text, marginBottom: 16 }}>
            Generative
          </div>
          <GenerativeSVG />
          <div
            className="heading-serif"
            style={{ fontSize: 16, color: colors.textSecondary, marginBottom: 18 }}
          >
            &ldquo;Draw me a new cat&rdquo;
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
            {generativeTraits.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.65 + i * 0.07 }}
                style={{ fontSize: 14, color: colors.textSecondary, lineHeight: 1.5 }}
              >
                {t}
              </motion.div>
            ))}
          </div>
          <Tag color={colors.accent} bg={colors.accentMuted} delay={0.85}>Creation</Tag>
        </Card>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.95, ease }}
        style={{
          fontSize: 16,
          color: colors.textSecondary,
          marginTop: 36,
          lineHeight: 1.6,
          fontWeight: 400,
        }}
      >
        Generative models don&rsquo;t just label things &mdash; they imagine new ones.
      </motion.p>
    </SlideLayout>
  );
}
