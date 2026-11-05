import { IconSearch, IconMap, IconGear, IconCheck, IconRocket } from "./icons";

const steps = [
  {
    num: "01",
    icon: IconSearch,
    title: "Discovery",
    desc: "Business goals, users, constraints and success metrics — understood before a line of code.",
  },
  {
    num: "02",
    icon: IconMap,
    title: "Strategy",
    desc: "Architecture, stack, data models and a roadmap with clear milestones.",
  },
  {
    num: "03",
    icon: IconGear,
    title: "Build",
    desc: "Production-grade code, modular architecture and progress you can see weekly.",
  },
  {
    num: "04",
    icon: IconCheck,
    title: "Test",
    desc: "Devices, edge cases and load conditions checked before anyone calls it done.",
  },
  {
    num: "05",
    icon: IconRocket,
    title: "Launch",
    desc: "CI/CD deploys, post-launch monitoring and iteration on real usage.",
  },
];

const Process = () => (
  <section id="process" className="section">
    <div className="shell">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Process</p>
          <h2 className="h-section mt-4">How the work happens</h2>
        </div>
        <p className="lede lg:max-w-sm">
          Five stages, one predictable rhythm. You always know what is being built and what ships next.
        </p>
      </div>

      <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-5">
        {steps.map(({ num, icon: Icon, title, desc }) => (
          <li key={num} className="group bg-[#060607] p-6 transition-colors duration-300 hover:bg-[var(--surface)]">
            <div className="flex items-center justify-between">
              <span className="meta mono">{num}</span>
              <Icon size={18} className="text-[var(--dim)] transition-colors group-hover:text-[var(--accent)]" />
            </div>
            <h3 className="mt-8 text-[15px] font-medium tracking-tight text-white">{title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">{desc}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
