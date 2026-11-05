import { IconTrendDown, IconGear, IconRocket, IconArrowUpRight } from "./icons";

const auditPoints = [
  {
    icon: IconTrendDown,
    label: "Conversion leaks",
    desc: "Where visitors drop off before they buy or enquire.",
  },
  {
    icon: IconGear,
    label: "Automation opportunities",
    desc: "The manual work that can be systemised and scaled.",
  },
  {
    icon: IconRocket,
    label: "Performance issues",
    desc: "Bottlenecks in speed, UX and technical architecture.",
  },
];

const FreeAudit = () => (
  <section id="audit" className="section-tight">
    <div className="shell">
      <div className="relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)]">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 accent-glow opacity-70" />

        <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Free audit</p>
            <h2 className="h-section mt-4 max-w-[24ch]">
              Need a site, LMS or automation system? Start with a free audit.
            </h2>
            <p className="lede mt-5">
              I'll look at what you have running now and tell you exactly what's holding it back —
              no charge, no pitch deck.
            </p>

            <a
              href="mailto:tasindevx@gmail.com?subject=Free%20audit%20request&body=Hi%20Tasin%2C%20I'd%20like%20a%20free%20audit%20for%20my%20business."
              className="btn btn-primary mt-8"
            >
              Request the audit
              <IconArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid gap-3">
            {auditPoints.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex gap-4 rounded-xl border border-[var(--line)] bg-[#060607] p-4"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[var(--line)] text-[var(--accent)]">
                  <Icon size={17} />
                </div>
                <div>
                  <div className="text-[13px] font-medium text-white">{label}</div>
                  <div className="mt-1 text-[12px] leading-relaxed text-[var(--muted)]">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FreeAudit;
