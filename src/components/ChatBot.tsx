"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import CopilotRibbon from "./CopilotRibbon";
import { profile } from "@/data/portfolio";
import { CHAT_GREETING, SUGGESTED_QUESTIONS, findAnswer } from "@/data/chatKnowledge";

interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
  emailCta?: boolean;
}

let nextId = 1;
function makeMessage(role: Message["role"], text: string, emailCta = false): Message {
  return { id: nextId++, role, text, emailCta };
}

/** Renders a bot answer: plain lines as paragraphs, "• " lines as a bullet list. */
function AnswerText({ text }: { text: string }) {
  const blocks: React.ReactNode[] = [];
  let bullets: string[] = [];
  let key = 0;

  const flushBullets = () => {
    if (bullets.length > 0) {
      const items = bullets;
      blocks.push(
        <ul key={`ul-${key++}`} className="chat-bullets">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>,
      );
      bullets = [];
    }
  };

  for (const line of text.split("\n")) {
    if (line.startsWith("• ")) {
      bullets.push(line.slice(2));
    } else if (line.trim() === "") {
      flushBullets();
    } else {
      flushBullets();
      blocks.push(<p key={`p-${key++}`}>{line}</p>);
    }
  }
  flushBullets();
  return <>{blocks}</>;
}

function EmailCta() {
  return (
    <a className="btn btn-primary chat-email-btn" href={`mailto:${profile.email}`}>
      Reach Pavithra by email
    </a>
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([makeMessage("bot", CHAT_GREETING)]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [askedCount, setAskedCount] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open ]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open ]);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  const ask = useCallback((raw: string) => {
    const question = raw.trim();
    if (!question || typing) return;
    const answer = findAnswer(question);
    setMessages((prev) => [...prev, makeMessage("user", question)]);
    setInput("");
    if (answer.kind !== "greeting") setAskedCount((c) => c + 1);
    setTyping(true);
    timerRef.current = setTimeout(
      () => {
        setTyping(false);
        setMessages((prev) => [...prev, makeMessage("bot", answer.text, answer.emailCta)]);
      },
      450 + Math.random() * 350,
    );
  }, [typing]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ask(input);
  };

  return (
    <>
      <button
        type="button"
        className="chat-fab"
        aria-label={open ? "Close chat" : "Ask about Pavithra — open chat"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 8.5-8.5 8.38 8.38 0 0 1 8.5 8.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {open && (
        <section className="chat-panel" aria-label="Ask about Pavithra — portfolio chat assistant">
          <header className="chat-header">
            <CopilotRibbon size={38} />
            <div className="chat-header-text">
              <h2>Ask about Pavithra</h2>
              <p>Portfolio assistant · answers from her LinkedIn profile</p>
            </div>
            <button
              type="button"
              className="chat-close"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </header>

          <div className="chat-messages" ref={scrollRef}>
            {messages.map((m) => (
              <div key={m.id} className={`chat-msg chat-msg-${m.role}`}>
                {m.role === "bot" ? <AnswerText text={m.text} /> : <p>{m.text}</p>}
                {m.emailCta && <EmailCta />}
              </div>
            ))}
            {typing && (
              <div className="chat-msg chat-msg-bot chat-typing" aria-label="Assistant is typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          {askedCount === 0 && (
            <div className="chat-chips">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button key={q} type="button" className="chat-chip" onClick={() => ask(q)}>
                  {q}
                </button>
              ))}
            </div>
          )}

          <form className="chat-input-row" onSubmit={onSubmit}>
            <input
              ref={inputRef}
              className="chat-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about her experience, skills…"
              aria-label="Type your question"
              maxLength={300}
            />
            <button type="submit" className="btn btn-primary chat-send" disabled={!input.trim() || typing}>
              Send
            </button>
          </form>
        </section>
      )}
    </>
  );
}
