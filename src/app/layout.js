import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Yogesh Kumar | Software Development Engineer",
  description:
    "Software Development Engineer building scalable backend and full-stack systems. Experienced in Java, Spring Boot, PostgreSQL, React, and end-to-end application ownership in production environments.",
  keywords: [
    "Software Development Engineer",
    "Backend Engineer",
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "REST APIs",
    "React",
    "Next.js",
    "System Design",
    "Docker",
    "CI/CD",
    "Nginx",
    "GitHub",
  ],
  authors: [{ name: "Yogesh Kumar" }],
  creator: "Yogesh Kumar",
  publisher: "Yogesh Kumar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL("https://yogeshkumarn.vercel.app/"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Yogesh Kumar | Software Development Engineer",
    description:
      "Software Development Engineer focused on backend and full-stack systems, API design, databases, and scalable production applications.",
    url: "https://yogeshkumarn.vercel.app/",
    siteName: "Yogesh Kumar Portfolio",
    images: [
      {
        url: "/favicon.svg",
        width: 32,
        height: 32,
        alt: "Yogesh Kumar Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogesh Kumar | Software Development Engineer",
    description:
      "Backend and Full-Stack Software Development Engineer building production-ready systems using Java, SQL, and modern web technologies.",
    images: ["/favicon.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Structured Data for Recruiters & Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Yogesh Kumar",
              jobTitle: "Software Development Engineer",
              url: "https://yogeshkumarn.vercel.app/",
              sameAs: [
                "https://github.com/Rexxy31"
              ],
              knowsAbout: [
                "Software Engineering",
                "Backend Development",
                "Full Stack Development",
                "REST API Design",
                "Java",
                "Spring Boot",
                "PostgreSQL",
                "System Design",
                "Docker",
                "CI/CD"
              ]
            })
          }}
        />
      </head>

      <body className="bg-slate-950 text-slate-50 selection:bg-indigo-600 selection:text-white">
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
              background: "#1e293b",
              color: "#f8fafc",
              border: "1px solid #6366f1"
            }
          }}
        />

        <div id="main-content">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
