"use client";

import { useState } from "react";

// FAQ section — yellow accent.
// R-28: every question must be a real concern for someone hiring a developer.
// Replace these with questions you actually get asked (R-38).

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What kind of work do you take on?",
    answer:
      "[Replace with honest answer. e.g., I work on web apps, mostly React and TypeScript front-ends. I can handle full-stack projects but my strength is on the client side.]",
  },
  {
    id: "faq-2",
    question: "Are you available for freelance or contract work?",
    answer:
      "[Replace with your actual availability. e.g., Currently open to part-time contract work. Drop me a message through the contact form with details.]",
  },
  {
    id: "faq-3",
    question: "What does your process look like for a new project?",
    answer:
      "[Replace with your real workflow. e.g., A short discovery call to understand the goal, then a written scope before writing any code. I prefer async communication.]",
  },
  {
    id: "faq-4",
    question: "Do you work with design files or start from scratch?",
    answer:
      "[Replace with honest answer. e.g., Both. I can build from Figma or implement my own layouts when no design is provided.]",
  },
];

function FaqAccordion({ item }: { item: FaqItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        border: "var(--border-brutal)",
        boxShadow: isOpen ? "none" : "var(--shadow-brutal)",
        backgroundColor: "var(--color-cream)",
        transform: isOpen ? "translate(4px, 4px)" : undefined,
        transition: "box-shadow 120ms ease-out, transform 120ms ease-out",
        marginBottom: "0.75rem",
      }}
    >
      <h3 style={{ margin: 0 }}>
        {/* summary-equivalent via button inside h3 for semantic heading (R-39) */}
        <button
          id={`${item.id}-btn`}
          aria-expanded={isOpen}
          aria-controls={`${item.id}-panel`}
          onClick={() => setIsOpen((prev) => !prev)}
          style={{
            width: "100%",
            background: "none",
            border: "none",
            padding: "1.25rem 1.5rem",
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
            color: "var(--color-ink)",
            cursor: "pointer",
            minHeight: "44px",
          }}
        >
          {item.question}
          {/* Plus/minus indicator — functional state marker, not decoration */}
          <span aria-hidden="true" style={{ flexShrink: 0, fontSize: "1.5rem", lineHeight: 1 }}>
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </h3>
      <div
        id={`${item.id}-panel`}
        role="region"
        aria-labelledby={`${item.id}-btn`}
        hidden={!isOpen}
        style={{
          padding: "0 1.5rem 1.25rem",
          fontFamily: "var(--font-body)",
          fontSize: "0.95rem",
          lineHeight: 1.8,
        }}
      >
        {item.answer}
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="section"
      style={{ backgroundColor: "var(--color-yellow)", borderBottom: "var(--border-brutal-thick)" }}
      aria-labelledby="faq-heading"
    >
      <div className="section__inner">
        <h2 id="faq-heading" style={{ marginBottom: "3rem" }}>
          FAQ
        </h2>
        <div style={{ maxWidth: "720px" }}>
          {FAQ_ITEMS.map((item) => (
            <FaqAccordion key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
