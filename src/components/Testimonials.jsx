"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import testimonials from "@/data/testimonials";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    return (
        <section className="py-16 sm:py-24 bg-slate-950 px-4 sm:px-6 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <FadeInWhenVisible>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
                            What People <span className="text-indigo-500">Say</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(99,102,241,0.4)]" />
                    </FadeInWhenVisible>
                </div>

                {/* Testimonial Card */}
                <FadeInWhenVisible delay={0.1}>
                    <div className="relative">
                        {/* Quote icon */}
                        <div className="absolute -top-6 left-8 z-10">
                            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-600/30">
                                <Quote className="w-6 h-6 text-white" />
                            </div>
                        </div>

                        <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-8 sm:p-12 pt-12">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <blockquote className="text-xl sm:text-2xl text-white font-medium leading-relaxed mb-8">
                                        "{testimonials[currentIndex].quote}"
                                    </blockquote>

                                    {/* Author */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400 font-bold text-lg">
                                            {getInitials(testimonials[currentIndex].name)}
                                        </div>
                                        <div>
                                            <p className="text-white font-bold">{testimonials[currentIndex].name}</p>
                                            <p className="text-slate-400 text-sm">{testimonials[currentIndex].role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation */}
                            <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/5">
                                {/* Dots */}
                                <div className="flex gap-2">
                                    {testimonials.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentIndex(idx)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                                    ? 'bg-indigo-500 w-6'
                                                    : 'bg-slate-700 hover:bg-slate-600'
                                                }`}
                                            aria-label={`Go to testimonial ${idx + 1}`}
                                        />
                                    ))}
                                </div>

                                {/* Arrows */}
                                <div className="flex gap-3">
                                    <button
                                        onClick={prev}
                                        className="w-10 h-10 bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300"
                                        aria-label="Previous testimonial"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={next}
                                        className="w-10 h-10 bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300"
                                        aria-label="Next testimonial"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInWhenVisible>
            </div>
        </section>
    );
}
