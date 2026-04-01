import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jeswin-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jeswin Thomas Jestin | Product Associate & PM Candidate",
    template: "%s | Jeswin Thomas Jestin",
  },
  description:
    "Jeswin Thomas Jestin — Product Associate & PM Intern Candidate. Shipped two products across EdTech and FinTech. Scaled organic impressions from 5K to 16K+. B.Tech ECE + Robotics. Based in India.",
  keywords: [
    "Jeswin Thomas Jestin",
    "Product Associate",
    "PM Intern",
    "Product Manager",
    "EdTech",
    "FinTech",
    "AI Product",
    "Royal Edu Hub",
    "Infinite Fin Cap",
    "Medi Connect",
    "Next.js Portfolio",
    "Product Space",
  ],
  authors: [{ name: "Jeswin Thomas Jestin", url: siteUrl }],
  creator: "Jeswin Thomas Jestin",
  publisher: "Jeswin Thomas Jestin",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Jeswin Thomas Jestin — Portfolio",
    title: "Jeswin Thomas Jestin | Product Associate & PM Candidate",
    description:
      "Two products shipped. Real metrics. Zero hand-holding. Product Associate & PM Intern Candidate across EdTech and FinTech.",
    images: [
      {
        url: "/images/Jeswin Portfolio Social Preview 1.png",
        width: 1200,
        height: 630,
        alt: "Jeswin Thomas Jestin — Product Associate Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeswin Thomas Jestin | Product Associate & PM Candidate",
    description:
      "Two products shipped. Real metrics. Zero hand-holding. Product Associate across EdTech & FinTech.",
    images: ["/images/Jeswin Portfolio Social Preview 1.png"],
    creator: "@jeswinjestin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
