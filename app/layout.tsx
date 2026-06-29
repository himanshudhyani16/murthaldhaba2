import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import { NewsletterSection } from "../components/NewsletterSection";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

export const metadata: Metadata = {
  title: "Murthal Dhaba — Authentic Flavours & Fine Dining",
  description:
    "Experience the finest authentic cuisine at Murthal Dhaba. Book a table, explore our seasonal menu, and indulge in dishes crafted by our passionate chefs.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body suppressHydrationWarning>
        <Header />
        {children}
        <NewsletterSection />
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
