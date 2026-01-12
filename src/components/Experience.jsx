"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";
import experiences from "@/data/experience";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Experience() {
    return (
        <section id="experience" className="scroll-mt-24 py-16 sm:py-24 lg:py-32 bg-slate-950 px-4 sm:px-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 sm:mb-20">
                    <FadeInWhenVisible>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
                            Work <span className="text-indigo-500">Experience</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(99,102,241,0.4)]" />
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            My professional journey building enterprise systems and scalable applications.
                        </p>
                    </FadeInWhenVisible>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent hidden sm:block" />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <FadeInWhenVisible key={index} delay={index * 0.15}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="relative"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-6 top-10 w-4 h-4 bg-indigo-600 rounded-full border-4 border-slate-950 shadow-lg shadow-indigo-600/30 z-10 hidden sm:block" />

                                    {/* Card */}
                                    <div className="sm:ml-16 bg-slate-900 border border-white/5 rounded-3xl p-6 sm:p-8 hover:border-indigo-500/30 transition-all duration-500 group">
                                        {/* Header */}
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                                            <div>
                                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                                    <div className="p-2.5 bg-indigo-500/10 rounded-xl">
                                                        <Briefcase className="w-5 h-5 text-indigo-400" />
                                                    </div>
                                                    <span className="px-3 py-1.5 bg-indigo-500/10 rounded-full text-[10px] font-black text-indigo-400 border border-indigo-500/20 uppercase tracking-widest">
                                                        {exp.type}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-indigo-400 font-semibold text-lg">{exp.company}</p>
                                            </div>

                                            <div className="flex sm:flex-col gap-4 sm:gap-2 sm:text-right text-sm">
                                                <div className="flex items-center gap-2 text-slate-400">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{exp.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-500">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{exp.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-slate-400 mb-6 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        {/* Highlights */}
                                        <div className="space-y-3 mb-6">
                                            {exp.highlights.map((highlight, idx) => (
                                                <div key={idx} className="flex items-start gap-3 text-sm text-slate-400">
                                                    <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                                                    <span>{highlight}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                            {exp.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 bg-slate-950 rounded-lg text-[10px] font-bold text-slate-400 border border-white/5 uppercase tracking-wider"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </FadeInWhenVisible>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
