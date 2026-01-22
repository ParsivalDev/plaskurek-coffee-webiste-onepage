import Section from "@/components/Section";

const testimonials = [
  {
    name: "Kasia",
    text: "Najlepszy chleb w okolicy, a do tego spokojne miejsce na prace. Zawsze wracam.",
    rating: 5,
  },
  {
    name: "Marek",
    text: "Swietna kawa i cieple pierogi. Klimat jak w malej piekarni z duzego miasta.",
    rating: 5,
  },
  {
    name: "Ola",
    text: "Wieczorem idealnie na spotkanie. Cieplo, ladnie i bardzo smacznie.",
    rating: 4,
  },
  {
    name: "Piotr",
    text: "Wpadam przed praca na sniadanie. Szybko, milo, bardzo dobre wypieki.",
    rating: 5,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-[color:var(--wheat-500)]">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          className={
            index < rating
              ? "h-4 w-4 fill-[color:var(--wheat-500)]"
              : "h-4 w-4 fill-[color:rgba(178,135,73,0.2)]"
          }
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.2 6.8.6-5.1 4.4 1.5 6.7L12 16.8 5.9 20l1.5-6.7L2.3 8.8l6.8-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <Section id="opinie" title="Opinie o naszej piekarni" subtitle="Opinie">
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="rounded-2xl border border-[color:rgba(178,135,73,0.18)] bg-white/80 p-6 shadow-soft"
          >
            <Stars rating={testimonial.rating} />
            <p className="mt-4 text-sm text-[color:var(--brown-700)]">
              {testimonial.text}
            </p>
            <p className="mt-4 text-sm font-semibold text-[color:var(--brown-900)]">
              {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
