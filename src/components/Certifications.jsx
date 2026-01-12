"use client";

import { useState, useEffect } from "react";
import { Shield, Clock, CheckCircle, Award, BookOpen, Target, Zap } from "lucide-react";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Certifications() {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Animate progress bar
                    const timer = setInterval(() => {
                        setProgress(prev => {
                            if (prev >= 75) {
                                clearInterval(timer);
                                return 75;
                            }
                            return prev + 1;
                        });
                    }, 30);
                }
            },
            { threshold: 0.3 }
        );

        const element = document.getElementById('certifications');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const certifications = [
        {
            name: "AWS Certified Developer – Associate",
            issuer: "Amazon Web Services",
            status: "planned",
            progress: 0,
            description: "Validation of expertise in developing, deploying, and debugging cloud-based applications using AWS.",
            skills: ["Cloud Development", "Serverless Architecture", "AWS Lambda", "DynamoDB", "CI/CD"],
            icon: <Zap className="w-6 h-6" />,
            expectedCompletion: "Q2 2025"
        },
        {
            name: "Certified Ethical Hacker (CEH)",
            issuer: "EC-Council",
            status: "in-progress",
            progress: 75,
            description: "Comprehensive ethical hacking certification focused on building secure-by-design applications and identifying vulnerabilities.",
            skills: ["Secure Engineering", "Vulnerability Assessment", "Network Defense", "Secure SDLC"],
            icon: <Shield className="w-6 h-6" />,
            expectedCompletion: "Q3 2025"
        },
        {
            name: "OSCP",
            issuer: "Offensive Security",
            status: "planned",
            progress: 0,
            description: "Advanced hands-on penetration testing certification to master offensive security engineering techniques.",
            skills: ["Penetration Testing", "Exploitation", "Practical Security Engineering"],
            icon: <Target className="w-6 h-6" />,
            expectedCompletion: "Q4 2025"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "completed": return "text-green-400";
            case "in-progress": return "text-indigo-400";
            case "planned": return "text-slate-500";
            default: return "text-slate-500";
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case "completed": return <CheckCircle className="w-5 h-5" />;
            case "in-progress": return <Clock className="w-5 h-5" />;
            case "planned": return <BookOpen className="w-5 h-5" />;
            default: return <BookOpen className="w-5 h-5" />;
        }
    };

    return (
        <section id="certifications" className="scroll-mt-24 py-16 sm:py-24 lg:py-32 bg-slate-950 px-4 sm:px-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <FadeInWhenVisible>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
                            <span className="text-indigo-500">Certifications</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(99,102,241,0.4)]" />
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            My active pursuit of industry-recognized credentials in cybersecurity and cloud technologies.
                        </p>
                    </FadeInWhenVisible>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {certifications.map((cert, index) => (
                        <FadeInWhenVisible key={cert.name} delay={index * 0.1}>
                            <div className="bg-slate-900 border border-white/5 rounded-3xl p-6 sm:p-8 hover:border-indigo-500/30 transition-all duration-500 group h-full">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4 sm:mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                            {cert.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{cert.name}</h3>
                                            <p className="text-slate-500 text-sm">{cert.issuer}</p>
                                        </div>
                                    </div>
                                    <div className={`flex items-center gap-2 ${getStatusColor(cert.status)}`}>
                                        {getStatusIcon(cert.status)}
                                        <span className="text-sm font-medium capitalize hidden sm:inline">
                                            {cert.status.replace('-', ' ')}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                                    {cert.description}
                                </p>

                                {/* Progress Bar (for in-progress certs) */}
                                {cert.status === "in-progress" && (
                                    <div className="mb-4 sm:mb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-slate-500">Progress</span>
                                            <span className="text-sm font-medium text-white">{isVisible ? progress : 0}%</span>
                                        </div>
                                        <div className="w-full bg-slate-800 rounded-full h-2">
                                            <div
                                                className="h-2 rounded-full transition-all duration-1000 ease-out bg-indigo-500"
                                                style={{ width: `${isVisible ? progress : 0}%` }}
                                            ></div>
                                        </div>
                                        <p className="text-xs text-slate-600 mt-1">Expected completion: {cert.expectedCompletion}</p>
                                    </div>
                                )}

                                {/* Skills */}
                                <div className="mb-4 sm:mb-6">
                                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Key Skills:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="bg-slate-950 text-slate-400 px-3 py-1 rounded-lg text-xs font-medium border border-white/5"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Status Badge */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                    <div className="flex items-center gap-2">
                                        <Award className="w-4 h-4 text-slate-600" />
                                        <span className="text-xs text-slate-600">
                                            {cert.status === "completed" ? "Certified" :
                                                cert.status === "in-progress" ? "In Progress" : "Planned"}
                                        </span>
                                    </div>
                                    {cert.status === "in-progress" && (
                                        <div className="flex items-center gap-2 text-indigo-400">
                                            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                                            <span className="text-xs font-medium">Active</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </FadeInWhenVisible>
                    ))}
                </div>

                {/* Call to Action */}
                <FadeInWhenVisible delay={0.4}>
                    <div className="text-center mt-12 sm:mt-16">
                        <div className="bg-indigo-600/5 border border-indigo-500/10 rounded-[2.5rem] p-8 sm:p-12">
                            <div className="max-w-2xl mx-auto">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                    Committed to Continuous Learning
                                </h3>
                                <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
                                    I'm actively pursuing cybersecurity certifications to stay current with industry best practices
                                    and demonstrate my commitment to professional development in the security field.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="#contact"
                                        className="group inline-flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-indigo-600/20 transition-all duration-300"
                                    >
                                        <span>Discuss Opportunities</span>
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                    <a
                                        href="/Yogesh_Kumar_CV.pdf"
                                        download
                                        className="group inline-flex items-center justify-center gap-3 bg-slate-900 border border-white/5 hover:border-indigo-500/30 text-slate-300 hover:text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300"
                                    >
                                        <span>Download Resume</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInWhenVisible>
            </div>
        </section>
    );
}