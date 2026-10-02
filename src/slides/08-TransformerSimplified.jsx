import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import Heading from '../components/Heading';
import { colors, fonts } from '../theme/tokens';

const ease = [0.22, 1, 0.36, 1];

function Block({ label, sublabel, bg, borderColor, accentColor, delay, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease }}
      style={{
        background: bg,
        border: `1.5px solid ${borderColor}`,
        borderRadius: 14,
        padding: '20px 28px',
        textAlign: 'center',
        position: 'relative',
        ...style,
      }}
    >
      <div style={{
        fontSize: 12,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: accentColor,
        marginBottom: 6,
      }}>
        {label}
      </div>
      <div style={{
        fontSize: 15,
        color: colors.textSecondary,
        lineHeight: 1.5,
      }}>
        {sublabel}
      </div>
    </motion.div>
  );
}

function Arrow({ delay, style, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.4, delay, ease }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        ...style,
      }}
    >
      <svg width="48" height="12" viewBox="0 0 48 12" style={{ overflow: 'visible' }}>
        <line x1="0" y1="6" x2="38" y2="6" stroke={colors.border} strokeWidth="1.5" />
        <polygon points="38,2 46,6 38,10" fill={colors.textTertiary} />
      </svg>
      {label && (
        <span style={{
          fontSize: 10,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: colors.textTertiary,
        }}>
          {label}
        </span>
      )}
    </motion.div>
  );
}

function VerticalConnector({ delay }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay, ease }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '6px 0',
      }}
    >
      <div style={{
        width: 1.5,
        height: 8,
        background: colors.border,
      }} />
      <span style={{
        fontSize: 12,
        fontWeight: 500,
        color: colors.textTertiary,
        fontStyle: 'italic',
        padding: '2px 0',
      }}>
        or
      </span>
      <div style={{
        width: 1.5,
        height: 8,
        background: colors.border,
      }} />
    </motion.div>
  );
}

export default function TransformerSimplified() {
  return (
    <SlideLayout subtitle="Architecture">
      <Heading
        tag="Architecture"
        sub="The Transformer uses attention, packaged into a reusable architecture."
      >
        One architecture to rule them all
      </Heading>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2, ease }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
          height: 240,
          width: '100%',
        }}
      >
        <Block
          label="Input Text"
          sublabel="Raw words go in"
          bg={colors.surface}
          borderColor={colors.border}
          accentColor={colors.text}
          delay={0.3}
          style={{ width: 150, flexShrink: 0 }}
        />

        <Arrow delay={0.5} style={{ margin: '0 8px' }} />

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexShrink: 0,
        }}>
          <Block
            label="Encoder"
            sublabel="Reads everything at once"
            bg={colors.cyanMuted}
            borderColor="rgba(8, 145, 178, 0.2)"
            accentColor={colors.cyan}
            delay={0.55}
            style={{ width: 210 }}
          />
          <VerticalConnector delay={0.65} />
          <Block
            label="Decoder"
            sublabel="Writes one word at a time"
            bg={colors.accentMuted}
            borderColor="rgba(124, 58, 237, 0.18)"
            accentColor={colors.accent}
            delay={0.7}
            style={{ width: 210 }}
          />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 62,
          margin: '0 8px',
        }}>
          <Arrow delay={0.8} label="Understanding" />
          <Arrow delay={0.85} label="Generation" />
        </div>

        <Block
          label="Output"
          sublabel="Meaning or new text"
          bg={colors.surface}
          borderColor={colors.border}
          accentColor={colors.text}
          delay={0.9}
          style={{ width: 150, flexShrink: 0 }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0, ease }}
        style={{
          fontSize: 16,
          color: colors.textTertiary,
          marginTop: 24,
          textAlign: 'center',
          lineHeight: 1.6,
        }}
      >
        Same architecture, two modes. We&rsquo;ll meet one model for each shortly.
      </motion.p>
    </SlideLayout>
  );
}
