"use client";

import { useState, useEffect } from "react";
import {
    Send,
    User,
    Mail,
    MessageSquare,
    CheckCircle,
    AlertCircle,
    Loader2,
    Terminal,
    Github,
    Linkedin,
    Twitter,
    MapPin,
    Clock,
    Globe
} from "lucide-react";

// Simple toast implementation (replace with your actual toast library)
const toast = {
    success: (message) => console.log('Success:', message),
    error: (message) => console.log('Error:', message)
};

// Simple FadeInWhenVisible component
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

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState({});
    const [typedText, setTypedText] = useState('');
    const fullText = '> Get In Touch';

    useEffect(() => {
        let i = 0;
        const typeTimer = setInterval(() => {
            if (i < fullText.length) {
                setTypedText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(typeTimer);
            }
        }, 100);

        return () => clearInterval(typeTimer);
    }, []);

    const validateForm = () => {
        const newErrors = {};

        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Please enter a valid email";
        }
        if (!form.message.trim()) newErrors.message = "Message is required";
        if (form.message.length < 10) newErrors.message = "Message must be at least 10 characters";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    async function handleSubmit() {
        if (!validateForm()) return;
        if (loading) return;

        setLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Replace with your actual API call
            // const res = await fetch("/api/contact", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(form),
            // });
            // const data = await res.json();

            // Simulate success
            const data = { success: true };

            if (data.success) {
                toast.success("Message sent successfully!");
                setForm({ name: "", email: "", message: "" });
                setSuccess(true);
                setErrors({});
                setTimeout(() => setSuccess(false), 5000);
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            toast.error("Error sending message. Please try again.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    }

    const contactInfo = [
        {
            icon: <MapPin className="w-5 h-5" />,
            label: "Location",
            value: "Bengaluru, India",
            subtext: "Available for remote work"
        },
        // {
        //     icon: <Clock className="w-5 h-5" />,
        //     label: "Response Time",
        //     value: "Within 24 hours",
        //     subtext: "Usually much faster"
        // },
        // {
        //     icon: <Globe className="w-5 h-5" />,
        //     label: "Time Zone",
        //     value: "IST (UTC+5:30)",
        //     subtext: "Flexible with global clients"
        // }
    ];

    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, label: "GitHub", url: "https://github.com/yourusername" },
        { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
        { icon: <Twitter className="w-5 h-5" />, label: "Twitter", url: "https://twitter.com/yourusername" }
    ];

    return (
        <section
            id="contact"
            className="scroll-mt-24 py-32 bg-gradient-to-br from-black via-gray-900 to-black px-6 text-green-300 font-mono relative overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5" />
            <div className="absolute top-1/4 right-1/6 w-80 h-80 bg-green-500/8 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/6 w-96 h-96 bg-emerald-500/6 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <FadeInWhenVisible>
                        <div className="inline-flex items-center gap-4 mb-6">
                            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-green-400"></div>
                            <h2 className="text-5xl md:text-6xl font-extrabold text-green-400 drop-shadow-glow">
                                {typedText}
                                <span className="animate-pulse">|</span>
                            </h2>
                            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-green-400"></div>
                        </div>
                        <div className="w-32 h-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 mx-auto rounded-full shadow-lg shadow-green-400/30 mb-8" />

                        <p className="text-green-200 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                            Ready to collaborate on your next{" "}
                            <span className="text-green-400 font-semibold">cybersecurity project</span>?{" "}
                            <span className="text-green-400 font-semibold">Let's connect</span> and build something amazing together.
                        </p>
                    </FadeInWhenVisible>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <FadeInWhenVisible delay={0.2}>
                        <div className="bg-green-500/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 shadow-xl">
                            <div className="flex items-center gap-3 mb-8">
                                <Terminal className="w-6 h-6 text-green-400" />
                                <h3 className="text-2xl font-bold text-green-400">Send Message</h3>
                            </div>

                            <div className="space-y-6">
                                {/* Name Field */}
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className={`w-full pl-12 pr-4 py-4 rounded-xl border bg-black/40 backdrop-blur-sm placeholder-green-600/70 text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-400 transition-all duration-300 ${
                                            errors.name ? 'border-red-500/50 focus:ring-red-500/50' : 'border-green-600/30'
                                        }`}
                                    />
                                    {errors.name && (
                                        <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.name}
                                        </div>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        className={`w-full pl-12 pr-4 py-4 rounded-xl border bg-black/40 backdrop-blur-sm placeholder-green-600/70 text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-400 transition-all duration-300 ${
                                            errors.email ? 'border-red-500/50 focus:ring-red-500/50' : 'border-green-600/30'
                                        }`}
                                    />
                                    {errors.email && (
                                        <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.email}
                                        </div>
                                    )}
                                </div>

                                {/* Message Field */}
                                <div className="relative">
                                    <div className="absolute left-4 top-6 text-green-500">
                                        <MessageSquare className="w-5 h-5" />
                                    </div>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project, goals, or just say hello..."
                                        rows={6}
                                        className={`w-full pl-12 pr-4 py-4 rounded-xl border bg-black/40 backdrop-blur-sm placeholder-green-600/70 text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-400 transition-all duration-300 resize-none ${
                                            errors.message ? 'border-red-500/50 focus:ring-red-500/50' : 'border-green-600/30'
                                        }`}
                                    />
                                    <div className="absolute bottom-4 right-4 text-xs text-green-500/70">
                                        {form.message.length}/500
                                    </div>
                                    {errors.message && (
                                        <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.message}
                                        </div>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 disabled:from-green-700 disabled:to-emerald-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3 cursor-pointer"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Sending Message...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </div>

                                {/* Success Message */}
                                {success && (
                                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center gap-3 text-green-400 animate-pulse">
                                        <CheckCircle className="w-6 h-6 flex-shrink-0" />
                                        <div>
                                            <div className="font-semibold">Message sent successfully!</div>
                                            <div className="text-sm text-green-300">I'll get back to you within 24 hours.</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </FadeInWhenVisible>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Info Cards */}
                        <FadeInWhenVisible delay={0.3}>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-green-400 mb-6">Contact Information</h3>
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="bg-green-500/5 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:bg-green-500/10 hover:border-green-400/30 transition-all duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="text-green-400 mt-1">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <div className="text-green-300 font-semibold">{info.label}</div>
                                                <div className="text-green-400 text-lg font-mono">{info.value}</div>
                                                <div className="text-green-500 text-sm mt-1">{info.subtext}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeInWhenVisible>

                        {/* Social Links */}
                        <FadeInWhenVisible delay={0.4}>
                            <div className="bg-green-500/5 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
                                <h4 className="text-xl font-semibold text-green-400 mb-4">Connect With Me</h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-lg hover:bg-green-500/20 hover:border-green-400 hover:scale-110 transition-all duration-300 text-green-400 hover:text-green-300"
                                            title={social.label}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        {/* Availability Status */}
                        <FadeInWhenVisible delay={0.5}>
                            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <h4 className="text-xl font-semibold text-green-400">Available for Work</h4>
                                </div>
                                <p className="text-green-200 text-sm leading-relaxed">
                                    Currently accepting new cybersecurity projects and consulting opportunities.
                                    Specializing in web application security, penetration testing, and security audits.
                                </p>
                            </div>
                        </FadeInWhenVisible>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .drop-shadow-glow {
                    filter: drop-shadow(0 0 20px rgba(34, 197, 94, 0.5));
                }
            `}</style>
        </section>
    );
}