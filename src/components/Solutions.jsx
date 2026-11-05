import {
  IconCart, IconBook, IconBolt, IconSpark, IconChart, IconWrench, IconUsers, IconPortal,
} from "./icons";

const solutions = [
  {
    icon: IconCart,
    title: "Ecommerce platforms",
    desc: "Storefronts, payment rails, inventory and multi-vendor marketplaces.",
  },
  {
    icon: IconBook,
    title: "Learning platforms",
    desc: "Course delivery, lesson flows, progress tracking and subscription billing.",
  },
  {
    icon: IconBolt,
    title: "SaaS applications",
    desc: "Subscriptions, role-based access, API integrations, cloud architecture.",
  },
  {
    icon: IconSpark,
    title: "AI automation",
    desc: "Agentic workflows, data pipelines and lead generation that runs itself.",
  },
  {
    icon: IconChart,
    title: "Admin dashboards",
    desc: "Reporting, management panels and real-time operational data.",
  },
  {
    icon: IconWrench,
    title: "Internal tools",
    desc: "Workflow automation and process digitisation for the team behind the product.",
  },
  {
    icon: IconUsers,
    title: "CRM systems",
    desc: "Lead management, sales pipelines and automated follow-up.",
  },
  {
    icon: IconPortal,
    title: "Client portals",
    desc: "Onboarding, project tracking, files, invoicing and communication in one place.",
  },
];

const Solutions = () => (
  <section id="services" className="section">
    <div className="shell">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Services</p>
          <h2 className="h-section mt-4">What I build</h2>
        </div>
        <p className="lede lg:max-w-sm">
          End-to-end product work — architecture, build, deploy and the handover docs your team
          needs to keep it running.
        </p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="group bg-[#060607] p-6 transition-colors duration-300 hover:bg-[var(--surface)]"
          >
            <Icon
              size={20}
              className="text-[var(--dim)] transition-colors duration-300 group-hover:text-[var(--accent)]"
            />
            <h3 className="mt-5 text-[15px] font-medium tracking-tight text-white">{title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">{desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Solutions;
