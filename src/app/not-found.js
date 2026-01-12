"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-950 px-4 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center relative z-10 max-w-lg"
            >
                {/* Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-indigo-500/10 rounded-3xl border border-indigo-500/20">
                        <SearchX className="w-12 h-12 text-indigo-400" />
                    </div>
                </motion.div>

                {/* Error Code */}
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-8xl sm:text-9xl font-black text-white tracking-tighter mb-4"
                >
                    4<span className="text-indigo-500">0</span>4
                </motion.h1>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl sm:text-3xl font-bold text-white mb-4"
                >
                    Page Not Found
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-slate-400 text-lg mb-10 leading-relaxed"
                >
                    The page you&apos;re looking for seems to have wandered into the void.
                    Let&apos;s get you back on track.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/"
                        className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-indigo-600/20 flex items-center gap-3 w-full sm:w-auto justify-center focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                    >
                        <Home className="w-5 h-5" />
                        <span>Back to Home</span>
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="group px-8 py-4 bg-slate-900 border border-white/5 hover:border-indigo-500/30 text-slate-300 hover:text-white font-bold rounded-2xl transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span>Go Back</span>
                    </button>
                </motion.div>

                {/* Decorative code snippet */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 p-6 bg-slate-900/50 border border-white/5 rounded-2xl font-mono text-sm text-left"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <code className="text-slate-400">
                        <span className="text-indigo-400">const</span> page = <span className="text-green-400">await</span> findPage(<span className="text-amber-400">url</span>);{"\n"}
                        <span className="text-slate-500">{"// Error: Page not found in route map"}</span>{"\n"}
                        <span className="text-indigo-400">throw new</span> <span className="text-red-400">NotFoundError</span>(<span className="text-amber-400">&quot;404&quot;</span>);
                    </code>
                </motion.div>
            </motion.div>
        </main>
    );
}
