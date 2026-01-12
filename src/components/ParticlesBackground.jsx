"use client";

import { useCallback, useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Lazy load particles for better performance
const Particles = dynamic(() => import("react-tsparticles"), {
    ssr: false,
    loading: () => null
});

export default function ParticlesBackground() {
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Reduce particles on mobile for better performance
        setIsMobile(window.innerWidth < 768);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const particlesInit = useCallback(async (engine) => {
        const { loadFull } = await import("tsparticles");
        await loadFull(engine);
    }, []);

    // Don't render on mobile for better performance
    if (!mounted || isMobile) return null;

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false },
                background: { color: { value: "transparent" } },
                particles: {
                    number: { value: 30, density: { enable: true, value_area: 800 } },
                    color: { value: "#6366f1" },
                    shape: { type: "circle" },
                    opacity: { value: 0.1, random: true },
                    size: { value: 2, random: true },
                    move: {
                        enable: true,
                        speed: 0.3,
                        direction: "none",
                        outModes: "bounce"
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#6366f1",
                        opacity: 0.05,
                        width: 1
                    }
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "grab" },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            links: { opacity: 0.2 }
                        }
                    }
                },
                detectRetina: true
            }}
            style={{
                position: "fixed",
                zIndex: 0,
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                pointerEvents: "none"
            }}
        />
    );
}
