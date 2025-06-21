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
                background: { color: { value: "#0a0a0a" } },
                particles: {
                    number: { value: 40, density: { enable: true, value_area: 700 } },
                    color: { value: "#ffffff" }, // subtle white
                    shape: { type: "circle" },
                    opacity: { value: 0.08, random: true },
                    size: { value: 2, random: true },
                    move: { enable: true, speed: 0.5, direction: "none", outModes: "bounce" },
                    links: {
                        enable: false
                    },
                    glow: {
                        enable: false
                    },
                },
                interactivity: {
                    events: { onHover: { enable: false } },
                    modes: {},
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
