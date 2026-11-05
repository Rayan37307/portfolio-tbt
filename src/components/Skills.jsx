import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma, FaWordpress } from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiMysql, SiMongodb, SiGreensock,
  SiPython, SiShopify, SiNextdotjs, SiPostgresql, SiN8N, SiExpo, SiTypescript,
  SiAstro, SiStripe, SiVercel, SiPhp,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const row1 = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Python", icon: SiPython },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "GSAP", icon: SiGreensock },
];

const row2 = [
  { name: "Shopify", icon: SiShopify },
  { name: "Astro", icon: SiAstro },
  { name: "Stripe", icon: SiStripe },
  { name: "PHP", icon: SiPhp },
  { name: "React Native", icon: TbBrandReactNative },
  { name: "Expo", icon: SiExpo },
  { name: "n8n", icon: SiN8N },
  { name: "MySQL", icon: SiMysql },
  { name: "Vercel", icon: SiVercel },
  { name: "WordPress", icon: FaWordpress },
  { name: "Figma", icon: FaFigma },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
];

const Badge = ({ name, icon: Icon }) => (
  <div className="mx-1.5 inline-flex shrink-0 items-center gap-2.5 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-2.5">
    <Icon className="text-[15px] text-[var(--muted)]" />
    <span className="text-[13px] font-medium text-[var(--ink)] whitespace-nowrap">{name}</span>
  </div>
);

const Skills = () => (
  <section id="stack" className="section-tight overflow-hidden">
    <div className="shell">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Stack</p>
          <h2 className="h-section mt-4">Tools I ship with</h2>
        </div>
        <p className="max-w-sm text-[14px] leading-relaxed text-[var(--muted)]">
          Chosen per project, not per trend. Everything here is in production on something I built.
        </p>
      </div>
    </div>

    <div className="marquee-mask mt-12 space-y-3 overflow-hidden">
      <div className="marquee-track marquee-left">
        {[...row1, ...row1].map((t, i) => (
          <Badge key={`a${i}`} {...t} />
        ))}
      </div>
      <div className="marquee-track marquee-right">
        {[...row2, ...row2].map((t, i) => (
          <Badge key={`b${i}`} {...t} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
