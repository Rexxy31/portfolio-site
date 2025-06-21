"use client";

import { ExternalLink, Github, Star, Calendar, Code, Eye } from "lucide-react";
import { useState } from "react";

export default function ProjectCard({ project }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm border border-green-500/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] font-mono"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Animated Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm" />

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
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                                        : project.status === 'in-progress'
                                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40'
                                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                                }`}>
                                    {project.status.replace('-', ' ').toUpperCase()}
                                </div>
                            )}
                            {project.category && (
                                <div className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
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
                    <h3 className="text-2xl font-bold text-green-400 tracking-wide group-hover:text-green-300 transition-colors duration-300">
                        <span className="text-green-500">&gt;</span> {project.title}
                    </h3>

                    {/* Project Metrics */}
                    {(project.year || project.duration) && (
                        <div className="flex items-center gap-4 text-sm text-green-300/70">
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
                    <p className="text-green-200 text-base leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                        {project.description}
                    </p>

                    {/* Expand indicator */}
                    <div className="absolute bottom-0 right-0 bg-gradient-to-l from-gray-900 to-transparent pl-8 group-hover:opacity-0 transition-opacity duration-300">
                        <span className="text-green-400/60 text-sm cursor-pointer">...</span>
                    </div>
                </div>

                {/* Key Features */}
                {project.features && (
                    <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-green-400">Key Features:</h4>
                        <ul className="text-sm text-green-300/80 space-y-1">
                            {project.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Tech Stack */}
                <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-green-400 flex items-center gap-2">
                        <Code size={16} />
                        Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                            <span
                                key={idx}
                                className="group/tech relative px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-lg text-green-300 text-sm font-medium hover:bg-green-500/20 hover:border-green-400/50 hover:text-green-200 transition-all duration-200 cursor-default"
                            >
                                {tech}
                                <div className="absolute inset-0 bg-green-400/0 group-hover/tech:bg-green-400/5 rounded-lg transition-colors duration-200" />
                            </span>
                        ))}
                    </div>
                </div>

                {/* Project Stats */}
                {(project.stars || project.forks || project.views) && (
                    <div className="flex items-center gap-4 text-sm text-green-300/70 pt-2 border-t border-green-500/20">
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
                            className="group/btn flex items-center gap-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 hover:border-green-400/60 text-green-400 hover:text-green-300 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                        >
                            <Github size={18} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                            <span>Code</span>
                        </a>
                    )}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-4 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                        >
                            <ExternalLink size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                            <span>Demo</span>
                        </a>
                    )}

                    {project.visit && (
                        <a
                            href={project.visit}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex items-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-400/60 text-emerald-400 hover:text-emerald-300 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
                        >
                            <ExternalLink size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                            <span>Visit</span>
                        </a>
                    )}
                </div>
            </div>

            {/* Hover Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        </div>
    );
}