const stats = [
  { value: "70+", label: "Repositories", sub: "Public and private" },
  { value: "3+", label: "Years shipping", sub: "Web and mobile" },
  { value: "15+", label: "Projects delivered", sub: "In production" },
  { value: "5", label: "Live storefronts", sub: "Bangladesh + global" },
];

const Stats = () => (
  <section id="stats" className="section-tight">
    <div className="shell">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#060607] px-6 py-8">
            <div className="text-4xl font-medium tracking-tight text-white">{s.value}</div>
            <div className="mt-3 text-[13px] font-medium text-[var(--ink)]">{s.label}</div>
            <div className="mt-1 text-[12px] text-[var(--dim)]">{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
