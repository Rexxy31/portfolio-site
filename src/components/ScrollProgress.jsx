"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const winScroll = scrollTop;
            const height = scrollHeight - clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener("scroll", updateProgress);
        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
            <div
                className="h-full bg-green-400 drop-shadow-[0_0_6px_rgba(57,255,20,0.7)] transition-all duration-200 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
}
