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
            color: "blue",
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
            color: "red",
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
            color: "purple",
            expectedCompletion: "Q4 2025"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "completed": return "text-green-500";
            case "in-progress": return "text-red-500";
            case "planned": return "text-gray-500";
            default: return "text-gray-500";
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

    const getProgressColor = (color) => {
        switch (color) {
            case "red": return "bg-red-500";
            case "blue": return "bg-blue-500";
            case "purple": return "bg-purple-500";
            default: return "bg-gray-500";
        }
    };

    return (
        <section id="certifications" className="scroll-mt-24 py-16 sm:py-24 lg:py-32 bg-black px-4 sm:px-6 text-white font-mono relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <FadeInWhenVisible>
                        <div className="inline-flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-red-500/30"></div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
                                <span className="text-red-500">&gt;</span> Certifications
                            </h2>
                            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-red-500/30"></div>
                        </div>
                    </FadeInWhenVisible>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {certifications.map((cert, index) => (
                        <FadeInWhenVisible key={cert.name} delay={index * 0.1}>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl hover:bg-white/10 transition-all duration-300">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4 sm:mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-12 h-12 bg-${cert.color}-500/20 rounded-lg flex items-center justify-center text-${cert.color}-500 border border-${cert.color}-500/30`}>
                                            {cert.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white">{cert.name}</h3>
                                            <p className="text-white/60 text-sm">{cert.issuer}</p>
                                        </div>
                                    </div>
                                    <div className={`flex items-center gap-2 ${getStatusColor(cert.status)}`}>
                                        {getStatusIcon(cert.status)}
                                        <span className="text-sm font-medium capitalize">
                                            {cert.status.replace('-', ' ')}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                                    {cert.description}
                                </p>

                                {/* Progress Bar (for in-progress certs) */}
                                {cert.status === "in-progress" && (
                                    <div className="mb-4 sm:mb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-white/60">Progress</span>
                                            <span className="text-sm font-medium text-white">{isVisible ? progress : 0}%</span>
                                        </div>
                                        <div className="w-full bg-white/10 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProgressColor(cert.color)}`}
                                                style={{ width: `${isVisible ? progress : 0}%` }}
                                            ></div>
                                        </div>
                                        <p className="text-xs text-white/50 mt-1">Expected completion: {cert.expectedCompletion}</p>
                                    </div>
                                )}

                                {/* Skills */}
                                <div className="mb-4 sm:mb-6">
                                    <h4 className="text-sm font-semibold text-white mb-2 sm:mb-3">Key Skills Covered:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="bg-white/10 text-white/80 px-2 sm:px-3 py-1 rounded-full text-xs font-medium border border-white/20"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Status Badge */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Award className="w-4 h-4 text-white/60" />
                                        <span className="text-xs text-white/60">
                                            {cert.status === "completed" ? "Certified" :
                                                cert.status === "in-progress" ? "In Progress" : "Planned"}
                                        </span>
                                    </div>
                                    {cert.status === "in-progress" && (
                                        <div className="flex items-center gap-2 text-red-500">
                                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
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
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
                            <div className="max-w-2xl mx-auto">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                                    Committed to Continuous Learning
                                </h3>
                                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                                    I'm actively pursuing cybersecurity certifications to stay current with industry best practices
                                    and demonstrate my commitment to professional development in the security field.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                    <a
                                        href="#contact"
                                        className="group inline-flex items-center gap-2 sm:gap-3 bg-white text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg border border-white/10 hover:border-red-500 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                                    >
                                        <span>Discuss Opportunities</span>
                                        <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                    <a
                                        href="/Yogesh_Kumar_CV.pdf"
                                        download
                                        className="group inline-flex items-center gap-2 sm:gap-3 bg-white/10 border border-white/20 hover:bg-white/20 hover:border-red-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 text-sm sm:text-base"
                                    >
                                        <span>Download Resume</span>
                                        <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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