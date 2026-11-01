// Projects section — pink accent.
// Placeholder project cards per R-23 and R-38.
// No fabricated case studies, no generic stats.

type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  href?: string;
  sourceHref?: string;
};

// Replace these with your real projects. Keep it honest (R-38).
const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "[Project Name]",
    description: "[What it does, in one plain sentence. No jargon.]",
    stack: ["[Tech]", "[Tech]"],
    href: undefined, // Set to real URL when live (R-26)
    sourceHref: undefined,
  },
  {
    id: "project-2",
    title: "[Project Name]",
    description: "[What it does, in one plain sentence. No jargon.]",
    stack: ["[Tech]", "[Tech]"],
    href: undefined,
    sourceHref: undefined,
  },
  {
    id: "project-3",
    title: "[Project Name]",
    description: "[What it does, in one plain sentence. No jargon.]",
    stack: ["[Tech]", "[Tech]"],
    href: undefined,
    sourceHref: undefined,
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="card-brutal"
      aria-labelledby={`${project.id}-title`}
      style={{ padding: "1.5rem", backgroundColor: "var(--color-cream)" }}
    >
      <h3 id={`${project.id}-title`} style={{ marginBottom: "0.75rem" }}>
        {project.title}
      </h3>
      <p style={{ fontSize: "0.9rem", marginBottom: "1.25rem", lineHeight: 1.7 }}>
        {project.description}
      </p>

      {/* Stack tags */}
      <div
        style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}
        aria-label="Technologies used"
      >
        {project.stack.map((tech) => (
          <span
            key={tech}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "0.75rem",
              border: "2px solid var(--color-ink)",
              padding: "0.15rem 0.5rem",
              backgroundColor: "var(--color-pink)",
              color: "var(--color-ink)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links — only rendered when real URLs exist (R-26, R-38) */}
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        {project.href ? (
          <a
            href={project.href}
            className="btn-brutal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live demo`}
            style={{ fontSize: "0.875rem", padding: "0.5rem 1rem" }}
          >
            Live
          </a>
        ) : (
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "0.875rem",
              color: "var(--color-ink)",
              opacity: 0.5,
            }}
            aria-label="No live demo available yet"
          >
            Coming soon
          </span>
        )}
        {project.sourceHref && (
          <a
            href={project.sourceHref}
            className="btn-brutal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${project.title}`}
            style={{ fontSize: "0.875rem", padding: "0.5rem 1rem" }}
          >
            Source
          </a>
        )}
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section"
      style={{ backgroundColor: "var(--color-pink)", borderBottom: "var(--border-brutal-thick)" }}
      aria-labelledby="projects-heading"
    >
      <div className="section__inner">
        <h2 id="projects-heading" style={{ marginBottom: "3rem" }}>
          Projects
        </h2>

        {/* Grid: 3 columns on wide, 1 on mobile — layout serves content, not template (R-05) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))",
            gap: "1.5rem",
          }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
