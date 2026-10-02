# Session 1 — Generative AI & LLM Foundations
## Full Speaking Script & Storyline

**Duration:** 30 minutes  
**Audience:** College students (B.Tech), mixed engineering backgrounds  
**Tone:** Conversational, not lecture-y. You're the senior dev who's excited to explain this, not a professor reading slides.

---

## Slide 1 — Title
**[~30 seconds]**

> Hey everyone, good morning! I'm Asher — I work as a developer and today I get to talk to you about something I genuinely find fascinating.
>
> This is Session 1 of 3. In the next 30 minutes, I'm going to try to make you understand how ChatGPT actually works under the hood. Not at a surface level — I mean really understand it.
>
> Quick ground rules: this is not a lecture. If you have a question at any point, just raise your hand or shout it out. I'd rather have a conversation than a monologue.

**→ NEXT**

---

## Slide 2 — Agenda
**[~30 seconds]**

> Here's our roadmap. Four parts.
>
> First, we'll look at what Generative AI actually is — with real products you've already used. Then we'll get into how machines understand language — this is where it gets interesting. Third, we'll go inside an LLM and see how it actually learns. And finally, we'll look at BERT and GPT — the two architectures that power everything.
>
> 30 minutes. Let's go.

**→ NEXT**

---

## Slide 3 — You've been using AI all week
**[~1.5 minutes]**

> Before we define anything, let me ask — **how many of you used ChatGPT this week?**
>
> *(Wait for hands. There will be a lot.)*
>
> What about Copilot? Anyone using that for coding? DALL·E or Midjourney for images?
>
> Look at this — ChatGPT for text, DALL·E for images, Copilot for code, Midjourney for art, Suno for music, Runway for video. **Every medium.** Text, image, code, art, music, video.
>
> You've been using Generative AI all week — you just didn't call it that. The question is: how does any of this actually work? That's what we're here to figure out.

**→ NEXT**

---

## Slide 4 — AI is a big word
**[~1.5 minutes]**

> So when people say "AI" — what do they actually mean? Your washing machine has "AI mode." Your phone camera has "AI enhancement." Your email has "AI autocomplete." Everything is "AI-powered" now. What does that actually mean?
>
> Let me untangle this. *(Point at the outermost rectangle)*
>
> **Artificial Intelligence** — broadest term. Any machine that mimics human reasoning. This has been around since the 1950s. Your calculator is technically AI by some definitions. Chess programs, Siri saying "I didn't understand that" — all AI.
>
> *(Point inward)* **Machine Learning** — instead of writing rules, you feed the machine data and let it figure out the rules itself. This is where things get real.
>
> *(Point inward)* **Deep Learning** — machine learning with layered neural networks. This exploded around 2012 when GPUs got powerful enough. Suddenly we could train massive networks.
>
> *(Point at the innermost)* **Generative AI** — the newest. These don't just analyze or classify — they **create**. New text, new images, new code. This went mainstream literally 2-3 years ago.
>
> Here's the mental model: every Generative AI model IS a deep learning model IS a machine learning model IS artificial intelligence. Russian nesting dolls. Each layer is stricter, more powerful, and more recent.
>
> *(Pause)* So when your uncle says "AI is going to take our jobs" — what does he mean? Probably this innermost ring. When a researcher says "AI" — they might mean any of these rings. Context matters.

**→ NEXT**

---

## Slide 5 — Classify or create
**[~1 minute]**

> This is the key distinction that makes Generative AI different from everything that came before.
>
> Traditional AI is **discriminative** — it classifies. You show it a photo and ask "is this a cat or a dog?" It picks one. It sorts things into buckets.
>
> Generative AI is the opposite — you say "draw me a cat" and it **creates something that never existed before**.
>
> *(Pause)* Think about how different that is. One is picking from options. The other is creating from nothing. Which do you think is harder?
>
> *(Let them answer — someone will say "creating")*
>
> Exactly. And that's why it took us until 2017 to figure out how to do it well.

**→ NEXT**

---

## Slide 6 — How does a machine learn language?
**[~1.5 minutes]**

> So if we want AI to generate text — to write like a human — the machine needs to understand language. And language is **messy**.
>
> Look at this word: "bank." *(Point at the two cards)*
>
> "I went to the bank to deposit money" — that's a financial institution.
> "We sat by the bank of the river" — that's the edge of water.
>
> Same word. Completely different meaning. And you figured out which is which instantly — without even thinking about it. You used **context**.
>
> Now think about the word "light" — is it brightness or weight? "Run" — are you running a program or running a marathon?
>
> *(Ask audience)* Can anyone give me another example?
>
> *(Let them give examples — "bat", "bark", "crane" etc.)*
>
> This is the core challenge: how do you teach a machine to understand context? How do you turn words into numbers in a way that captures meaning? This question drove decades of AI research. And in 2017, someone figured it out.

**→ NEXT**

---

## Slide 7 — "Attention is all you need"
**[~2 minutes]**

> This is arguably the most important slide in this entire presentation.
>
> Before 2017, models read text one word at a time. Left to right. Like reading through a keyhole — you could only see one word, try to remember what came before, and guess what comes next. It was slow and it forgot things.
>
> Then a team of 8 researchers at Google published a 12-page paper with a bold title: **"Attention Is All You Need."** And it changed everything.
>
> The idea is actually intuitive. *(Point at the sentence visualization)*
>
> Look at this sentence: "The cat sat on the mat because **it** was tired."
>
> What does "it" refer to? The cat, right? You figured that out instantly. But how? You didn't read left to right — your brain jumped to the key words. "Cat"... "it"... "tired" — your brain connected them.
>
> That's exactly what **self-attention** does. Every word looks at every other word and decides what's relevant. The model figures out that "it" connects to "cat" — not by following grammar rules, but by learning patterns from millions of sentences.
>
> *(Point at the paper reference)* Fun fact: this paper has 8 authors. Most of them have since left Google to start their own AI companies. The title was almost rejected for being too bold. And it's only 12 pages — I genuinely encourage you to read it. It's the paper that started the entire LLM revolution.

**→ NEXT**

---

## Slide 8 — One architecture to rule them all
**[~1 minute]**

> So that paper introduced the **Transformer** — one architecture that does it all.
>
> I want you to think about WhatsApp voice messages. You know when someone sends you a 3-minute voice note in Hindi, and WhatsApp gives you a text transcription in English? Two things happened — **understanding** the Hindi audio, and **generating** English text. Two different jobs.
>
> That's the Transformer. *(Point at the diagram)*
>
> The **Encoder** is the listener. It takes input and builds a deep representation of what was said. Every nuance, every context clue.
>
> The **Decoder** is the speaker. It takes that understanding and produces output.
>
> Input → encoded into meaning → decoded into output. That's the entire Transformer in one sentence.
>
> What makes it special? Attention — everything we just talked about. Both sides use self-attention. And they process all words **simultaneously**, not one at a time. That's why they're insanely fast.
>
> Every AI model you've heard of — ChatGPT, BERT, DALL·E, Gemini, Claude — is built on this one architecture. One paper. 12 pages. Everything.

**→ NEXT**

---

## Slide 9 — One word at a time
**[~2 minutes]**

> Now let's see how text generation actually works. I'm going to show you the exact mechanism. Watch the animation.
>
> *(Let the animation run for about 10 seconds. Don't talk over it. Let them watch the words appear and the probability bars shift.)*
>
> *(After the animation plays through a few steps)*
>
> See what's happening? The model has the prompt "The quick brown" and it's trying to predict the next word. Look at the bars — "fox" has 42% probability, "bear" is 18%, "dog" is 12%.
>
> It picks "fox." Now it has "The quick brown fox" and predicts again. Different words, different probabilities. "Jumps" wins at 38%.
>
> **This is literally how ChatGPT works.** Every single response you've ever gotten from ChatGPT was generated exactly like this — one word at a time, each word picked based on probability.
>
> *(Let that sink in for a moment)*
>
> Here's what blows my mind: there's no understanding happening. No reasoning. No comprehension. It's incredibly sophisticated **pattern matching**. It's just so good at predicting the next word that it appears intelligent.
>
> The temperature thing at the bottom — that's a setting. Low temperature means the model always picks the highest probability word. Predictable, safe. High temperature means it's willing to pick lower-probability words. More creative, but also more random. That's why ChatGPT sometimes gives you different answers to the same question.

**→ NEXT**

---

## Slide 10 — How does it actually learn?
**[~2 minutes]**

> Okay so the model predicts the next word. But how did it learn to do that? How does it go from knowing nothing to being able to write poetry?
>
> Here's the thing — **you already know how this works**. You just don't realize it.
>
> When you were 2 years old, you didn't learn English by studying grammar textbooks. Nobody taught you "subject-verb-object." You heard your parents say thousands of sentences. You tried to speak. You got corrected. You tried again. Slowly, your brain learned the patterns.
>
> That's exactly what's happening here. Watch. *(Point at the training loop)*
>
> The model sees: "The cat sat on the ___." It guesses "car." Wrong. The answer was "mat."
>
> Now look at the neural network. *(Point when it pulses)* Every connection is a **weight** — just a number. When the model guesses wrong, it traces back through the network and asks: "which connections led me to say 'car'?" Then it nudges those numbers slightly. This is **backpropagation** — literally "propagating the error backward."
>
> *(Wait for next example)* Wrong again. Adjusts. *(Wait for correct one)* Got it right! Those weights stay as they are.
>
> Now here's the scale that will melt your brain — the model does this not 7 times like our demo. GPT-3 was trained on **300 billion words**. That's roughly every book ever written, times 50. After that much practice, you'd be pretty good at predicting language too.

**→ NEXT**

---

## Slide 11 — Now scale it up
**[~1.5 minutes]**

> *(Point at the tiny neural network reference)* That neural network you just saw? 19 nodes, 60 connections. It could barely learn a sentence.
>
> Real LLMs are the same idea — just absurdly, incomprehensibly bigger.
>
> *(Point at the circles one by one)*
>
> BERT: 340 million parameters. Impressive in 2018.
> GPT-2: 1.5 billion. 4x bigger.
> GPT-3: 175 billion. This is the one that broke the internet.
> GPT-4: estimated 1.8 trillion. OpenAI won't even confirm the number.
>
> *(Let the dump truck line appear)*
>
> If GPT-3's 175 billion parameters were grains of sand — you'd need **four dump trucks** to carry them.
>
> And training costs? GPT-3 cost $4.6 million. GPT-4 is estimated at over $100 million. For context — the first Iron Man movie cost $140 million to make. Training GPT-4 costs almost as much as making a Marvel movie. Except there are no actors, no cameras. Just electricity and math.
>
> This is why only a handful of companies can build frontier models. You need Google, OpenAI, Meta-level resources. But — *(this is important)* — Meta open-sourced **LLaMA**. That means startups, universities, even students in this room can download it, fine-tune it, build on it. The models are getting democratized. That changes everything.
>
> *(If someone asks "can I run it on my laptop?" — yes, smaller versions like LLaMA 7B can run on a gaming laptop. Slowly, but it works.)*

**→ NEXT**

---

## Slide 12 — Learn once, use everywhere
**[~1.5 minutes]**

> So you've spent $100 million training a model. Do you throw it away and start over for each task? Obviously not.
>
> This is where **pre-training and fine-tuning** come in. Think of it like education.
>
> *(Point at the stages)* Pre-training is like earning a university degree. You study everything — literature, science, history, math. Broad knowledge across many subjects. That's the foundation model.
>
> Fine-tuning is like getting your first job. You take that broad education and specialize. A doctor, a lawyer, a developer — same university degree, different specialization.
>
> *(Point at examples)* GPT was pre-trained on internet text. Fine-tuned for conversation? That's ChatGPT. BERT was pre-trained on books and Wikipedia. Fine-tuned for search ranking? That's Google Search. LLaMA was pre-trained on public data. Fine-tuned for code? That's Code Llama.
>
> Same foundation model, different fine-tuning, completely different products. This is why pre-training is so powerful — you do the expensive part once, then adapt cheaply.

**→ NEXT**

---

## Slide 13 — The model that reads both ways
**[~1.5 minutes]**

> Now let's meet the two most important models that came out of the Transformer.
>
> First: **BERT**, from Google, 2018. BERT uses only the **encoder** part of the Transformer.
>
> *(Point at the arrow diagram)* See how the arrows go both left AND right? BERT reads in both directions at once. It sees the entire sentence before making any decision.
>
> *(Let the masked prediction animation play)*
>
> Watch how it learns: you take a sentence, mask a word, and ask BERT to predict what's missing. "The [MASK] sat on the mat." It gathers context from both sides — "sat on the mat" from the right, "The" from the left — and predicts "cat."
>
> This is called **Masked Language Modeling**. It's brilliant for understanding — because BERT always sees the full picture.
>
> That's why BERT is used for things like Google Search. Since 2019, every time you search something on Google, BERT is helping rank the results. It's a **reader**, not a writer.

**→ NEXT**

---

## Slide 14 — The model that writes your emails
**[~1.5 minutes]**

> Now meet GPT — from OpenAI, also 2018. GPT uses only the **decoder** part of the Transformer.
>
> *(Point at the arrow diagram)* See the difference? Arrows only go left to right. GPT can only see what came before. It can never look ahead.
>
> *(Let the generation animation play)*
>
> Watch: "The"... "quick"... "brown"... and now it predicts "fox." Each word is generated based only on the words that came before it.
>
> This constraint — only looking backward — is exactly what makes GPT a **generator**. It's forced to predict forward, word by word, creating new text as it goes.
>
> Every time you type something into ChatGPT and see it stream text back to you word by word — that's literally this. It's not thinking. It's not understanding your question and crafting a response. It's predicting one word at a time, incredibly fast.
>
> ChatGPT is specifically GPT-4 with fine-tuning for conversation. Same architecture, specialized for chat.

**→ NEXT**

---

## Slide 15 — Reader vs writer
**[~1 minute]**

> So here's the side-by-side. *(Let them absorb the comparison table for a moment)*
>
> Quick quiz: **which would you use for Google Search?**
>
> *(Wait for answer)* BERT — because search is about understanding your query and finding the best match.
>
> **Which would you use for ChatGPT?**
>
> *(Wait)* GPT — because chat is about generating a response.
>
> BERT reads both ways — great for understanding. GPT reads one way — great for generating.
>
> In practice, most modern models are decoder-only, like GPT. Turns out, if you make a decoder big enough, it can understand pretty well too. That's the bet OpenAI made — and it paid off.

**→ NEXT**

---

## Slide 16 — The elephant in the room
**[~1.5 minutes]**

> We've spent 25 minutes talking about how powerful these models are. Now let's talk about what can go wrong.
>
> **Hallucination.** This is the big one. LLMs confidently generate text that sounds right but is completely made up. There's a famous case — a lawyer used ChatGPT to write court briefs. ChatGPT invented fake case citations. Completely fictional cases. The lawyer submitted them, got caught, and was sanctioned by the court.
>
> **Bias.** These models learn from the internet. And the internet is full of biases — gender, racial, cultural. The model absorbs all of it. If the training data says "doctors are male" more often than "doctors are female," the model learns that bias.
>
> **Black box problem.** 175 billion parameters. Can you explain why the model chose one word over another? Not really. It's essentially a black box.
>
> And that's where **Explainable AI** comes in — research into making these decisions transparent. Attention maps, feature attribution — techniques to peek inside the box.
>
> The key takeaway: **powerful models need guardrails**. Understanding what can go wrong is just as important as understanding how they work. Always verify AI output. Never blindly trust it.

**→ NEXT**

---

## Slide 17 — What to remember
**[~45 seconds]**

> Okay. We just covered a lot. If your brain feels full — good. That means it worked.
>
> I'm not going to read this list. You can see it. But let me give you the one thing — the one sentence — that I want you to walk out of this room with:
>
> **LLMs predict the next word. That's it. Everything else — the intelligence, the creativity, the seemingly human responses — is just scale and clever training.**
>
> 175 billion parameters, trained on the entire internet, predicting one word at a time. That's ChatGPT. That's the whole trick.
>
> *(Pause)* Kind of beautiful in its simplicity, right?

**→ NEXT**

---

## Slide 18 — What's next?
**[~45 seconds]**

> This was Session 1 — the foundations. You now understand how these models work at a fundamental level. Most people who use ChatGPT every day don't know what you now know.
>
> **Session 2** is Prompt Engineering & Fine-Tuning. You'll learn how to actually *talk* to these models effectively — zero-shot, few-shot, chain-of-thought. Prompt engineering is literally on job descriptions now. It's a real skill.
>
> **Session 3** is Agentic AI. AI agents that can reason, plan, browse the web, write code, and use tools autonomously. This is where things get really wild.
>
> The foundation is set. Let's build on it.

**→ NEXT**

---

## Slide 19 — Thank You
**[~2-3 minutes for Q&A]**

> Thank you, everyone. That was a lot of information in 30 minutes.
>
> I want to open the floor for questions. Anything at all — no question is too basic.
>
> *(If silence, prompt with:)* Let me ask you — **what surprised you the most?**
>
> *(Other conversation starters if needed:)*
> - "What would you build with this technology?"
> - "What worries you most about AI?"
> - "Did anything change how you'll use ChatGPT going forward?"
>
> *(If they ask about something covered in Session 2 or 3, say:)* "Great question — that's exactly what we'll cover in Session [2/3]. Hold that thought."
>
> *(If nobody has questions, have these in your back pocket:)*
> - "Can ChatGPT actually think?" — No. It simulates thinking through pattern matching at massive scale. It's a stochastic parrot — an incredibly good one.
> - "Will AI replace developers?" — It'll replace developers who don't use AI. It's a tool, not a replacement. The best developers right now are the ones who use AI to move 10x faster.
> - "What about AGI?" — Artificial General Intelligence — AI that can do anything a human can. We're not there yet. Current models are narrow — really good at language, terrible at basic reasoning a 5-year-old can do. But the gap is closing fast.

---

## Timing Guide

| Slides | Section | Time |
|---|---|---|
| 1-2 | Intro + Agenda | ~1 min |
| 3-5 | What is GenAI? | ~4 min |
| 6-8 | Language + Attention + Transformer | ~5 min |
| 9-11 | Generation + Training + Scale | ~5.5 min |
| 12 | Pretraining | ~1.5 min |
| 13-15 | BERT + GPT + Comparison | ~4 min |
| 16 | Ethics | ~1.5 min |
| 17-18 | Recap + Teaser | ~1.5 min |
| 19 | Q&A | ~3 min |
| **Total** | | **~27 min** |

Buffer of ~3 minutes for audience interaction and unexpected questions.

---

## General Tips

- **Don't read the slides.** The slides are visual aids. You tell the story.
- **Let animations breathe.** Slides 9 and 10 have animations — let them play before talking. Silence while something cool happens on screen is powerful.
- **Make eye contact.** Pick 3-4 people in different sections and alternate.
- **Use their energy.** If someone gives a good answer, acknowledge it: "Exactly!" or "Good instinct."
- **Pace yourself.** You have 30 minutes. Don't rush the first half and have to speed through BERT and GPT.
- **Water.** Bring water. Talking for 30 minutes straight dries you out fast.
