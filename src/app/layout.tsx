import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import MotionProvider from "@/components/MotionProvider";
import { CONTACT_EMAIL, FACEBOOK_URL, locations } from "@/lib/locations";

const SITE_URL = "https://www.plaskurekcoffee.pl";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "Płaskurek — rzemieślnicza piekarnia i kawiarnia w Staszowie i Busku-Zdroju. Świeży chleb, kawa, śniadania, słodkości i ciepłe dania. Zapraszamy!";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Płaskurek | Piekarnia i kawiarnia — Staszów i Busko-Zdrój",
  description,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: "Płaskurek",
    title: "Płaskurek | Piekarnia i kawiarnia",
    description,
    images: [{ url: "/banner.jpg", alt: "Wypieki w piekarni Płaskurek" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#2c2016",
};

const DAY_CODES: Record<string, string[]> = {
  "Pn–Pt": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  Sob: ["Saturday"],
  Nd: ["Sunday"],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": locations.map((location) => ({
    "@type": "Bakery",
    "@id": `${SITE_URL}/#${location.id}`,
    name: `Płaskurek — ${location.city}`,
    url: SITE_URL,
    image: `${SITE_URL}/banner.jpg`,
    email: CONTACT_EMAIL,
    sameAs: [FACEBOOK_URL],
    servesCuisine: ["Piekarnia", "Kawiarnia"],
    address: {
      "@type": "PostalAddress",
      streetAddress: location.street.replace(/^ul\.\s*/, ""),
      postalCode: location.postalCode,
      addressLocality: location.city,
      addressCountry: "PL",
    },
    ...(location.hours
      ? {
          openingHoursSpecification: location.hours.map((row) => {
            const [opens, closes] = row.time.split("–").map((t) => t.trim());
            return {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: DAY_CODES[row.days],
              opens: opens.padStart(5, "0"),
              closes: closes.padStart(5, "0"),
            };
          }),
        }
      : {}),
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${playfair.variable} ${inter.variable} page-bg antialiased`}>
        <a
          href="#tresc"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[color:var(--brown-900)] focus:shadow-soft"
        >
          Przejdź do treści
        </a>
        <MotionProvider>{children}</MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
