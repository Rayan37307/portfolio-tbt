import { IconCart, IconBook, IconRocket, IconCheck } from "./icons";

const clients = [
  {
    icon: IconCart,
    title: "Ecommerce brands",
    copy: "Storefronts, catalogue systems and order operations that hold up on launch day.",
    items: ["Custom storefronts", "Admin dashboards", "Order automation", "Analytics"],
  },
  {
    icon: IconBook,
    title: "Course creators",
    copy: "Learning products with real progression, billing and student management built in.",
    items: ["LMS platforms", "Student dashboards", "Progress tracking", "Communities"],
  },
  {
    icon: IconRocket,
    title: "Startups",
    copy: "From validated idea to a product in front of paying users, without the rebuild later.",
    items: ["MVP development", "SaaS products", "Internal tools", "Automation"],
  },
];

const WhoIHelp = () => (
  <section id="who-i-help" className="section">
    <div className="shell">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Who I work with</p>
          <h2 className="h-section mt-4 max-w-[24ch]">
            Built for the businesses running on spreadsheets and DMs
          </h2>
        </div>
        <p className="lede lg:max-w-sm">
          Three kinds of clients, one pattern: the manual work has outgrown the team and
          software is the only way out.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {clients.map(({ icon: Icon, title, copy, items }) => (
          <article
            key={title}
            className="panel panel-hover group flex flex-col p-7"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--line)] bg-[#060607] text-[var(--muted)] transition-colors group-hover:border-[var(--accent)]/40 group-hover:text-[var(--accent)]">
              <Icon size={20} />
            </div>
            <h3 className="mt-6 text-lg font-medium tracking-tight text-white">{title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-[var(--muted)]">{copy}</p>

            <ul className="mt-6 space-y-2.5 border-t border-[var(--line)] pt-6">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[13px] text-[var(--muted)]">
                  <IconCheck size={14} className="text-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhoIHelp;
