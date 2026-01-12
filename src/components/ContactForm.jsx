"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
    Mail,
    MapPin,
    Github,
    Linkedin,
    Twitter,
    Copy,
    Check,
    ArrowRight,
    Send,
    User,
    MessageSquare,
    Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function ContactForm() {
    const [copied, setCopied] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focused, setFocused] = useState({ name: false, email: false, message: false });

    // Watch form values for floating label behavior
    const watchName = watch("name", "");
    const watchEmail = watch("email", "");
    const watchMessage = watch("message", "");

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                toast.success('Message sent successfully!');
                reset();
            } else {
                toast.error('Failed to send message.');
            }
        } catch (error) {
            toast.error('An error occurred.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <MapPin className="w-5 h-5" />,
            label: "Location",
            value: "Bengaluru, India",
            link: "https://www.google.com/maps/place/Bengaluru,+Karnataka",
            isAction: false
        },
        {
            icon: <Mail className="w-5 h-5" />,
            label: "Email",
            value: "yogeshkumarn.02@gmail.com",
            link: "mailto:yogeshkumarn.02@gmail.com",
            isAction: true
        }
    ];

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        toast.success('Email copied to clipboard!');
        setTimeout(() => setCopied(false), 2000);
    };

    // Check if label should float (focused or has value)
    const shouldFloat = (fieldName, value) => focused[fieldName] || value?.length > 0;

    return (
        <section id="contact" className="scroll-mt-24 py-20 sm:py-32 bg-slate-950 px-4 sm:px-6 relative overflow-hidden">
            {/* Background Ornaments */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 sm:mb-20">
                    <FadeInWhenVisible>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-8"
                        >
                            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest leading-none">Open for Collaboration</span>
                        </motion.div>
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8">
                            Ready to <span className="text-indigo-500">Scale</span>?
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
                            Whether you have a specific project in mind or just want to talk system architecture, I'm just a click away.
                        </p>
                    </FadeInWhenVisible>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <FadeInWhenVisible delay={0.1}>
                        <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl">
                            <h3 className="text-[10px] font-black text-slate-500 mb-8 border-b border-white/5 pb-6 uppercase tracking-[0.3em]">
                                Send a Message
                            </h3>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                {/* Name Field - Floating Label */}
                                <div className="relative">
                                    <input
                                        id="name"
                                        type="text"
                                        className={`peer w-full px-5 pt-7 pb-3 bg-slate-950/60 border rounded-2xl text-white focus:outline-none transition-all duration-300 ${errors.name
                                                ? 'border-red-500/50 focus:border-red-500/50'
                                                : 'border-white/10 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20'
                                            }`}
                                        {...register("name", {
                                            required: "Name is required",
                                            minLength: { value: 2, message: "Name must be at least 2 characters" }
                                        })}
                                        onFocus={() => setFocused(prev => ({ ...prev, name: true }))}
                                        onBlur={() => setFocused(prev => ({ ...prev, name: false }))}
                                        aria-invalid={errors.name ? "true" : "false"}
                                    />
                                    <label
                                        htmlFor="name"
                                        className={`absolute left-5 flex items-center gap-2 transition-all duration-300 pointer-events-none ${shouldFloat('name', watchName)
                                                ? 'top-2 text-[10px] font-black uppercase tracking-[0.15em] text-indigo-400'
                                                : 'top-1/2 -translate-y-1/2 text-sm text-slate-500'
                                            }`}
                                    >
                                        <User className="w-3.5 h-3.5" />
                                        Full Name
                                    </label>
                                    <AnimatePresence>
                                        {errors.name && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -5 }}
                                                className="text-red-400 text-xs mt-2 font-medium ml-2"
                                            >
                                                {errors.name.message}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Email Field - Floating Label */}
                                <div className="relative">
                                    <input
                                        id="email"
                                        type="email"
                                        className={`peer w-full px-5 pt-7 pb-3 bg-slate-950/60 border rounded-2xl text-white focus:outline-none transition-all duration-300 ${errors.email
                                                ? 'border-red-500/50 focus:border-red-500/50'
                                                : 'border-white/10 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20'
                                            }`}
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                        onFocus={() => setFocused(prev => ({ ...prev, email: true }))}
                                        onBlur={() => setFocused(prev => ({ ...prev, email: false }))}
                                        aria-invalid={errors.email ? "true" : "false"}
                                    />
                                    <label
                                        htmlFor="email"
                                        className={`absolute left-5 flex items-center gap-2 transition-all duration-300 pointer-events-none ${shouldFloat('email', watchEmail)
                                                ? 'top-2 text-[10px] font-black uppercase tracking-[0.15em] text-indigo-400'
                                                : 'top-1/2 -translate-y-1/2 text-sm text-slate-500'
                                            }`}
                                    >
                                        <Mail className="w-3.5 h-3.5" />
                                        Email Address
                                    </label>
                                    <AnimatePresence>
                                        {errors.email && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -5 }}
                                                className="text-red-400 text-xs mt-2 font-medium ml-2"
                                            >
                                                {errors.email.message}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Message Field - Floating Label */}
                                <div className="relative">
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className={`peer w-full px-5 pt-8 pb-3 bg-slate-950/60 border rounded-2xl text-white focus:outline-none resize-none transition-all duration-300 ${errors.message
                                                ? 'border-red-500/50 focus:border-red-500/50'
                                                : 'border-white/10 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20'
                                            }`}
                                        {...register("message", {
                                            required: "Message is required",
                                            minLength: { value: 10, message: "Message must be at least 10 characters" }
                                        })}
                                        onFocus={() => setFocused(prev => ({ ...prev, message: true }))}
                                        onBlur={() => setFocused(prev => ({ ...prev, message: false }))}
                                        aria-invalid={errors.message ? "true" : "false"}
                                    />
                                    <label
                                        htmlFor="message"
                                        className={`absolute left-5 flex items-center gap-2 transition-all duration-300 pointer-events-none ${shouldFloat('message', watchMessage)
                                                ? 'top-2 text-[10px] font-black uppercase tracking-[0.15em] text-indigo-400'
                                                : 'top-5 text-sm text-slate-500'
                                            }`}
                                    >
                                        <MessageSquare className="w-3.5 h-3.5" />
                                        Your Message
                                    </label>
                                    <AnimatePresence>
                                        {errors.message && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -5 }}
                                                className="text-red-400 text-xs mt-2 font-medium ml-2"
                                            >
                                                {errors.message.message}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-3 group focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </FadeInWhenVisible>

                    {/* Contact Info Card */}
                    <FadeInWhenVisible delay={0.2}>
                        <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl h-fit">
                            <h3 className="text-[10px] font-black text-slate-500 mb-8 border-b border-white/5 pb-6 uppercase tracking-[0.3em]">
                                Quick Connect
                            </h3>

                            <div className="space-y-4 mb-10">
                                {contactInfo.map((info, idx) => (
                                    <div key={idx} className="relative group/info">
                                        <a
                                            href={info.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-5 p-5 bg-slate-950/40 rounded-2xl border border-white/5 hover:border-indigo-500/40 hover:bg-slate-950 transition-all duration-300 w-full group-hover/info:shadow-lg group-hover/info:shadow-indigo-500/5"
                                        >
                                            <div className="w-12 h-12 bg-indigo-500/5 group-hover/info:bg-indigo-600 rounded-xl flex items-center justify-center text-indigo-400 group-hover/info:text-white border border-indigo-500/10 group-hover/info:border-indigo-500 transition-all duration-500 flex-shrink-0">
                                                {info.icon}
                                            </div>
                                            <div className="flex-grow">
                                                <div className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">{info.label}</div>
                                                <div className="text-white font-bold tracking-tight text-sm">{info.value}</div>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-slate-700 group-hover/info:text-indigo-400 group-hover/info:translate-x-1 transition-all" />
                                        </a>

                                        {info.isAction && (
                                            <button
                                                onClick={() => copyToClipboard(info.value)}
                                                className="absolute top-4 right-4 p-2 bg-slate-800/50 hover:bg-indigo-600 text-slate-500 hover:text-white rounded-lg transition-all opacity-0 group-hover/info:opacity-100 z-20"
                                                title="Copy to clipboard"
                                                aria-label="Copy email to clipboard"
                                            >
                                                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="pt-8 border-t border-white/5">
                                <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-5 text-center">Find Me Online</p>
                                <div className="flex justify-center gap-4">
                                    {[
                                        { icon: <Github className="w-5 h-5" />, label: "GitHub", url: "https://github.com/Rexxy31" },
                                        { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", url: "https://linkedin.com/in/yogeshkumar01" },
                                        { icon: <Twitter className="w-5 h-5" />, label: "Twitter", url: "https://twitter.com/yogionbirdapp" }
                                    ].map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-slate-950/80 hover:bg-indigo-600 text-slate-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-white/5 hover:border-indigo-500"
                                            aria-label={link.label}
                                        >
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </div>
        </section>
    );
}