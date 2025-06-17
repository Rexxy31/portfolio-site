"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import DownloadCV from "@/components/DownloadCV";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex items-center justify-center flex-col text-center bg-black px-4 pt-24 overflow-hidden font-mono"
        >
            <ParticlesBackground />

            <div className="relative z-10">
                <motion.div style={{ y: yText }}>
                    <TypeAnimation
                        sequence={[
                            "Hi, I'm Yogesh Kumar", 2000,
                            "Cybersecurity Enthusiast", 2000,
                            "Full-Stack Web Developer", 2000,
                        ]}
                        wrapper="h1"
                        speed={50}
                        repeat={Infinity}
                        className="text-4xl md:text-5xl font-bold text-green-400 drop-shadow-glow"
                    />
                </motion.div>

                <motion.p
                    style={{ y: yText }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-4 text-lg md:text-xl text-green-200 max-w-2xl"
                >
                    Building secure, modern web experiences with a hacker mindset.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex gap-6 justify-center mt-6"
                >
                    <a
                        href="#projects"
                        className="mt-6 inline-block bg-[#0f380f] text-green-400 font-mono px-6 py-3 rounded-lg shadow-md hover:bg-[#147214] hover:drop-shadow-neon transition duration-300 ease-in-out"
                    >
                        View My Work
                    </a>
                    <DownloadCV />
                </motion.div>
            </div>

            {/* Hacker Terminal Divider (Optional Visual Divider) */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-green-400 blur-sm opacity-30" />
        </section>
    );
}
