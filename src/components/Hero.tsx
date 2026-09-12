"use client";

import { ArrowDown, Sparkles, FileDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 sm:pt-28 pb-12 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-8 items-center">
        {/* Text Column */}
        <div className="relative z-10">
          <p
            className="text-base sm:text-lg md:text-xl font-body text-pencil/70 mb-1 sm:mb-2"
            style={{ transform: "rotate(-1deg)" }}
          >
            Hey there! I&apos;m
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-pencil leading-tight mb-3 sm:mb-4">
            Yogesh
            <br className="hidden sm:inline" />{" "}
            Kumar
            <span
              className="inline-block text-accent animate-wiggle ml-1"
              style={{ transformOrigin: "bottom center" }}
            >
              !
            </span>
          </h1>

          <div className="inline-block sticky-tag mb-4 sm:mb-6 text-base sm:text-lg">
            GIS &amp; Full-Stack Software Engineer
          </div>

          <p className="text-base sm:text-lg md:text-xl font-body text-pencil/80 mb-6 sm:mb-8 max-w-lg leading-relaxed">
            I build and maintain production systems across application development, databases,
            geospatial infrastructure, and deployment. From backend services and PostgreSQL/PostGIS
            to GeoServer, Linux infrastructure, and CI/CD pipelines.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-sketchy text-base sm:text-lg md:text-xl flex-1 sm:flex-none justify-center"
            >
              <Sparkles size={18} strokeWidth={2.5} />
              View Projects
            </a>
            <a
              href="/Yogesh_Kumar_CV.pdf"
              download="Yogesh_Kumar_CV.pdf"
              className="btn-sketchy btn-sketchy-secondary text-base sm:text-lg md:text-xl flex-1 sm:flex-none justify-center"
            >
              <FileDown size={18} strokeWidth={2.5} />
              CV
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-sketchy text-base sm:text-lg md:text-xl bg-paper w-full sm:w-auto justify-center"
            >
              Contact Me
            </a>
          </div>

          {/* Hand-drawn arrow pointing to CTA */}
          <svg
            className="hidden md:block absolute -bottom-8 left-64 w-24 h-16 text-pencil pointer-events-none"
            viewBox="0 0 100 60"
            fill="none"
          >
            <path
              d="M5 5 Q30 55 85 35"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 4"
              fill="none"
              style={{ animation: "dash-flow 1.5s linear infinite" }}
            />
            <path
              d="M75 25 L88 35 L72 40"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Decorative Column */}
        <div className="relative flex items-center justify-center mt-4 md:mt-0">
          {/* Main sketch frame */}
          <div
            className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square border-3 border-pencil bg-white flex items-center justify-center p-4 sm:p-6"
            style={{
              borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
              boxShadow: "6px 6px 0px 0px #2d2d2d",
              transform: "rotate(2deg)",
            }}
          >
            {/* Code-like doodle inside */}
            <div className="text-left font-body text-pencil/60 text-xs sm:text-sm md:text-base space-y-1.5 sm:space-y-2 w-full">
              <p className="text-accent font-heading text-base sm:text-lg">
                {"// Hello World"}
              </p>
              <p>
                <span className="text-pen-blue">const</span> dev ={" "}
                {"{"}
              </p>
              <p className="pl-3 sm:pl-4">
                name: <span className="text-accent">&quot;Yogesh&quot;</span>,
              </p>
              <p className="pl-3 sm:pl-4">
                stack: <span className="text-accent">&quot;full&quot;</span>,
              </p>
              <p className="pl-3 sm:pl-4">
                gis: <span className="text-pen-blue">true</span>,
              </p>
              <p>
                {"}"};
              </p>
              <p className="mt-2">
                <span className="text-pen-blue">dev</span>.
                <span className="text-accent">deploy</span>();{" "}
                <span className="text-pencil/40">{"// 🚀"}</span>
              </p>
            </div>

            {/* Tape decoration on top */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-5 sm:h-6 bg-muted/50 border border-muted"
              style={{ transform: "translateX(-50%) rotate(-2deg)" }}
            />
          </div>

          {/* Bouncing decorative circle — desktop only */}
          <div
            className="hidden md:block absolute -top-4 -right-4 w-16 h-16 border-3 border-pencil bg-accent/20 animate-bounce-gentle"
            style={{
              borderRadius: "50% 45% 55% 48% / 48% 55% 45% 52%",
            }}
          />

          {/* Small dashed circle decoration */}
          <div
            className="hidden md:block absolute -bottom-6 -left-6 w-12 h-12 border-2 border-dashed border-pencil/40 rough-circle"
          />

          {/* Floating dots */}
          <div
            className="hidden md:block absolute top-10 -left-8 w-4 h-4 bg-postit border-2 border-pencil rounded-full animate-float"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 text-pencil/50 select-none pointer-events-none">
        <span className="font-body text-xs sm:text-sm">scroll down</span>
        <ArrowDown size={18} strokeWidth={2} className="animate-bounce" />
      </div>
    </section>
  );
}
