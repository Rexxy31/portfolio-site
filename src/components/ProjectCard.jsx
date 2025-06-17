import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
    return (
        <div className="bg-[#0d0d0d] border border-green-800/30 rounded-xl shadow-[0_0_15px_#00ff00aa] hover:shadow-[0_0_25px_#00ff00cc] transition-transform transform hover:-translate-y-2 duration-300 p-6 space-y-4 text-green-200 font-mono">
            <h3 className="text-xl font-bold text-green-400 tracking-wide">
                &gt; {project.title}
            </h3>

            <p className="text-green-300 text-sm leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 text-sm">
                {project.tech.map((tech, idx) => (
                    <span
                        key={idx}
                        className="bg-green-900/30 border border-green-700 px-2 py-1 rounded-full text-green-300"
                    >
						{tech}
					</span>
                ))}
            </div>

            <div className="flex gap-4 pt-2 text-green-400">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:underline hover:text-green-300 transition"
                    >
                        <Github size={16} />
                        GitHub
                    </a>
                )}
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:underline hover:text-green-300 transition"
                    >
                        <ExternalLink size={16} />
                        Live Demo
                    </a>
                )}
                {project.visit && (
                    <a
                        href={project.visit}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:underline hover:text-green-300 transition"
                    >
                        <ExternalLink size={16} />
                        Visit
                    </a>
                )}
            </div>
        </div>
    );
}
