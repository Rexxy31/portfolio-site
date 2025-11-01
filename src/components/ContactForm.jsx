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
import FadeInWhenVisible from "./FadeInWhenVisible";

// Simple toast implementation (replace with your actual toast library)
const toast = {
    success: (message) => console.log('Success:', message),
    error: (message) => console.log('Error:', message)
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
        { icon: <Github className="w-5 h-5" />, label: "GitHub", url: "https://github.com/Rexxy31" },
        { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", url: "https://linkedin.com/in/yogeshkumar01" },
        { icon: <Twitter className="w-5 h-5" />, label: "Twitter", url: "https://twitter.com/yogionbirdapp" }
    ];

    return (
        <section
            id="contact"
            className="scroll-mt-24 py-16 sm:py-24 lg:py-32 bg-black px-4 sm:px-6 text-white font-mono relative overflow-hidden"
        >
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <FadeInWhenVisible>
                        <div className="inline-flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-white/30"></div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
                                <span className="text-red-500">&gt;</span> Get In Touch
                            </h2>
                            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-white/30"></div>
                        </div>
                        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/10 via-white/30 to-white/10 mx-auto rounded-full shadow-lg shadow-white/10" />
                    </FadeInWhenVisible>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Contact Form */}
                    <FadeInWhenVisible delay={0.2}>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                                <Terminal className="w-5 sm:w-6 h-5 sm:h-6 text-red-500" />
                                <h3 className="text-xl sm:text-2xl font-bold text-white">Send Message</h3>
                            </div>

                            <div className="space-y-4 sm:space-y-6">
                                {/* Name Field */}
                                <div className="relative">
                                    <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-red-500">
                                        <User className="w-4 sm:w-5 h-4 sm:h-5" />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300 text-sm sm:text-base ${
                                            errors.name ? 'border-red-500' : 'border-white/20'
                                        }`}
                                    />
                                    {errors.name && (
                                        <div className="flex items-center gap-2 mt-2 text-red-500 text-xs sm:text-sm">
                                            <AlertCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                                            <span>{errors.name}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div className="relative">
                                    <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-red-500">
                                        <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300 text-sm sm:text-base ${
                                            errors.email ? 'border-red-500' : 'border-white/20'
                                        }`}
                                    />
                                    {errors.email && (
                                        <div className="flex items-center gap-2 mt-2 text-red-500 text-xs sm:text-sm">
                                            <AlertCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                                            <span>{errors.email}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Message Field */}
                                <div className="relative">
                                    <div className="absolute left-3 sm:left-4 top-3 sm:top-4 text-red-500">
                                        <MessageSquare className="w-4 sm:w-5 h-4 sm:h-5" />
                                    </div>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                        className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300 resize-none text-sm sm:text-base ${
                                            errors.message ? 'border-red-500' : 'border-white/20'
                                        }`}
                                    />
                                    {errors.message && (
                                        <div className="flex items-center gap-2 mt-2 text-red-500 text-xs sm:text-sm">
                                            <AlertCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                                            <span>{errors.message}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className={`w-full flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                                        loading
                                            ? 'bg-white/10 text-white/40 cursor-not-allowed'
                                            : 'bg-white text-black hover:bg-white/90 shadow-lg hover:shadow-white/25'
                                    }`}
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-4 sm:w-5 h-4 sm:h-5 animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : success ? (
                                        <>
                                            <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                                            <span>Message Sent!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 sm:w-5 h-4 sm:h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </FadeInWhenVisible>

                    {/* Contact Info & Social Links */}
                    <div className="space-y-6 sm:space-y-8">
                        {/* Contact Information */}
                        <FadeInWhenVisible delay={0.3}>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl hover:bg-white/10 transition-all duration-300">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>
                                <div className="space-y-4 sm:space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <div key={index} className="flex items-start gap-3 sm:gap-4">
                                            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center text-red-500 border border-white/20">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white text-sm sm:text-base">{info.label}</h4>
                                                <p className="text-white/80 text-sm sm:text-base">{info.value}</p>
                                                <p className="text-white/60 text-xs sm:text-sm">{info.subtext}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        {/* Social Links */}
                        <FadeInWhenVisible delay={0.4}>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl hover:bg-white/10 transition-all duration-300">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Connect With Me</h3>
                                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-red-500 rounded-xl transition-all duration-300 transform hover:scale-105"
                                        >
                                            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center text-red-500 group-hover:text-red-400 border border-white/20 group-hover:border-red-500 transition-all duration-300">
                                                {link.icon}
                                            </div>
                                            <span className="text-white/80 group-hover:text-white font-medium text-sm sm:text-base">{link.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        {/* Quick Response */}
                        <FadeInWhenVisible delay={0.5}>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl text-center hover:bg-white/10 transition-all duration-300">
                                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
                                    <span className="font-semibold text-red-500 text-sm sm:text-base">Quick Response</span>
                                </div>
                                <p className="text-white/60 text-xs sm:text-sm">
                                    I typically respond within a few hours during business days
                                </p>
                            </div>
                        </FadeInWhenVisible>
                    </div>
                </div>
            </div>
        </section>
    );
}