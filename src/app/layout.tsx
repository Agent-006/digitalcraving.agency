import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Inter } from "next/font/google";
// @ts-ignore
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    template: "%s | Digital Craving Agency",
    default: "Digital Craving Agency - Expert Digital Solutions",
  },
  description: "Professional digital agency providing branding, digital marketing, and innovative products. Transform your business with our expert solutions.",
  keywords: ["digital agency", "branding", "digital marketing", "web development", "digital solutions"],
  authors: [{ name: "Digital Craving Agency" }],
  creator: "Digital Craving Agency",
  publisher: "Digital Craving Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digitalcraving.agency",
    siteName: "Digital Craving Agency",
    title: "Digital Craving Agency - Expert Digital Solutions",
    description: "Professional digital agency providing branding, digital marketing, and innovative products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Craving Agency - Expert Digital Solutions",
    description: "Professional digital agency providing branding, digital marketing, and innovative products.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#F5E6DC" />
        <meta name="color-scheme" content="light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${inter.variable} antialiased bg-[#F5E6DC] text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}