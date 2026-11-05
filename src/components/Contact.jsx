import { useState } from "react";
import Footer from "./Footer";
import { IconMail, IconCopy, IconCheck, IconArrowUpRight } from "./icons";

const EMAIL = "tasindevx@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="bg-[#060607]">
      <section id="contact" className="section">
        <div className="shell">
          <p className="eyebrow">Contact</p>

          <h2 className="h-display mt-6 max-w-[20ch]">
            Let's build the thing your business keeps{" "}
            <span className="serif-accent text-[var(--accent)]">working around</span>.
          </h2>

          <p className="lede mt-6">
            Tell me what's slow, manual or missing. I'll reply with an honest read on scope, cost
            and whether I'm the right fit.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--line-strong)]"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--line)] text-[var(--accent)]">
                  <IconMail size={18} />
                </div>
                <div>
                  <div className="meta">Email</div>
                  <div className="mt-1 text-[15px] font-medium text-white">{EMAIL}</div>
                </div>
              </div>
              <IconArrowUpRight
                size={18}
                className="text-[var(--dim)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <button
              onClick={copy}
              className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 text-left transition-colors hover:border-[var(--line-strong)]"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--line)] text-[var(--muted)]">
                  {copied ? <IconCheck size={18} className="text-[var(--accent)]" /> : <IconCopy size={18} />}
                </div>
                <div>
                  <div className="meta">Quick action</div>
                  <div className="mt-1 text-[15px] font-medium text-white">
                    {copied ? "Copied to clipboard" : "Copy email address"}
                  </div>
                </div>
              </div>
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--line)] pt-8 text-[13px] text-[var(--muted)]">
            <span>Based in Dhaka, Bangladesh</span>
            <span className="hidden h-1 w-1 rounded-full bg-[var(--line-strong)] sm:block" />
            <span>Working with clients worldwide</span>
            <span className="hidden h-1 w-1 rounded-full bg-[var(--line-strong)] sm:block" />
            <span>Replies within 24 hours</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
