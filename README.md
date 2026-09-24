# Płaskurek — strona piekarni i kawiarni

Jednostronicowa strona [www.plaskurekcoffee.pl](https://www.plaskurekcoffee.pl) (Next.js 14, Tailwind CSS, Framer Motion).

## Uruchomienie

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produkcyjny
```

## Najważniejsze pliki

- `src/lib/locations.ts` — adresy, godziny otwarcia, e-mail i link do Facebooka (jedno źródło dla kontaktu, stopki, map i danych SEO).
- `src/components/` — sekcje strony (Hero, O nas, Menu, Przestrzeń, Eventy, Kontakt, Stopka).
- `src/app/api/contact/route.ts` — wysyłka zapytań e-mailem przez Resend (wymaga zmiennej `RESEND_API_KEY`).
