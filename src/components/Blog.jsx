"use client";

import { useState } from 'react';
import { Calendar, ExternalLink, Tag, Code, BookOpen, Clock, ArrowRight } from 'lucide-react';
import posts from '@/data/blogs';
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function BlogHome() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [showAll, setShowAll] = useState(false);

    const categories = ["all", ...new Set(posts.map(post => post.category?.toLowerCase() || "other"))];

    const filteredPosts = activeFilter === "all"
        ? posts
        : posts.filter(post => post.category?.toLowerCase() === activeFilter);

    const displayedPosts = showAll ? filteredPosts : filteredPosts.slice(0, 6);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <section id="blog" className="scroll-mt-24 py-16 sm:py-24 lg:py-32 bg-slate-950 px-4 sm:px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 sm:mb-24">
                    <FadeInWhenVisible>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
                            Technical <span className="text-indigo-500">Insights</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(99,102,241,0.4)]" />
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Exploring software architecture, full-stack engineering, and the evolving landscape of enterprise GIS.
                        </p>
                    </FadeInWhenVisible>
                </div>

                {/* Filter Tabs */}
                <FadeInWhenVisible delay={0.1}>
                    <div className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-300 border text-xs tracking-[0.1em] ${activeFilter === category
                                    ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                                    : "bg-slate-900 border-white/5 text-slate-500 hover:text-white hover:border-indigo-500/30"
                                    }`}
                            >
                                {category.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </FadeInWhenVisible>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {displayedPosts.map((post, index) => (
                        <FadeInWhenVisible key={`${activeFilter}-${index}`} delay={index * 0.1}>
                            <a href={post.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
                                <article className="bg-slate-900 border border-white/5 rounded-[2rem] p-8 flex flex-col h-full transition-all duration-500 hover:bg-slate-800/80 hover:border-indigo-500/20 hover:shadow-2xl hover:shadow-indigo-500/5 cursor-pointer">
                                    <div className="flex items-center justify-between mb-6">
                                    <span className="px-3 py-1 bg-indigo-500/10 rounded-full text-[10px] font-black text-indigo-400 border border-indigo-500/20 uppercase tracking-widest">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold">
                                        <Clock className="w-3.5 h-3.5" />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors line-clamp-2 leading-tight">
                                    {post.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto space-y-6">
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="flex items-center gap-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-950 px-2 py-1 rounded-md border border-white/[0.03]">
                                                # {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                            </a>
                        </FadeInWhenVisible>
                    ))}
                </div>

                {/* Load More */}
                {filteredPosts.length > 6 && (
                    <div className="text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-8 py-3 bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:border-indigo-500/30 rounded-xl font-bold text-sm transition-all shadow-xl"
                        >
                            {showAll ? "SHOW LESS" : "BROWSE ALL ARTICLES"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}