import "./globals.css";
import type { Metadata } from "next";

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
      <body className="page-bg antialiased">{children}</body>
    </html>
  );
}
