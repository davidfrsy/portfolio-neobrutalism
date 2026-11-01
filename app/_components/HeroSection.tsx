export default function HeroSection() {
  return (
    <section
      id="home"
      className="section"
      style={{ backgroundColor: "var(--color-orange)", borderBottom: "var(--border-brutal-thick)" }}
      aria-labelledby="hero-heading"
    >
      <div className="section__inner">
        {/* Asymmetric layout: name left, role block right-offset */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
          {/* Role tag — actual content, not an eyebrow badge duplicate */}
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(0.875rem, 1.5vw, 1.1rem)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              borderLeft: "4px solid var(--color-ink)",
              paddingLeft: "0.75rem",
            }}
          >
            Software Developer
          </p>

          {/* Main identity — placeholder name per R-23 */}
          <h1 id="hero-heading" style={{ color: "var(--color-ink)" }}>
            David Firmansyah
          </h1>

          {/* What I do — direct, no buzzwords */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              maxWidth: "52ch",
              lineHeight: 1.7,
            }}
          >
            I build things for the web. Mostly front-end, some back-end, always readable code.
            This is where I put my actual work.
          </p>

          {/* CTAs — two real actions, no arrows decoration */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#projects" className="btn-brutal btn-brutal--filled">
              See my work
            </a>
            <a href="#contact" className="btn-brutal">
              Get in touch
            </a>
          </div>
        </div>

        {/* Decorative block — visual identity mark, not a generic illustration */}
        <div
          aria-hidden="true"
          style={{
            marginTop: "4rem",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {["TypeScript", "React", "Node.js", "CSS"].map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.875rem",
                border: "var(--border-brutal)",
                padding: "0.25rem 0.75rem",
                backgroundColor: "var(--color-cream)",
                color: "var(--color-ink)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
