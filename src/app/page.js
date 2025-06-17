import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import BlogHome from "@/components/Blog";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
    return (
        <>
            <ScrollProgress />
            <Hero />
            <About />
            <Projects />
            <BlogHome />
            <ContactForm />
            <ScrollToTop />
        </>
    );
}
