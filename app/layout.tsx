import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Murthal Dhaba — Authentic Flavours & Fine Dining",
  description:
    "Experience the finest authentic cuisine at Murthal Dhaba. Book a table, explore our seasonal menu, and indulge in dishes crafted by our passionate chefs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body>{children}</body>
    </html>
  );
}
