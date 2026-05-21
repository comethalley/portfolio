import { useState } from "react";
import type { ProjectCardProps } from "../../types";

export function ProjectCard({
  project,
  delay,
  inView,
}: ProjectCardProps): React.ReactElement {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-cream border border-rose-mid/10 rounded-2xl overflow-hidden"
      style={{
        transform: inView
          ? hovered
            ? "translateY(-7px)"
            : "translateY(0)"
          : "translateY(20px)",
        opacity: inView ? 1 : 0,
        boxShadow: hovered ? "0 20px 44px rgba(160,90,90,0.11)" : "none",
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s, box-shadow 0.3s`,
      }}
    >
      <div
        className={`h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-5xl opacity-60">{project.symbol}</span>
        )}

        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full text-[0.63rem] tracking-widest uppercase text-text-muted italic">
          {project.badge}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl text-text-base mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span
              key={t}
              className="text-[0.67rem] tracking-wide px-2.5 py-0.5 rounded-full bg-rose-light/50 text-rose-dark border border-rose-mid/15"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
