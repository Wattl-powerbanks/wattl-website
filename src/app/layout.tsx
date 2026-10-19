import type { Metadata } from "next";
import { Bricolage_Grotesque, Lilita_One, Nunito, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const lilitaOne = Lilita_One({
  variable: "--font-lilita-one",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wattl.io"),
  title: {
    default: "Wattl. | Portable Power Bank Rentals",
    template: "%s | Wattl.",
  },
  description:
    "Sydney's locally owned powerbank network. $1 per 10 minutes, no $50 deposit, and you can return it at any Wattl venue.",
  keywords: [
    "power bank rental",
    "portable charger",
    "phone charging",
    "power bank hire",
    "Wattl",
    "Australia",
    "charging station",
    "rent a charger",
    "mobile charging",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://wattl.io",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://wattl.io",
    siteName: "Wattl.",
    title: "Wattl. | Portable Power Bank Rentals",
    description:
      "Sydney's locally owned powerbank network. $1 per 10 minutes, no $50 deposit, and you can return it at any Wattl venue.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wattl. | Portable Power Bank Rentals",
    description:
      "Sydney's locally owned powerbank network. $1 per 10 minutes, no $50 deposit, and you can return it at any Wattl venue.",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wattl Charging PTY LTD",
  url: "https://wattl.io",
  description:
    "Sydney's locally owned powerbank network.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "164 Blaxcell Street",
    addressLocality: "Granville",
    addressRegion: "NSW",
    postalCode: "2142",
    addressCountry: "AU",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+61423234799",
    contactType: "customer service",
    email: "info@wattl.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${lilitaOne.variable} ${nunito.variable} ${bricolageGrotesque.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
