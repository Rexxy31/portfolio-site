"use client";

import { useState } from "react";
import {
  FolderOpen,
  MapPin,
  Database,
  Cpu,
  Layers,
  Tractor,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  X,
  Lightbulb,
  Wrench,
  LayoutList,
  Server,
} from "lucide-react";

interface ProjectLayer {
  label: string;
  items: string[];
}

interface Project {
  id: string;
  title: string;
  summary: string;
  contribution: string;
  tech: string[];
  layers?: ProjectLayer[];
  icon: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
  }>;
  featured: boolean;
  rotation: string;
  decoration: "tape" | "tack" | "none";
  detail: {
    overview: string;
    problem: string;
    myWork: string[];
    features: string[];
  };
}

const projects: Project[] = [
  {
    id: "lake-stats",
    title: "Karnataka Lake Statistics",
    summary:
      "Full-stack platform providing lake data, geographical boundaries, and encroachment statistics for Karnataka state. Used by citizens, researchers, and government officials for water resource management and land administration.",
    contribution:
      "Built the Spring Boot backend APIs for spatial and statistical data, designed the PostgreSQL/PostGIS database schema, and developed the Next.js frontend with interactive OpenLayers maps, hierarchical filtering, and PDF report generation.",
    tech: [
      "Spring Boot",
      "Next.js",
      "PostgreSQL",
      "PostGIS",
      "OpenLayers",
      "GeoServer",
      "Docker",
    ],
    layers: [
      { label: "Application", items: ["Spring Boot REST APIs", "Next.js", "OpenLayers", "Chart.js"] },
      { label: "Spatial Data", items: ["PostgreSQL", "PostGIS", "Spatial Indexing"] },
      { label: "GIS", items: ["GeoServer (WMS/WFS)", "QGIS"] },
      { label: "Infrastructure", items: ["Docker", "Linux"] },
    ],
    icon: MapPin,
    featured: true,
    rotation: "-1deg",
    decoration: "tape",
    detail: {
      overview:
        "A comprehensive web application designed to provide detailed information about lakes and water bodies across Karnataka state. The platform serves as a digital interface for the Survey Settlement And Land Records Department.",
      problem:
        "Lake data across Karnataka was fragmented and inaccessible. Citizens, researchers, and officials lacked a unified platform to view lake boundaries, encroachment status, survey progress, and ownership data.",
      myWork: [
        "Designed and implemented the Spring Boot REST API layer serving hierarchical lake data (ownership → district → taluk → hobli → village → lake)",
        "Built PostgreSQL/PostGIS schemas supporting spatial queries across multiple district tables for scalable data management",
        "Developed the Next.js frontend with interactive OpenLayers maps, Google Satellite WMS layers, and custom layer controls",
        "Implemented dashboard analytics with MUI X Charts and Chart.js for encroachment status and survey progress visualization",
        "Built PDF report generation (lake abstracts) with jsPDF and html2canvas, including maps, sketches, and survey data",
        "Configured GeoServer layers and styles for spatial boundary publishing",
      ],
      features: [
        "Interactive mapping with OpenLayers + Google Satellite imagery + WMS integration",
        "Hierarchical geographic filtering (ownership → district → taluk → hobli → village)",
        "Dashboard analytics with encroachment and survey progress charts",
        "PDF lake abstract generation with embedded maps and survey data",
        "Historical survey sketch viewer",
        "QR code generation for lake location sharing",
        "Responsive design with accessibility controls (font sizing, screen reader support)",
      ],
    },
  },
  {
    id: "equipmanager",
    title: "Equipment Manager",
    summary:
      "Enterprise equipment lifecycle management system tracking GIS survey devices from vendor procurement to district allocation, deployment, and repair across Karnataka.",
    contribution:
      "Implemented the Java 21 / Spring Boot backend with role-based access control, the Next.js 15 frontend with reporting dashboards, and the PostgreSQL data layer with audit logging and notification workflows.",
    tech: [
      "Java 21",
      "Spring Boot",
      "Next.js 15",
      "React 19",
      "PostgreSQL",
      "TailwindCSS",
      "Docker",
    ],
    layers: [
      { label: "Application", items: ["React 19 / Next.js 15", "Spring Boot", "REST APIs"] },
      { label: "Data", items: ["PostgreSQL", "Audit Logs", "Schema Design"] },
      { label: "Infrastructure", items: ["Docker", "Linux Environment", "GitLab CI/CD"] },
    ],
    icon: Cpu,
    featured: true,
    rotation: "0.5deg",
    decoration: "tack",
    detail: {
      overview:
        "A comprehensive equipment management system designed for tracking devices, equipment sets, and service requests across multiple districts in Karnataka.",
      problem:
        "Government survey operations lacked a centralized system to manage the lifecycle of GIS equipment (Rovers, Tabs, etc.) — tracking procurement, allocation to districts, deployment to surveyors, and service/repair workflows.",
      myWork: [
        "Built the Spring Boot backend with role-based access control for Superadmin, DDLR, Vendor, and Viewer roles",
        "Designed the PostgreSQL schema for device tracking, allocation history, and service request workflows",
        "Implemented the Next.js 15 frontend with TailwindCSS and Recharts for reporting dashboards",
        "Built real-time notification and audit logging systems for equipment state transitions",
        "Developed vendor management and service request tracking workflows",
      ],
      features: [
        "Device lifecycle tracking: procurement → allocation → deployment → service → repair",
        "Role-based workflows for Superadmin, DDLR, Vendor, and Viewer roles",
        "Real-time notifications for equipment state changes",
        "Detailed audit logging for all operations",
        "Reporting dashboards with Recharts visualizations",
        "Service request management with vendor integration",
      ],
    },
  },
  {
    id: "mojini",
    title: "Mojini Ingestion Service",
    summary:
      "Background processing pipeline that converts non-spatial land records from Bhoomi (state land records system) into GIS-ready records with spatial geometry for downstream editing by GIS operators.",
    contribution:
      "Designed and built the entire Spring Boot processing service: LISTEN/NOTIFY polling, batch processing with row-level locking, 7-level cadastral hierarchy matching, deduplication, and placeholder geometry generation.",
    tech: ["Spring Boot", "PostgreSQL", "PostGIS", "PLpgSQL", "Docker"],
    layers: [
      { label: "Backend Service", items: ["Spring Boot", "LISTEN/NOTIFY Events", "Batch Processing"] },
      { label: "Spatial & Data", items: ["PostgreSQL", "PostGIS", "PLpgSQL Procedures"] },
      { label: "GIS Integration", items: ["GeoServer WFS-T Handover", "QGIS Ready"] },
      { label: "Infrastructure", items: ["Docker", "Linux Runtime"] },
    ],
    icon: Database,
    featured: true,
    rotation: "-0.5deg",
    decoration: "tape",
    detail: {
      overview:
        "A background processing service that monitors a staging table (populated by Bhoomi, Karnataka's land records system) and converts non-spatial land records into GIS-ready records in the mojini_gis table.",
      problem:
        "Land records from the Bhoomi system arrive as non-spatial data. They need to be validated, matched to the cadastral hierarchy, deduplicated, and enriched with placeholder geometry before GIS operators can refine them through GeoServer WFS-T or QGIS.",
      myWork: [
        "Built the StagingPollerService using PostgreSQL LISTEN/NOTIFY combined with @Scheduled(30s) polling for reliable event-driven processing",
        "Implemented batch processing with FOR UPDATE SKIP LOCKED for concurrent-safe row processing (batch size: 100)",
        "Designed the 7-level cadastral hierarchy matching system (Tier 1: exact match on all 7 levels, Tier 2: survey-level fallback)",
        "Built validation, district resolution (whitelist-based), and application number deduplication logic",
        "Implemented 50m placeholder geometry generation for unmatched records",
      ],
      features: [
        "Event-driven architecture: LISTEN/NOTIFY + scheduled polling",
        "Concurrent-safe batch processing with FOR UPDATE SKIP LOCKED",
        "7-level cadastral hierarchy matching (district → taluk → hobli → village → survey number)",
        "Deduplication by application number",
        "Placeholder geometry generation (50m buffer)",
        "Whitelist-based district resolution",
      ],
    },
  },
  {
    id: "landstack-geofence",
    title: "Landstack Geofence",
    summary:
      "Geofencing module for spatial boundary management in land record administration. Enables surveyors to define and validate geographic boundaries for land parcels.",
    contribution:
      "Built the TypeScript/React frontend for boundary definition and validation workflows, integrating with the backend spatial APIs.",
    tech: ["TypeScript", "React", "Next.js", "Shell"],
    layers: [
      { label: "Application", items: ["React / Next.js", "TypeScript"] },
      { label: "Spatial & GIS", items: ["Geofence Boundary Workflows", "Spatial API Integration"] },
    ],
    icon: Layers,
    featured: false,
    rotation: "1deg",
    decoration: "tack",
    detail: {
      overview:
        "A geofencing module within the Landstack ecosystem for managing spatial boundaries of land records.",
      problem:
        "Land survey operations needed a tool for surveyors to define, validate, and manage geographic boundaries for land parcels as part of the broader Landstack platform.",
      myWork: [
        "Built the React/TypeScript frontend for boundary definition and geofence management",
        "Implemented spatial boundary validation workflows",
        "Integrated with backend APIs for geofence persistence and querying",
      ],
      features: [
        "Spatial boundary definition and editing",
        "Geofence validation workflows",
        "Integration with Landstack ecosystem",
      ],
    },
  },
  {
    id: "agristack",
    title: "AgriStack",
    summary:
      "Agriculture data platform for aggregating and processing farm data. Python-based service containerized with Docker for deployment across agricultural data pipelines.",
    contribution:
      "Developed the Python data processing service and Dockerized it for deployment.",
    tech: ["Python", "Docker"],
    layers: [
      { label: "Data Service", items: ["Python ETL", "Data Ingestion"] },
      { label: "Infrastructure", items: ["Docker Containerization", "Linux Runtime"] },
    ],
    icon: Tractor,
    featured: false,
    rotation: "-1.5deg",
    decoration: "none",
    detail: {
      overview:
        "A data processing platform for agricultural data aggregation within the GIS team's service ecosystem.",
      problem:
        "Agricultural data from various sources needed to be aggregated, processed, and made available through standardized pipelines.",
      myWork: [
        "Built the Python data processing service for farm data aggregation",
        "Containerized the service with Docker for consistent deployment",
      ],
      features: [
        "Farm data aggregation and processing",
        "Dockerized deployment",
      ],
    },
  },
  {
    id: "geoserver-plugin",
    title: "GeoServer User Context Plugin",
    summary:
      "Custom Java plugin extending GeoServer with user-context-aware layer security for fine-grained access control over spatial data layers.",
    contribution:
      "Developed the Java plugin implementing GeoServer's plugin architecture to enforce user-context-based access control on spatial data layers.",
    tech: ["Java", "GeoServer", "Plugin Architecture"],
    layers: [
      { label: "GIS Infrastructure", items: ["GeoServer Plugin Architecture", "Layer Security"] },
      { label: "Core Service", items: ["Java", "User-Context Filtering", "Access Control"] },
    ],
    icon: ShieldCheck,
    featured: false,
    rotation: "0.5deg",
    decoration: "tape",
    detail: {
      overview:
        "A custom Java plugin that extends GeoServer to support user-context-aware layer security.",
      problem:
        "GeoServer's default security model lacked the ability to filter spatial data layers based on the authenticated user's context (e.g., district, role). Access control needed to be applied at a granular level.",
      myWork: [
        "Built the Java plugin using GeoServer's plugin architecture",
        "Implemented user-context-based filtering for spatial data layers",
        "Integrated with the authentication system for role and permission resolution",
      ],
      features: [
        "User-context-aware layer security",
        "Fine-grained access control for spatial data",
        "Integration with GeoServer plugin architecture",
      ],
    },
  },
];

function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-pencil/30 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-paper border-3 border-pencil p-6 md:p-10"
        style={{
          borderRadius: "15px 225px 15px 255px / 255px 15px 225px 15px",
          boxShadow: "8px 8px 0px 0px #2d2d2d",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 border-2 border-pencil bg-white flex items-center justify-center cursor-pointer hover:bg-accent hover:text-white hover:border-accent transition-all"
          style={{
            borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
          }}
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        {/* Header */}
        <div className="flex items-start gap-3 mb-6">
          <span
            className="inline-flex items-center justify-center w-12 h-12 border-2 border-pencil bg-white shrink-0 rough-circle"
            style={{ boxShadow: "3px 3px 0px 0px #2d2d2d" }}
          >
            <project.icon
              size={22}
              strokeWidth={2.5}
              className={project.featured ? "text-accent" : "text-pen-blue"}
            />
          </span>
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-pencil leading-tight">
              {project.title}
            </h2>
            {project.featured && (
              <span className="text-xs font-body text-accent uppercase tracking-wide">
                ★ Production System
              </span>
            )}
          </div>
        </div>

        {/* Overview */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb size={16} strokeWidth={2.5} className="text-accent" />
            <h3 className="text-lg font-heading font-bold text-pencil">
              Overview
            </h3>
          </div>
          <p className="text-base md:text-lg font-body text-pencil/80 leading-relaxed">
            {project.detail.overview}
          </p>
          {project.detail.problem && (
            <p className="text-sm md:text-base font-body text-pencil/65 leading-relaxed mt-2 italic">
              <strong>Context / Purpose:</strong> {project.detail.problem}
            </p>
          )}
        </div>

        <div className="border-t-2 border-dashed border-pencil/20 my-6" />

        {/* My Contribution */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Wrench size={16} strokeWidth={2.5} className="text-accent" />
            <h3 className="text-lg font-heading font-bold text-pencil">
              My Contribution
            </h3>
          </div>
          <p className="text-base font-body text-pencil/85 mb-3 font-medium">
            {project.contribution}
          </p>
          <ul className="space-y-2">
            {project.detail.myWork.map((item, i) => (
              <li
                key={i}
                className="flex gap-2 text-base md:text-lg font-body text-pencil/80"
              >
                <span className="text-accent mt-1 shrink-0">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Implementation / Layers */}
        {project.layers && project.layers.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Server size={16} strokeWidth={2.5} className="text-pen-blue" />
              <h3 className="text-lg font-heading font-bold text-pencil">
                Technical Implementation
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.layers.map((layer) => (
                <div key={layer.label} className="p-3 bg-white border-2 border-pencil rounded-md shadow-[2px_2px_0px_0px_#2d2d2d]">
                  <p className="text-xs font-heading font-bold text-accent uppercase tracking-wider mb-1">
                    {layer.label}
                  </p>
                  <p className="text-sm font-body text-pencil/80">
                    {layer.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="border-t-2 border-dashed border-pencil/20 my-6" />

        {/* Technology Stack */}
        <div className="mb-6">
          <h3 className="text-lg font-heading font-bold text-pencil mb-3">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        {project.detail.features && project.detail.features.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <LayoutList size={16} strokeWidth={2.5} className="text-pen-blue" />
              <h3 className="text-lg font-heading font-bold text-pencil">
                Key Features
              </h3>
            </div>
            <ul className="space-y-1.5">
              {project.detail.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-base font-body text-pencil/70"
                >
                  <span className="text-pen-blue mt-0.5 shrink-0">→</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-10 h-10 border-2 border-pencil rough-circle bg-postit">
              <FolderOpen size={20} strokeWidth={2.5} />
            </span>
            <span className="sticky-tag text-xl">Projects</span>
          </div>

          <p className="text-lg font-body text-pencil/60 mb-10 max-w-2xl">
            Production systems built for government departments — handling real
            data, real users, and real scale across Karnataka.
          </p>

          {/* Squiggly connector — desktop only */}
          <svg
            className="hidden md:block w-full h-8 mb-6 text-pencil/20"
            viewBox="0 0 800 30"
            preserveAspectRatio="none"
          >
            <path
              d="M0 15 Q50 0 100 15 Q150 30 200 15 Q250 0 300 15 Q350 30 400 15 Q450 0 500 15 Q550 30 600 15 Q650 0 700 15 Q750 30 800 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="8 4"
              fill="none"
            />
          </svg>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`${project.featured ? "card-postit" : "card-sketchy"
                  } ${project.decoration === "tape" ? "tape" : ""} ${project.decoration === "tack" ? "tack" : ""
                  } p-6 md:p-8 transition-all duration-100 hover:shadow-hard group`}
                style={{ transform: `rotate(${project.rotation})` }}
              >
                {/* Icon + Title */}
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="inline-flex items-center justify-center w-11 h-11 border-2 border-pencil bg-white shrink-0 rough-circle"
                    style={{ boxShadow: "2px 2px 0px 0px #2d2d2d" }}
                  >
                    <project.icon
                      size={20}
                      strokeWidth={2.5}
                      className={
                        project.featured ? "text-accent" : "text-pen-blue"
                      }
                    />
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-pencil leading-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="text-xs font-body text-accent uppercase tracking-wide">
                        ★ Production System
                      </span>
                    )}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-base md:text-lg font-body text-pencil/75 leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* My Contribution — prominently elevated */}
                <div className="mb-4 p-3.5 bg-accent/5 border-2 border-pencil rounded-md shadow-[2px_2px_0px_0px_#2d2d2d]">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-accent text-sm">✦</span>
                    <p className="text-sm font-heading font-bold text-pencil uppercase tracking-wider">
                      My Contribution
                    </p>
                  </div>
                  <p className="text-sm md:text-base font-body text-pencil/90 leading-relaxed">
                    {project.contribution}
                  </p>
                </div>

                {/* Expandable detail preview */}
                {expandedId === project.id && (
                  <div className="mb-4 pt-3 border-t-2 border-dashed border-pencil/15">
                    <p className="text-sm font-heading font-bold text-pencil/90 mb-2">
                      Key technical work:
                    </p>
                    <ul className="space-y-1.5 mb-3">
                      {project.detail.myWork.slice(0, 3).map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm font-body text-pencil/65"
                        >
                          <span className="text-accent mt-0.5 shrink-0">
                            ✦
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setModalProject(project)}
                      className="text-sm font-body text-pen-blue hover:text-accent transition-colors cursor-pointer bg-transparent border-none underline"
                    >
                      View full project details →
                    </button>
                  </div>
                )}

                {/* Technical Ownership Layers */}
                {project.layers && project.layers.length > 0 ? (
                  <div className="mb-4 space-y-1.5 p-3 bg-white/70 border-2 border-dashed border-pencil/20 rounded-md">
                    <p className="text-xs font-heading font-bold text-pencil/60 uppercase tracking-wide mb-1">
                      Technical Layers:
                    </p>
                    {project.layers.map((layer) => (
                      <div key={layer.label} className="flex items-baseline gap-2 text-xs font-body">
                        <span className="font-semibold text-pencil min-w-[76px] shrink-0">
                          {layer.label}:
                        </span>
                        <span className="text-pencil/75">
                          {layer.items.join(" · ")}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Fallback tech tags */
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Expand/collapse toggle */}
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="flex items-center gap-1 text-sm font-body text-pen-blue hover:text-accent transition-colors cursor-pointer bg-transparent border-none"
                >
                  {expandedId === project.id ? (
                    <>
                      <ChevronUp size={14} strokeWidth={2.5} />
                      Less details
                    </>
                  ) : (
                    <>
                      <ChevronDown size={14} strokeWidth={2.5} />
                      More details
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Personal projects note */}
          <div
            className="mt-12 card-sketchy p-6 max-w-lg mx-auto text-center"
            style={{ transform: "rotate(1deg)" }}
          >
            <p className="text-lg font-heading font-bold text-pencil mb-2">
              + Personal Projects
            </p>
            <p className="text-base font-body text-pencil/60">
              Cybersecurity Quiz App • Blog Application • Developer Portfolio —
              side projects for learning and practice.
            </p>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {modalProject && (
        <ProjectDetailModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </>
  );
}
