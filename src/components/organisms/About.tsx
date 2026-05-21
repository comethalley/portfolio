import React from "react";
import { useInView } from "../../hooks/useInView";
import { experiences, stats } from "../../constants/about-constants";

export function SectionLabel({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}): React.ReactElement {
  return (
    <div
      className={`flex items-center gap-3 text-rose-dark text-xs tracking-[0.2em] uppercase mb-4 ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="block w-6 h-px bg-rose-dark" />
      {children}
      {center && <span className="block w-6 h-px bg-rose-dark" />}
    </div>
  );
}

export default function About(): React.ReactElement {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="about" className="py-28 px-16 bg-linen">
      <div
        ref={ref}
        className={`grid grid-cols-[1fr_1.4fr] gap-20 items-start max-w-6xl mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Left */}
        <div>
          {/* <div className="relative mb-10">
            <div
              className="w-full aspect-square bg-gradient-to-br from-rose-light to-rose-mid flex items-center justify-center rounded-[2px_40px_2px_40px]"
            >
              <span className="font-serif text-8xl text-rose-dark/30">✦</span>
            </div>
            <div
              className="absolute -top-4 -left-4 w-full h-full border border-rose-mid pointer-events-none rounded-[2px_40px_2px_40px]"
            />
          </div> */}

          <p className="text-xs tracking-[0.18em] uppercase text-text-light mb-4">
            Experience
          </p>
          <div className="flex flex-col gap-3">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className={`p-4 bg-cream border border-rose-mid/10 rounded-xl border-l-4 ${exp.borderColor}`}
              >
                <p className="text-sm font-medium text-text-base mb-0.5">
                  {exp.role}
                </p>
                <p className="text-sm text-text-muted mb-2">{exp.company}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-light">{exp.period}</span>
                  <span
                    className={`text-[0.63rem] px-2 py-0.5 rounded-full tracking-wide ${exp.badgeClass}`}
                  >
                    {exp.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <SectionLabel>About me</SectionLabel>
          <h2 className="font-serif font-light leading-tight text-text-base mb-6 text-[clamp(2.2rem,4vw,3.2rem)]">
            Passionate about building{" "}
            <em className="italic text-rose-dark">clean</em>, scalable web
            applications
          </h2>

          <p className="text-text-muted leading-loose mb-4">
            I'm a full-stack web developer based in Quezon City with close to 2
            years of professional experience. I specialise in building
            production-grade applications using{" "}
            <strong className="text-text-base font-medium">Laravel</strong> and{" "}
            <strong className="text-text-base font-medium">React</strong>, with
            hands-on experience in Vue.js, Inertia.js, Laravel Livewire, and C#.
          </p>
          <p className="text-text-muted leading-loose mb-4">
            I've worked on complex third-party integrations — courier logistics
            APIs, government systems, and payment services — as well as
            large-scale booking platforms, internal operations dashboards, and
            LMS applications.
          </p>
          <p className="text-text-muted leading-loose">
            Currently at{" "}
            <strong className="text-text-base font-medium">
              Skyward Technology Solutions
            </strong>
            , building and maintaining enterprise-level web and desktop tooling
            for logistics and document management.
          </p>

          <div className="flex gap-10 mt-8 pt-8 border-t border-rose-mid flex-wrap">
            {stats.map(([num, label]) => (
              <div key={label}>
                <div className="font-serif text-4xl font-light text-rose-dark">
                  {num}
                </div>
                <div className="text-xs text-text-muted tracking-wide mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
