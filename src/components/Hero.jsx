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
            boxShadow: "0 0 25px rgba(34, 197, 94, 0.4)",
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.95 }
    };

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex items-center justify-center flex-col text-center bg-gradient-to-br from-black via-gray-900 to-black px-4 pt-24 overflow-hidden font-mono"
        >
            <ParticlesBackground />

            {/* Ambient glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

            <motion.div
                className="relative z-10 max-w-5xl mx-auto"
                style={{ y: yText, opacity }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Main heading with enhanced typography */}
                <motion.div variants={itemVariants} className="mb-6">
                    <TypeAnimation
                        sequence={[
                            "Hi, I'm Yogesh Kumar", 2500,
                            "Cybersecurity Enthusiast", 2500,
                            "Full-Stack Web Developer", 2500,
                            "Digital Security Architect", 2500,
                        ]}
                        wrapper="h1"
                        speed={60}
                        repeat={Infinity}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-green-400 drop-shadow-glow leading-tight"
                        style={{
                            textShadow: "0 0 30px rgba(34, 197, 94, 0.5), 0 0 60px rgba(34, 197, 94, 0.2)"
                        }}
                    />
                </motion.div>

                {/* Enhanced subtitle */}
                <motion.div variants={itemVariants} className="mb-8">
                    <p className="text-lg md:text-2xl lg:text-3xl text-green-200/90 max-w-4xl mx-auto leading-relaxed">
                        Building{" "}
                        <span className="text-green-300 font-semibold">secure</span>,{" "}
                        <span className="text-green-300 font-semibold">modern</span> web experiences
                        <br />
                        <span className="text-green-400/80 text-base md:text-lg">
                            with a hacker mindset and creative vision
                        </span>
                    </p>
                </motion.div>

                {/* Status indicator */}
                <motion.div variants={itemVariants} className="mb-10">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-sm">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                        <span className="text-green-300 text-sm font-medium">Available for new opportunities</span>
                    </div>
                </motion.div>

                {/* Enhanced action buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.a
                        href="#projects"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-mono px-8 py-4 rounded-xl shadow-lg transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10 font-semibold">View My Work</span>
                        <svg
                            className="w-5 h-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                    <motion.a
                        href="/Yogesh_Kumar_CV.pdf"
                        download
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-mono px-8 py-4 rounded-xl shadow-lg transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10 font-semibold">Download CV</span>
                        <svg
                            className="w-5 h-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                </motion.div>

                {/* Social proof or additional info */}
                <motion.div variants={itemVariants} className="mt-12">
                    <div className="flex flex-wrap justify-center gap-8 text-green-400/60 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                            <span>5+ Years Experience</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                            <span>50+ Projects Completed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                            <span>Security First Approach</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Enhanced bottom divider with animation */}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, delay: 1 }}
            />

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-green-400/60 cursor-pointer hover:text-green-400 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}