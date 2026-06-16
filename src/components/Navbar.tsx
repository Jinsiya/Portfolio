/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (!section) return;
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-1/2 -translate-x-1/2 z-[40] mt-8 transition-all duration-500 ${isScrolled ? "scale-95 opacity-90" : "scale-100 opacity-100"}`}>
      <div className="glass px-10 py-5 rounded-[2.5rem] flex items-center gap-10 border border-[#9FCB98]/30 bg-white/40 soft-glow">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`relative text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:scale-105 ${
              activeSection === item.id ? "text-[#346739]" : "text-black hover:text-[#346739]"
            } hover-trigger`}
          >
            {item.label}
            {activeSection === item.id && (
              <motion.div
                layoutId="nav-active"
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#346739] rounded-full shadow-[0_2px_10px_rgba(52,103,57,0.5)]"
              />
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}
