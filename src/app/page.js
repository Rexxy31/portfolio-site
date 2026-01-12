"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";
import ParticlesBackground from "@/components/ParticlesBackground";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
    return (
        <main className="relative min-h-screen">
            <ParticlesBackground />
            <ScrollProgress />
            <Hero />
            <About />
            <Experience />
            <Projects />
            {/* <Testimonials /> */}
            {/* <Certifications /> */}
            <Blog />
            <ContactForm />
            <ScrollToTop />
        </main>
    );
}
