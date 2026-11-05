import { IconDownload } from "./icons";

const About = () => (
  <section id="about" className="section">
    <div className="shell grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div>
        <p className="eyebrow">About</p>
        <h2 className="h-section mt-4 max-w-[22ch]">
          Tasin Bin Tareq — full-stack developer &amp; automation engineer
        </h2>

        <p className="lede mt-6 max-w-[56ch]">
          I build systems that help businesses scale. My work combines modern web development,
          business automation and product design, so the software earns its keep instead of adding
          another tab to someone's day.
        </p>

        <p className="mt-4 max-w-[56ch] text-[15px] leading-relaxed text-[var(--muted)]">
          From React Native apps and Next.js platforms to FastAPI backends and agentic AI
          workflows — production-grade, end to end, with a bias toward shipping and architecture
          that survives the next feature.
        </p>

        <div className="mt-8 grid max-w-lg grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)]">
          {[
            ["Based in", "Dhaka, Bangladesh"],
            ["Studio", "Webflick"],
            ["Focus", "Commerce · Automation"],
            ["Availability", "Open for projects"],
          ].map(([k, v]) => (
            <div key={k} className="bg-[#060607] px-4 py-3">
              <div className="meta">{k}</div>
              <div className="mt-1 text-[13px] text-[var(--ink)]">{v}</div>
            </div>
          ))}
        </div>

        <a href="/files/tasin.pdf" download className="btn btn-ghost mt-8">
          Download résumé
          <IconDownload size={16} />
        </a>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute -inset-6 rounded-3xl accent-glow opacity-60" />
        <div className="relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
          <img
            src="/images/about.png"
            alt="Tasin Bin Tareq"
            className="aspect-[4/5] w-full object-cover"
            onError={(e) => {
              e.target.src = "/images/about.jpeg";
            }}
          />
          <div className="flex items-center justify-between border-t border-[var(--line)] px-5 py-3">
            <span className="text-[12px] text-[var(--muted)]">Founder, Webflick</span>
            <span className="text-[11px] uppercase tracking-[0.14em] text-[var(--dim)]">Est. 2023</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
