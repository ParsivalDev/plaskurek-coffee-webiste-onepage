export default function ContactMap() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[color:rgba(178,135,73,0.18)] shadow-soft">
      <iframe
        title="Lokalizacja Płaskurek Coffee"
        src="https://maps.google.com/maps?q=11+Listopada+59a%2C+28-200+Stasz%C3%B3w&output=embed&hl=pl"
        width="100%"
        height="320"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
