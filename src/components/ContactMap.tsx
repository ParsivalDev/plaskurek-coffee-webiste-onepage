import { mapsEmbedUrl, type Location } from "@/lib/locations";

export default function ContactMap({ location }: { location: Location }) {
  return (
    <div className="relative border-t border-[color:rgba(178,135,73,0.18)] bg-[color:var(--wheat-100)]">
      <iframe
        title={`Mapa dojazdu — Płaskurek ${location.city}`}
        src={mapsEmbedUrl(location)}
        width="100%"
        height="300"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
