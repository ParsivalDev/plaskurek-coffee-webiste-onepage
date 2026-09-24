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
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const showBackground = scrolled || menuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <div className="relative mx-auto max-w-6xl">
        <AnimatePresence>
          {showBackground && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "absolute inset-0 -z-10 shadow-soft backdrop-blur-md",
                menuOpen
                  ? "rounded-3xl bg-[color:rgba(44,32,22,0.96)]"
                  : "rounded-full bg-[color:rgba(60,40,24,0.8)]"
              )}
            />
          )}
        </AnimatePresence>
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          <a
            href="#start"
            onClick={() => setMenuOpen(false)}
            className="font-display relative z-10 text-xl font-bold tracking-wide text-[color:var(--wheat-100)] md:text-2xl"
          >
            Płaskurek
          </a>
          <nav
            aria-label="Nawigacja główna"
            className="hidden items-center gap-2 text-sm font-medium lg:flex"
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={cn(
                  "focus-ring rounded-full px-3 py-1 transition",
                  active === link.id
                    ? "bg-white/15 text-white"
                    : "text-white/75 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#eventy"
              className="focus-ring hidden rounded-full bg-[color:var(--wheat-300)] px-5 py-2 text-sm font-semibold text-[color:var(--brown-900)] shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--wheat-500)] hover:shadow-warm sm:inline-flex"
            >
              Zarezerwuj
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="menu-mobilne"
              aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
              className="focus-ring relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <span
                aria-hidden="true"
                className={cn(
                  "absolute h-0.5 w-5 rounded-full bg-current transition duration-300",
                  menuOpen ? "rotate-45" : "-translate-y-1.5"
                )}
              />
              <span
                aria-hidden="true"
                className={cn(
                  "absolute h-0.5 w-5 rounded-full bg-current transition duration-300",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                aria-hidden="true"
                className={cn(
                  "absolute h-0.5 w-5 rounded-full bg-current transition duration-300",
                  menuOpen ? "-rotate-45" : "translate-y-1.5"
                )}
              />
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="menu-mobilne"
              aria-label="Nawigacja mobilna"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <ul className="grid gap-1 px-4 pb-4">
                {links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active === link.id ? "true" : undefined}
                      className={cn(
                        "focus-ring block rounded-2xl px-4 py-3 text-base font-medium transition",
                        active === link.id
                          ? "bg-white/15 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2 sm:hidden">
                  <a
                    href="#eventy"
                    onClick={() => setMenuOpen(false)}
                    className="focus-ring block rounded-full bg-[color:var(--wheat-300)] px-5 py-3 text-center text-sm font-semibold text-[color:var(--brown-900)]"
                  >
                    Zarezerwuj
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
