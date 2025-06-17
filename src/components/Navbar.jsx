"use client";

import Link from "next/link";
import { useState } from "react";
import useScrollSpy from "@/hooks/useScrollSpy";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const sectionIds = ["about", "projects", "blog", "contact"];
    const activeId = useScrollSpy(sectionIds, 200);

    return (
        <nav className="fixed top-0 w-full bg-[#0a0a0a] shadow-lg z-50 font-mono">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-green-400">
                <h1 className="text-xl font-bold text-green-400 drop-shadow-neon cursor-default">
                    Yogesh Kumar
                </h1>

                {/* Hamburger for mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-green-400 hover:text-green-500 focus:outline-none text-2xl select-none"
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>
                </div>

                {/* Menu links */}
                <div
                    className={`md:flex space-x-8 ${
                        menuOpen ? "block mt-4" : "hidden md:block"
                    }`}
                >
                    {sectionIds.map((id) => (
                        <Link
                            key={id}
                            href={`#${id}`}
                            onClick={() => setMenuOpen(false)}
                            className={`block py-2 px-3 rounded transition-colors duration-300 ${
                                activeId === id
                                    ? "text-green-400 font-semibold drop-shadow-neon"
                                    : "text-green-500 hover:text-green-400 hover:drop-shadow-neon"
                            }`}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
