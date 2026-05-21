import React from "react";
import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { useInView } from "../../hooks/useInView";
import type { FormState } from "../../types";
import { contactLinks, inputClass } from "../../constants/contact-constants";

export default function Contact(): React.ReactElement {
  const [ref, inView] = useInView();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 px-16 bg-cream">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="font-serif text-8xl text-rose-dark/15 leading-none mb-4">
          ✉
        </div>

        <div className="flex items-center justify-center gap-3 text-rose-dark text-xs tracking-[0.2em] uppercase mb-4">
          <span className="block w-6 h-px bg-rose-dark" />
          Get in touch
          <span className="block w-6 h-px bg-rose-dark" />
        </div>

        <h2 className="font-serif font-light text-text-base leading-tight mb-6 text-[clamp(2.2rem,4vw,3.2rem)]">
          Let's work <em className="italic text-rose-dark">together</em>
        </h2>

        <p className="text-text-muted mb-12">
          Whether you have a project in mind or just want to say hello — my
          inbox is always open.
        </p>

        <div className="flex justify-center gap-3 flex-wrap mb-12">
          {contactLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-rose-mid rounded-full text-sm tracking-wide text-rose-dark no-underline transition-all duration-300 hover:bg-rose-light hover:-translate-y-0.5"
            >
              {l.label}
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="text-left space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs tracking-widest uppercase text-text-muted mb-1.5">
                Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClass}
                required
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-text-muted mb-1.5">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="kenneth.bonita07@gmail.com"
                className={inputClass}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-xs tracking-widest uppercase text-text-muted mb-1.5">
              Subject
            </label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs tracking-widest uppercase text-text-muted mb-1.5">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className={`${inputClass} min-h-[120px] resize-y`}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-4 text-white rounded-lg font-sans text-sm tracking-widest uppercase border-none cursor-pointer transition-all duration-300 ${
              sent ? "bg-sage-mid" : "bg-rose-dark hover:bg-rose-hover"
            }`}
          >
            {sent ? "✓ Message sent!" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
