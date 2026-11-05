import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { IconArrowUpRight } from "./icons";

const socials = [
  { href: "https://github.com/Rayan37307", label: "GitHub", Icon: FaGithub },
  { href: "https://www.linkedin.com/in/tasin-bin-tarek-417980386/", label: "LinkedIn", Icon: FaLinkedin },
  { href: "https://x.com/tasinbintareq", label: "X", Icon: FaXTwitter },
  { href: "mailto:tasindevx@gmail.com", label: "Email", Icon: FaEnvelope },
];

const nav = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => (
  <footer className="border-t border-[var(--line)] bg-[#060607]">
    <div className="shell py-12">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#home" className="inline-flex items-center gap-2.5 text-[15px] font-medium text-white">
            <span className="grid h-7 w-7 place-items-center rounded-md border border-[var(--line-strong)] text-[11px] font-semibold">
              TT
            </span>
            Tasin Bin Tareq
          </a>
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-[var(--muted)]">
            Full-stack developer and automation engineer. Founder of Webflick, Dhaka.
          </p>
          <a
            href="mailto:tasindevx@gmail.com"
            className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-white transition-colors hover:text-[var(--accent)]"
          >
            Start a project
            <IconArrowUpRight size={14} />
          </a>
        </div>

        <div>
          <div className="meta">Navigate</div>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-[13px] text-[var(--muted)] transition-colors hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="meta">Elsewhere</div>
          <ul className="mt-4 space-y-2.5">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-[13px] text-[var(--muted)] transition-colors hover:text-white"
                >
                  <Icon className="text-[13px] opacity-70 transition-opacity group-hover:opacity-100" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--line)] pt-6 text-[12px] text-[var(--dim)] sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} Tasin Bin Tareq. All rights reserved.</span>
        <span>Designed and built in-house.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
