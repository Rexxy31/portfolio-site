"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisible);
        return () => window.removeEventListener("scroll", toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return visible ? (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-[#39ff14] hover:bg-[#2ecc12] text-black p-3 rounded-full shadow-[0_0_10px_#39ff14] transition-all duration-300"
            aria-label="Scroll to top"
        >
            <ArrowUp size={20} />
        </button>
    ) : null;
}
