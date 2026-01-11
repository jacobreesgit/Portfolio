import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { StyleGlideProvider } from '@/components/styleglide-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jacobrees.dev'),
  title: {
    default: 'Jacob Rees | Front-End Developer',
    template: '%s | Jacob Rees',
  },
  description:
    'Front-End Developer building products used by millions. Built Vepple (30+ universities, 4x engagement) and Pavers e-commerce (160+ stores). Vue.js, React, Next.js.',
  keywords: [
    'Front-End Developer',
    'Vue.js',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Web Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Jacob Rees' }],
  creator: 'Jacob Rees',
  publisher: 'Jacob Rees',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    apple: [{ url: '/favicon.png' }],
    shortcut: [{ url: '/favicon.png' }],
  },
  openGraph: {
    title: 'Jacob Rees | Front-End Developer',
    description:
      'Front-End Developer building products used by millions. Built Vepple (30+ universities) and Pavers e-commerce (160+ stores).',
    siteName: 'Jacob Rees',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jacob Rees - Front-End Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacob Rees | Front-End Developer',
    description:
      'Front-End Developer building products used by millions. Built Vepple (30+ universities) and Pavers e-commerce (160+ stores).',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col antialiased [--header-height:calc(var(--spacing)*14)] lg:[--header-height:calc(var(--spacing)*23)]',
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <StyleGlideProvider />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
