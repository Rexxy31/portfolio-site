"use client";

import { useState, useEffect } from "react";

// Mock useScrollSpy hook for demo
function useScrollSpy(sectionIds, offset = 200) {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        // Simulate scroll spy behavior for demo
        const interval = setInterval(() => {
            const sections = ["about", "projects", "blog", "contact"];
            const randomSection = sections[Math.floor(Math.random() * sections.length)];
            setActiveId(randomSection);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return activeId;
}

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const sectionIds = ["about", "projects", "blog", "contact"];
    const activeId = useScrollSpy(sectionIds, 200);

    // Simulate scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 font-mono transition-all duration-500 ${
            isScrolled
                ? 'bg-black/95 backdrop-blur-md shadow-2xl shadow-green-500/20 border-b border-green-500/30'
                : 'bg-gradient-to-b from-black/90 to-transparent'
        }`}>
            {/* Animated border */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"></div>

            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo with enhanced effects */}
                    <div className="relative group">
                        <h1 className="text-xl font-bold text-green-400 cursor-pointer select-none relative z-10 transition-all duration-300 hover:text-green-300">
                            <span className="relative">
                                Yogesh Kumar
                                <span className="absolute inset-0 text-green-400 blur-sm opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                                    Yogesh Kumar
                                </span>
                            </span>
                        </h1>
                        {/* Animated underline */}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
                    </div>

                    {/* Enhanced hamburger for mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="relative w-8 h-8 text-green-400 hover:text-green-300 focus:outline-none transition-all duration-300 group"
                            aria-label="Toggle menu"
                        >
                            <div className="absolute inset-0 flex flex-col justify-center items-center space-y-1">
                                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                                    menuOpen ? 'rotate-45 translate-y-2' : ''
                                }`}></span>
                                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                                    menuOpen ? 'opacity-0' : ''
                                }`}></span>
                                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                                    menuOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}></span>
                            </div>
                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-full bg-green-400/20 scale-0 group-hover:scale-150 transition-transform duration-300"></div>
                        </button>
                    </div>

                    {/* Enhanced desktop menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {sectionIds.map((id, index) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                className={`relative px-4 py-2 rounded-lg transition-all duration-300 group overflow-hidden ${
                                    activeId === id
                                        ? "text-black bg-green-400 font-semibold shadow-lg shadow-green-400/30"
                                        : "text-green-400 hover:text-green-300 hover:bg-green-400/10"
                                }`}
                            >
                                {/* Background glow effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-green-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                                    activeId === id ? 'opacity-100' : ''
                                }`}></div>

                                {/* Text with scan line effect */}
                                <span className="relative z-10 flex items-center space-x-2">
                                    <span className={`text-xs transition-all duration-300 ${
                                        activeId === id ? 'text-black' : 'text-green-500'
                                    }`}>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="uppercase tracking-wide">
                                        {id}
                                    </span>
                                </span>

                                {/* Animated border */}
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Enhanced mobile menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    menuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                }`}>
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg border border-green-500/30 p-4 space-y-2">
                        {sectionIds.map((id, index) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                onClick={() => setMenuOpen(false)}
                                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                                    activeId === id
                                        ? "bg-green-400 text-black font-semibold shadow-lg shadow-green-400/30"
                                        : "text-green-400 hover:text-green-300 hover:bg-green-400/10"
                                }`}
                            >
                                <span className={`text-xs font-mono ${
                                    activeId === id ? 'text-black' : 'text-green-500'
                                }`}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="uppercase tracking-wide flex-1">
                                    {id}
                                </span>
                                <span className={`text-xs transition-transform duration-300 ${
                                    activeId === id ? 'translate-x-0' : 'translate-x-2 group-hover:translate-x-0'
                                }`}>
                                    →
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}