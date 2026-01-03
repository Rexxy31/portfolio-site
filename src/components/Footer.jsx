"use client";

export default function Footer() {
    return (
        <footer className="relative bg-slate-950 border-t border-white/5 py-12 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-grid-white" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    {/* Brand/Copyright */}
                    <div>
                        <h2 className="text-xl font-black text-white tracking-tighter mb-2">
                            YOGESH <span className="text-indigo-500 uppercase tracking-widest text-xs ml-1">Kumar</span>
                        </h2>
                        <p className="text-slate-500 text-xs font-medium tracking-wide">
                            &copy; {new Date().getFullYear()} All rights reserved. Architecting scalable solutions.
                        </p>
                    </div>

                    {/* Quick Stats/Links */}
                    <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            <span>System Operational</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                    <div className="flex items-center flex-wrap justify-center gap-4">
                        <span className="hover:text-indigo-400 cursor-default transition-colors">Clean Code</span>
                        <div className="w-1 h-1 bg-slate-800 rounded-full" />
                        <span className="hover:text-indigo-400 cursor-default transition-colors">Global Scalability</span>
                        <div className="w-1 h-1 bg-slate-800 rounded-full" />
                        <span className="hover:text-indigo-400 cursor-default transition-colors">Architectural Integrity</span>
                    </div>
                    <div className="text-slate-500 font-medium">
                        v2.4.0-DEPL
                    </div>
                </div>
            </div>
        </footer>
    );
}