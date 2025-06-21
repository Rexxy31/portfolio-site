"use client";

import { useState, useEffect } from 'react';
import { Calendar, ExternalLink, Tag, Terminal, Shield, Code, Zap, BookOpen, Clock, TrendingUp } from 'lucide-react';
import posts from '@/data/blogs';

// Import your FadeInWhenVisible component or create a simple version
const FadeInWhenVisible = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {children}
        </div>
    );
};

export default function BlogHome() {
    const [typedText, setTypedText] = useState('');
    const [activeFilter, setActiveFilter] = useState("all");
    const [showAll, setShowAll] = useState(false);
    const fullText = '> Blog';

    useEffect(() => {
        let i = 0;
        const typeTimer = setInterval(() => {
            if (i < fullText.length) {
                setTypedText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(typeTimer);
            }
        }, 150);

        return () => clearInterval(typeTimer);
    }, []);

    // Extract unique categories from posts
    const categories = ["all", ...new Set(posts.map(post => post.category?.toLowerCase() || "other"))];

    // Filter posts based on active filter
    const filteredPosts = activeFilter === "all"
        ? posts
        : posts.filter(post => post.category?.toLowerCase() === activeFilter);

    // Show limited posts initially
    const displayedPosts = showAll ? filteredPosts : filteredPosts.slice(0, 6);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const getTagIcon = (tag) => {
        if (tag.toLowerCase().includes('web')) return <Code className="w-3 h-3" />;
        if (tag.toLowerCase().includes('network')) return <Zap className="w-3 h-3" />;
        if (tag.toLowerCase().includes('security')) return <Shield className="w-3 h-3" />;
        if (tag.toLowerCase().includes('api')) return <Terminal className="w-3 h-3" />;
        return <Tag className="w-3 h-3" />;
    };

    const stats = [
        { number: posts.length, label: "Total Posts", icon: <BookOpen className="w-5 h-5" /> },
        { number: new Set(posts.map(p => p.category)).size, label: "Categories", icon: <Tag className="w-5 h-5" /> },
        { number: posts.filter(p => p.featured).length, label: "Featured", icon: <TrendingUp className="w-5 h-5" /> },
        { number: "Weekly", label: "Updates", icon: <Clock className="w-5 h-5" /> }
    ];

    return (
        <section
            id="blog"
            className="scroll-mt-24 py-16 sm:py-24 lg:py-32 bg-black px-4 sm:px-6 text-white font-mono relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <FadeInWhenVisible>
                        <div className="inline-flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-8 sm:w-16 h-0.5 bg-gradient-to-r from-transparent to-white/30"></div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
                                <span className="text-red-500">&gt;</span> {typedText}
                                <span className="animate-pulse text-red-500">|</span>
                            </h1>
                            <div className="w-8 sm:w-16 h-0.5 bg-gradient-to-l from-transparent to-white/30"></div>
                        </div>
                        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/10 via-white/30 to-white/10 mx-auto rounded-full shadow-lg shadow-white/10 mb-6 sm:mb-8" />

                        <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
                            <p className="text-white/80 text-lg sm:text-xl md:text-2xl leading-relaxed mb-4 sm:mb-6">
                                Practical, beginner-friendly guides about{" "}
                                <span className="text-red-500 font-semibold">cybersecurity concepts</span>,{" "}
                                <span className="text-red-500 font-semibold">tools</span>, and{" "}
                                <span className="text-red-500 font-semibold">case studies</span>{" "}
                                from real-world work and labs.
                            </p>

                            {/* Stats Row */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 text-center">
                                        <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                                            <div className="text-white text-sm sm:text-base">{stat.icon}</div>
                                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                                        </div>
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
                                {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
                                <span className="ml-1 sm:ml-2 text-xs opacity-70">
                  ({category === "all" ? posts.length : posts.filter(p => p.category?.toLowerCase() === category).length})
                </span>
                            </button>
                        ))}
                    </div>
                </FadeInWhenVisible>

                {/* Blog Posts Grid */}
                <div className="mb-8 sm:mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                        {displayedPosts.map((post, index) => (
                            <FadeInWhenVisible key={`${activeFilter}-${index}`} delay={index * 0.1}>
                                <article className="group relative bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10 transform hover:-translate-y-2">

                                    {/* Featured Badge */}
                                    {post.featured && (
                                        <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 z-20">
                                            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                                ⭐ FEATURED
                                            </div>
                                        </div>
                                    )}

                                    {/* Post Number */}
                                    <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 z-10 w-6 sm:w-8 h-6 sm:h-8 bg-gray-700 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    <div className="mt-4">
                                        {/* Post Header */}
                                        <div className="mb-3 sm:mb-4">
                                            <a
                                                href={post.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group-hover:text-white text-white/90 hover:underline text-lg sm:text-xl font-semibold font-mono tracking-wide transition-colors duration-300 flex items-start gap-2 line-clamp-2"
                                            >
                                                <span className="text-gray-400 mt-1 flex-shrink-0">&gt;</span>
                                                <span className="flex-1">{post.title}</span>
                                                <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1 text-gray-400" />
                                            </a>
                                        </div>

                                        {/* Post Meta */}
                                        <div className="flex items-center justify-between mb-3 sm:mb-4 text-xs sm:text-sm">
                                            <div className="flex items-center gap-1 sm:gap-2 text-white/60">
                                                <Calendar className="w-3 sm:w-4 h-3 sm:h-4" />
                                                {formatDate(post.date)}
                                            </div>
                                            <div className="flex items-center gap-1 sm:gap-2 text-gray-400">
                                                <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        {/* Post Excerpt */}
                                        <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1 sm:gap-2">
                                            {post.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="inline-flex items-center gap-1 sm:gap-1.5 bg-gray-800/60 border border-gray-600/50 text-gray-300 px-2 sm:px-2.5 py-1 rounded-full text-xs font-mono tracking-wide hover:bg-gray-700/60 hover:border-gray-500/70 transition-all duration-300 cursor-pointer"
                                                >
                          {getTagIcon(tag)}
                                                    {tag}
                        </span>
                                            ))}
                                            {post.tags.length > 3 && (
                                                <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-gray-800/40 border border-gray-600/30 text-gray-400 px-2 sm:px-2.5 py-1 rounded-full text-xs font-mono">
                          +{post.tags.length - 3}
                        </span>
                                            )}
                                        </div>

                                        {/* Read More Link */}
                                        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-600/30">
                                            <a
                                                href={post.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-white text-xs sm:text-sm font-medium transition-colors duration-300"
                                            >
                                                <span>Read Article</span>
                                                <svg className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            </FadeInWhenVisible>
                        ))}
                    </div>

                    {/* Load More / Show Less Button */}
                    {filteredPosts.length > 6 && (
                        <FadeInWhenVisible delay={0.3}>
                            <div className="text-center mt-8 sm:mt-12">
                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className="group inline-flex items-center gap-2 sm:gap-3 bg-white text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg border border-white/10 hover:border-red-500 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                                >
                                    <span>{showAll ? "Show Less" : `Show All ${filteredPosts.length} Posts`}</span>
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
                    <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl">
                        <div className="max-w-2xl mx-auto">
                            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                    Stay Updated
                                </h3>
                            </div>
                            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                                New cybersecurity insights, tutorials, and case studies delivered regularly.
                                Join the community of security professionals staying ahead of threats.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                <a
                                    href="#contact"
                                    className="group inline-flex items-center gap-2 sm:gap-3 bg-white text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg border border-white/10 hover:border-red-500 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                                >
                                    <span>Subscribe for Updates</span>
                                    <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>

                                <a
                                    href="/rss"
                                    className="group inline-flex items-center gap-2 sm:gap-3 bg-white/10 border border-white/20 hover:bg-white/20 hover:border-red-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 text-sm sm:text-base"
                                >
                                    <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3.429 2.4c9.284 0 16.8 7.514 16.8 16.8H16.8c0-7.314-5.943-13.257-13.257-13.257V2.4zm0 5.6c5.943 0 10.743 4.8 10.743 10.743h-3.543c0-3.972-3.228-7.2-7.2-7.2V8zm1.829 9.257a1.829 1.829 0 110 3.657 1.829 1.829 0 010-3.657z"/>
                                    </svg>
                                    <span>RSS Feed</span>
                                </a>
                            </div>

                            <div className="mt-6 sm:mt-8 text-white/60 text-xs sm:text-sm font-mono">
                                Securing the digital world, one post at a time
                            </div>
                        </div>
                    </div>
                </FadeInWhenVisible>
            </div>

            <style jsx>{`
        .drop-shadow-glow {
          filter: drop-shadow(0 0 20px rgba(34, 197, 94, 0.5));
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </section>
    );
}