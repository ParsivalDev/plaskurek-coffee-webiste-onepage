export default function ContactMap() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[color:rgba(178,135,73,0.18)] shadow-soft">
      <iframe
        title="Lokalizacja Płaskurek Coffee"
        src="https://maps.google.com/maps?q=P%C5%82askurek+Coffee+Piekarnia+Rzemie%C5%9Blnicza%2C+Ludwika+Wary%C5%84skiego+33A%2C+28-100+Busko-Zdr%C3%B3j&output=embed&hl=pl"
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
