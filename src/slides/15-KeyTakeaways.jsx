import SlideLayout from '../components/SlideLayout';
import Heading from '../components/Heading';
import AnimatedList from '../components/AnimatedList';

const takeaways = [
  'Generative AI creates new content — text, images, code, music',
  'Attention lets models look at all words at once, not one by one',
  'LLMs learn by predicting the next word — billions of times',
  'Parameters are the "knobs" — more knobs, more capability',
  'BERT reads both ways (understanding), GPT reads forward (generating)',
  'Powerful models need guardrails — bias, hallucination, explainability matter',
];

export default function KeyTakeaways() {
  return (
    <SlideLayout subtitle="Recap">
      <Heading tag="Recap">What to remember</Heading>
      <AnimatedList items={takeaways} delay={0.3} />
    </SlideLayout>
  );
}
