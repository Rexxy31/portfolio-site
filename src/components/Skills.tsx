"use client";

import { Wrench, Terminal, Database, Globe, Cpu } from "lucide-react";

interface ResponsibilityGroup {
  name: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  description: string;
  skills: { name: string; note?: string }[];
  color: string;
  rotation: string;
}

const groups: ResponsibilityGroup[] = [
  {
    name: "Application Development",
    icon: Cpu,
    description: "Building production web applications, backend microservices, and client dashboards.",
    skills: [
      { name: "Java" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Spring Boot" },
      { name: "Node.js" },
      { name: "REST APIs" },
    ],
    color: "bg-accent/10",
    rotation: "-1deg",
  },
  {
    name: "Database & Data",
    icon: Database,
    description: "Creating & maintaining database schemas, tables, spatial indexes, and SQL queries.",
    skills: [
      { name: "PostgreSQL" },
      { name: "PostGIS" },
      { name: "MongoDB" },
      { name: "SQL" },
      { name: "Database Design" },
      { name: "Data Management" },
    ],
    color: "bg-pen-blue/10",
    rotation: "0.5deg",
  },
  {
    name: "GIS & Geospatial",
    icon: Globe,
    description: "Configuring stores, layers, symbology styles, and geospatial data publishing pipelines.",
    skills: [
      { name: "GeoServer" },
      { name: "PostGIS" },
      { name: "QGIS" },
      { name: "OpenLayers" },
      { name: "Spatial Data" },
      { name: "GIS Services" },
    ],
    color: "bg-postit",
    rotation: "-0.5deg",
  },
  {
    name: "DevOps & Infrastructure",
    icon: Terminal,
    description: "Linux daily-driver environment, containerization, CI/CD pipeline automation, and server troubleshooting.",
    skills: [
      { name: "Linux", note: "Daily driver" },
      { name: "Docker" },
      { name: "GitLab CI/CD", note: "Pipelines setup & maintain" },
      { name: "Jenkins" },
      { name: "Nginx" },
      { name: "MinIO", note: "Working knowledge" },
    ],
    color: "bg-accent/5",
    rotation: "1deg",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-3 sm:mb-4">
          <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border-2 border-pencil rough-circle bg-accent/10">
            <Wrench size={18} strokeWidth={2.5} />
          </span>
          <span className="sticky-tag text-lg sm:text-xl">Technical Capabilities &amp; Skills</span>
        </div>

        <p className="text-base sm:text-lg font-body text-pencil/65 mb-8 sm:mb-10 max-w-2xl">
          Grouped by engineering responsibilities I handle in production — from application code and databases to GIS services and infrastructure automation.
        </p>

        {/* 4 Responsibility Groups */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {groups.map((group) => (
            <div
              key={group.name}
              className={`card-sketchy p-5 sm:p-6 ${group.color} transition-all duration-100 hover:shadow-hard`}
              style={{ transform: `rotate(${group.rotation})` }}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border-2 border-pencil bg-white shrink-0 rough-circle">
                  <group.icon size={17} strokeWidth={2.5} className="text-pencil" />
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-pencil">
                    {group.name}
                  </h3>
                  <p className="text-xs font-body text-pencil/60">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Dot-separated skills with explicit note badges where needed */}
              <div className="pt-3 border-t-2 border-dashed border-pencil/15">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm sm:text-base font-body text-pencil/85">
                  {group.skills.map((skill, idx) => (
                    <span key={skill.name} className="inline-flex items-center gap-1.5">
                      <span className="font-semibold text-pencil">{skill.name}</span>
                      {skill.note && (
                        <span className="text-[10px] sm:text-[11px] font-sans px-1.5 py-0.5 rounded border border-pencil/30 bg-white/80 text-pencil/70 font-normal">
                          {skill.note}
                        </span>
                      )}
                      {idx < group.skills.length - 1 && (
                        <span className="text-pencil/40 font-bold select-none">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
