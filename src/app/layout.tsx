import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WurbleWeb | Web Design & Development Agency",
  description:
    "Professional web design and development services to elevate your business online. Explore our services today.",
  keywords: [
    "web design",
    "web development",
    "SEO",
    "Squarespace websites",
    "WurbleWeb",
  ],
  authors: [{ name: "WurbleWeb", url: "https://wurbleweb.com" }],
  creator: "WurbleWeb",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Professional web design and development services to elevate your business online. Explore our services today." />
        <meta name="keywords" content="web design, web development, SEO, Squarespace websites, WurbleWeb" />
        <meta name="author" content="WurbleWeb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}