"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileDown } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement | null;
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled
          ? "bg-paper/95 backdrop-blur-sm border-b-3 border-pencil shadow-hard-sm"
          : "bg-paper/80 md:bg-transparent backdrop-blur-xs md:backdrop-blur-none"
          }`}
        style={
          scrolled
            ? { borderBottomStyle: "dashed" }
            : undefined
        }
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 text-xl sm:text-2xl font-heading font-bold text-pencil no-underline hover:text-accent transition-colors"
          >
            <span
              className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border-2 border-pencil rough-circle bg-postit text-base sm:text-lg"
              style={{ transform: "rotate(-3deg)" }}
            >
              YK
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`text-lg font-body text-pencil bg-transparent border-none cursor-pointer transition-all duration-100 hover:text-accent ${activeSection === link.href
                  ? "wavy-underline wavy-underline-accent"
                  : "wavy-underline"
                  }`}
              >
                {link.label}
              </button>
            ))}

            <a
              href="/Yogesh_Kumar_CV.pdf"
              download="Yogesh_Kumar_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border-2 border-pencil font-body text-base text-pencil bg-postit transition-all hover:bg-accent hover:text-white hover:border-accent hover:scale-105 active:scale-95"
              style={{
                borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
                boxShadow: "2px 2px 0px 0px #2d2d2d",
                transform: "rotate(-1deg)",
              }}
            >
              <FileDown size={16} strokeWidth={2.5} />
              CV
            </a>
          </div>

          {/* Mobile Actions: CV Download + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="/Yogesh_Kumar_CV.pdf"
              download="Yogesh_Kumar_CV.pdf"
              className="inline-flex items-center gap-1 px-2.5 py-1 border-2 border-pencil font-body text-sm text-pencil bg-postit active:scale-95 transition-transform"
              style={{
                borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
                boxShadow: "2px 2px 0px 0px #2d2d2d",
              }}
              aria-label="Download CV"
            >
              <FileDown size={14} strokeWidth={2.5} />
              CV
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white/80 border-2 border-pencil p-2 min-h-[42px] min-w-[42px] flex items-center justify-center cursor-pointer text-pencil active:scale-95 transition-transform shadow-[2px_2px_0px_0px_#2d2d2d]"
              style={{
                borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
              }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={22} strokeWidth={2.5} />
              ) : (
                <Menu size={22} strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-paper border-b-3 border-pencil shadow-hard ${isOpen ? "max-h-[400px] py-5 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
            }`}
          style={{ borderBottomStyle: "dashed" }}
        >
          <div className="flex flex-col items-center gap-3.5 px-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`text-xl font-body py-1 text-pencil bg-transparent border-none cursor-pointer transition-colors active:text-accent ${activeSection === link.href ? "wavy-underline wavy-underline-accent text-accent font-bold" : "wavy-underline"}`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="/Yogesh_Kumar_CV.pdf"
              download="Yogesh_Kumar_CV.pdf"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full max-w-xs mt-2 px-5 py-2.5 border-2 border-pencil font-body text-lg text-pencil bg-postit active:scale-95 transition-transform"
              style={{
                borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
                boxShadow: "3px 3px 0px 0px #2d2d2d",
              }}
            >
              <FileDown size={18} strokeWidth={2.5} />
              Download CV (PDF)
            </a>
          </div>
        </div>
      </nav>

      {/* Backdrop overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-pencil/20 backdrop-blur-xs md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
