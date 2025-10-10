import { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault(); // prevent instant jump
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // smooth scroll
      setIsOpen(false); // close menu after click
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white px-6 py-4 bg-transparent flex justify-between items-center">
      {/* Logo */}
      <div className="font-bold text-3xl">
        <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="hover:text-[#ff6600] transition">
          Tasin<span className="text-[#ff6600]">.</span>
        </a>
      </div>

      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-500 rounded-full text-sm bg-[#111]/60 backdrop-blur-lg hover:bg-white/10 transition"
      >
        <HiDotsHorizontal className="text-lg" />
        Menu
      </button>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-8 text-3xl"
            >
              ✕
            </button>

            {/* Links */}
            <ul className="w-full flex flex-col gap-10 text-[4rem] font-bold text-center relative">
              {links.map((link, i) => (
                <motion.li
                  key={i}
                  className="Zcursor-pointer leading-none group flex flex-col items-center"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                  {/* HR line below each link */}
                  <hr className="w-full border-t-20 border-gray-500 mt-4" />
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
