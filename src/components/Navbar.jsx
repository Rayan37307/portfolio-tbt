import { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#who-i-help", label: "Who I Help" },
    { href: "#solutions", label: "Services" },
    { href: "#projects", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white px-6 py-4 bg-transparent flex justify-between items-center">
      <div className="font-bold text-3xl">
        <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="hover:text-[#ff6600] transition">
          Tasin<span className="text-[#ff6600]">.</span>
        </a>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full text-sm bg-[#111]/70 backdrop-blur-lg hover:bg-white/10 transition"
      >
        <HiDotsHorizontal className="text-lg" />
        Menu
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-8 text-3xl hover:text-[#ff6600] transition"
            >
              ✕
            </button>

            <ul className="w-full flex flex-col gap-8 text-[3.5rem] font-bold text-center relative">
              {links.map((link, i) => (
                <motion.li
                  key={i}
                  className="leading-none group flex flex-col items-center"
                  initial={{ opacity: 0.4 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-[#ff6600] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                  <hr className="w-full border-t border-gray-800 mt-4" />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
