export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] text-center text-green-400 py-6 border-t border-green-700 font-mono select-none">
            <p className="text-sm drop-shadow-neon">
                &copy; {new Date().getFullYear()} Yogesh Kumar. All rights reserved.
            </p>
        </footer>
    );
}
