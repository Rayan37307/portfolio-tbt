import { useCallback, useRef, useState } from "react";
import { storeProjects, webProjects, mobileProjects } from "../data/projects";
import ProjectModal from "./ProjectModal";
import { IconArrowUpRight } from "./icons";

const tabs = [
  { id: "Stores", label: "Client stores", items: storeProjects },
  { id: "Web", label: "Products", items: webProjects },
  { id: "Mobile", label: "Mobile", items: mobileProjects },
];

const ProjectCard = ({ project, onOpen }) => (
  <button
    type="button"
    onClick={onOpen}
    aria-label={`Open case study: ${project.title}`}
    className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] text-left transition-all duration-300 hover:border-[var(--line-strong)] hover:bg-[var(--surface-2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
  >
    <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--line)] bg-[#060607]">
      {project.image ? (
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(200,255,77,0.12),transparent_60%)]">
          <span className="mono text-[11px] uppercase tracking-[0.18em] text-[var(--dim)]">
            {project.stack[0]}
          </span>
        </div>
      )}
      <span className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full border border-white/15 bg-black/40 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
        <IconArrowUpRight size={14} />
      </span>
    </div>

    <div className="flex flex-1 flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[15px] font-medium tracking-tight text-white">{project.title}</h3>
        <span className="mono mt-0.5 text-[11px] text-[var(--dim)]">{project.num}</span>
      </div>
      <p className="mt-1 text-[13px] leading-snug text-[var(--muted)]">{project.tagline}</p>

      <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-4">
        {project.stack.slice(0, 3).map((s) => (
          <span key={s} className="tag">
            {s}
          </span>
        ))}
        {project.stack.length > 3 && (
          <span className="text-[11px] text-[var(--dim)]">+{project.stack.length - 3}</span>
        )}
      </div>
    </div>
  </button>
);

const Projects = () => {
  const [active, setActive] = useState("Stores");
  const [selected, setSelected] = useState(null);
  const triggerRef = useRef(null);

  const current = tabs.find((t) => t.id === active);

  const open = (project, kind, e) => {
    triggerRef.current = e?.currentTarget ?? null;
    setSelected({ project, kind });
  };

  const close = useCallback(() => {
    const trigger = triggerRef.current;
    setSelected(null);
    // return focus to the card that opened the dialog
    requestAnimationFrame(() => {
      if (trigger && document.body.contains(trigger)) trigger.focus();
    });
  }, []);

  return (
    <section id="work" className="section">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="h-section mt-4 max-w-[26ch]">
              Live products, shipped for real businesses
            </h2>
          </div>

          <div className="flex flex-wrap gap-1 rounded-full border border-[var(--line)] bg-[var(--surface)] p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActive(tab.id);
                  setSelected(null);
                }}
                aria-pressed={active === tab.id}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                  active === tab.id
                    ? "bg-[var(--accent)] text-[#060607]"
                    : "text-[var(--muted)] hover:text-white"
                }`}
              >
                {tab.label}
                <span className="ml-1.5 text-[11px] opacity-60">{tab.items.length}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {current.items.map((project) => (
            <ProjectCard
              key={`${active}-${project.num}`}
              project={project}
              onOpen={(e) => open(project, active, e)}
            />
          ))}
        </div>

        <p className="mt-8 text-[13px] text-[var(--dim)]">
          Click any project for the full case study. More builds on{" "}
          <a
            href="https://github.com/Rayan37307"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-[var(--line-strong)] underline-offset-4 transition-colors hover:decoration-[var(--accent)]"
          >
            GitHub
          </a>
          .
        </p>
      </div>

      <ProjectModal
        project={selected?.project}
        kind={selected?.kind}
        onClose={close}
      />
    </section>
  );
};

export default Projects;
