"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2, RotateCcw } from "lucide-react";

const COMMANDS = {
    help: "Available: about, skills, work, architecture, contact, system, clear",
    about: "Full-Stack Software Engineer & Solutions Architect. Specializing in enterprise GIS platforms and scalable web systems.",
    skills: "Backend: Java, Spring Boot, PostgreSQL, PostGIS. Frontend: React, Next.js, Tailwind. DevOps: Docker, Jenkins, Nginx.",
    work: "Currently building enterprise GIS solutions for government initiatives. Key projects: Equipment Management & Lake Statistics platforms.",
    architecture: "Preference for Clean Architecture and Domain-Driven Design. Expert in microservices and real-time data streaming.",
    contact: "LinkedIn: linkedin.com/in/yogeshkumar01 | GitHub: github.com/Rexxy31 | Email: kumar.yogesh31@outlook.com",
    system: "Core: v4.1.0-Indigo | Env: Production | Status: All systems operational.",
};

export default function Terminal() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([
        { type: "system", content: "Yogesh Kumar | Developer Console v4.1.0" },
        { type: "system", content: "Initializing environment... [READY]" },
        { type: "system", content: "Type 'help' for available command protocols." },
    ]);
    const [isMaximized, setIsMaximized] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === "Enter") {
            const cmd = input.toLowerCase().trim();
            const newHistory = [...history, { type: "input", content: `~ ${input}` }];

            if (cmd === "clear") {
                setHistory([]);
            } else if (COMMANDS[cmd]) {
                newHistory.push({ type: "output", content: COMMANDS[cmd] });
                setHistory(newHistory);
            } else if (cmd !== "") {
                newHistory.push({ type: "error", content: `Unknown command: '${cmd}'. Reference 'help' for available protocols.` });
                setHistory(newHistory);
            } else {
                setHistory(newHistory);
            }

            setInput("");
        }
    };

    return (
        <section id="terminal" className="py-20 bg-slate-950 flex items-center justify-center px-4 relative scroll-mt-24">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`w-full max-w-4xl bg-slate-900 border border-white/5 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 ${isMaximized ? 'fixed inset-4 z-[100] max-w-none' : 'relative h-[550px]'}`}
            >
                {/* Header */}
                <div className="bg-slate-800/50 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <TerminalIcon className="w-4 h-4 text-indigo-400" />
                        <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">System Control Console</span>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setHistory([{ type: "system", content: "Environment reloaded." }])}
                            className="p-1.5 hover:bg-white/5 rounded-lg transition-colors text-slate-500 hover:text-white"
                        >
                            <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                        <button
                            onClick={() => setIsMaximized(!isMaximized)}
                            className="p-1.5 hover:bg-white/5 rounded-lg transition-colors text-slate-500 hover:text-white"
                        >
                            <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>

                {/* Shell Body */}
                <div
                    ref={scrollRef}
                    className="p-8 font-mono text-sm overflow-y-auto h-[calc(100%-60px)] scrollbar-hide bg-slate-950/40"
                >
                    <AnimatePresence>
                        {history.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={`mb-3 leading-relaxed ${line.type === "input" ? "text-indigo-400 font-bold" :
                                    line.type === "error" ? "text-rose-400" :
                                        line.type === "output" ? "text-slate-200" :
                                            "text-slate-500 italic"
                                    }`}
                            >
                                {line.content}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    <div className="flex items-center gap-3 mt-4 group">
                        <span className="text-indigo-500 font-black">~</span>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleCommand}
                            autoFocus
                            className="bg-transparent border-none outline-none flex-1 text-slate-200 font-mono placeholder:text-slate-800"
                            placeholder="Type protocol command..."
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
