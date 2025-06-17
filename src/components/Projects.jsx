import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-24 py-20 bg-black px-6 text-green-300 font-mono">
            <div className="max-w-6xl mx-auto text-center">
                <FadeInWhenVisible>
                    <h2 className="text-4xl font-extrabold text-green-400 mb-4 drop-shadow-glow">
                        &gt; Projects
                    </h2>
                    <div className="w-24 h-1 bg-green-500 mx-auto mb-8 rounded-full opacity-60 blur-sm" />
                    <p className="text-green-200 text-lg leading-7 mb-6">
                        Here are a few things I’ve built — combining code, curiosity, and a hacker mindset.
                    </p>
                </FadeInWhenVisible>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <FadeInWhenVisible key={index} delay={index * 0.1}>
                            <ProjectCard project={project} />
                        </FadeInWhenVisible>
                    ))}
                </div>
            </div>
        </section>
    );
}
