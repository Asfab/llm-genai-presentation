import SlideLayout from '../components/SlideLayout';
import Heading from '../components/Heading';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import { colors, fonts } from '../theme/tokens';

const ease = [0.22, 1, 0.36, 1];

function BooksSVG() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <rect x="8" y="18" width="30" height="22" rx="2" fill={colors.textTertiary} opacity={0.18} />
      <rect x="11" y="14" width="30" height="22" rx="2" fill={colors.textTertiary} opacity={0.25} />
      <rect x="14" y="10" width="30" height="22" rx="2" fill={colors.textTertiary} opacity={0.35} />
      <line x1="20" y1="16" x2="38" y2="16" stroke={colors.textTertiary} strokeWidth="1.2" opacity={0.4} />
      <line x1="20" y1="20" x2="34" y2="20" stroke={colors.textTertiary} strokeWidth="1.2" opacity={0.3} />
      <line x1="20" y1="24" x2="36" y2="24" stroke={colors.textTertiary} strokeWidth="1.2" opacity={0.3} />
    </svg>
  );
}

function GradCapSVG() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <polygon points="25,10 4,22 25,34 46,22" fill={colors.accent} opacity={0.2} />
      <polygon points="25,14 10,22 25,30 40,22" fill={colors.accent} opacity={0.35} />
      <rect x="23" y="28" width="4" height="10" rx="1" fill={colors.accent} opacity={0.3} />
      <rect x="17" y="38" width="16" height="3" rx="1.5" fill={colors.accent} opacity={0.25} />
      <line x1="40" y1="22" x2="40" y2="36" stroke={colors.accent} strokeWidth="1.5" opacity={0.4} />
      <circle cx="40" cy="37" r="2" fill={colors.accent} opacity={0.35} />
    </svg>
  );
}

function BriefcaseSVG() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <rect x="6" y="18" width="38" height="24" rx="4" fill={colors.emerald} opacity={0.18} />
      <rect x="9" y="20" width="32" height="20" rx="3" fill={colors.emerald} opacity={0.25} />
      <rect x="18" y="12" width="14" height="8" rx="2" fill="none" stroke={colors.emerald} strokeWidth="1.8" opacity={0.35} />
      <rect x="21" y="28" width="8" height="5" rx="1.5" fill={colors.emerald} opacity={0.4} />
    </svg>
  );
}

function FlowArrow({ delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay, ease }}
      style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
    >
      <svg width="36" height="20" viewBox="0 0 36 20" fill="none">
        <path d="M4 10h24m0 0l-5-4.5m5 4.5l-5 4.5" stroke={colors.textTertiary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.div>
  );
}

const stages = [
  {
    icon: BooksSVG,
    label: 'Massive Text Data',
    sub: 'The entire internet, books, code...',
    color: colors.textTertiary,
    bg: colors.surface,
    highlight: false,
  },
  {
    icon: GradCapSVG,
    label: 'Foundation Model',
    sub: 'Broad general knowledge',
    color: colors.accent,
    bg: colors.accentMuted,
    highlight: true,
  },
  {
    icon: BriefcaseSVG,
    label: 'Specialized Model',
    sub: 'Fine-tuned for a specific task',
    color: colors.emerald,
    bg: colors.emeraldMuted,
    highlight: false,
  },
];

const examples = [
  { from: 'GPT', to: 'ChatGPT', desc: 'Pre-trained on internet, fine-tuned for conversation' },
  { from: 'BERT', to: 'Google Search', desc: 'Pre-trained on books, fine-tuned for search ranking' },
  { from: 'LLaMA', to: 'Code Llama', desc: 'Pre-trained on public data, fine-tuned for coding' },
];

export default function PretrainedModels() {
  return (
    <SlideLayout subtitle="Pretrained Models">
      <Heading tag="Pretrained Models">Learn once, use everywhere</Heading>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, marginTop: 36 }}>
        {stages.map((stage, i) => (
          <div key={stage.label} style={{ display: 'flex', alignItems: 'center' }}>
            <Card
              delay={0.25 + i * 0.18}
              accent={stage.highlight}
              style={{
                width: 200,
                background: stage.bg,
                border: stage.highlight
                  ? `1.5px solid ${colors.accent}`
                  : `1px solid ${colors.border}`,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
                padding: '24px 18px',
              }}
            >
              <stage.icon />
              <p style={{
                margin: 0,
                fontSize: 16,
                fontWeight: 600,
                fontFamily: fonts.body,
                color: stage.color,
              }}>
                {stage.label}
              </p>
              <p style={{
                margin: 0,
                fontSize: 13,
                lineHeight: 1.5,
                color: colors.textSecondary,
                fontFamily: fonts.body,
              }}>
                {stage.sub}
              </p>
            </Card>
            {i < stages.length - 1 && <FlowArrow delay={0.4 + i * 0.18} />}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 14, marginTop: 36 }}>
        {examples.map((ex, i) => (
          <Card
            key={ex.from}
            delay={0.8 + i * 0.12}
            style={{ flex: 1, padding: '18px 20px' }}
          >
            <p style={{
              margin: 0,
              fontSize: 15,
              fontFamily: fonts.body,
              color: colors.text,
            }}>
              <span style={{ fontWeight: 700 }}>{ex.from}</span>
              {' \u2192 '}
              <span style={{ fontWeight: 700 }}>{ex.to}</span>
            </p>
            <p style={{
              margin: '6px 0 0',
              fontSize: 13,
              lineHeight: 1.5,
              color: colors.textSecondary,
              fontFamily: fonts.body,
            }}>
              {ex.desc}
            </p>
          </Card>
        ))}
      </div>
    </SlideLayout>
  );
}
