"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function FadeInWhenVisible({ 
    children, 
    delay = 0, 
    duration = 0.6,
    threshold = 0.2,
    triggerOnce = true,
    direction = "up", // "up", "down", "left", "right", "none"
    distance = 30,
    easing = "easeOut"
}) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ 
        triggerOnce, 
        threshold,
        rootMargin: "0px 0px -50px 0px" // Start animation slightly before element comes into view
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    // Define animation variants based on direction
    const getVariants = () => {
        const baseVariants = {
            visible: { 
                opacity: 1, 
                y: 0, 
                x: 0,
                transition: { 
                    duration, 
                    delay, 
                    ease: easing 
                }
            },
            hidden: { 
                opacity: 0,
                transition: { 
                    duration: 0.1 
                }
            }
        };

        switch (direction) {
            case "up":
                return {
                    ...baseVariants,
                    hidden: { ...baseVariants.hidden, y: distance }
                };
            case "down":
                return {
                    ...baseVariants,
                    hidden: { ...baseVariants.hidden, y: -distance }
                };
            case "left":
                return {
                    ...baseVariants,
                    hidden: { ...baseVariants.hidden, x: distance }
                };
            case "right":
                return {
                    ...baseVariants,
                    hidden: { ...baseVariants.hidden, x: -distance }
                };
            case "none":
                return {
                    ...baseVariants,
                    hidden: { ...baseVariants.hidden, y: 0, x: 0 }
                };
            default:
                return {
                    ...baseVariants,
                    hidden: { ...baseVariants.hidden, y: distance }
                };
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={getVariants()}
            style={{ 
                willChange: "opacity, transform" // Optimize for animations
            }}
        >
            {children}
        </motion.div>
    );
}
