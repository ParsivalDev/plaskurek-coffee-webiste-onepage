"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { id: "start", label: "Start" },
  { id: "onas", label: "O nas" },
  { id: "menu", label: "Menu" },
  { id: "przestrzen", label: "Przestrzeń" },
  { id: "eventy", label: "Eventy" },
  { id: "kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("start");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#start"
          className="font-display relative z-10 text-xl font-bold tracking-wide text-[color:var(--wheat-100)] md:text-2xl"
        >
          Płaskurek
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[color:var(--wheat-100)] lg:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "relative transition",
                active === link.id
                  ? "text-white"
                  : "text-[color:rgba(255,255,255,0.75)] hover:text-white"
              )}
            >
              <span
                className={cn(
                  "rounded-full px-3 py-1",
                  active === link.id && "bg-white/15"
                )}
              >
                {link.label}
              </span>
            </a>
          ))}
        </nav>
        <a
          href="#eventy"
          className="focus-ring relative z-10 hidden rounded-full bg-[color:var(--wheat-300)] px-5 py-2 text-sm font-semibold text-[color:var(--brown-900)] shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--wheat-500)] hover:shadow-warm sm:inline-flex"
        >
          Zarezerwuj
        </a>
        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute inset-0 -z-10 rounded-full bg-[color:rgba(60,40,24,0.65)] backdrop-blur"
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
