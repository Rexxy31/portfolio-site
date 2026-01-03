import FadeInWhenVisible from "./FadeInWhenVisible";
import { Database, Code2, Layout, Zap } from "lucide-react";

export default function About() {
    const skills = [
        {
            category: "Backend & GIS",
            items: ["Java", "Spring Boot", "Node.js", "PostgreSQL/PostGIS"],
            icon: <Database className="w-5 h-5 text-indigo-500" />
        },
        {
            category: "Frontend & UI",
            items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
            icon: <Layout className="w-5 h-5 text-blue-500" />
        },
        {
            category: "DevOps & Infrastructure",
            items: ["Docker", "Jenkins", "Nginx", "Linux/Security"],
            icon: <Zap className="w-5 h-5 text-indigo-400" />
        }
    ];

    const stats = [
        { number: "2+", label: "Years Impact" },
        { number: "5+", label: "Enterprise Apps" },
        { number: "GIS", label: "Specialization" },
        { number: "Full", label: "Stack Mastery" }
    ];

    return (
        <section id="about" className="scroll-mt-24 py-16 sm:py-24 lg:py-32 bg-slate-950 px-4 sm:px-6 md:px-12 text-slate-50 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-20">
                    <FadeInWhenVisible>
                        <div className="inline-flex items-center gap-4 mb-6">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                                About <span className="text-indigo-500">Me</span>
                            </h2>
                        </div>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Passionate about building software that is as secure as it is functional.
                        </p>
                    </FadeInWhenVisible>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-start">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <FadeInWhenVisible delay={0.1}>
                            <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 sm:p-10 shadow-2xl hover:bg-slate-800/50 transition-all duration-500 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full blur-3xl -mr-16 -mt-16" />
                                <div className="flex items-start gap-6">
                                    <div className="p-3 bg-indigo-500/10 rounded-2xl">
                                        <Code2 className="w-6 h-6 text-indigo-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">The Engineering Mindset</h3>
                                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                                            I'm a <span className="text-indigo-400 font-bold">full-stack engineer</span> dedicated to building robust, high-performance systems. I believe that <span className="text-white font-bold">secure architecture</span> is the foundation of modern software, ensuring reliability at every layer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible delay={0.2}>
                            <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 sm:p-10 shadow-2xl hover:bg-slate-800/50 transition-all duration-500 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl -mr-16 -mt-16" />
                                <div className="flex items-start gap-6">
                                    <div className="p-3 bg-blue-500/10 rounded-2xl">
                                        <Database className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">GIS & Enterprise Systems</h3>
                                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                                            Currently, I architect complex <span className="text-indigo-400 font-medium tracking-tight">GIS web platforms</span> for Karnataka's state-wide land management initiatives. I specialize in turning massive spatial datasets into intuitive and interactive engineering dashboards.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {skills.map((skillGroup, index) => (
                                <FadeInWhenVisible key={index} delay={0.3 + index * 0.1}>
                                    <div className="p-8 bg-slate-900 border border-white/5 rounded-3xl hover:border-indigo-500/30 transition-all duration-500 group">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-2.5 bg-slate-800 rounded-xl group-hover:scale-110 group-hover:bg-slate-700 transition-all duration-300">
                                                {skillGroup.icon}
                                            </div>
                                            <h4 className="font-bold text-white tracking-wide text-sm">{skillGroup.category}</h4>
                                        </div>
                                        <div className="space-y-3">
                                            {skillGroup.items.map((skill, skillIndex) => (
                                                <div key={skillIndex} className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                                                    <div className="w-1.5 h-1.5 bg-indigo-500/40 rounded-full group-hover:bg-indigo-500 transition-colors"></div>
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </FadeInWhenVisible>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Highlights */}
                        <FadeInWhenVisible delay={0.5}>
                            <div className="bg-indigo-600/5 border border-indigo-500/10 rounded-3xl p-8 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent" />
                                <div className="relative z-10 text-center">
                                    <div className="inline-flex items-center px-4 py-1.5 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-6">
                                        <span className="font-bold text-indigo-400 tracking-wider text-[10px] uppercase">Open to Opportunities</span>
                                    </div>
                                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                                        Seeking challenging roles in Full-Stack Engineering & Solutions Architecture.
                                    </p>
                                    <button className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl text-sm uppercase tracking-widest hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-600/20 transition-all duration-300">
                                        Hire Me
                                    </button>
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <FadeInWhenVisible key={index} delay={0.6 + index * 0.1}>
                                    <div className="text-center p-6 bg-slate-900 rounded-3xl border border-white/5 hover:bg-slate-800 transition-all duration-300">
                                        <div className="text-3xl font-black text-white mb-1 tracking-tight">{stat.number}</div>
                                        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold leading-tight">{stat.label}</div>
                                    </div>
                                </FadeInWhenVisible>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
