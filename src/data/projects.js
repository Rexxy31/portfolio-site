const projects = [
    {
        title: "GIS Equipment Manager",
        description:
            "A comprehensive enterprise web application for managing the distribution, tracking, and auditing of GIS equipment for government surveyors in Karnataka. Facilitates state-wide logistics and real-time inventory monitoring.",
        features: [
            "Real-time distribution & return tracking",
            "Automated audit logging and transaction history",
            "Bulk data import/export (CSV) and PDF report generation",
            "District/Taluk-level hierarchical equipment management",
            "Live status notifications via Socket.io"
        ],
        tech: ["Java", "Spring Boot", "Next.js", "PostgreSQL", "Docker", "Jenkins", "Nginx"],
        category: "Work",
        featured: true,
        status: "completed",
        year: "2024",
        github: "#" // Private repo (work)
    },
    {
        title: "Karnataka Lake Statistics",
        description:
            "A high-performance GIS platform for the Survey Settlement And Land Records Department. Provides statistical insights and geographical analysis of lakes across Karnataka using advanced spatial data visualization.",
        features: [
            "Leaflet-based interactive mapping with Google Satellite & WMS integration",
            "Hierarchical geographical filtering (Village to District level)",
            "Automated PDF abstract generation with JTS-processed spatial sketches",
            "Encroachment status analytics and survey progress tracking",
            "QR code integration for authenticated location sharing"
        ],
        tech: ["Java", "Spring Boot 3", "PostGIS", "Leaflet", "Docker", "Nginx", "Jenkins"],
        category: "Work",
        featured: true,
        status: "completed",
        year: "2025",
        github: "#" // Private repo (work)
    },
    {
        title: "CEH Practice Lab",
        description:
            "A custom-built web app to help me prepare for the Certified Ethical Hacker (CEH) exam. Features interactive quizzes, progress tracking, and security-themed UI.",
        tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"],
        visit: "https://ceh-quiz-app.vercel.app/",
        github: "https://github.com/Rexxy31/Quiz-App",
        category: "Security",
        featured: true,
        status: "completed",
        year: "2024"
    },
    {
        title: "Network Monitor",
        description:
            "A lightweight tool for monitoring local network traffic and identifying potential vulnerabilities or unusual patterns.",
        tech: ["Python", "Flask", "Scapy"],
        github: "https://github.com/Rexxy31/net-mon",
        category: "Security",
        status: "planned",
        year: "2025"
    }
];

export default projects;
