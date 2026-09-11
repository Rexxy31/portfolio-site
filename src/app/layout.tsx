import type { Metadata } from "next";
import { Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const patrickHand = Patrick_Hand({
  variable: "--font-patrick-hand",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Yogesh Kumar — Software Engineer | GIS · Backend · Databases · DevOps",
  description:
    "Portfolio of Yogesh Kumar, a Software Engineer building and maintaining production systems across application development, databases, GIS infrastructure, and deployment (Spring Boot, Next.js, PostgreSQL/PostGIS, MongoDB, GeoServer, Linux, GitLab CI/CD, Docker).",
  keywords: [
    "Yogesh Kumar",
    "Software Engineer",
    "GIS Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "PostgreSQL",
    "PostGIS",
    "GeoServer",
    "Linux",
    "Docker",
    "GitLab CI/CD",
    "Spring Boot",
    "React",
    "Next.js",
    "Portfolio",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Yogesh Kumar — Software Development Engineer",
    description:
      "Building scalable, production-grade web systems for government departments across Karnataka.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${kalam.variable} ${patrickHand.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
