"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Star, FolderCode, ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ProjectCard({ project }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        hover: { y: -8, transition: { duration: 0.3 } }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="group relative bg-slate-900 border border-white/5 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:bg-slate-800/80 h-full flex flex-col"
        >
            {/* Project Header Layer */}
            <div className="relative h-44 bg-slate-800 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-600/10 mix-blend-overlay group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-full text-[10px] font-black text-indigo-400 border border-indigo-500/20 uppercase tracking-widest">
                        {project.category}
                    </span>
                </div>

                {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                        <Star className="w-4 h-4 text-indigo-400 fill-indigo-400" />
                    </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20">
                        <FolderCode className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-7 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors tracking-tight">
                        {project.title}
                    </h3>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-6">
                    {project.description}
                </p>

                {/* Progressive Disclosure: Details */}
                <div className="mt-auto space-y-4">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-400 hover:text-white transition-colors"
                    >
                        <span>{isExpanded ? 'Hide Specs' : 'View Technical Specs'}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden space-y-4 pt-2"
                            >
                                {project.features && (
                                    <ul className="text-[11px] text-slate-300 space-y-2">
                                        {project.features.slice(0, 3).map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="w-1 h-1 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0" />
                                                <span className="leading-tight">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.slice(0, 4).map((t, i) => (
                                        <span key={i} className="px-2 py-0.5 bg-slate-950 rounded text-[9px] font-bold text-slate-500 border border-white/[0.03]">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-white/5">
                        {project.github && project.github !== "#" && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-[10px] font-bold transition-all text-center border border-white/5 uppercase tracking-widest"
                            >
                                GitHub
                            </a>
                        )}
                        {(project.visit || project.demo) && (
                            <a
                                href={project.visit || project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-[10px] font-bold transition-all text-center shadow-lg shadow-indigo-600/10 uppercase tracking-widest"
                            >
                                Launch
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}