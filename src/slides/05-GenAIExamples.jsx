import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import Heading from '../components/Heading';
import Card from '../components/Card';
import Tag from '../components/Tag';
import { colors } from '../theme/tokens';

const ease = [0.22, 1, 0.36, 1];

const ChatGPTIcon = ({ color }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="4" y="4" width="28" height="22" rx="6" stroke={color} strokeWidth="2" />
    <polygon points="12,26 12,32 20,26" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round" />
  </svg>
);

const DalleIcon = ({ color }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="3" y="5" width="30" height="26" rx="4" stroke={color} strokeWidth="2" />
    <circle cx="13" cy="14" r="3" stroke={color} strokeWidth="1.8" />
    <polyline points="3,27 12,20 19,25 25,18 33,24" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round" />
  </svg>
);

const CopilotIcon = ({ color }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <polyline points="10,10 4,18 10,26" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="26,10 32,18 26,26" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="20" y1="8" x2="16" y2="28" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const MidjourneyIcon = ({ color }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M8 28 C8 28 10 12 14 10 C16 9 17 14 18 18 C19 22 20 26 22 20 C24 14 26 8 28 8" stroke={color} strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <circle cx="8" cy="28" r="2.5" stroke={color} strokeWidth="1.8" />
  </svg>
);

const SunoIcon = ({ color }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="14" cy="26" r="4" stroke={color} strokeWidth="2" />
    <line x1="18" y1="26" x2="18" y2="8" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M18 8 C18 8 26 6 26 12 C26 16 18 14 18 14" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

const RunwayIcon = ({ color }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="3" y="5" width="30" height="26" rx="4" stroke={color} strokeWidth="2" />
    <polygon points="15,12 15,24 26,18" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round" />
  </svg>
);

const examples = [
  { name: 'ChatGPT', category: 'Text', color: colors.accent, bg: colors.accentMuted, Icon: ChatGPTIcon },
  { name: 'DALL·E', category: 'Images', color: colors.rose, bg: colors.roseMuted, Icon: DalleIcon },
  { name: 'GitHub Copilot', category: 'Code', color: colors.emerald, bg: colors.emeraldMuted, Icon: CopilotIcon },
  { name: 'Midjourney', category: 'Art', color: colors.warm, bg: colors.warmMuted, Icon: MidjourneyIcon },
  { name: 'Suno', category: 'Music', color: colors.cyan, bg: colors.cyanMuted, Icon: SunoIcon },
  { name: 'Runway', category: 'Video', color: colors.rose, bg: colors.roseMuted, Icon: RunwayIcon },
];

export default function GenAIExamples() {
  return (
    <SlideLayout subtitle="Landscape">
      <Heading tag="GenAI Today">You've been using AI all week</Heading>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {examples.map((ex, i) => (
          <Card key={ex.name} delay={0.3 + i * 0.07} style={{ padding: '18px 22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.07, ease }}
                style={{ flexShrink: 0 }}
              >
                <ex.Icon color={ex.color} />
              </motion.div>
              <div>
                <div style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: colors.text,
                  marginBottom: 8,
                }}>
                  {ex.name}
                </div>
                <Tag color={ex.color} bg={ex.bg} delay={0.5 + i * 0.07}>
                  {ex.category}
                </Tag>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0, ease }}
        style={{
          fontSize: 15,
          color: colors.textTertiary,
          marginTop: 36,
          lineHeight: 1.6,
          fontWeight: 400,
        }}
      >
        From text to video — generative models are reshaping every medium.
      </motion.p>
    </SlideLayout>
  );
}
