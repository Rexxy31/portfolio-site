"use client";

import { motion } from "framer-motion";

export default function SkeletonCard() {
    return (
        <div className="bg-slate-900 border border-white/5 rounded-3xl overflow-hidden shadow-2xl h-full flex flex-col animate-pulse">
            {/* Header skeleton */}
            <div className="h-44 bg-slate-800">
                <div className="p-4 flex gap-2">
                    <div className="h-6 w-16 bg-slate-700 rounded-full" />
                </div>
            </div>

            {/* Content skeleton */}
            <div className="p-7 flex flex-col flex-grow">
                {/* Title */}
                <div className="h-6 w-3/4 bg-slate-800 rounded-lg mb-4" />

                {/* Description lines */}
                <div className="space-y-2 mb-6">
                    <div className="h-4 w-full bg-slate-800 rounded" />
                    <div className="h-4 w-5/6 bg-slate-800 rounded" />
                </div>

                {/* Button placeholder */}
                <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="h-5 w-32 bg-slate-800 rounded" />
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-4 mt-4">
                    <div className="flex-1 h-12 bg-slate-800 rounded-xl" />
                    <div className="flex-1 h-12 bg-indigo-600/20 rounded-xl" />
                </div>
            </div>
        </div>
    );
}

export function SkeletonBlogCard() {
    return (
        <div className="bg-slate-900 border border-white/5 rounded-[2rem] p-8 flex flex-col h-full animate-pulse">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="h-5 w-20 bg-slate-800 rounded-full" />
                <div className="h-4 w-14 bg-slate-800 rounded" />
            </div>

            {/* Title */}
            <div className="h-6 w-full bg-slate-800 rounded-lg mb-2" />
            <div className="h-6 w-2/3 bg-slate-800 rounded-lg mb-4" />

            {/* Excerpt */}
            <div className="space-y-2 mb-6">
                <div className="h-4 w-full bg-slate-800 rounded" />
                <div className="h-4 w-full bg-slate-800 rounded" />
                <div className="h-4 w-3/4 bg-slate-800 rounded" />
            </div>

            {/* Tags */}
            <div className="mt-auto flex gap-2">
                <div className="h-6 w-16 bg-slate-800 rounded-md" />
                <div className="h-6 w-20 bg-slate-800 rounded-md" />
                <div className="h-6 w-14 bg-slate-800 rounded-md" />
            </div>
        </div>
    );
}
