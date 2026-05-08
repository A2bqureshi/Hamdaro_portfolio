import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portraits by Midsommar — Wedding & Portrait Photography",
  description:
    "Female photographer based in Greater Manchester, specialising in portraits, weddings and events. Capturing moments naturally.",
  openGraph: {
    title: "Portraits by Midsommar",
    description: "Wedding & Portrait Photography · Greater Manchester",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
