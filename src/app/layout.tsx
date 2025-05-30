import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: {
    default: 'WurbleWeb | Web Design & Development Agency',
    template: '%s | WurbleWeb',
  },
  description:
    'Professional web design and development services to elevate your business online. Explore our services today.',
  keywords: [
    'web design',
    'web development',
    'SEO',
    'Squarespace websites',
    'WurbleWeb',
    'responsive design',
    'web agency',
  ],
  authors: [{ name: 'WurbleWeb', url: 'https://wurbleweb.com' }],
  creator: 'WurbleWeb',
  robots: 'index, follow',
  metadataBase: new URL('https://wurbleweb.com'),

  // ✅ Open Graph for social sharing
  openGraph: {
    title: 'WurbleWeb | Web Design & Development Agency',
    description:
      'High-performance websites that convert. Explore our services and grow your business with WurbleWeb.',
    url: 'https://wurbleweb.com',
    siteName: 'WurbleWeb',
    images: [
      {
        url: 'https://wurbleweb.com/og-image.jpg', // 🔁 Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'WurbleWeb Website Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // ✅ Twitter card
  twitter: {
    card: 'summary_large_image',
    title: 'WurbleWeb | Web Design & Development Agency',
    description:
      'Professional web design and development services to elevate your business online.',
    images: ['https://wurbleweb.com/og-image.jpg'], // 🔁 Replace with actual image
    creator: '@wurbleweb', // 🔁 Replace with your Twitter username
  },

  // ✅ Favicon
  icons: {
    icon: '/favicon.ico',
  },
};

// ✅ Viewport settings (required separately in Next.js 14+)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}