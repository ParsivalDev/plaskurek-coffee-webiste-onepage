import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Płaskurek | Piekarnia i kawiarnia",
  description: "Premium piekarnia i kawiarnia w ciepłym, zbożowym klimacie.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${playfair.variable} ${inter.variable} page-bg antialiased`}>
        {children}
      </body>
    </html>
  );
}
