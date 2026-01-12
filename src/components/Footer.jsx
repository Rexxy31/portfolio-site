"use client";

import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, href: "https://github.com/Rexxy31", label: "GitHub" },
        { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/yogeshkumar01", label: "LinkedIn" },
        { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/yogionbirdapp", label: "Twitter" },
        { icon: <Mail className="w-5 h-5" />, href: "mailto:yogeshkumarn.02@gmail.com", label: "Email" }
    ];

    const quickLinks = [
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Blog", href: "#blog" },
        { label: "Contact", href: "#contact" }
    ];

    return (
        <footer className="relative bg-slate-950 border-t border-white/5 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Footer Content */}
                <div className="py-16 grid md:grid-cols-3 gap-12">
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                            <h2 className="text-xl font-black text-white tracking-tighter">
                                YOGESH <span className="text-indigo-500 uppercase tracking-widest text-xs ml-1">Kumar</span>
                            </h2>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Full-stack engineer crafting secure, scalable solutions for enterprise systems and GIS platforms.
                        </p>
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            <span>Available for opportunities</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {quickLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors duration-300"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6">Connect</h3>
                        <div className="flex gap-3 mb-6">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-slate-900 hover:bg-indigo-600 text-slate-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 border border-white/5 hover:border-indigo-500"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                        <a
                            href="/Yogesh_Kumar_CV.pdf"
                            download
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-indigo-600 text-slate-400 hover:text-white text-sm font-bold rounded-xl transition-all duration-300 border border-white/5 hover:border-indigo-500"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download CV
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm font-medium flex items-center gap-2">
                        © {currentYear} Yogesh Kumar. Built with
                        <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                        using Next.js
                    </p>

                    <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                        <span className="hover:text-indigo-400 cursor-default transition-colors">Clean Code</span>
                        <div className="w-1 h-1 bg-slate-800 rounded-full" />
                        <span className="hover:text-indigo-400 cursor-default transition-colors">Scalable</span>
                        <div className="w-1 h-1 bg-slate-800 rounded-full" />
                        <span className="hover:text-indigo-400 cursor-default transition-colors">Secure</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}