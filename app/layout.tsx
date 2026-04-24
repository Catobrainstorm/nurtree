// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NURTRĒË | System Scientist",
  description: "A multidisciplinary system translating environmental and cultural intelligence into wearable narratives.",
  keywords: ["System Scientist", "Sustainable Fashion", "Marine Biology", "African Heritage", "Nurtree"],
  authors: [{ name: "David Aladejobi" }],
  openGraph: {
    title: "NURTRĒË",
    description: "Translating invisible systems into physical artifacts.",
    url: "https://nurtree.system", // Change to your actual domain later
    siteName: "NURTRĒË",
    images: [
      {
        url: "/opengraph-image.jpg", // Make sure this file exists in /app or /public
        width: 1200,
        height: 630,
        alt: "NURTRĒË System Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NURTRĒË | System Scientist",
    description: "Translating invisible systems into physical artifacts.",
    images: ["/opengraph-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-nurtree-accent selection:text-black bg-white text-black transition-colors duration-700 overflow-x-hidden">
        {/* Navbar is handled inside pages, but if you want it global, keep it here */}
        {children}
      </body>
    </html>
  );
}