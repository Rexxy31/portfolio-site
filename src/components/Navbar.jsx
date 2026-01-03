"use client";

import Link from "next/link";
import { useState } from "react";
import useScrollSpy from "@/hooks/useScrollSpy";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const sectionIds = ["about", "projects", "blog", "contact"];
    const activeId = useScrollSpy(sectionIds, 200);

    return (
        <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-white/5 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-2 group cursor-pointer select-none">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
                    <h1 className="text-xl font-bold tracking-tight text-white transition-all">
                        YOGESH <span className="text-indigo-500 uppercase tracking-widest text-sm font-black ml-1">Kumar</span>
                    </h1>
                </div>

                {/* Hamburger for mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white hover:text-indigo-500 focus:outline-none transition-colors p-2"
                        aria-label="Toggle menu"
                    >
                        <div className="space-y-1.5">
                            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Desktop Menu links */}
                <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
                    {sectionIds.map((id) => (
                        <Link
                            key={id}
                            href={`#${id}`}
                            className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 group overflow-hidden ${activeId === id ? "text-indigo-400" : "text-slate-400 hover:text-white"
                                }`}
                        >
                            <span className="relative z-10">{id.toUpperCase()}</span>
                            {/* Hover effect underline */}
                            <span className={`absolute bottom-0 left-4 right-4 h-[2px] bg-indigo-500 transition-all duration-300 ${activeId === id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                }`}></span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/5 transition-all duration-300 origin-top ${menuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
                }`}>
                <div className="px-6 py-8 space-y-4">
                    {sectionIds.map((id) => (
                        <Link
                            key={id}
                            href={`#${id}`}
                            onClick={() => setMenuOpen(false)}
                            className={`block py-4 px-6 text-lg font-bold transition-all duration-300 border-l-2 rounded-r-lg ${activeId === id
                                    ? "border-indigo-500 text-indigo-400 bg-indigo-500/5"
                                    : "border-white/5 text-slate-500 hover:border-indigo-500/50 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {id.toUpperCase()}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
