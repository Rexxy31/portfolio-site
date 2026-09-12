"use client";

import { useState } from "react";
import { Mail, Send, MapPin } from "lucide-react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:yogeshkumarn.02@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8 sm:mb-10">
          <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border-2 border-pencil rough-circle bg-pen-blue/10">
            <Mail size={18} strokeWidth={2.5} />
          </span>
          <span className="sticky-tag text-lg sm:text-xl">Get In Touch</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* Contact form */}
          <div
            className="card-sketchy p-5 sm:p-6 md:p-8"
            style={{ transform: "rotate(-0.5deg)" }}
          >
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-pencil mb-5 sm:mb-6">
              Drop me a note ✉️
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-sm sm:text-base font-body text-pencil/70 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="What should I call you?"
                  className="input-sketchy"
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base font-body text-pencil/70 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="input-sketchy"
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base font-body text-pencil/70 mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project, idea, or just say hi..."
                  className="input-sketchy input-sketchy-textarea"
                />
              </div>

              <button
                type="submit"
                className="btn-sketchy w-full justify-center text-base sm:text-lg"
              >
                <Send size={18} strokeWidth={2.5} />
                {sent ? "Opening Mail Client..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact info + speech bubble */}
          <div className="space-y-6 sm:space-y-8">
            {/* Speech bubble quote */}
            <div
              className="relative card-sketchy p-5 sm:p-6 md:p-8"
              style={{ transform: "rotate(0.5deg)" }}
            >
              <p className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-pencil leading-relaxed">
                &ldquo;Let&apos;s build something that matters.&rdquo;
              </p>

              {/* Speech bubble tail */}
              <div
                className="absolute -bottom-4 left-8 w-0 h-0"
                style={{
                  borderLeft: "12px solid transparent",
                  borderRight: "12px solid transparent",
                  borderTop: "16px solid #2d2d2d",
                }}
              />
              <div
                className="absolute -bottom-2.5 left-8.5 w-0 h-0"
                style={{
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderTop: "14px solid white",
                }}
              />
            </div>

            {/* Contact details */}
            <div
              className="card-postit tack p-5 sm:p-6 md:p-8"
              style={{ transform: "rotate(-1deg)" }}
            >
              <h3 className="text-lg sm:text-xl font-heading font-bold text-pencil mb-4 sm:mb-5">
                Find me at
              </h3>

              <div className="space-y-3.5 sm:space-y-4">
                <a
                  href="mailto:yogeshkumarn.02@gmail.com"
                  className="flex items-center gap-2.5 sm:gap-3 text-base sm:text-lg font-body text-pencil hover:text-accent transition-colors no-underline group break-all"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 border-2 border-pencil rough-circle bg-white group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all shrink-0">
                    <Mail size={15} strokeWidth={2.5} />
                  </span>
                  yogeshkumarn.02@gmail.com
                </a>

                <a
                  href="https://linkedin.com/in/yogeshkumar01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 sm:gap-3 text-base sm:text-lg font-body text-pencil hover:text-pen-blue transition-colors no-underline group break-all"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 border-2 border-pencil rough-circle bg-white group-hover:bg-pen-blue group-hover:text-white group-hover:border-pen-blue transition-all shrink-0">
                    <LinkedInIcon sx={{ fontSize: 17 }} />
                  </span>
                  linkedin.com/in/yogeshkumar01
                </a>

                <a
                  href="https://github.com/Rexxy31"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 sm:gap-3 text-base sm:text-lg font-body text-pencil hover:text-accent transition-colors no-underline group break-all"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 border-2 border-pencil rough-circle bg-white group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all shrink-0">
                    <GitHubIcon sx={{ fontSize: 17 }} />
                  </span>
                  github.com/Rexxy31
                </a>

                <div className="flex items-center gap-2.5 sm:gap-3 text-base sm:text-lg font-body text-pencil/60">
                  <span className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 border-2 border-pencil/40 rough-circle bg-white shrink-0">
                    <MapPin size={15} strokeWidth={2.5} />
                  </span>
                  Bengaluru, Karnataka, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
