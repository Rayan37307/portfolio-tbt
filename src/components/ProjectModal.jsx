import { useEffect, useRef } from "react";
import {
  IconArrowUpRight, IconClose, IconCode, IconPhone, IconCart, IconLayers,
} from "./icons";

const Section = ({ label, children }) => (
  <div className="border-t border-[var(--line)] py-5 first:border-t-0 first:pt-0">
    <h4 className="meta">{label}</h4>
    <div className="mt-2 text-[14px] leading-relaxed text-[var(--muted)]">{children}</div>
  </div>
);

const LinkRow = ({ href, label, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between gap-4 rounded-xl border border-[var(--line)] bg-[#060607] px-4 py-3 transition-colors hover:border-[var(--line-strong)]"
  >
    <span className="flex items-center gap-3">
      <Icon size={16} className="text-[var(--accent)]" />
      <span className="text-[13px] font-medium text-white">{label}</span>
    </span>
    <IconArrowUpRight size={15} className="text-[var(--dim)]" />
  </a>
);

const ProjectModal = ({ project, kind, onClose }) => {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const isOpen = Boolean(project);

  useEffect(() => {
    if (!isOpen) return undefined;


    const { body, documentElement } = document;
    const scrollBarWidth = window.innerWidth - documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;

    body.style.overflow = "hidden";
    if (scrollBarWidth > 0) body.style.paddingRight = `${scrollBarWidth}px`;

    // focus the panel, then trap Tab inside it
    const panel = panelRef.current;
    const focusables = () =>
      Array.from(
        panel.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null);

    const t = setTimeout(() => closeRef.current?.focus(), 20);

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
    };
  }, [isOpen]);

  if (!project) return null;

  const KindIcon = kind === "Mobile" ? IconPhone : kind === "Stores" ? IconCart : IconLayers;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6"
      role="presentation"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
        className="relative flex h-[100dvh] max-h-[100dvh] w-full flex-col overflow-hidden border border-[var(--line)] bg-[var(--surface)] sm:h-auto sm:max-h-[88vh] sm:max-w-3xl sm:rounded-2xl"
      >
        {/* header */}
        <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] px-5 py-4 sm:px-7">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-[var(--dim)]">
              <KindIcon size={13} />
              <span>{kind === "Stores" ? "Client store" : kind === "Mobile" ? "Mobile app" : "Product"}</span>
              <span className="mono">{project.num}</span>
            </div>
            <h3
              id="project-modal-title"
              className="mt-1.5 truncate text-xl font-medium tracking-tight text-white sm:text-2xl"
            >
              {project.title}
            </h3>
            <p className="mt-0.5 text-[13px] text-[var(--muted)]">{project.tagline}</p>
          </div>

          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close case study"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--line-strong)] text-white transition-colors hover:border-white/35 hover:bg-white/5"
          >
            <IconClose size={17} />
          </button>
        </div>

        {/* scroll body */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-7">
          {project.image && (
            <div className="mb-6 overflow-hidden rounded-xl border border-[var(--line)]">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          )}

          <Section label="Overview">{project.overview}</Section>
          <Section label="Challenge">{project.challenge}</Section>
          <Section label="Approach">{project.solution}</Section>
          <Section label="Result">{project.result}</Section>

          <div className="border-t border-[var(--line)] py-5">
            <h4 className="meta">Tech stack</h4>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--line)] pt-5">
            <h4 className="meta">Links</h4>
            <div className="mt-3 grid gap-2">
              {project.live && (
                <LinkRow href={project.live} label="Visit live site" Icon={IconArrowUpRight} />
              )}
              {project.github && (
                <LinkRow href={project.github} label="View source on GitHub" Icon={IconCode} />
              )}
              {!project.live && !project.github && (
                <p className="text-[13px] text-[var(--dim)]">
                  Private project — no public link for this one.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--line)] px-5 py-3 text-[11px] text-[var(--dim)] sm:px-7">
          Press Esc to close
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
