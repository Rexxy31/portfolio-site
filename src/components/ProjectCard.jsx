"use client";

import { ExternalLink, Github, Star, Calendar, Code, Eye } from "lucide-react";
import { useState } from "react";

export default function ProjectCard({ project }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] font-mono"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Content Container */}
            <div className="relative z-10 p-8 space-y-6">
                {/* Header Section */}
                <div className="space-y-4">
                    {/* Project Status & Category */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            {project.status && (
                                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    project.status === 'completed'
                                        ? 'bg-white/10 text-red-500 border border-red-500/40'
                                        : project.status === 'in-progress'
                                            ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/40'
                                            : 'bg-blue-500/10 text-blue-400 border border-blue-500/40'
                                }`}>
                                    {project.status.replace('-', ' ').toUpperCase()}
                                </div>
                            )}
                            {project.category && (
                                <div className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20">
                                    {project.category}
                                </div>
                            )}
                        </div>

                        {project.featured && (
                            <div className="flex items-center gap-1 text-yellow-400">
                                <Star size={16} fill="currentColor" />
                                <span className="text-xs font-medium">Featured</span>
                            </div>
                        )}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl font-bold text-white tracking-wide group-hover:text-red-500 transition-colors duration-300">
                        <span className="text-red-500">&gt;</span> {project.title}
                    </h3>

                    {/* Project Metrics */}
                    {(project.year || project.duration) && (
                        <div className="flex items-center gap-4 text-sm text-white/60">
                            {project.year && (
                                <div className="flex items-center gap-1">
                                    <Calendar size={14} />
                                    <span>{project.year}</span>
                                </div>
                            )}
                            {project.duration && (
                                <div className="flex items-center gap-1">
                                    <Code size={14} />
                                    <span>{project.duration}</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Description */}
                <div className="relative">
                    <p className="text-white/80 text-base leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                        {project.description}
                    </p>

                    {/* Expand indicator */}
                    <div className="absolute bottom-0 right-0 bg-gradient-to-l from-black to-transparent pl-8 group-hover:opacity-0 transition-opacity duration-300">
                        <span className="text-red-500/60 text-sm cursor-pointer">...</span>
                    </div>
                </div>

                {/* Key Features */}
                {project.features && (
                    <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                        <ul className="text-sm text-white/70 space-y-1">
                            {project.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Tech Stack */}
                <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                        <Code size={16} />
                        Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                            <span
                                key={idx}
                                className="group/tech relative px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-white/80 text-sm font-medium hover:bg-white/20 hover:border-red-500/50 hover:text-red-500 transition-all duration-200 cursor-default"
                            >
                                {tech}
                                <div className="absolute inset-0 bg-red-500/0 group-hover/tech:bg-red-500/5 rounded-lg transition-colors duration-200" />
                            </span>
                        ))}
                    </div>
                </div>

                {/* Project Stats */}
                {(project.stars || project.forks || project.views) && (
                    <div className="flex items-center gap-4 text-sm text-white/60 pt-2 border-t border-white/10">
                        {project.stars && (
                            <div className="flex items-center gap-1">
                                <Star size={14} />
                                <span>{project.stars}</span>
                            </div>
                        )}
                        {project.forks && (
                            <div className="flex items-center gap-1">
                                <Github size={14} />
                                <span>{project.forks}</span>
                            </div>
                        )}
                        {project.views && (
                            <div className="flex items-center gap-1">
                                <Eye size={14} />
                                <span>{project.views}</span>
                            </div>
                        )}
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex items-center gap-2 bg-white text-black px-4 py-2.5 rounded-xl font-medium border border-white/10 hover:border-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            <Github size={18} className="group-hover/btn:text-red-500 transition-colors duration-300" />
                            <span>Code</span>
                        </a>
                    )}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl font-medium border border-white/10 hover:border-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            <ExternalLink size={18} className="group-hover/btn:text-red-500 transition-colors duration-300" />
                            <span>Demo</span>
                        </a>
                    )}

                    {project.visit && (
                        <a
                            href={project.visit}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex items-center gap-2 bg-white/10 text-white px-4 py-2.5 rounded-xl font-medium border border-white/20 hover:border-red-500 hover:text-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            <ExternalLink size={18} className="group-hover/btn:text-red-500 transition-colors duration-300" />
                            <span>Visit</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}