import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
// test
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dominus – Ponad 20 lat doświadczenia w doradztwie prawnym i BHP",
  description: "Firma Maria Balińska „Dominus” od ponad dwóch dekad wspiera przedsiębiorstwa w realizacji wymogów prawnych oraz w zakresie bezpieczeństwa i higieny pracy. Tworzymy zespół wykwalifikowanych prawników, który zapewnia kompleksowe wsparcie dostosowane do potrzeb klienta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
