import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) {
            toast.error("Please fill out all fields.");
            return;
        }

        if (!validateEmail(form.email)) {
            toast.error("Enter a valid email address.");
            return;
        }

        const response = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(form),
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Message sent!");
            setForm({ name: "", email: "", message: "" });
        } else {
            toast.error("Failed to send message. Try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="border rounded p-2 w-full"
            />
            <input
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="border rounded p-2 w-full"
            />
            <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="border rounded p-2 w-full"
            />
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
                Send
            </button>
        </form>
    );
}
