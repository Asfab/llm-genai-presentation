# Session 1 — Generative AI & LLM Foundations
## Content Review & Slide Map

**Duration:** 30 minutes | **Audience:** College students (RSET)

**Syllabus coverage (Module 5):** Introduction to Generative AI, Generative AI & Pretrained Models, Introduction to LLMs — From Transformers to LLMs, BERT architecture

---

## Current Slide Inventory (17 slides / ~1.7 min each)

| #  | Tag            | Current Title                             | Type       | Notes |
|----|----------------|-------------------------------------------|------------|-------|
| 01 | Session 1      | Generative AI & LLM Foundations           | Title      | Fine |
| 02 | Overview       | What we'll cover                          | Agenda     | Textbook feel. Could be skipped or made conversational |
| 03 | The Big Picture | Where does GenAI fit?                    | Concept    | AI > ML > DL > GenAI. Good for students but the flow diagram is thin — very little screen time value |
| 04 | Core Concept   | Two kinds of models                       | Concept    | **Boring title**. Content is solid. |
| 05 | GenAI Today    | You already use it                        | Examples   | Good hook. Could be stronger as an earlier slide. |
| 06 | Evolution      | The road to Transformers                  | Timeline   | **Very textbook**. 4 dense bullet points + flow. Too much for 1.7 min. |
| 07 | The Breakthrough| "Attention is all you need"              | Concept    | Title is great (it's the paper name). But 4 bullet points are too academic for students. |
| 08 | Architecture   | The Transformer                           | Concept    | **Textbook chapter title**. Content is okay but dry. |
| 09 | LLMs           | What makes it large?                      | Concept    | Good question-title. Content works. |
| 10 | Pretrained Models | Learn once, use everywhere             | Concept    | Good title. University analogy is strong. |
| 11 | Encoder Model  | BERT                                      | Deep dive  | **Very dense** — two cards, 3 bullet points, 4 tags. Too much for one slide. |
| 12 | Decoder Model  | GPT                                       | Deep dive  | Same density problem as BERT. |
| 13 | Head to Head   | BERT vs GPT                               | Comparison | Good format. This is where students actually get it. |
| 14 | Under the Hood | How LLMs generate text                    | Concept    | **Textbook title**. Temperature section is good. |
| 15 | Recap          | Key takeaways                             | Summary    | Fine but generic. |
| 16 | Coming Up      | What's next?                              | Teaser     | Good. |
| 17 |                | Thank You                                 | End        | Fine. |

---

## Problems Identified

### 1. Titles read like chapter headings, not presentation hooks

The titles don't spark curiosity. Compare:

| Current (Boring)                  | Proposed (Engaging)                              |
|-----------------------------------|--------------------------------------------------|
| What we'll cover                  | *30 minutes to understand AI*                    |
| Where does GenAI fit?             | *AI is a big word*                               |
| Two kinds of models               | *Classify or create — pick one*                   |
| You already use it                | *You've been using AI all week*                   |
| The road to Transformers          | *Why everything before 2017 was slow*             |
| The Transformer                   | *One architecture to rule them all*               |
| What makes it large?              | *175 billion knobs*                               |
| Learn once, use everywhere        | Fine — keep this                                  |
| BERT                              | *The model that reads both ways*                  |
| GPT                               | *The model that finishes your sentences*          |
| BERT vs GPT                       | *Reader vs writer*                                |
| How LLMs generate text            | *One word at a time*                              |
| Key takeaways                     | *What to remember*                                |

**Principle:** Every title should either provoke a question or make a bold claim. Students should think "wait, what?" not "oh, another topic."

### 2. Content density is uneven

- Slides 11 (BERT) and 12 (GPT) are way too dense — each has 2 cards, 3 bullet points, and 4 tags. For students in a 30-min session, this is overload.
- Slides 03 (Big Picture) and 15 (Key Takeaways) are too thin — barely any content.
- The BERT + GPT content should probably be lighter, since slide 13 (comparison) is where students actually absorb the difference.

### 3. Flow could be stronger

Current flow is topical (GenAI → Transformers → LLMs → BERT → GPT). It's logical but not *narrative*. A story-driven flow would be:

1. **Hook** — You use GenAI every day (move examples earlier)
2. **Context** — What even is GenAI (quick framing)
3. **The Problem** — Old models were too slow (RNNs)
4. **The Breakthrough** — Attention + Transformers
5. **The Scale** — LLMs: what makes them work
6. **The Two Flavors** — BERT (reads) vs GPT (writes)
7. **How it works** — The generation loop
8. **Recap + Next**

### 4. Some content is too academic for the audience

Lines like "Scaled dot-product attention prevents gradients from vanishing" won't land with students. The exam analogy is good. The sand analogy is good. We need more of *that* and less jargon.

---

## Final Slide Order (19 slides, ~1.6 min each)

| #  | Tag               | Title                                       | Role |
|----|-------------------|---------------------------------------------|------|
| 01 |                   | Generative AI & LLM Foundations             | Title |
| 02 | Overview          | 30 minutes to understand AI                 | Agenda |
| 03 | GenAI Today       | You've been using AI all week               | **Hook** — start with what they know |
| 04 | The Big Picture   | AI is a big word                            | Taxonomy: AI > ML > DL > GenAI |
| 05 | Core Concept      | Classify or create                          | Framing: discriminative vs generative |
| 06 | The Challenge     | How does a machine learn language?           | **Bridge** — sets up the problem (ambiguity, context) |
| 07 | Evolution         | Why everything before 2017 was slow         | Failed attempts: RNNs, LSTMs |
| 08 | The Breakthrough  | "Attention is all you need"                 | The 2017 paper + exam analogy |
| 09 | Architecture      | One architecture to rule them all           | Transformer pipeline: encoder + decoder |
| 10 | Under the Hood    | One word at a time                          | **Moved up** — generation pipeline + temperature |
| 11 | The Leap          | Now scale it up                             | **Bridge** — same arch, massive scale = LLM |
| 12 | LLMs              | 175 billion knobs                           | Parameters, data, compute |
| 13 | Pretrained Models | Learn once, use everywhere                  | Pretraining + fine-tuning |
| 14 | Encoder Model     | The model that reads both ways              | BERT |
| 15 | Decoder Model     | The model that writes your emails           | GPT |
| 16 | Head to Head      | Reader vs writer                            | BERT vs GPT comparison (the payoff) |
| 17 | Recap             | What to remember                            | 6 takeaways |
| 18 | Coming Up         | What's next?                                | Sessions 2 & 3 teaser |
| 19 |                   | Thank You                                   | End |

### Narrative Arc

**Act 1 — "You already know this" (slides 1–5)**
Open with the hook: students already use GenAI daily. Then frame what it is (taxonomy, gen vs disc). Build familiarity before going technical.

**Act 2 — "Here's how it works" (slides 6–10)**
Pose the problem: language is hard for machines. Walk through the history of failed approaches, the attention breakthrough, the Transformer, and how text generation actually works step by step.

**Act 3 — "Make it massive" (slides 11–13)**
Bridge from architecture to scale. Show what happens when you pour billions of parameters and internet-scale data into that Transformer. Then explain pretraining + fine-tuning.

**Act 4 — "Two flavors, one recap" (slides 14–19)**
BERT reads, GPT writes. The comparison slide is the payoff — everything clicks. Recap, tease next sessions, close.

---

## Action Items

- [x] Retitle 13 slides with engaging, curiosity-driven titles
- [x] Reorder: move GenAI examples (#05) to position #03 (hook first)
- [x] Simplify BERT (#11) and GPT (#12) — reduce to 1 card + 2 bullet points max
- [x] Simplify Attention (#07) — remove jargon, keep analogy + 3 accessible points
- [x] Simplify Evolution (#06) — reduce to 3 bullet points, more conversational
