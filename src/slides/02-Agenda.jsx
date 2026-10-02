import { motion } from 'framer-motion';
import SlideLayout from '../components/SlideLayout';
import Heading from '../components/Heading';
import { colors } from '../theme/tokens';

const ease = [0.22, 1, 0.36, 1];

const items = [
  { num: '01', title: 'What is Generative AI?', desc: 'Real examples, where it fits, and why it creates instead of classifies' },
  { num: '02', title: 'How machines understand language', desc: 'The attention breakthrough, Transformers, and how models predict the next word' },
  { num: '03', title: 'Inside an LLM', desc: 'How neural networks learn, what parameters are, and why scale changes everything' },
  { num: '04', title: 'BERT, GPT & what comes next', desc: 'Two architectures, ethics, and a preview of sessions 2 and 3' },
];

export default function Agenda() {
  return (
    <SlideLayout subtitle="Agenda">
      <Heading tag="Overview">30 minutes to understand AI</Heading>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {items.map((item, i) => (
          <motion.div
            key={item.num}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 + i * 0.1, ease }}
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 28,
              padding: '22px 0',
              borderBottom: i < items.length - 1 ? `1px solid ${colors.border}` : 'none',
            }}
          >
            <span style={{
              fontSize: 15,
              fontWeight: 700,
              color: colors.accent,
              fontVariantNumeric: 'tabular-nums',
              flexShrink: 0,
              width: 28,
            }}>
              {item.num}
            </span>
            <div>
              <span style={{ fontSize: 20, fontWeight: 500, color: colors.text }}>
                {item.title}
              </span>
              <div style={{ fontSize: 15, color: colors.textSecondary, fontWeight: 400, marginTop: 4, lineHeight: 1.5 }}>
                {item.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}
