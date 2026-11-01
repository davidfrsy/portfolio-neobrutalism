// About section — teal accent.
// Direct, factual. Skills as a list, not a buzzword parade.
// No percentages, progress bars, or invented stats (R-17).

// Replace with your actual skills and bio (R-38).
const SKILLS = [
  "TypeScript / JavaScript",
  "React / Next.js",
  "Node.js",
  "CSS / HTML",
  "SQL",
  "Git",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section"
      style={{ backgroundColor: "var(--color-teal)", borderBottom: "var(--border-brutal-thick)" }}
      aria-labelledby="about-heading"
    >
      <div className="section__inner">
        {/* Asymmetric: text left, skills right — RHYTHM 3 from DESIGN.md */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Bio column */}
          <div>
            <h2 id="about-heading" style={{ marginBottom: "1.5rem", color: "var(--color-ink)" }}>
              About
            </h2>
            {/* Placeholder bio — replace with your actual story (R-38) */}
            <p
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                lineHeight: 1.8,
                maxWidth: "52ch",
              }}
            >
              [Your bio here. Keep it direct: who you are, what you build, what you care about.
              Skip the buzzwords. Two short paragraphs is enough.]
            </p>
          </div>

          {/* Skills column — a factual list, not a bar chart */}
          <div>
            <h3 style={{ marginBottom: "1rem", color: "var(--color-ink)" }}>What I work with</h3>
            <ul
              role="list"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {SKILLS.map((skill) => (
                <li
                  key={skill}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    borderBottom: "1.5px solid var(--color-ink)",
                    paddingBottom: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  {/* Solid square marker — identity mark, not a generic bullet */}
                  <span aria-hidden="true" style={{ width: "8px", height: "8px", backgroundColor: "var(--color-ink)", flexShrink: 0, display: "block" }} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
