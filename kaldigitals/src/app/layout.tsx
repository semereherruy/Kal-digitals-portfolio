import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond, Noto_Sans_Ethiopic } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
});

const notoEthiopic = Noto_Sans_Ethiopic({
  subsets: ['ethiopic'],
  variable: '--font-ethiopic',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Kal Digitals — Digital Marketing Agency in Mekelle, Ethiopia',
  description:
    'Kal Digitals is a full-service digital agency based in Mekelle, Tigray. We help Ethiopian businesses grow through design, web development, digital marketing, and branding.',
  keywords: [
    'digital marketing Ethiopia',
    'web design Mekelle',
    'branding Tigray',
    'social media marketing Ethiopia',
    'Kal Digitals',
    'ካል ዲጂታልስ',
  ],
  authors: [{ name: 'Kal Digitals', url: 'https://kaldigitals.com' }],
  openGraph: {
    title: 'Kal Digitals — Digital Marketing Agency in Mekelle, Ethiopia',
    description: 'Design, development, and marketing built for Ethiopian businesses.',
    type: 'website',
    locale: 'en_ET',
    siteName: 'Kal Digitals',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${notoEthiopic.variable} h-full`}>
      <body className="min-h-full antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
