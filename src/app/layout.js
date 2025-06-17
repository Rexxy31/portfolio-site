import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
    title: "Yogesh Kumar | Portfolio",
    description: "Web Developer & Cybersecurity Enthusiast",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="bg-black text-green-300 font-mono selection:bg-green-500 selection:text-black">
        <Navbar />
        <Toaster position="top-right" />
        {children}
        <Footer />
        </body>
        </html>
    );
}
