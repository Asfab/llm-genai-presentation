import SlideLayout from '../components/SlideLayout';
import Heading from '../components/Heading';
import Card from '../components/Card';
import Tag from '../components/Tag';
import { motion } from 'framer-motion';
import { colors, fonts } from '../theme/tokens';

export default function WhatsNext() {
  return (
    <SlideLayout subtitle="Coming Up">
      <Heading tag="Coming Up">What's next?</Heading>

      <div style={{ display: 'flex', gap: 24, width: '100%' }}>
        <Card delay={0.3} style={{ flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Tag color={colors.accent} delay={0.4}>Session 2</Tag>
            <div style={{ fontSize: 22, fontWeight: 700, color: colors.text, lineHeight: 1.3 }}>
              Prompt Engineering & Fine-Tuning
            </div>
            <div style={{ fontSize: 16, color: colors.textSecondary, lineHeight: 1.7 }}>
              Learn how to talk to LLMs effectively and how to customize them for your own tasks.
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
              <Tag color={colors.emerald} delay={0.6}>Zero-shot</Tag>
              <Tag color={colors.warm} delay={0.7}>Few-shot</Tag>
              <Tag color={colors.rose} delay={0.8}>Chain-of-Thought</Tag>
              <Tag color={colors.cyan} delay={0.9}>LoRA</Tag>
            </div>
          </div>
        </Card>

        <Card delay={0.5} style={{ flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Tag color={colors.cyan} delay={0.6}>Session 3</Tag>
            <div style={{ fontSize: 22, fontWeight: 700, color: colors.text, lineHeight: 1.3 }}>
              Agentic AI & AI Agent Patterns
            </div>
            <div style={{ fontSize: 16, color: colors.textSecondary, lineHeight: 1.7 }}>
              Explore autonomous AI agents that can reason, plan, and take action.
              Dive into multi-agent systems and real-world agentic architectures.
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
              <Tag color={colors.emerald} delay={0.8}>ReAct</Tag>
              <Tag color={colors.warm} delay={0.9}>Tool Use</Tag>
              <Tag color={colors.rose} delay={1.0}>Multi-Agent</Tag>
              <Tag color={colors.accent} delay={1.1}>RAG</Tag>
            </div>
          </div>
        </Card>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="heading-serif"
        style={{
          fontSize: 18,
          color: colors.textTertiary,
          textAlign: 'center',
          marginTop: 40,
        }}
      >
        The foundation is set.
      </motion.p>
    </SlideLayout>
  );
}
