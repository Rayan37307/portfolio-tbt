import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-gray-400 border-t border-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left - Logo + Copyright */}
        <div className="text-center md:text-left">
          <h1 className="text-white font-bold text-2xl tracking-wide">
            CKTARUN<span className="text-[#ff6600]">.</span>
          </h1>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} CKTARUN. All rights reserved.
          </p>
        </div>

        {/* Center - Links */}
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-[#ff6600] transition">
            About
          </a>
          <a href="#projects" className="hover:text-[#ff6600] transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-[#ff6600] transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-[#ff6600] transition">
            Contact
          </a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/cktarun"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-700 hover:border-[#ff6600] hover:text-[#ff6600] transition"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/cktarun/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-700 hover:border-[#ff6600] hover:text-[#ff6600] transition"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://x.com/ck_tarun06"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-700 hover:border-[#ff6600] hover:text-[#ff6600] transition"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="mailto:tarunchinnapagak@gmail.com"
            className="p-3 rounded-full border border-gray-700 hover:border-[#ff6600] hover:text-[#ff6600] transition"
          >
            <FaEnvelope size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
