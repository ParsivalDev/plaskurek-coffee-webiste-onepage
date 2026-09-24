"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import ContactMap from "@/components/ContactMap";
import { MapPin, Clock, Mail, ArrowRight, Facebook } from "@/components/Icons";
import {
  CONTACT_EMAIL,
  FACEBOOK_URL,
  locations,
  mapsSearchUrl,
} from "@/lib/locations";

export default function Contact() {
  return (
    <Section
      id="kontakt"
      title="Kontakt i dojazd"
      subtitle="Kontakt"
      className="bg-[color:rgba(239,228,209,0.6)]"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="-mt-4 mb-10 max-w-2xl text-base leading-relaxed text-[color:var(--brown-700)]"
      >
        Zapraszamy do obu naszych piekarni — w Staszowie i w Busku-Zdroju.
        Wybierz najbliższą i wpadnij na świeży chleb, kawę albo ciepły posiłek.
      </motion.p>

      <div className="grid gap-8 lg:grid-cols-2">
        {locations.map((location, index) => (
          <motion.article
            key={location.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-labelledby={`lokal-${location.id}`}
            className="relative flex flex-col overflow-hidden rounded-2xl border border-[color:rgba(178,135,73,0.2)] bg-white/85 shadow-soft"
          >
            <div className="relative flex-1 p-6 md:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/5"
              />
              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3
                    id={`lokal-${location.id}`}
                    className="font-display text-2xl font-bold text-[color:var(--brown-900)] md:text-3xl"
                  >
                    {location.city}
                  </h3>
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-[color:var(--accent)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                    Otwarte
                  </span>
                </div>

                <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--wheat-100)] text-[color:var(--accent)]">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--green-muted)]">
                        Adres
                      </dt>
                      <dd className="mt-1 text-sm text-[color:var(--brown-900)]">
                        {location.street}
                        <br />
                        {location.postalCode} {location.city}
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--wheat-100)] text-[color:var(--accent)]">
                      <Clock size={18} />
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--green-muted)]">
                        Godziny
                      </dt>
                      {location.hours ? (
                        <dd className="mt-1 text-sm text-[color:var(--brown-900)]">
                          {location.hours.map((row) => (
                            <span key={row.days} className="flex gap-2">
                              <span className="w-12 shrink-0">{row.days}:</span>
                              <span>{row.time}</span>
                            </span>
                          ))}
                        </dd>
                      ) : (
                        <dd className="mt-1 text-sm text-[color:var(--brown-900)]">
                          Aktualne godziny na{" "}
                          <a
                            href={FACEBOOK_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold underline decoration-[color:var(--wheat-300)] underline-offset-4 transition hover:text-[color:var(--accent)]"
                          >
                            naszym Facebooku
                          </a>
                        </dd>
                      )}
                    </div>
                  </div>
                </dl>

                <a
                  href={mapsSearchUrl(location)}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring group mt-7 inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--accent-hover)] hover:shadow-[0_10px_28px_rgba(45,90,61,0.35)]"
                >
                  Jak dojechać
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
            <ContactMap location={location} />
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-8 flex flex-col gap-4 rounded-2xl border border-[color:rgba(178,135,73,0.2)] bg-white/70 p-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--green-muted)]">
            Napisz do nas
          </p>
          <p className="mt-1 text-sm text-[color:var(--brown-700)]">
            Zamówienia, rezerwacje i pytania — odpowiadamy w ciągu 24 godzin.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-[color:rgba(178,135,73,0.35)] bg-white px-4 py-2.5 text-sm font-semibold text-[color:var(--brown-900)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            <Mail size={16} />
            {CONTACT_EMAIL}
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-[color:rgba(178,135,73,0.35)] bg-white px-4 py-2.5 text-sm font-semibold text-[color:var(--brown-900)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            <Facebook size={16} />
            Facebook
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
