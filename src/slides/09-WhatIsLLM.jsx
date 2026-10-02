import SlideLayout from '../components/SlideLayout';
import Heading from '../components/Heading';
import Card from '../components/Card';
import { colors } from '../theme/tokens';

const stats = [
  {
    label: 'Parameters',
    color: colors.accent,
    value: '175B+',
    description: 'Billions of tunable weights that learn patterns',
  },
  {
    label: 'Training Data',
    color: colors.cyan,
    value: 'Internet-scale',
    description: 'Books, websites, code — trillions of tokens',
  },
  {
    label: 'Compute',
    color: colors.rose,
    value: 'Thousands of GPUs',
    description: 'Months of training on massive clusters',
  },
];

export default function WhatIsLLM() {
  return (
    <SlideLayout subtitle="LLMs">
      <Heading tag="LLMs">175 billion knobs</Heading>

      <div style={{ display: 'flex', gap: 16 }}>
        {stats.map((stat, i) => (
          <Card key={stat.label} delay={0.3 + i * 0.1} style={{ flex: 1 }}>
            <div style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: stat.color,
              marginBottom: 14,
            }}>
              {stat.label}
            </div>
            <div className="heading-serif" style={{
              fontSize: 32,
              color: colors.text,
              marginBottom: 10,
              lineHeight: 1.2,
            }}>
              {stat.value}
            </div>
            <p style={{
              fontSize: 15,
              color: colors.textSecondary,
              lineHeight: 1.55,
              margin: 0,
            }}>
              {stat.description}
            </p>
          </Card>
        ))}
      </div>

      <Card accent delay={0.7} style={{ marginTop: 24 }}>
        <p style={{ fontSize: 18, color: colors.textSecondary, lineHeight: 1.65, margin: 0, textAlign: 'center' }}>
          If each of GPT-3&rsquo;s{' '}
          <span style={{ color: colors.accent, fontWeight: 600 }}>175 billion</span>{' '}
          parameters were a grain of sand, you&rsquo;d need about{' '}
          <span style={{ color: colors.accent, fontWeight: 600 }}>four dump trucks</span>.
        </p>
      </Card>
    </SlideLayout>
  );
}
