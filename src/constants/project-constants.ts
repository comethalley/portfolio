import inventoTrackImg from "../assets/images/projects/elanco.png";
import afpcmosImg from "../assets/images/projects/afplms.png";
import pspmmsImg from "../assets/images/projects/pspmms.png";
import pmsImg from "../assets/images/projects/pms.png";
import lgLopezImg from "../assets/images/projects/lg-lopez.png";
import atlasImg from "../assets/images/projects/atlas.png";
import type { Job } from "../types";

export const jobs: Job[] = [
  {
    label: "Skyward Technology Solutions, Inc.",
    tag: "Full-time · July 2024 – Present",
    note: "* All projects are covered by NDA. Descriptions reflect technical scope only.",
    dotColor: "bg-rose-dark",
    projects: [
      {
        gradient: "from-rose-light to-rose-mid",
        symbol: "📦",
        badge: "Confidential",
        title: "Courier Integration Suite",
        desc: "Engineered reusable Laravel packages for multi-carrier logistics — rate retrieval, shipment booking, label generation, and real-time tracking across international courier providers.",
        stack: ["Laravel", "PHP Packages", "REST APIs"],
      },
      {
        gradient: "from-blue-100 to-blue-200",
        symbol: "🏛",
        badge: "Confidential",
        title: "Government API Integration",
        desc: "Integrated government-facing third-party APIs to support international document delivery.",
        stack: ["Laravel", "REST APIs", "PHP"],
      },
      {
        gradient: "from-amber-50 to-amber-200",
        symbol: "📅",
        badge: "Confidential",
        title: "Booking & Delivery Platform",
        desc: "Maintained and enhanced a large-scale booking and delivery application by improving UI flows, optimizing performance, and implementing new features based on client requirements.",
        stack: ["Vue.js", "Laravel", "SPA"],
      },
      {
        gradient: "from-sage-light to-sage-mid",
        symbol: "🗂",
        badge: "Confidential",
        title: "Internal Operations Dashboard",
        desc: "Built document scanning, courier dispatch, audit logging, and PDF generation modules (waybills, manifests) for an internal ops platform built with Laravel Livewire.",
        stack: ["Laravel Livewire", "PDF Generation", "Audit Logging"],
      },
      {
        gradient: "from-purple-100 to-purple-200",
        symbol: "🖨",
        badge: "Confidential",
        title: "Waybill Printer Manager",
        desc: "Developed a desktop application that automates courier-specific waybill printing workflows across multiple printer configurations and carrier formats.",
        stack: ["C#", ".NET", "Desktop App"],
      },
      {
        gradient: "from-teal-100 to-teal-200",
        symbol: "🔄",
        badge: "Confidential",
        title: "Legacy Platform Migration",
        desc: "Modernised a legacy booking and delivery system by re-architecting it with a modern stack, significantly improving maintainability, performance, and UX.",
        stack: ["Laravel", "Inertia.js", "React"],
      },
    ],
  },
  {
    label: "Freelance Full-Stack Developer",
    tag: "Freelance · 2026 – Present",
    note: "Selected independent and client-based projects.",
    dotColor: "bg-blue-500",
    projects: [
      {
        gradient: "from-blue-100 to-blue-200",
        image: lgLopezImg,
        badge: "Freelance",
        title: " Official Website Development for LG Lopez ",
        desc: "Designed and developed an official website for LG Lopez to showcase services, provide public information, and improve digital presence.",
        stack: ["Laravel", "Inertia.js", "React"],
      },
      {
        gradient: "from-purple-100 to-purple-200",
        image: atlasImg,
        badge: "Freelance",
        title: "Atlas",
        desc: "Developed a smart home management platform that allows users to monitor and control electronic devices through a centralized dashboard, featuring real-time device status, and third-party smart device integrations.",
        stack: ["Laravel", "Inertia.js", "React", "3rd Party APIs"],
      },
      {
        gradient: "from-purple-100 to-purple-200",
        symbol: "📋",
        badge: "Freelance · NDA",
        title: "Survey Application",
        desc: "Built a survey and reporting platform featuring dynamic forms, response analytics, chart-based insights, PDF report generation, and workflow management for participant evaluation processes.",
        stack: ["Laravel", "Inertia.js", "React"],
      },
    ],
  },
  {
    label: "NegosyoLabPH Business Development Services",
    tag: "Intern → Part-time · September 2023 – July 2024",
    note: "",
    dotColor: "bg-sage-mid",
    projects: [
      {
        gradient: "from-sage-light to-sage-mid",
        image: afpcmosImg,
        badge: "NegosyoLabPH",
        title: "AFPCMOS Learning Management System",
        desc: "Built a full LMS for AFPCMOS — course management, user roles, progress tracking, and RESTful API integrations.",
        stack: ["CodeIgniter 3", "MySQL"],
      },
      {
        gradient: "from-amber-50 to-amber-200",
        image: inventoTrackImg,
        badge: "NegosyoLabPH",
        title: "InventoTrack",
        desc: "Developed an inventory tracking web app with real-time stock monitoring, movement history, and reporting features.",
        stack: ["CodeIgniter 3", "MySQL"],
      },
      {
        gradient: "from-rose-light to-rose-mid",
        image: pspmmsImg,
        badge: "NegosyoLabPH",
        title: "Philippine Sports Performance Membership System",
        desc: "Built a membership management system with member profiles, renewals, and event participation.",
        stack: ["CodeIgniter 4", "MySQL"],
      },
      {
        gradient: "from-blue-100 to-blue-200",
        image: pmsImg,
        badge: "NegosyoLabPH",
        title: "Production Management Systems",
        desc: "Developed and maintained multiple production management platforms — Phoenix Fortress, ASTRALIA, and Blue Chalcedony Quartz — handling workflows, output tracking, and reporting.",
        stack: ["CodeIgniter 3", "MySQL"],
      },
    ],
  },
];

export const ALL_FILTERS = [
  "All",
  "Laravel",
  "React",
  "Vue.js",
  "C#",
  "REST API",
] as const;
