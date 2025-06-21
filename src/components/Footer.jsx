"use client";

import { useState, useEffect } from "react";

export default function Footer() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [glitchText, setGlitchText] = useState("Yogesh Kumar");

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Glitch effect for name
    useEffect(() => {
        const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
        const originalText = "Yogesh Kumar";

        const glitch = () => {
            const chars = originalText.split("");
            const glitched = chars.map((char, index) => {
                if (Math.random() < 0.1) {
                    return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                }
                return char;
            }).join("");

            setGlitchText(glitched);

            setTimeout(() => {
                setGlitchText(originalText);
            }, 100);
        };

        const interval = setInterval(glitch, 3000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour12: false,
            timeZone: 'Asia/Kolkata'
        });
    };

    const socialLinks = [
        { name: "GitHub", href: "#github", icon: "⚡" },
        { name: "LinkedIn", href: "#linkedin", icon: "💼" },
        { name: "Twitter", href: "#twitter", icon: "🐦" },
        { name: "Email", href: "#email", icon: "📧" }
    ];

    return (
        <footer className="relative bg-black border-t border-white/10 font-mono overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(255,255,255,0.04)_25px,rgba(255,255,255,0.04)_26px,transparent_27px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[25px_25px] animate-pulse"></div>
            </div>

            {/* Glowing top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-6">
                {/* Main content grid */}
                <div className="flex justify-start items-center">

                    {/* Copyright */}
                    <div className="text-left">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-white/60">
                                &copy; {new Date().getFullYear()}
                            </span>
                            <div className="relative">
                                <span className="text-sm font-bold text-white relative z-10">
                                    {glitchText}
                                </span>
                                <span className="absolute inset-0 text-sm font-bold text-white blur-sm opacity-50">
                                    {glitchText}
                                </span>
                            </div>
                            <span className="text-sm text-white/40 uppercase tracking-wider">
                                All rights reserved
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}