import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type {} from "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gowryshuthan — Portfolio",
    template: "%s — Gowryshuthan",
  },
  description:
    "Minimal, premium portfolio for a frontend developer. Built with Next.js, Tailwind, and Framer Motion.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Gowryshuthan — Portfolio",
    description:
      "Minimal, premium portfolio for a frontend developer. Built with Next.js, Tailwind, and Framer Motion.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gowryshuthan — Portfolio",
    description:
      "Minimal, premium portfolio for a frontend developer. Built with Next.js, Tailwind, and Framer Motion.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased noise`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
