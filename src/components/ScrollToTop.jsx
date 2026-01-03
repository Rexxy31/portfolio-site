"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;

            setVisible(scrollTop > 400);
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    className="fixed bottom-8 right-8 z-[100]"
                >
                    <div className="relative group">
                        {/* Progress ring background */}
                        <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 56 56">
                            <circle
                                cx="28"
                                cy="28"
                                r="26"
                                fill="none"
                                stroke="rgba(255, 255, 255, 0.05)"
                                strokeWidth="3"
                            />
                            <circle
                                cx="28"
                                cy="28"
                                r="26"
                                fill="none"
                                stroke="#4f46e5"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeDasharray={`${2 * Math.PI * 26}`}
                                strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`}
                                className="transition-all duration-100"
                            />
                        </svg>

                        {/* Main button */}
                        <button
                            onClick={scrollToTop}
                            className="absolute inset-1.5 bg-slate-900 border border-white/10 hover:border-indigo-500 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 group shadow-2xl overflow-hidden"
                            aria-label="Scroll to top"
                        >
                            <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <ChevronUp className="w-6 h-6 relative z-10 transition-transform group-hover:-translate-y-1" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}