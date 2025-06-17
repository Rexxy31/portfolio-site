import posts from "@/data/blogs";

export default function BlogHome() {
    return (
        <section
            id="blog"
            className="scroll-mt-24 max-w-4xl mx-auto py-16 px-6 bg-black text-green-300 font-mono"
        >
            <h1 className="text-4xl font-extrabold mb-6 text-green-400 drop-shadow-neon">
                &gt; Cybersecurity Blog
            </h1>
            <p className="text-green-200 text-lg leading-8 mb-10 max-w-3xl mx-auto">
                I write practical, beginner-friendly guides about cybersecurity concepts, tools, and case studies from real-world work or labs.
            </p>

            <ul className="space-y-10">
                {posts.map((post) => (
                    <li
                        key={post.url}
                        className="border-b border-green-700/40 pb-6 last:border-none"
                    >
                        <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-green-400 hover:underline text-2xl font-semibold"
                        >
                            &gt; {post.title}
                        </a>
                        <p className="text-green-500 text-xs mt-1">{post.date}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-block bg-green-900/60 border border-green-600 text-green-300 px-3 py-1 rounded-full text-xs font-mono tracking-wide drop-shadow-neon"
                                >
                  {tag}
                </span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
