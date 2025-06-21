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
        <footer className="relative bg-black border-t border-green-500/30 font-mono overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(34,197,94,0.1)_25px,rgba(34,197,94,0.1)_26px,transparent_27px),linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[25px_25px] animate-pulse"></div>
            </div>

            {/* Glowing top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>

            <div className="relative max-w-6xl mx-auto px-6 py-6">
                {/* Main content grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                    {/* Left: System Status */}
                    <div className="text-left">
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-xs text-green-500">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                <span>SYSTEM ONLINE</span>
                            </div>
                            <div className="text-xs text-green-400/70">
                                IST: {formatTime(currentTime)}
                            </div>
                            <div className="text-xs text-green-400/70">
                                UPTIME: {Math.floor(Date.now() / 1000)} sec
                            </div>
                        </div>
                    </div>

                    {/* Center: Copyright */}
                    <div className="text-center">
                        <div className="space-y-3">
                            <div className="text-sm text-green-400">
                                &copy; {new Date().getFullYear()}
                            </div>
                            <div className="relative">
                                <span className="text-lg font-bold text-green-400 relative z-10">
                                    {glitchText}
                                </span>
                                <span className="absolute inset-0 text-lg font-bold text-green-400 blur-sm opacity-50">
                                    {glitchText}
                                </span>
                            </div>
                            <div className="text-xs text-green-500/70 uppercase tracking-wider">
                                All rights reserved
                            </div>
                        </div>
                    </div>

                    {/* Right: Social Links */}
                    <div className="text-right">
                        <div className="flex justify-end space-x-3">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="group relative w-8 h-8 flex items-center justify-center rounded-lg bg-green-400/10 border border-green-500/30 hover:border-green-400 hover:bg-green-400/20 transition-all duration-300"
                                    title={link.name}
                                >
                                    <span className="text-sm transition-transform duration-300 group-hover:scale-110">
                                        {link.icon}
                                    </span>
                                    <div className="absolute inset-0 rounded-lg bg-green-400/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>


            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-green-400/30 rounded-full animate-ping"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>
        </footer>
    );
}