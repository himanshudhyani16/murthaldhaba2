import type { Metadata } from "next";
import Script from "next/script";
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
  verification: {
    google: "uUT4bIQbr4XzyfPIFvV9wqkKXgHEHNNCPG835mFacGI",
  },
};

const GA_ID = "G-6R88298NJW";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body suppressHydrationWarning>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        <Header />
        {children}
        <NewsletterSection />
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
