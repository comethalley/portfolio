import React from "react";
import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import { SectionLabel } from "./About";
import type { Skill } from "../../types";

const skills: Skill[] = [
  {
    icon: "⚛",
    iconBg: "bg-rose-light",
    name: "React & Frontend",
    desc: "Building modern, component-driven UIs with React, Vue.js, and Inertia.js — from SPAs to server-rendered apps with polished interaction design.",
    tags: ["React", "Vue.js", "Inertia.js", "TypeScript", "Tailwind CSS"],
    tagStyle: "bg-rose-light text-rose-dark border-rose-mid/20",
  },
  {
    icon: "🌿",
    iconBg: "bg-sage-light",
    name: "Laravel & PHP",
    desc: "Deep Laravel expertise — REST APIs, Livewire, reusable package development, queue systems, PDF generation, and complex third-party integrations.",
    tags: ["Laravel", "PHP", "Livewire", "Eloquent", "Sanctum", "Packages"],
    tagStyle: "bg-sage-light text-sage-mid border-sage-mid/20",
  },
  {
    icon: "🔗",
    iconBg: "bg-amber-50",
    name: "API & Integrations",
    desc: "Extensive experience connecting systems — courier logistics APIs, government services, payment gateways, and internal RESTful service architecture.",
    tags: ["REST APIs", "Webhooks", "OAuth", "JSON", "API Design"],
    tagStyle: "bg-rose-light text-rose-dark border-rose-mid/20",
  },
  {
    icon: "🖥",
    iconBg: "bg-rose-light",
    name: "Desktop & Tooling",
    desc: "Built production desktop automation tooling — including a multi-printer waybill management system with carrier-specific workflows in C# and .NET.",
    tags: ["C#", ".NET", "Desktop Apps", "Print Automation"],
    tagStyle: "bg-sage-light text-sage-mid border-sage-mid/20",
  },
  // {
  //   icon: '🗄', iconBg: 'bg-sage-light', name: 'Database & DevOps',
  //   desc: 'Schema design, query optimisation, and deployment pipelines across multiple production environments.',
  //   tags: ['MySQL', 'PostgreSQL', 'Git', 'Docker', 'Linux'],
  //   tagStyle: 'bg-rose-light text-rose-dark border-rose-mid/20',
  // },
  {
    icon: "✦",
    iconBg: "bg-amber-50",
    name: "UI / UX",
    desc: "Translating requirements into intuitive, accessible interfaces — comfortable with complex workflow UIs, dashboards, and multi-step form experiences.",
    tags: ["Figma", "Responsive Design", "Animations", "Accessibility"],
    tagStyle: "bg-sage-light text-sage-mid border-sage-mid/20",
  },
];

interface SkillCardProps {
  skill: Skill;
  delay: number;
  inView: boolean;
}

function SkillCard({
  skill,
  delay,
  inView,
}: SkillCardProps): React.ReactElement {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-linen border border-rose-mid/10 rounded-2xl p-8 cursor-default"
      style={{
        transform: inView
          ? hovered
            ? "translateY(-6px)"
            : "translateY(0)"
          : "translateY(30px)",
        opacity: inView ? 1 : 0,
        boxShadow: hovered ? "0 20px 40px rgba(160,90,90,0.1)" : "none",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s, box-shadow 0.3s`,
      }}
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-2xl ${skill.iconBg}`}
      >
        {skill.icon}
      </div>
      <h3 className="font-serif text-xl text-text-base mb-2">{skill.name}</h3>
      <p className="text-sm text-text-muted leading-relaxed mb-4">
        {skill.desc}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {skill.tags.map((t) => (
          <span
            key={t}
            className={`text-[0.68rem] tracking-wide px-2.5 py-0.5 rounded-full border ${skill.tagStyle}`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills(): React.ReactElement {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="py-28 px-16 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel center>What I do</SectionLabel>
          <h2
            className="font-serif font-light text-text-base leading-tight"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
          >
            Skills & <em className="italic text-rose-dark">Expertise</em>
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6"
        >
          {skills.map((s, i) => (
            <SkillCard
              key={s.name}
              skill={s}
              delay={i * 0.08}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
