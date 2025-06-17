import FadeInWhenVisible from "./FadeInWhenVisible";

export default function About() {
    return (
        <section id="about" className="scroll-mt-24 py-24 bg-black px-6 md:px-12 text-green-300 font-mono">
            <div className="max-w-5xl mx-auto text-center">
                <FadeInWhenVisible>
                    <h2 className="text-4xl font-extrabold text-green-400 mb-6 drop-shadow-glow">
                        &gt; About Me
                    </h2>
                    {/* Optional glowing divider */}
                    <div className="w-24 h-1 bg-green-400 mx-auto mb-8 rounded-full opacity-60 blur-sm" />
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.1}>
                    <p className="text-green-200 text-lg leading-8 mb-6">
                        I&apos;m a <span className="text-green-400 font-semibold">cybersecurity enthusiast</span> and{" "}
                        <span className="text-green-400 font-semibold">web developer</span> passionate about solving
                        real-world problems using secure and scalable software.
                    </p>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.2}>
                    <p className="text-green-200 text-lg leading-8 mb-6">
                        By day, I contribute to{" "}
                        <span className="text-green-400 font-medium">Karnataka’s land mapping projects</span>,
                        working hands-on with GIS, data pipelines, and verification workflows involving vendors and
                        state officials.
                    </p>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.3}>
                    <p className="text-green-200 text-lg leading-8 mb-6">
                        Outside work, I write cybersecurity blogs, explore ethical hacking tools, and build side
                        projects in <span className="text-green-400 font-semibold">React</span>,{" "}
                        <span className="text-green-400 font-semibold">Next.js</span>, and{" "}
                        <span className="text-green-400 font-semibold">Node.js</span>.
                    </p>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.4}>
                    <p className="text-green-200 text-lg leading-8">
                        Currently upskilling in <span className="italic text-green-300">threat modeling</span>,{" "}
                        <span className="italic text-green-300">Linux hardening</span>, and{" "}
                        <span className="italic text-green-300">networking fundamentals</span> — aiming to break
                        into roles in{" "}
                        <span className="text-green-400 font-medium">security engineering</span> or{" "}
                        <span className="text-green-400 font-medium">offensive security</span>.
                    </p>
                </FadeInWhenVisible>
            </div>
        </section>
    );
}
