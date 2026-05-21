import React from "react";
import { useState, useEffect } from "react";
import type { Section } from "../../types";
import { NAV_LINKS, SECTIONS } from "../../constants/navbar-constants";

const scrollTo = (id: string): void =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Navbar(): React.ReactElement {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [active, setActive] = useState<Section>("hero");

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 40);
      for (const id of [...SECTIONS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-5 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md border-b border-rose-mid/20 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <span
        onClick={() => scrollTo("hero")}
        className="font-serif text-2xl font-light text-rose-dark cursor-pointer tracking-wide"
      >
        Dev<em>.</em>
      </span>

      <div className="flex gap-10">
        {NAV_LINKS.map((s) => (
          <button
            key={s}
            onClick={() => scrollTo(s)}
            className={`text-xs tracking-widest uppercase font-sans transition-colors duration-300 bg-transparent border-none cursor-pointer p-0 ${
              active === s
                ? "text-rose-dark"
                : "text-text-muted hover:text-rose-dark"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </nav>
  );
}
