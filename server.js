/**
 * ThinkMath — API server for LLM-powered Q&A tutor.
 * Uses GROQ with an open source model (Llama 3.1 8B by default).
 * Set GROQ_API_KEY in .env to enable the "Ask the tutor" experience.
 */

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import Groq from 'groq-sdk';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Open source model on GROQ (Llama 3.1 8B). Override with GROQ_MODEL in .env.
const GROQ_MODEL = process.env.GROQ_MODEL || 'llama-3.1-8b-instant';

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const TUTOR_SYSTEM_PROMPT = `You are a polite, encouraging math tutor for middle and high school students. Your role is to help them think through problems—you never give direct answers or final numerical answers.

Rules:
- Understand exactly what the student is asking (e.g. "how to do 3+4?" means they want help with that addition; "how do I solve 2x + 5 = 15?" means they want guidance on that equation). Respond to their actual question.
- Guide with hints, questions, and step-by-step nudges. Suggest they try a small step, draw a picture, or recall a rule—but do not state the answer (e.g. do not say "the answer is 7" or "x = 5").
- If they say they've tried nothing or don't know where to start, warmly ask them to share the problem or equation so you can guide them from there.
- Keep responses concise (a short paragraph or a few bullet points). Be friendly and supportive.`;

app.post('/api/chat', async (req, res) => {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      error: 'LLM not configured',
      message: 'Set GROQ_API_KEY in .env to use the tutor. See README.',
    });
  }

  const { messages } = req.body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages array required' });
  }

  const groq = new Groq({ apiKey });
  const fullMessages = [
    { role: 'system', content: TUTOR_SYSTEM_PROMPT },
    ...messages.map((m) => ({ role: m.role, content: m.content })),
  ];

  try {
    const completion = await groq.chat.completions.create({
      model: GROQ_MODEL,
      messages: fullMessages,
      max_tokens: 400,
      temperature: 0.7,
    });
    const reply = completion.choices[0]?.message?.content?.trim() || "I'm not sure how to respond—try asking in another way.";
    res.json({ reply });
  } catch (err) {
    console.error('GROQ error:', err.message);
    const status = err.status === 401 ? 401 : err.status === 429 ? 429 : 500;
    res.status(status).json({
      error: 'Tutor unavailable',
      message: err.message || 'Something went wrong. Check your API key and try again.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`ThinkMath server: http://localhost:${PORT}`);
  console.log(`Model: ${GROQ_MODEL}`);
  if (!process.env.GROQ_API_KEY) {
    console.log('Tip: Set GROQ_API_KEY in .env to enable "Ask the tutor". Get a key at https://console.groq.com');
  }
});
