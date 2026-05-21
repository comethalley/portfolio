import React from "react";
import { useEffect, useState } from "react";

const scrollTo = (id: string): void =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero(): React.ReactElement {
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16 px-16"
      style={{
        background:
          "linear-gradient(145deg, #f2ede7 0%, #faf8f5 60%, #e8ede8 100%)",
      }}
    >
      <div
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full opacity-70 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #f3e8e8 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -left-16 bottom-16 w-72 h-72 rounded-full opacity-50 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #e8ede8 0%, transparent 70%)",
        }}
      />

      <div className={`max-w-2xl relative z-10 ${visible ? "" : "opacity-0"}`}>
        <div
          className={`flex items-center gap-3 text-rose-dark text-xs tracking-[0.18em] uppercase mb-5 ${
            visible ? "animate-fade-up-1" : "opacity-0"
          }`}
        >
          <span className="block w-7 h-px bg-rose-dark" />
          Full-Stack Web Developer · Quezon City, PH
        </div>

        <h1
          className={`font-serif font-light leading-[1.05] text-text-base mb-2 ${
            visible ? "animate-fade-up-2" : "opacity-0"
          }`}
          style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}
        >
          Kenneth <em className="italic text-rose-dark">Bonita</em>
          <br />
        </h1>

        <p
          className={`font-serif font-light italic text-text-muted text-2xl mb-4 ${
            visible ? "animate-fade-up-3" : "opacity-0"
          }`}
        >
          Building elegant, scalable web applications
        </p>

        <p
          className={`text-text-muted leading-relaxed mb-10 max-w-xl ${
            visible ? "animate-fade-up-4" : "opacity-0"
          }`}
        >
          Specialising in{" "}
          <strong className="text-text-base font-medium">React</strong> and{" "}
          <strong className="text-text-base font-medium">Laravel</strong> — from
          reusable packages and API integrations to polished, production-ready
          interfaces.
        </p>

        <div
          className={`flex gap-4 flex-wrap ${
            visible ? "animate-fade-up-5" : "opacity-0"
          }`}
        >
          <button
            onClick={() => scrollTo("projects")}
            className="px-9 py-4 bg-rose-dark text-white rounded-full text-sm tracking-wide font-sans transition-all duration-300 hover:bg-rose-hover hover:-translate-y-0.5 border-none cursor-pointer"
          >
            View my work
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-9 py-4 bg-transparent border border-rose-mid text-rose-dark rounded-full text-sm tracking-wide font-sans transition-all duration-300 hover:bg-rose-light hover:-translate-y-0.5 cursor-pointer"
          >
            Let's talk
          </button>
        </div>
      </div>
    </section>
  );
}
