"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Code, Cpu, Layers, ArrowRight, Github } from "lucide-react";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 px-4 pt-20">
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-grid-white pointer-events-none opacity-[0.03]" />

            {/* Gradient Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-5xl mx-auto text-center relative z-10"
            >
                {/* Visual Accent */}
                {/* <motion.div variants={itemVariants} className="flex justify-center gap-4 sm:gap-6 mb-10">
                    <div className="p-3 sm:p-4 bg-slate-900 border border-white/5 rounded-2xl shadow-xl">
                        <Code className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" />
                    </div>
                    <div className="p-3 sm:p-4 bg-slate-900 border border-white/5 rounded-2xl shadow-xl mt-4">
                        <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                    </div>
                    <div className="p-3 sm:p-4 bg-slate-900 border border-white/5 rounded-2xl shadow-xl">
                        <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" />
                    </div>
                </motion.div> */}

                {/* Main heading */}
                <div className="mb-8 h-[80px] md:h-[120px] flex items-center justify-center">
                    <TypeAnimation
                        sequence={[
                            "Software Engineer", 3000,
                            "Solutions Architect", 3000,
                        ]}
                        wrapper="h1"
                        speed={60}
                        repeat={Infinity}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight px-4"
                    />
                </div>

                {/* Subtitle */}
                <motion.div variants={itemVariants} className="mb-12 px-4">
                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
                        Architecting <span className="text-indigo-400 font-bold">scalable systems</span> with clean, robust engineering.
                    </p>
                </motion.div>

                {/* Status indicator */}
                <motion.div variants={itemVariants} className="mb-12">
                    <div className="inline-flex items-center gap-3 px-6 py-2 bg-indigo-500/5 border border-indigo-500/10 rounded-full backdrop-blur-md">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                        <span className="text-indigo-200/80 text-xs sm:text-sm font-medium tracking-wide">Available for Full-Stack Engineering Roles</span>
                    </div>
                </motion.div>

                {/* CTAs */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
                    <a
                        href="#projects"
                        className="group relative px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-indigo-600/20 flex items-center gap-2 w-full sm:w-auto justify-center"
                    >
                        <span>View Projects</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="https://github.com/Rexxy31"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-10 py-4 bg-slate-900 border border-white/5 hover:border-indigo-500/30 text-slate-300 hover:text-white font-bold rounded-2xl transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
                    >
                        <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
                        <span>GitHub</span>
                    </a>
                </motion.div>
            </motion.div>

            {/* Bottom divider */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </section>
    );
}
