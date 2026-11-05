import { useEffect, useRef } from "react";
import gsap from "gsap";
import { IconArrowUpRight, IconArrowRight } from "./icons";

const marquee = [
  "Ecommerce platforms",
  "AI automation",
  "LMS products",
  "SaaS applications",
  "Admin dashboards",
  "Shopify builds",
  "Internal tools",
  "Client portals",
];

const Hero = () => {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-rise", {
        y: 26,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.1,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="home" className="relative overflow-hidden pt-32 pb-0 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-[0.55]" />
      <div className="pointer-events-none absolute left-1/2 top-[-8rem] h-[26rem] w-[46rem] -translate-x-1/2 accent-glow" />

      <div className="shell relative">
        <div className="hero-rise flex items-center gap-3">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          </span>
          <span className="meta">Open for new work — Dhaka, Bangladesh</span>
        </div>

        <h1 className="hero-rise mt-8 max-w-[19ch] h-display">
          Software that runs the{" "}
          <span className="serif-accent text-[var(--accent)]">business</span>, not just the website.
        </h1>

        <p className="hero-rise lede mt-7 max-w-[54ch]">
          I'm Tasin — a full-stack developer and automation engineer. I build ecommerce platforms,
          internal tools and AI workflows for brands that have outgrown off-the-shelf software.
        </p>

        <div className="hero-rise mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="btn btn-primary">
            Start a project
            <IconArrowUpRight size={16} />
          </a>
          <a href="#work" className="btn btn-ghost">
            See selected work
            <IconArrowRight size={16} />
          </a>
        </div>

        <dl className="hero-rise mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:mt-20 lg:grid-cols-4">
          {[
            ["Years shipping", "3+"],
            ["Production projects", "15+"],
            ["Repositories", "70+"],
            ["Live storefronts", "5"],
          ].map(([label, value]) => (
            <div key={label} className="bg-[#060607] px-5 py-6">
              <dt className="meta">{label}</dt>
              <dd className="mt-2 text-3xl font-medium tracking-tight text-white">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* capability marquee */}
      <div className="relative mt-20 border-y border-[var(--line)] py-4">
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track marquee-left">
            {[...marquee, ...marquee].map((item, i) => (
              <span
                key={i}
                className="mx-6 flex items-center gap-6 text-[13px] text-[var(--dim)] whitespace-nowrap"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-[var(--line-strong)]" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
