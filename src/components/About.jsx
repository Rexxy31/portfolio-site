import FadeInWhenVisible from "./FadeInWhenVisible";

export default function About() {
    const skills = [
        { category: "Security", items: ["Threat Modeling", "Ethical Hacking", "Linux Hardening", "Network Security"] },
        { category: "Development", items: ["React", "Next.js", "Node.js", "Full-Stack"] },
        { category: "Current Focus", items: ["Security Engineering", "Offensive Security", "GIS Systems"] }
    ];

    const stats = [
        { number: "2+", label: "Years Experience" },
        { number: "5", label: "Projects Built" },
        { number: "1", label: "Security Blogs" },
        { number: "24/7", label: "Learning Mode" }
    ];

    return (
        <section id="about" className="scroll-mt-24 py-16 sm:py-24 lg:py-32 bg-black px-4 sm:px-6 md:px-12 text-white font-mono relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <FadeInWhenVisible>
                        <div className="inline-flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-white/30"></div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
                                <span className="text-red-500">&gt;</span> About Me
                            </h2>
                            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-white/30"></div>
                        </div>
                        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/10 via-white/30 to-white/10 mx-auto rounded-full shadow-lg shadow-white/10" />
                    </FadeInWhenVisible>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                        <FadeInWhenVisible delay={0.1}>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
                                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg shadow-red-500/30 animate-pulse"></div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">My Journey</h3>
                                        <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                                            I'm a <span className="text-red-500 font-semibold bg-white/10 px-2 py-1 rounded">cybersecurity enthusiast</span> and{" "}
                                            <span className="text-red-500 font-semibold bg-white/10 px-2 py-1 rounded">web developer</span> passionate about solving
                                            real-world problems using secure and scalable software solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible delay={0.2}>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg shadow-red-500/30 animate-pulse delay-300"></div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Current Role</h3>
                                        <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                                            By day, I contribute to{" "}
                                            <span className="text-red-500 font-medium bg-white/10 px-2 py-1 rounded">Karnataka's land mapping projects</span>,
                                            developing web-based GIS applications and interactive dashboards for data visualization.
                                            I build scalable web solutions to manage verification workflows, integrate geospatial data seamlessly,
                                            and collaborate with state officials to ensure secure, user-friendly interfaces for land mapping operations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible delay={0.3}>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg shadow-red-500/30 animate-pulse delay-500"></div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Side Projects & Learning</h3>
                                        <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                                            Outside work, I like to build
                                            innovative projects using modern web technologies. I create applications that are free to access for educational purposes.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {["React", "Next.js", "Node.js", "Security Tools"].map((tech, index) => (
                                                <span key={index} className="bg-white/10 text-white/80 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-white/20">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible delay={0.4}>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 shadow-lg shadow-red-500/30 animate-pulse delay-700"></div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Future Goals</h3>
                                        <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                                            Currently upskilling in advanced security practices, aiming to transition into specialized roles in cybersecurity.
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {["Threat Modeling", "Linux Hardening", "Network Security", "Penetration Testing"].map((skill, index) => (
                                                <div key={index} className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/20">
                                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                                    <span className="text-white/80 font-medium text-sm">{skill}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInWhenVisible>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6 sm:space-y-8">
                        {/* Stats */}
                        <FadeInWhenVisible delay={0.5}>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl">
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center">Quick Stats</h3>
                                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="text-center p-3 sm:p-4 bg-white/10 rounded-xl border border-white/20">
                                            <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.number}</div>
                                            <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        {/* Skills Overview */}
                        <FadeInWhenVisible delay={0.6}>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl">
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center">Skill Areas</h3>
                                <div className="space-y-3 sm:space-y-4">
                                    {skills.map((skillGroup, index) => (
                                        <div key={index} className="p-3 sm:p-4 bg-white/10 rounded-xl border border-white/20">
                                            <h4 className="font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">{skillGroup.category}</h4>
                                            <div className="space-y-1 sm:space-y-2">
                                                {skillGroup.items.map((skill, skillIndex) => (
                                                    <div key={skillIndex} className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                                        <span className="text-white/80 text-xs sm:text-sm">{skill}</span>
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
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl text-center">
                                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/30"></div>
                                    <span className="font-semibold text-white text-sm sm:text-base">Currently Available</span>
                                </div>
                                <p className="text-white/60 text-xs sm:text-sm">
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