import Title from './01-Title';
import Agenda from './02-Agenda';
import GenAIExamples from './05-GenAIExamples';
import BigPicture from './03-BigPicture';
import GenVsDisc from './04-GenVsDisc';
import LanguageProblem from './18-LanguageProblem';
import AttentionBreakthrough from './07-AttentionBreakthrough';
import TransformerSimplified from './08-TransformerSimplified';
import HowLLMsGenerate from './14-HowLLMsGenerate';
import HowItLearns from './21-HowItLearns';
import ScaleUp from './19-ScaleUp';
import PretrainedModels from './10-PretrainedModels';
import BERT from './11-BERT';
import GPT from './12-GPT';
import BERTvsGPT from './13-BERTvsGPT';
import EthicsXAI from './20-EthicsXAI';
import KeyTakeaways from './15-KeyTakeaways';
import WhatsNext from './16-WhatsNext';
import ThankYou from './17-ThankYou';

const slides = [
  Title,
  Agenda,
  GenAIExamples,
  BigPicture,
  GenVsDisc,
  LanguageProblem,
  AttentionBreakthrough,
  TransformerSimplified,
  HowLLMsGenerate,
  HowItLearns,
  ScaleUp,
  PretrainedModels,
  BERT,
  GPT,
  BERTvsGPT,
  EthicsXAI,
  KeyTakeaways,
  WhatsNext,
  ThankYou,
];

export const slideNotes = [
  {
    title: 'Generative AI & LLM Foundations',
    notes: '~30s | Intro yourself. "Session 1 of 3." Ground rules: not a lecture, shout questions. "In 30 min you\'ll understand how ChatGPT works — really understand it."',
  },
  {
    title: '30 minutes to understand AI',
    notes: '~30s | Point at each number. "Four parts: What GenAI is → how machines read language → inside an LLM → BERT and GPT." "30 minutes. Let\'s go."',
  },
  {
    title: 'You\'ve been using AI all week',
    notes: '~1.5m | [ASK] "How many used ChatGPT this week?" Hands up. Point at cards. Suno + Runway surprise people. "Every medium — text, image, code, art, music, video." "You\'ve been using GenAI all week — you just didn\'t call it that."',
  },
  {
    title: 'AI is a big word',
    notes: '~1.5m | "Your washing machine has AI mode. What does it mean?" Point outside→in: AI (1950s) → ML (data learns rules) → Deep Learning (2012, GPUs) → GenAI (creates, 2-3 yrs). "Russian nesting dolls." If asked: "When your uncle says AI takes jobs — he means this innermost ring."',
  },
  {
    title: 'Classify or create',
    notes: '~1m | "Traditional AI classifies: cat or dog? GenAI creates: draw me a cat." [ASK] "Which is harder?" "That\'s why it took until 2017 to crack it."',
  },
  {
    title: 'How does a machine learn language?',
    notes: '~1.5m | Point at "bank" examples. [ASK] "Give me another word like this?" (bat, bark, crane, light, run). "Teaching context to a machine that only sees numbers — that\'s the hard part." Sets up WHY attention matters.',
  },
  {
    title: '"Attention is all you need"',
    notes: '~2m | ⭐ MOST IMPORTANT SLIDE. "Before 2017 → reading through a keyhole." Point at arcs: "You don\'t read L→R on exams — you jump to key words. That\'s self-attention." Paper: 8 researchers, 12 pages, title almost rejected. Most left to start own companies. Encourage them to read it.',
  },
  {
    title: 'One architecture to rule them all',
    notes: '~1m | NO math. WhatsApp analogy: Hindi voice note → English text. Understanding (encoder) + generating (decoder). "Input → meaning → output. That\'s the Transformer." "ChatGPT, BERT, Gemini, Claude — all this. One paper. 12 pages."',
  },
  {
    title: 'One word at a time',
    notes: '~2m | ⚠️ LET ANIMATION RUN — silence is powerful. "This is literally how ChatGPT works. No understanding. Incredibly sophisticated pattern matching." Temperature: low = safe, high = creative. If asked "So it doesn\'t think?": "It simulates thinking through pattern matching at massive scale."',
  },
  {
    title: 'How does it actually learn?',
    notes: '~2m | "You already know how this works." At age 2, no grammar textbooks — heard thousands of sentences. Brain learned patterns. Point at net when it pulses. "Every connection = weight = number. Wrong → backpropagation → adjust." "Not 7 examples — GPT-3 trained on 300 billion words. Every book ever written, times 50."',
  },
  {
    title: 'Now scale it up',
    notes: '~1.5m | Tiny net: "19 nodes, 60 connections." Circles L→R. Dump truck line. "GPT-4 cost $100M+. First Iron Man = $140M. Same ballpark — no actors, just electricity and math." "Meta open-sourced LLaMA. Students in this room can download it." If asked: LLaMA 7B runs on a gaming laptop.',
  },
  {
    title: 'Learn once, use everywhere',
    notes: '~1.5m | "Pre-training = degree. Fine-tuning = first job." GPT→ChatGPT, BERT→Google Search, LLaMA→Code Llama. [ASK] "Why not train from scratch?" → $100M each time. If asked: fine-tuning is 1000x cheaper than pre-training.',
  },
  {
    title: 'The model that reads both ways',
    notes: '~1.5m | ⚠️ Let animation play. "Arrows go BOTH ways. Sees whole sentence first." Masked word → context from both sides → predicts. "Google Search uses BERT since 2019. Every search you do." BERT = reader, not writer.',
  },
  {
    title: 'The model that writes your emails',
    notes: '~1.5m | ⚠️ Let animation play. "Arrows only go right. Can never look ahead. That constraint makes it a generator." "ChatGPT streaming = literally this. Not thinking, just predicting." "ChatGPT = GPT-4 + fine-tuning for chat." If asked about Claude/Gemini: same architecture, different training.',
  },
  {
    title: 'Reader vs writer',
    notes: '~1m | [ASK] "Which for Google Search?" → BERT. "Which for ChatGPT?" → GPT. "Most modern models are decoder-only. Big enough decoder understands too. That\'s OpenAI\'s bet — it paid off." If asked "which is better?": depends on the task.',
  },
  {
    title: 'The elephant in the room',
    notes: '~1.5m | Hallucination: lawyer with fake case citations, sanctioned. Bias: trained on the internet, absorbs every bias. Black box: 175B params, can\'t explain. XAI: open research problem. "Always verify. Never blindly trust."',
  },
  {
    title: 'What to remember',
    notes: '~45s | Don\'t read the list — they can see it. Go to the punchline: "LLMs predict the next word. That\'s it. The intelligence, the creativity — just scale and clever training." "175B params, entire internet, one word at a time. That\'s ChatGPT." Pause. "Kind of beautiful in its simplicity, right?"',
  },
  {
    title: 'What\'s next?',
    notes: '~45s | "Session 2 = prompt engineering — literally on job descriptions now." "Session 3 = AI agents that reason, plan, code autonomously. Things get wild." "The foundation is set."',
  },
  {
    title: 'Thank You',
    notes: 'Q&A ~3m | [ASK] "What surprised you the most?" Backup: "What would you build?" / "What worries you?" If "Can AI think?": Stochastic parrot — great one. If "Replace devs?": It\'ll replace devs who don\'t use AI. If "AGI?": Not there. Great at language, fails at basic 5-yr-old reasoning. Gap closing.',
  },
];

export default slides;
