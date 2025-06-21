import FadeInWhenVisible from "./FadeInWhenVisible";

export default function About() {
    const skills = [
        { category: "Security", items: ["Threat Modeling", "Ethical Hacking", "Linux Hardening", "Network Security"] },
        { category: "Development", items: ["React", "Next.js", "Node.js", "Full-Stack"] },
        { category: "Current Focus", items: ["Security Engineering", "Offensive Security", "GIS Systems"] }
    ];

    const stats = [
        { number: "5+", label: "Years Experience" },
        { number: "50+", label: "Projects Built" },
        { number: "100+", label: "Security Blogs" },
        { number: "24/7", label: "Learning Mode" }
    ];

    return (
        <section id="about" className="scroll-mt-24 py-32 bg-gradient-to-br from-black via-gray-900 to-black px-6 md:px-12 text-green-300 font-mono relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5" />
            <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-emerald-500/8 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <FadeInWhenVisible>
                        <div className="inline-flex items-center gap-4 mb-6">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-green-400"></div>
                            <h2 className="text-5xl md:text-6xl font-extrabold text-green-400 drop-shadow-glow">
                                &gt; About Me
                            </h2>
                            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-green-400"></div>
                        </div>
                        <div className="w-32 h-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 mx-auto rounded-full shadow-lg shadow-green-400/30" />
                    </FadeInWhenVisible>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <FadeInWhenVisible delay={0.1}>
                            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 shadow-xl">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-3 h-3 bg-green-400 rounded-full mt-2 shadow-lg shadow-green-400/50 animate-pulse"></div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-green-400 mb-4">My Journey</h3>
                                        <p className="text-green-200 text-lg leading-relaxed">
                                            I'm a <span className="text-green-400 font-semibold bg-green-400/10 px-2 py-1 rounded">cybersecurity enthusiast</span> and{" "}
                                            <span className="text-green-400 font-semibold bg-green-400/10 px-2 py-1 rounded">web developer</span> passionate about solving
                                            real-world problems using secure and scalable software solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible delay={0.2}>
                            <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 shadow-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-3 h-3 bg-emerald-400 rounded-full mt-2 shadow-lg shadow-emerald-400/50 animate-pulse delay-300"></div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-emerald-400 mb-4">Current Role</h3>
                                        <p className="text-green-200 text-lg leading-relaxed">
                                            By day, I contribute to{" "}
                                            <span className="text-emerald-400 font-medium bg-emerald-400/10 px-2 py-1 rounded">Karnataka's land mapping projects</span>,
                                            working hands-on with GIS systems, data pipelines, and verification workflows
                                            involving vendors and state officials.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible delay={0.3}>
                            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 shadow-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-3 h-3 bg-green-400 rounded-full mt-2 shadow-lg shadow-green-400/50 animate-pulse delay-500"></div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-green-400 mb-4">Side Projects & Learning</h3>
                                        <p className="text-green-200 text-lg leading-relaxed mb-4">
                                            Outside work, I write cybersecurity blogs, explore ethical hacking tools, and build
                                            innovative projects using modern web technologies.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {["React", "Next.js", "Node.js", "Security Tools"].map((tech, index) => (
                                                <span key={index} className="bg-green-400/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium border border-green-400/40">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible delay={0.4}>
                            <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 shadow-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-3 h-3 bg-emerald-400 rounded-full mt-2 shadow-lg shadow-emerald-400/50 animate-pulse delay-700"></div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-emerald-400 mb-4">Future Goals</h3>
                                        <p className="text-green-200 text-lg leading-relaxed mb-4">
                                            Currently upskilling in advanced security practices, aiming to transition into specialized roles in cybersecurity.
                                        </p>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            {["Threat Modeling", "Linux Hardening", "Network Security", "Penetration Testing"].map((skill, index) => (
                                                <div key={index} className="flex items-center gap-3 bg-emerald-400/10 p-3 rounded-lg border border-emerald-400/20">
                                                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                                    <span className="text-emerald-300 font-medium">{skill}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInWhenVisible>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Stats */}
                        <FadeInWhenVisible delay={0.5}>
                            <div className="bg-gradient-to-br from-green-500/15 to-emerald-500/15 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 shadow-xl">
                                <h3 className="text-xl font-bold text-green-400 mb-6 text-center">Quick Stats</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="text-center p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                                            <div className="text-2xl font-bold text-green-400 mb-1">{stat.number}</div>
                                            <div className="text-sm text-green-300">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        {/* Skills Overview */}
                        <FadeInWhenVisible delay={0.6}>
                            <div className="bg-gradient-to-br from-emerald-500/15 to-green-500/15 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 shadow-xl">
                                <h3 className="text-xl font-bold text-green-400 mb-6 text-center">Skill Areas</h3>
                                <div className="space-y-4">
                                    {skills.map((skillGroup, index) => (
                                        <div key={index} className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                                            <h4 className="font-semibold text-green-400 mb-3">{skillGroup.category}</h4>
                                            <div className="space-y-2">
                                                {skillGroup.items.map((skill, skillIndex) => (
                                                    <div key={skillIndex} className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                        <span className="text-green-300 text-sm">{skill}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        {/* Status */}
                        <FadeInWhenVisible delay={0.7}>
                            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-400/40 rounded-2xl p-6 shadow-xl text-center">
                                <div className="flex items-center justify-center gap-3 mb-3">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                                    <span className="font-semibold text-green-400">Currently Available</span>
                                </div>
                                <p className="text-green-300 text-sm">
                                    Open for security engineering and offensive security opportunities
                                </p>
                            </div>
                        </FadeInWhenVisible>
                    </div>
                </div>
            </div>
        </section>
    );
}