"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Github, Linkedin, Mail } from "lucide-react";
import useScrollSpy from "@/hooks/useScrollSpy";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const sectionIds = ["about", "experience", "projects", "blog", "contact"];
    const activeId = useScrollSpy(sectionIds, 200);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-slate-950/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/10'
                : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center text-white">
                <Link href="/" className="flex items-center gap-2 group cursor-pointer select-none">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_12px_rgba(99,102,241,0.8)] transition-all"></div>
                    <h1 className="text-xl font-bold tracking-tight text-white transition-all">
                        YOGESH <span className="text-indigo-500 uppercase tracking-widest text-sm font-black ml-1">Kumar</span>
                    </h1>
                </Link>

                {/* Hamburger for mobile */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white hover:text-indigo-400 focus:outline-none transition-colors p-2 rounded-xl hover:bg-white/5"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>

                {/* Desktop Menu links */}
                <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                    {sectionIds.map((id) => (
                        <Link
                            key={id}
                            href={`#${id}`}
                            className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 group overflow-hidden rounded-xl ${activeId === id
                                ? "text-indigo-400 bg-indigo-500/10"
                                : "text-slate-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {id.toUpperCase()}
                        </Link>
                    ))}
                    <a
                        href="/Yogesh_Kumar_CV.pdf"
                        download
                        className="ml-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/20"
                    >
                        Resume
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm md:hidden"
                            onClick={() => setMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[280px] bg-slate-900 border-l border-white/5 md:hidden shadow-2xl"
                        >
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-white/5">
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Navigation</span>
                                    <button
                                        onClick={() => setMenuOpen(false)}
                                        className="p-2 hover:bg-white/5 rounded-xl transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X className="w-5 h-5 text-slate-400" />
                                    </button>
                                </div>

                                {/* Links */}
                                <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                                    {sectionIds.map((id, index) => (
                                        <motion.div
                                            key={id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Link
                                                href={`#${id}`}
                                                onClick={() => setMenuOpen(false)}
                                                className={`block py-4 px-5 text-lg font-bold transition-all duration-300 rounded-2xl ${activeId === id
                                                    ? "text-indigo-400 bg-indigo-500/10"
                                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                                                    }`}
                                            >
                                                {id.charAt(0).toUpperCase() + id.slice(1)}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="p-6 border-t border-white/5 space-y-4">
                                    <a
                                        href="/Yogesh_Kumar_CV.pdf"
                                        download
                                        className="block w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-center font-bold rounded-2xl transition-all duration-300"
                                    >
                                        Download Resume
                                    </a>
                                    <div className="flex justify-center gap-4">
                                        {[
                                            { icon: <Github className="w-5 h-5" />, href: "https://github.com/Rexxy31" },
                                            { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/yogeshkumar01" },
                                            { icon: <Mail className="w-5 h-5" />, href: "mailto:yogeshkumarn.02@gmail.com" }
                                        ].map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white rounded-xl transition-all duration-300"
                                            >
                                                {link.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
