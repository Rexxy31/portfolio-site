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

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled
        ? "bg-paper/95 backdrop-blur-sm border-b-3 border-pencil shadow-hard-sm"
        : "bg-transparent"
        }`}
      style={
        scrolled
          ? { borderBottomStyle: "dashed" }
          : undefined
      }
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 text-2xl font-heading font-bold text-pencil no-underline hover:text-accent transition-colors"
        >
          <span
            className="inline-flex items-center justify-center w-10 h-10 border-2 border-pencil rough-circle bg-postit"
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-transparent border-2 border-pencil p-2 cursor-pointer text-pencil"
          style={{
            borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
          }}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} strokeWidth={2.5} />
          ) : (
            <Menu size={24} strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-200 bg-paper border-b-3 border-pencil ${isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
          }`}
        style={{ borderBottomStyle: "dashed" }}
      >
        <div className="flex flex-col items-center gap-4 px-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-xl font-body text-pencil bg-transparent border-none cursor-pointer wavy-underline hover:text-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/Yogesh_Kumar_CV.pdf"
            download="Yogesh_Kumar_CV.pdf"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-pencil font-body text-lg text-pencil bg-postit"
            style={{
              borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
              boxShadow: "3px 3px 0px 0px #2d2d2d",
            }}
          >
            <FileDown size={18} strokeWidth={2.5} />
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
