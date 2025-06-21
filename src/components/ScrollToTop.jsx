"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        let scrollTimeout;

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;

            setVisible(scrollTop > 300);
            setScrollProgress(progress);
            setIsScrolling(true);

            // Clear existing timeout
            clearTimeout(scrollTimeout);

            // Set new timeout to hide scrolling state
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 150);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, [mounted]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Don't render anything until component is mounted on client
    if (!mounted) {
        return null;
    }

    return (
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}>
            {/* Progress ring background */}
            <div className="relative">
                <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 56 56">
                    {/* Background circle */}
                    <circle
                        cx="28"
                        cy="28"
                        r="24"
                        fill="none"
                        stroke="rgba(239, 68, 68, 0.2)"
                        strokeWidth="2"
                    />
                    {/* Progress circle */}
                    <circle
                        cx="28"
                        cy="28"
                        r="24"
                        fill="none"
                        stroke="rgba(239, 68, 68, 0.8)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 24}`}
                        strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
                        className="transition-all duration-300"
                        style={{
                            filter: 'drop-shadow(0 0 4px rgba(239, 68, 68, 0.6))'
                        }}
                    />
                </svg>

                {/* Main button */}
                <button
                    onClick={scrollToTop}
                    className={`absolute inset-2 bg-black border-2 border-red-500 hover:border-red-400 rounded-full transition-all duration-300 group overflow-hidden ${
                        isScrolling ? 'scale-110 shadow-lg shadow-red-500/50' : 'hover:scale-105'
                    }`}
                    aria-label="Scroll to top"
                >
                    {/* Glowing background */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Scan line effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/30 to-transparent translate-y-full group-hover:translate-y-[-100%] transition-transform duration-700"></div>

                    {/* Arrow icon */}
                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                        <div className="relative">
                            {/* Main arrow */}
                            <svg
                                className="w-5 h-5 text-red-500 group-hover:text-red-400 transition-all duration-300 group-hover:scale-110"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    d="M5 15l7-7 7 7"
                                    className="group-hover:animate-pulse"
                                />
                            </svg>

                            {/* Glowing arrow overlay */}
                            <svg
                                className="absolute inset-0 w-5 h-5 text-red-500 blur-sm opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    d="M5 15l7-7 7 7"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Particle effects */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"
                                style={{
                                    left: `${20 + Math.random() * 60}%`,
                                    top: `${20 + Math.random() * 60}%`,
                                    animationDelay: `${Math.random() * 0.5}s`,
                                    animationDuration: `${1 + Math.random()}s`
                                }}
                            ></div>
                        ))}
                    </div>
                </button>
            </div>
        </div>
    );
}