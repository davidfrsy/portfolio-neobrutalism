"use client";

// Update YEAR when a new year begins.
const YEAR = 2026;

export default function Footer() {

  return (
    <footer
      style={{
        borderTop: "var(--border-brutal-thick)",
        backgroundColor: "var(--color-ink)",
        color: "var(--color-cream)",
        padding: "2rem 1.5rem",
      }}
      aria-label="Site footer"
    >
      <div
        className="section__inner"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, margin: 0 }}>
          [YOUR NAME]
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", margin: 0, opacity: 0.7 }}>
          {YEAR}
        </p>
      </div>
    </footer>
  );
}
