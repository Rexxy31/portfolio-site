"use client";

import { User, Coffee, Code2, Building2 } from "lucide-react";

const stats = [
  { icon: Coffee, label: "Years Exp", value: "2+", rotation: "-2deg" },
  { icon: Code2, label: "Projects", value: "10+", rotation: "1deg" },
  { icon: Building2, label: "Govt Scale", value: "State", rotation: "-1deg" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section tag */}
        <div className="flex items-center gap-3 mb-10">
          <span
            className="inline-flex items-center justify-center w-10 h-10 border-2 border-pencil rough-circle bg-accent/10"
          >
            <User size={20} strokeWidth={2.5} />
          </span>
          <span className="sticky-tag text-xl">About Me</span>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Bio text */}
          <div className="md:col-span-2">
            <div
              className="card-sketchy p-6 md:p-8"
              style={{ transform: "rotate(-0.5deg)" }}
            >
              <p className="text-lg md:text-xl font-body text-pencil leading-relaxed drop-cap">
                I work across the application, database, GIS infrastructure, and deployment layers
                of production systems. At the Survey Settlement and Land Records Department,
                Karnataka, my role bridges software engineering and hands-on systems operations.
              </p>
              <p className="text-lg md:text-xl font-body text-pencil/80 leading-relaxed mt-4">
                My work includes application and backend development, managing PostgreSQL/PostGIS and
                MongoDB databases, configuring GeoServer and geospatial workflows, and working in
                Linux environments with Docker and CI/CD pipelines to keep production systems reliable.
              </p>

              {/* Dashed separator */}
              <div className="border-t-2 border-dashed border-pencil/20 my-6" />

              <div className="flex flex-wrap gap-3">
                <span className="tech-tag">📍 Bengaluru, KA</span>
                <span className="tech-tag">🎓 B.E. in ISE</span>
                <span className="tech-tag">🏢 SSLR Dept, Karnataka</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex md:flex-col gap-6 justify-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center h-28 w-28 md:h-32 md:w-32 mx-auto border-3 border-pencil bg-white rough-circle text-center transition-transform duration-100 hover:scale-105"
                style={{
                  transform: `rotate(${stat.rotation})`,
                  boxShadow: "4px 4px 0px 0px #2d2d2d",
                }}
              >
                <stat.icon
                  size={22}
                  strokeWidth={2.5}
                  className="text-accent mb-1"
                />
                <span className="text-2xl md:text-3xl font-heading font-bold text-pencil leading-none">
                  {stat.value}
                </span>
                <span className="text-sm font-body text-pencil/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
