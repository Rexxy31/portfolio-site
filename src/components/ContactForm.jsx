"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (data.success) {
                toast.success("Message sent!");
                setForm({ name: "", email: "", message: "" });
                setSuccess(true);
                setTimeout(() => setSuccess(false), 3000);
            } else {
                toast.error("Failed to send message.");
            }
        } catch (error) {
            toast.error("Error sending message.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <section id="contact" className="scroll-mt-24 py-20 px-6 bg-black text-green-400 font-mono">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-extrabold mb-6 text-green-500 drop-shadow-neon text-center">
                    &gt; Contact Me
                </h2>
                <form onSubmit={handleSubmit} className="mx-auto p-4 space-y-6">
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full p-3 rounded border border-green-600 bg-transparent placeholder-green-600 text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full p-3 rounded border border-green-600 bg-transparent placeholder-green-600 text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    />
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        rows={5}
                        className="w-full p-3 rounded border border-green-600 bg-transparent placeholder-green-600 text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-700 hover:bg-green-600 text-black font-bold py-3 rounded shadow-lg drop-shadow-neon transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    <AnimatePresence>
                        {success && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="flex items-center justify-center mt-4 text-green-400 font-medium"
                            >
                                <svg
                                    className="w-6 h-6 mr-2 stroke-green-400"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                Sent successfully!
                            </motion.div>
                        )}
                    </AnimatePresence>
                </form>
            </div>
        </section>
    );
}
