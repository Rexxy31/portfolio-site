"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const buttonVariants = {
        hidden: { y: 30, opacity: 0, scale: 0.9 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        },
        hover: {
            scale: 1.05,
            boxShadow: "0 0 10px rgba(239,68,68,0.2)",
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.95 }
    };

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex items-center justify-center flex-col text-center bg-black px-4 pt-24 overflow-hidden font-mono"
        >
            <ParticlesBackground />

            <motion.div
                className="relative z-10 max-w-5xl mx-auto"
                style={{ y: yText, opacity }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Main heading */}
                <motion.div variants={itemVariants} className="mb-6">
                    <TypeAnimation
                        sequence={[
                            "Hi, I'm Yogesh Kumar", 2500,
                            "Web Developer", 2500,
                            "Cybersecurity Learner", 2500,
                            "Security Enthusiast", 2500,
                        ]}
                        wrapper="h1"
                        speed={60}
                        repeat={Infinity}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                    />
                </motion.div>

                {/* Subtitle */}
                <motion.div variants={itemVariants} className="mb-8">
                    <p className="text-lg md:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                        Building <span className="text-red-500 font-semibold">secure</span> web applications
                        <br />
                        <span className="text-white/60 text-base md:text-lg">
                            while learning cybersecurity and ethical hacking
                        </span>
                    </p>
                </motion.div>

                {/* Status indicator */}
                <motion.div variants={itemVariants} className="mb-10">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/30" />
                        <span className="text-white/80 text-sm font-medium">Open to cybersecurity opportunities</span>
                    </div>
                </motion.div>

                {/* Action buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.a
                        href="#projects"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="group relative inline-flex items-center gap-3 bg-white text-black font-mono px-8 py-4 rounded-xl shadow-lg transition-all duration-300 overflow-hidden border border-white/10 hover:border-red-500"
                    >
                        <span className="relative z-10 font-semibold">View My Work</span>
                        <svg
                            className="w-5 h-5 transition-transform group-hover:translate-x-1 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </motion.a>
                    <motion.a
                        href="#certifications"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="group relative inline-flex items-center gap-3 bg-black text-white font-mono px-8 py-4 rounded-xl shadow-lg transition-all duration-300 overflow-hidden border border-white/10 hover:border-red-500"
                    >
                        <span className="relative z-10 font-semibold">My Learning Journey</span>
                        <svg
                            className="w-5 h-5 transition-transform group-hover:translate-x-1 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </motion.a>
                </motion.div>

                {/* Learning focus */}
                <motion.div variants={itemVariants} className="mt-12">
                    <div className="flex flex-wrap justify-center gap-8 text-white/60 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                            <span>Currently Learning CEH</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                            <span>Security-First Development</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                            <span>Passionate About Cybersecurity</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom divider */}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, delay: 1 }}
            />
        </section>
    );
}