"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, ChevronRight } from "lucide-react";
import projects from "@/data/projects";

export default function ProjectPage({ params }) {
    const project = projects.find(p => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-950 pt-24 pb-16 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 font-medium transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12"
                >
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="px-4 py-1.5 bg-indigo-500/10 rounded-full text-xs font-black text-indigo-400 border border-indigo-500/20 uppercase tracking-widest">
                            {project.category}
                        </span>
                        {project.featured && (
                            <span className="px-4 py-1.5 bg-amber-500/10 rounded-full text-xs font-black text-amber-400 border border-amber-500/20 uppercase tracking-widest">
                                Featured
                            </span>
                        )}
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
                        {project.title}
                    </h1>

                    <p className="text-xl text-slate-400 leading-relaxed mb-8">
                        {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all duration-300"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Live Demo
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all duration-300 border border-white/5"
                            >
                                <Github className="w-4 h-4" />
                                View Code
                            </a>
                        )}
                    </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-900 border border-white/5 rounded-3xl p-8 mb-8"
                >
                    <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6">Tech Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-slate-950 rounded-xl text-sm font-medium text-slate-300 border border-white/5"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Project Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-slate-900 border border-white/5 rounded-3xl p-8 prose prose-invert max-w-none"
                >
                    <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6">Overview</h2>
                    <div className="text-slate-300 leading-relaxed space-y-4">
                        <p>{project.description}</p>
                        {project.highlights && (
                            <>
                                <h3 className="text-white font-bold text-lg mt-8 mb-4">Key Features</h3>
                                <ul className="space-y-2">
                                    {project.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <ChevronRight className="w-4 h-4 text-indigo-500 mt-1 flex-shrink-0" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
