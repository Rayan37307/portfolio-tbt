import { IconSpark, IconCart, IconBook, IconBolt, IconArrowUpRight } from "./icons";

const building = [
  {
    icon: IconSpark,
    title: "AI automation systems",
    desc: "Agentic pipelines for lead generation and business workflow automation.",
  },
  {
    icon: IconCart,
    title: "Ecommerce infrastructure",
    desc: "Custom storefront plus admin dashboard for a growing BD brand.",
  },
  {
    icon: IconBook,
    title: "LMS platforms",
    desc: "Learning management with subscription billing and student dashboards.",
  },
  {
    icon: IconBolt,
    title: "SaaS applications",
    desc: "Multi-tenant product with role-based access and API integrations.",
  },
];

const CurrentlyBuilding = () => (
  <section id="building" className="section-tight">
    <div className="shell">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">In progress</p>
          <h2 className="h-section mt-4">Currently building</h2>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-[12px] text-[var(--muted)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          </span>
          Active this quarter
        </span>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {building.map(({ icon: Icon, title, desc }) => (
          <article key={title} className="panel panel-hover group p-6">
            <Icon size={20} className="text-[var(--dim)] transition-colors group-hover:text-[var(--accent)]" />
            <h3 className="mt-6 text-[15px] font-medium tracking-tight text-white">{title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">{desc}</p>
            <div className="mt-5 flex items-center gap-1.5 text-[12px] text-[var(--dim)]">
              In progress
              <IconArrowUpRight size={12} />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default CurrentlyBuilding;
