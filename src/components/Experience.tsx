"use client";

import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    type: "work" as const,
    title: "GIS Engineer (Full-Stack SDE)",
    org: "Survey Settlement & Land Records Dept, Karnataka",
    sub: "via Invensis Technologies Pvt Ltd",
    period: "May 2023 – Present",
    location: "Bengaluru, KA",
    points: [
      "Built and maintained production web applications and backend services for government workflows and survey operations",
      "Designed and maintained PostgreSQL/PostGIS and MongoDB databases, including schemas, tables, spatial data, and SQL workflows",
      "Managed GeoServer configuration, including stores, layers, services, styles, and geospatial publishing workflows",
      "Set up and maintained GitLab CI/CD pipelines for automated build and deployment workflows",
      "Worked with Linux, Docker, and server environments for deployment, troubleshooting, and infrastructure support",
      "Collaborated with stakeholders to translate requirements into practical technical solutions",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "Next.js",
      "PostgreSQL",
      "PostGIS",
      "MongoDB",
      "GeoServer",
      "Linux",
      "Docker",
      "GitLab CI/CD",
    ],
    rotation: "-1deg",
  },
  {
    type: "education" as const,
    title: "Bachelor of Engineering",
    org: "APS College of Engineering",
    sub: "Information Science & Engineering",
    period: "2018 – 2022",
    location: "Bengaluru, KA",
    points: [],
    tech: [],
    rotation: "0.5deg",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border-2 border-pencil rough-circle bg-pen-blue/10">
            <Briefcase size={18} strokeWidth={2.5} />
          </span>
          <span className="sticky-tag text-lg sm:text-xl">Experience</span>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Dashed vertical line */}
          <div
            className="hidden md:block absolute left-8 top-0 bottom-0 dashed-line"
          />

          <div className="space-y-6 sm:space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-5 top-6 w-7 h-7 border-3 border-pencil bg-white rounded-full items-center justify-center z-10">
                  {exp.type === "work" ? (
                    <Briefcase size={14} strokeWidth={3} className="text-accent" />
                  ) : (
                    <GraduationCap size={14} strokeWidth={3} className="text-pen-blue" />
                  )}
                </div>

                <div
                  className={`card-sketchy tape p-5 sm:p-6 md:p-8`}
                  style={{ transform: `rotate(${exp.rotation})` }}
                >
                  {/* Period badge */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-body text-pencil/60">
                      <Calendar size={13} strokeWidth={2.5} />
                      {exp.period}
                    </span>
                    <span className="text-xs sm:text-sm font-body text-pencil/40">
                      • {exp.location}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-pencil mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-base sm:text-lg font-body text-accent mb-1">
                    {exp.org}
                  </p>
                  {exp.sub && (
                    <p className="text-sm sm:text-base font-body text-pencil/50 mb-3 sm:mb-4 italic">
                      {exp.sub}
                    </p>
                  )}

                  {exp.points.length > 0 && (
                    <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                      {exp.points.map((point, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-sm sm:text-base md:text-lg font-body text-pencil/80 leading-relaxed"
                        >
                          <span className="text-accent mt-0.5 sm:mt-1 shrink-0">✦</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="tech-tag text-xs sm:text-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
