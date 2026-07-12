import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shreya Rakholiya — Backend Developer",
  description:
    "I build REST APIs, real-time servers, async job queues, AI integrations, and workflow automation that ship to production and scale.",
  icons: {
    icon: "/shreya.jpeg",
    shortcut: "/shreya.jpeg",
    apple: "/shreya.jpeg",
  },
  openGraph: {
    title: "Shreya Rakholiya — Backend Developer",
    description:
      "I build REST APIs, real-time servers, async job queues, AI integrations, and workflow automation that ship to production and scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/shreya.jpeg?v=2" type="image/jpeg" sizes="any" />
        <link rel="shortcut icon" href="/shreya.jpeg?v=2" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/shreya.jpeg?v=2" />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} bg-background text-foreground antialiased selection:bg-cyan-500 selection:text-black transition-colors duration-300`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
