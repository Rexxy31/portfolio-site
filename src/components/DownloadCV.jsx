export default function DownloadCV() {
    return (
        <div className="flex justify-center">
            <a
                href="/Yogesh_Kumar_CV.pdf"
                download
                className="mt-6 inline-block bg-[#0f380f] text-green-400 font-mono px-6 py-3 rounded-lg shadow-md
                   hover:bg-[#147214] hover:drop-shadow-neon transition duration-300 ease-in-out"
            >
                Download CV
            </a>
        </div>
    );
}
