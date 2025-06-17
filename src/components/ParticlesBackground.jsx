"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false },
                background: { color: { value: "#0a0a0a" } }, // very dark background
                particles: {
                    number: { value: 50, density: { enable: true, value_area: 700 } },
                    color: { value: "#39ff14" }, // neon green color
                    shape: { type: "circle" },
                    opacity: { value: 0.7, random: true },
                    size: { value: 3, random: true },
                    move: { enable: true, speed: 1.5, direction: "none", outModes: "bounce" },
                    links: {
                        enable: true,
                        distance: 120,
                        color: "#39ff14",
                        opacity: 0.4,
                        width: 1,
                    },
                    glow: {
                        enable: true,
                        color: "#39ff14",
                        blur: 10,
                    },
                },
                interactivity: {
                    events: { onHover: { enable: true, mode: "repulse" } },
                    modes: {
                        repulse: { distance: 100, duration: 0.4 },
                    },
                },
                detectRetina: true,
            }}
            style={{
                position: "absolute",
                zIndex: 0,
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
            }}
        />
    );
}
