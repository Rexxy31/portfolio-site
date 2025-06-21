"use client";

import { useState } from "react";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [showAll, setShowAll] = useState(false);

    // Extract unique categories from projects
    const categories = ["all", ...new Set(projects.map(project => project.category?.toLowerCase() || "other"))];

    // Filter projects based on active filter
    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(project => project.category?.toLowerCase() === activeFilter);

    // Show limited projects initially
    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

    const stats = [
        { number: projects.length, label: "Total Projects" },
        { number: new Set(projects.map(p => p.category)).size, label: "Categories" },
        { number: projects.filter(p => p.featured).length || Math.floor(projects.length * 0.3), label: "Featured" },
        { number: "100%", label: "Open Source" }
    ];

    return (
        <section id="projects" className="scroll-mt-24 py-16 sm:py-24 lg:py-32 bg-black px-4 sm:px-6 text-white font-mono relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <FadeInWhenVisible>
                        <div className="inline-flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-8 sm:w-16 h-0.5 bg-gradient-to-r from-transparent to-white/30"></div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
                                <span className="text-red-500">&gt;</span> Projects
                            </h2>
                            <div className="w-8 sm:w-16 h-0.5 bg-gradient-to-l from-transparent to-white/30"></div>
                        </div>
                        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/10 via-white/30 to-white/10 mx-auto rounded-full shadow-lg shadow-white/10 mb-6 sm:mb-8" />

                        <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
                            <p className="text-white/80 text-lg sm:text-xl md:text-2xl leading-relaxed mb-4 sm:mb-6">
                                Here are a few things I've built — combining{" "}
                                <span className="text-red-500 font-semibold">code</span>,{" "}
                                <span className="text-red-500 font-semibold">curiosity</span>, and a{" "}
                                <span className="text-red-500 font-semibold">hacker mindset</span>.
                            </p>

                            {/* Stats Row */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 text-center">
                                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                                        <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeInWhenVisible>
                </div>

                {/* Filter Tabs */}
                <FadeInWhenVisible delay={0.1}>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 border text-sm sm:text-base ${
                                    activeFilter === category
                                        ? "bg-white/10 border-red-500 text-red-500 shadow-lg shadow-red-500/10"
                                        : "bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:border-red-500/50"
                                }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                                <span className="ml-1 sm:ml-2 text-xs opacity-70">
                                    ({category === "all" ? projects.length : projects.filter(p => p.category?.toLowerCase() === category).length})
                                </span>
                            </button>
                        ))}
                    </div>
                </FadeInWhenVisible>

                {/* Projects Grid */}
                <div className="mb-8 sm:mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                        {displayedProjects.map((project, index) => (
                            <FadeInWhenVisible key={`${activeFilter}-${index}`} delay={index * 0.1}>
                                <div className="group relative">
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 z-20">
                                            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                                ⭐ FEATURED
                                            </div>
                                        </div>
                                    )}

                                    {/* Project Number */}
                                    <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 z-10 w-6 sm:w-8 h-6 sm:h-8 bg-red-500 text-black rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    <ProjectCard project={project} />
                                </div>
                            </FadeInWhenVisible>
                        ))}
                    </div>

                    {/* Load More / Show Less Button */}
                    {filteredProjects.length > 6 && (
                        <FadeInWhenVisible delay={0.3}>
                            <div className="text-center mt-8 sm:mt-12">
                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className="group inline-flex items-center gap-2 sm:gap-3 bg-white text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg border border-white/10 hover:border-red-500 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                                >
                                    <span>{showAll ? "Show Less" : `Show All ${filteredProjects.length} Projects`}</span>
                                    <svg
                                        className={`w-4 sm:w-5 h-4 sm:h-5 transition-transform text-red-500 ${showAll ? "rotate-180" : ""}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                        </FadeInWhenVisible>
                    )}
                </div>

                {/* Call to Action */}
                <FadeInWhenVisible delay={0.4}>
                    <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl">
                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                                Interested in Collaborating?
                            </h3>
                            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                                I'm always excited to work on new projects, especially those involving cybersecurity,
                                innovative web solutions, or interesting technical challenges.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                <a
                                    href="#contact"
                                    className="group inline-flex items-center gap-2 sm:gap-3 bg-white text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg border border-white/10 hover:border-red-500 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                                >
                                    <span>Let's Connect</span>
                                    <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>

                                <a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 sm:gap-3 bg-white/10 border border-white/20 hover:bg-white/20 hover:border-red-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 text-sm sm:text-base"
                                >
                                    <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    <span>View on GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </FadeInWhenVisible>
            </div>
        </section>
    );
}