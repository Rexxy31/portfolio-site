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
    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

    return (
        <section id="projects" className="scroll-mt-24 py-16 sm:py-24 lg:py-32 bg-slate-950 px-4 sm:px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 sm:mb-24">
                    <FadeInWhenVisible>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
                            Selected <span className="text-indigo-500">Work</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(99,102,241,0.4)]" />
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            A showcase of enterprise GIS platforms, scalable web applications, and technical explorations.
                        </p>
                    </FadeInWhenVisible>
                </div>

                {/* Filter Tabs */}
                <FadeInWhenVisible delay={0.1}>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 border text-sm tracking-wide ${activeFilter === category
                                    ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                                    : "bg-slate-900 border-white/5 text-slate-400 hover:text-white hover:border-indigo-500/30"
                                    }`}
                            >
                                {category.toUpperCase()}
                                <span className="ml-2 opacity-50 text-[10px]">
                                    {category === "all" ? projects.length : projects.filter(p => p.category?.toLowerCase() === category).length}
                                </span>
                            </button>
                        ))}
                    </div>
                </FadeInWhenVisible>

                {/* Projects Grid */}
                <div className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayedProjects.map((project, index) => (
                            <FadeInWhenVisible key={`${activeFilter}-${index}`} delay={index * 0.1}>
                                <ProjectCard project={project} />
                            </FadeInWhenVisible>
                        ))}
                    </div>

                    {/* Load More Button */}
                    {filteredProjects.length > 6 && (
                        <FadeInWhenVisible delay={0.2}>
                            <div className="text-center mt-16">
                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className="px-10 py-4 bg-slate-900 border border-white/5 hover:border-indigo-500/30 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl"
                                >
                                    {showAll ? "Show Less" : "View All Projects"}
                                </button>
                            </div>
                        </FadeInWhenVisible>
                    )}
                </div>

                {/* Call to Action */}
                <FadeInWhenVisible delay={0.3}>
                    <div className="mt-24 p-8 sm:p-12 bg-indigo-600/5 border border-indigo-500/10 rounded-[3rem] text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Interested in Collaborating?
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                I'm always excited to work on complex engineering challenges and innovative web solutions.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-indigo-600/20"
                            >
                                Start a Conversation
                            </a>
                        </div>
                    </div>
                </FadeInWhenVisible>
            </div>
        </section>
    );
}