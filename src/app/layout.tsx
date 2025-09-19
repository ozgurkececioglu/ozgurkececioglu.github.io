import type { Metadata } from "next";
import { Figtree, Geist, Geist_Mono } from "next/font/google";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ozgur Kececioglu - Senior Frontend Engineer | React.js & TypeScript Expert",
  description: "Senior Frontend Engineer with 8+ years experience in React.js, TypeScript, Next.js. Expert in team leadership, UI libraries, scalable frontend architecture, and mentoring developers. Currently at Tekmetric.",
  keywords: [
    "Senior Frontend Engineer",
    "React Developer",
    "TypeScript Expert",
    "Next.js Developer",
    "Team Lead",
    "UI Libraries",
    "Frontend Architecture",
    "JavaScript",
    "Mentoring",
    "Scalable Applications",
    "Frontend Team Leadership"
  ],
  authors: [{ name: "Ozgur Kececioglu" }],
  creator: "Ozgur Kececioglu",
  openGraph: {
    title: "Ozgur Kececioglu - Senior Frontend Engineer",
    description: "Senior Frontend Engineer with 8+ years experience in React.js, TypeScript, Next.js. Expert in team leadership and scalable frontend architecture.",
    type: "profile",
    locale: "en_US",
    siteName: "Ozgur Kececioglu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ozgur Kececioglu - Senior Frontend Engineer",
    description: "Senior Frontend Engineer with 8+ years experience in React.js, TypeScript, Next.js",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "google-site-verification-code", // You can add this later
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
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${figtree.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
