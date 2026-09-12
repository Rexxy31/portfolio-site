"use client";

import { Layers, ArrowRight } from "lucide-react";

interface StackLayer {
  level: string;
  name: string;
  summary: string;
  tech: string[];
  color: string;
  rotation: string;
}

const layers: StackLayer[] = [
  {
    level: "01",
    name: "Frontend & UI",
    summary: "Interactive mapping, management dashboards, responsive design",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "bg-postit",
    rotation: "-1deg",
  },
  {
    level: "02",
    name: "Backend & APIs",
    summary: "REST API architecture, event-driven services, business logic",
    tech: ["Java", "Spring Boot", "Node.js", "Python", "REST APIs", "Postman"],
    color: "bg-accent/10",
    rotation: "1deg",
  },
  {
    level: "03",
    name: "Databases & Data",
    summary: "Schema design, tables maintenance, spatial indexing & SQL queries",
    tech: ["PostgreSQL", "PostGIS", "MongoDB", "SQL", "Database Design"],
    color: "bg-pen-blue/10",
    rotation: "-0.5deg",
  },
  {
    level: "04",
    name: "GIS & GeoServer",
    summary: "Stores, layers, symbology styles, spatial publishing & workflows",
    tech: ["GeoServer", "PostGIS", "QGIS", "OpenLayers", "GIS Services"],
    color: "bg-muted",
    rotation: "0.5deg",
  },
  {
    level: "05",
    name: "Linux & Infrastructure",
    summary: "Daily-driver OS, server maintenance, runtime troubleshooting",
    tech: ["Linux", "Docker", "Nginx", "MinIO", "AWS EC2", "AWS S3"],
    color: "bg-accent/5",
    rotation: "-1deg",
  },
  {
    level: "06",
    name: "CI/CD & Deployment",
    summary: "Automated pipelines, build workflows, containerized delivery",
    tech: ["GitLab CI/CD", "Docker", "Jenkins"],
    color: "bg-white",
    rotation: "1deg",
  },
];

export default function WorkAcross() {
  return (
    <section id="skills" className="py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section tag */}
        <div className="flex items-center gap-3 mb-3 sm:mb-4">
          <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border-2 border-pencil rough-circle bg-pen-blue/10">
            <Layers size={18} strokeWidth={2.5} />
          </span>
          <span className="sticky-tag text-lg sm:text-xl">What I Work Across</span>
        </div>

        <p className="text-base sm:text-lg font-body text-pencil/65 mb-8 sm:mb-10 max-w-2xl">
          Practical engineering across the entire system lifecycle — from user interface and backend services to spatial databases, GeoServer, and Linux deployment pipelines.
        </p>

        {/* Vertical Stack / Flow Diagram in Notebook Sketch Style */}
        <div className="relative">
          {/* Subtle vertical connector line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-pencil/20 -translate-x-1/2 pointer-events-none" />

          <div className="space-y-3 sm:space-y-4 relative">
            {layers.map((l, index) => (
              <div
                key={l.name}
                className="relative"
              >
                <div
                  className={`card-sketchy p-4 sm:p-5 md:p-6 ${l.color} transition-all duration-100 hover:shadow-hard`}
                  style={{ transform: `rotate(${l.rotation})` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
                    {/* Left: Index + Title + Description */}
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded border-2 border-pencil bg-white text-pencil font-heading font-bold text-xs sm:text-sm shrink-0">
                        {l.level}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-heading font-bold text-pencil">
                          {l.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-body text-pencil/70">
                          {l.summary}
                        </p>
                      </div>
                    </div>

                    {/* Right: Technologies pill tags */}
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      {l.tech.map((t) => (
                        <span key={t} className="tech-tag text-[11px] sm:text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow connector between cards */}
                {index < layers.length - 1 && (
                  <div className="flex justify-center my-0.5 sm:my-1">
                    <span className="text-pencil/40 text-xs font-heading select-none">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Core Takeaway Note */}
        <div
          className="mt-8 sm:mt-10 card-postit tack p-5 sm:p-6 max-w-xl mx-auto text-center"
          style={{ transform: "rotate(-0.5deg)" }}
        >
          <p className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-pencil mb-1.5 sm:mb-2">
            &ldquo;I don&apos;t just build the UI.&rdquo;
          </p>
          <p className="text-sm sm:text-base md:text-lg font-body text-pencil/80 leading-relaxed">
            I work across the stack — from applications and APIs to databases, GIS infrastructure, Linux servers, and CI/CD.
          </p>
        </div>
      </div>
    </section>
  );
}
