"use client";

import Link from "next/link";
import { useState } from "react";
import useScrollSpy from "@/hooks/useScrollSpy";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const sectionIds = ["about", "certifications", "projects", "blog", "contact"];
    const activeId = useScrollSpy(sectionIds, 200);

    return (
        <nav className="fixed top-0 w-full bg-black border-b border-white/10 z-50 font-mono">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center text-white">
                <h1 className="text-lg sm:text-xl font-bold tracking-widest text-white select-none cursor-default">
                    Yogesh Kumar
                </h1>

                {/* Hamburger for mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white hover:text-red-500 focus:outline-none text-2xl select-none p-2"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>

                {/* Desktop Menu links */}
                <div className="hidden md:flex space-x-8">
                    {sectionIds.map((id) => (
                        <Link
                            key={id}
                            href={`#${id}`}
                            className={`py-2 px-3 font-medium transition-colors duration-300 border-b-2 ${
                                activeId === id
                                    ? "border-red-500 text-white"
                                    : "border-transparent text-white/80 hover:text-red-500 hover:border-red-500"
                            }`}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-black border-t border-white/10">
                    <div className="px-4 py-4 space-y-2">
                        {sectionIds.map((id) => (
                            <Link
                                key={id}
                                href={`#${id}`}
                                onClick={() => setMenuOpen(false)}
                                className={`block py-3 px-4 font-medium transition-colors duration-300 border-l-4 rounded-r-lg ${
                                    activeId === id
                                        ? "border-red-500 text-white bg-white/5"
                                        : "border-transparent text-white/80 hover:text-red-500 hover:border-red-500 hover:bg-white/5"
                                }`}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
