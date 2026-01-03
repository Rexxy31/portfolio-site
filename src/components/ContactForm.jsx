"use client";

import { useState } from "react";
import {
    Mail,
    MapPin,
    Github,
    Linkedin,
    Twitter,
    Copy,
    Check,
    ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function ContactForm() {
    const [copied, setCopied] = useState(false);

    const contactInfo = [
        {
            icon: <MapPin className="w-5 h-5" />,
            label: "Location",
            value: "Bengaluru, India",
            link: "https://www.google.com/maps/place/Bengaluru,+Karnataka",
            isAction: false
        },
        {
            icon: <Mail className="w-5 h-5" />,
            label: "Email",
            value: "yogeshkumarn.02@gmail.com",
            link: "mailto:yogeshkumarn.02@gmail.com",
            isAction: true
        }
    ];

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="scroll-mt-24 py-20 sm:py-32 bg-slate-950 px-4 sm:px-6 relative overflow-hidden">
            {/* Background Ornaments */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20 sm:mb-24">
                    <FadeInWhenVisible>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-8"
                        >
                            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest leading-none">Open for Collaboration</span>
                        </motion.div>
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8">
                            Ready to <span className="text-indigo-500">Scale</span>?
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
                            Whether you have a specific project in mind or just want to talk system architecture, I'm just a click away.
                        </p>
                    </FadeInWhenVisible>
                </div>

                <div className="flex flex-col items-center">
                    <FadeInWhenVisible delay={0.1}>
                        <div className="bg-slate-900 border border-white/[0.08] rounded-[3rem] p-1 sm:p-2 shadow-2xl relative overflow-hidden group w-full max-w-xl mx-auto backdrop-blur-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

                            <div className="bg-slate-900/80 rounded-[2.5rem] p-8 sm:p-10 relative z-10">
                                <h3 className="text-[10px] font-black text-slate-500 mb-10 border-b border-white/5 pb-6 text-center uppercase tracking-[0.4em]">Official Handshake</h3>

                                <div className="space-y-4 mb-10">
                                    {contactInfo.map((info, idx) => (
                                        <div key={idx} className="relative group/info">
                                            <a
                                                href={info.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-5 bg-slate-950/40 rounded-3xl border border-white/5 hover:border-indigo-500/40 hover:bg-slate-950 transition-all duration-300 w-full group-hover/info:shadow-lg group-hover/info:shadow-indigo-500/5"
                                            >
                                                <div className="w-14 h-14 bg-indigo-500/5 group-hover/info:bg-indigo-600 rounded-[1.25rem] flex items-center justify-center text-indigo-400 group-hover/info:text-white border border-indigo-500/10 group-hover/info:border-indigo-500 transition-all duration-500 flex-shrink-0">
                                                    {info.icon}
                                                </div>
                                                <div className="text-center sm:text-left overflow-hidden w-full flex-grow py-1">
                                                    <div className="text-[9px] font-black text-slate-500 uppercase tracking-[0.25em] mb-1.5 opacity-80">{info.label}</div>
                                                    <div className="text-white font-bold tracking-tight text-sm sm:text-base break-all sm:break-normal">
                                                        {info.value}
                                                    </div>
                                                </div>
                                                <div className="hidden sm:flex items-center text-slate-700 group-hover/info:text-indigo-400 transition-colors">
                                                    <ArrowRight className="w-5 h-5 opacity-40 group-hover/info:opacity-100 group-hover/info:translate-x-1 transition-all" />
                                                </div>
                                            </a>

                                            {info.isAction && (
                                                <button
                                                    onClick={() => copyToClipboard(info.value)}
                                                    className="absolute top-4 right-4 p-2 bg-slate-800/50 hover:bg-indigo-600 text-slate-500 hover:text-white rounded-lg transition-all opacity-0 group-hover/info:opacity-100 z-20"
                                                    title="Copy to clipboard"
                                                >
                                                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center gap-5 pt-8 border-t border-white/5">
                                    {[
                                        { icon: <Github className="w-5 h-5" />, label: "GitHub", url: "https://github.com/Rexxy31" },
                                        { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", url: "https://linkedin.com/in/yogeshkumar01" },
                                        { icon: <Twitter className="w-5 h-5" />, label: "Twitter", url: "https://twitter.com/yogionbirdapp" }
                                    ].map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-14 h-14 bg-slate-950/80 hover:bg-indigo-600 text-slate-400 hover:text-white rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg border border-white/5 hover:border-indigo-500 active:scale-95"
                                            aria-label={link.label}
                                        >
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </div>
        </section>
    );
}