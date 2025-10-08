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
    'WurbleWeb creates high-performing websites that attract leads, convert clients, and grow your business. Get a custom website starting from $95/month.',
  keywords: [
    'web design',
    'web development',
    'responsive websites',
    'lead generation websites',
    'small business websites',
    'SEO optimized websites',
    'website agency',
    'WurbleWeb',
  ],
  authors: [{ name: 'WurbleWeb', url: 'https://wurbleweb.co' }],
  creator: 'WurbleWeb',
  robots: 'index, follow',
  metadataBase: new URL('https://wurbleweb.co'),

  // ✅ Open Graph for social sharing
  openGraph: {
    title: 'WurbleWeb | Web Design & Development Agency',
    description:
      'High-performing websites that convert visitors into clients. Partner with WurbleWeb to grow your business online.',
    url: 'https://wurbleweb.co',
    siteName: 'WurbleWeb',
    images: [
      {
        url: 'https://wurbleweb.co/og-image.jpg', // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: 'WurbleWeb | Web Design & Development',
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
      'Custom websites that attract leads, convert clients, and help your business grow. Starting at $95/month.',
    images: ['https://wurbleweb.co/og-image.jpg'], // Replace with actual OG image
    creator: '@wurbleweb', // Your Twitter handle
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