import React from "react";
import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import { ProjectCard } from "./ProjectCard";
import type { Filter } from "../../types";
import { ALL_FILTERS, jobs } from "../../constants/project-constants";

export default function Projects(): React.ReactElement {
  const [ref, inView] = useInView(0.05);
  const [filter, setFilter] = useState<Filter>("All");

  return (
    <section id="projects" className="py-28 px-16 bg-linen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 text-rose-dark text-xs tracking-[0.2em] uppercase mb-4">
            <span className="block w-6 h-px bg-rose-dark" />
            Featured work
          </div>
          <h2
            className="font-serif font-light leading-tight text-text-base mb-8"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
          >
            Selected <em className="italic text-rose-dark">Projects</em>
          </h2>
          <div className="flex gap-2 flex-wrap">
            {ALL_FILTERS.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-1.5 rounded-full text-xs tracking-wide font-sans border cursor-pointer transition-all duration-200 ${
                  filter === tag
                    ? "bg-rose-dark text-white border-rose-dark"
                    : "bg-transparent text-text-muted border-rose-mid/30 hover:border-rose-mid"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div ref={ref}>
          {jobs.map((job, ji) => {
            const filtered =
              filter === "All"
                ? job.projects
                : job.projects.filter((p) =>
                    p.stack.some((s) => s.includes(filter))
                  );
            if (filtered.length === 0) return null;
            return (
              <div
                key={job.label}
                className="mb-16"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(30px)",
                  transition: `opacity 0.7s ease ${
                    ji * 0.2
                  }s, transform 0.7s ease ${ji * 0.2}s`,
                }}
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-rose-mid/15">
                  <div
                    className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${job.dotColor}`}
                  />
                  <div>
                    <p className="text-sm font-medium text-text-base">
                      {job.label}
                    </p>
                    <p className="text-xs text-text-light tracking-wide">
                      {job.tag}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
                  {filtered.map((p, i) => (
                    <ProjectCard
                      key={p.title}
                      project={p}
                      delay={i * 0.08}
                      inView={inView}
                    />
                  ))}
                </div>

                {job.note && (
                  <p className="mt-5 text-xs text-text-light italic font-serif">
                    {job.note}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
