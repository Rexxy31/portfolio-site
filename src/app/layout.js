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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Yogesh Kumar",
                            "jobTitle": "Software Engineer",
                            "url": "https://yogeshkumar.dev",
                            "sameAs": [
                                "https://github.com/Rexxy31"
                            ],
                            "knowsAbout": ["Cybersecurity", "Web Development", "Full-Stack Engineering", "GIS", "Solutions Architecture"]
                        })
                    }}
                />
            </head>
            <body className="bg-slate-950 text-slate-50 selection:bg-indigo-600 selection:text-white">
                {/* Skip to main content link for accessibility */}
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:outline-none"
                >
                    Skip to main content
                </a>
                <Navbar />
                <Toaster
                    position="top-right"
                    toastOptions={{
                        style: {
                            background: '#1e293b',
                            color: '#f8fafc',
                            border: '1px solid #6366f1',
                        },
                    }}
                />
                <div id="main-content">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
