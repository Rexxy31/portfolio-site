import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
    title: "Yogesh Kumar | Cybersecurity & Web Development Portfolio",
    description: "Full-stack web developer and cybersecurity enthusiast specializing in secure applications, penetration testing, and ethical hacking. Currently pursuing CEH certification.",
    keywords: ["cybersecurity", "web development", "penetration testing", "ethical hacking", "CEH", "full-stack developer", "React", "Node.js", "security"],
    authors: [{ name: "Yogesh Kumar" }],
    creator: "Yogesh Kumar",
    publisher: "Yogesh Kumar",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://yogeshkumar.dev'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "Yogesh Kumar | Cybersecurity & Web Development Portfolio",
        description: "Full-stack web developer and cybersecurity enthusiast specializing in secure applications, penetration testing, and ethical hacking.",
        url: 'https://yogeshkumar.dev',
        siteName: 'Yogesh Kumar Portfolio',
        images: [
            {
                url: '/favicon.svg',
                width: 32,
                height: 32,
                alt: 'Yogesh Kumar Portfolio',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Yogesh Kumar | Cybersecurity & Web Development Portfolio",
        description: "Full-stack web developer and cybersecurity enthusiast specializing in secure applications, penetration testing, and ethical hacking.",
        images: ['/favicon.svg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.svg',
        shortcut: '/favicon.svg',
        apple: '/favicon.svg',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        </head>
        <body className="bg-black text-white font-mono selection:bg-red-600 selection:text-white">
        <Navbar />
        <Toaster 
            position="top-right" 
            toastOptions={{
                style: {
                    background: '#111111',
                    color: '#ffffff',
                    border: '1px solid #dc2626',
                },
            }}
        />
        {children}
        <Footer />
        </body>
        </html>
    );
}
