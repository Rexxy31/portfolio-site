"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    // Smooth the progress indicator
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left z-[100] shadow-[0_0_10px_rgba(79,70,229,0.5)]"
            style={{ scaleX }}
        />
    );
}
