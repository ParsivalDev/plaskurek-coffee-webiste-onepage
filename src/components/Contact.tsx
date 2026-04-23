"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import ContactMap from "@/components/ContactMap";
import { MapPin, Clock, Mail, ArrowRight } from "@/components/Icons";

export default function Contact() {
  return (
    <Section
      id="kontakt"
      title="Kontakt i dojazd"
      subtitle="Kontakt"
      className="bg-[color:rgba(239,228,209,0.6)]"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl border border-[color:rgba(178,135,73,0.2)] bg-white/85 p-8 shadow-soft"
        >
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[color:var(--accent)]/6"
          />
          <div className="relative">
            <h3 className="font-display text-3xl font-bold text-[color:var(--brown-900)]">
              Płaskurek
            </h3>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[color:var(--green-muted)]">
              Piekarnia i kawiarnia
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--wheat-100)] text-[color:var(--accent)]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--green-muted)]">
                    Adres
                  </p>
                  <p className="mt-1 text-sm text-[color:var(--brown-900)]">
                    ul. 11-Listopada 59a
                  </p>
                  <p className="text-sm text-[color:var(--brown-900)]">
                    28-200 Staszów
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--wheat-100)] text-[color:var(--accent)]">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--green-muted)]">
                    Godziny
                  </p>
                  <p className="mt-1 text-sm text-[color:var(--brown-900)]">
                    Pn–Pt: 7:00 – 21:00
                  </p>
                  <p className="text-sm text-[color:var(--brown-900)]">
                    Sob–Nd: 8:00 – 22:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--wheat-100)] text-[color:var(--accent)]">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--green-muted)]">
                    Kontakt
                  </p>
                  <a
                    href="mailto:plaskurekcoffee@o2.pl"
                    className="mt-1 block text-sm text-[color:var(--brown-900)] hover:text-[color:var(--accent)]"
                  >
                    plaskurekcoffee@o2.pl
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/maps?q=11+Listopada+59a%2C+28-200+Stasz%C3%B3w"
              target="_blank"
              rel="noreferrer"
              className="focus-ring group mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--accent-hover)] hover:shadow-[0_10px_28px_rgba(45,90,61,0.35)]"
            >
              Jak dojechać
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <ContactMap />
        </motion.div>
      </div>
    </Section>
  );
}
