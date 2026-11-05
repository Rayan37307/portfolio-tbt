import { useState, useEffect } from "react";
import { IconMenu, IconClose, IconArrowUpRight } from "./icons";

const links = [
  { href: "#work", label: "Work", id: "work" },
  { href: "#services", label: "Services", id: "services" },
  { href: "#process", label: "Process", id: "process" },
  { href: "#about", label: "About", id: "about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const go = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id) || document.querySelector(href);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    setTimeout(() => window.scrollTo({ top, behavior: "smooth" }), isOpen ? 120 : 0);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--line)] bg-[#060607]/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-16 items-center justify-between">
          <a
            href="#home"
            onClick={(e) => go(e, "#home")}
            className="group flex items-center gap-2.5 text-[15px] font-medium tracking-tight text-white"
          >
            <span className="grid h-7 w-7 place-items-center rounded-md border border-[var(--line-strong)] text-[11px] font-semibold text-white transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
              TT
            </span>
            <span className="hidden sm:inline">Tasin Bin Tareq</span>
            <span className="sm:hidden">Tasin</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => go(e, l.href)}
                className="rounded-full px-3.5 py-2 text-[13px] text-[var(--muted)] transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" onClick={(e) => go(e, "#contact")} className="btn btn-primary hidden sm:inline-flex">
              Start a project
              <IconArrowUpRight size={16} />
            </a>
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line-strong)] text-white transition-colors hover:border-white/30 md:hidden"
            >
              <IconMenu size={18} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-[#060607] transition-all duration-300 md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="shell flex h-16 items-center justify-between">
          <span className="text-[15px] font-medium text-white">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line-strong)] text-white"
          >
            <IconClose size={18} />
          </button>
        </div>
        <div className="shell mt-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className="flex items-center justify-between border-b border-[var(--line)] py-5 text-2xl font-medium tracking-tight text-white"
            >
              {l.label}
              <IconArrowUpRight size={18} className="text-[var(--dim)]" />
            </a>
          ))}
          <a href="#contact" onClick={(e) => go(e, "#contact")} className="btn btn-primary mt-8 w-full">
            Start a project
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
