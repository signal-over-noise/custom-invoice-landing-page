import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Custom Invoicing - Lifetime Access to Branded Invoice Freedom',
  description: 'Break free from generic invoice templates. Create pixel-perfect branded invoices with zero limitations, no watermarks, and lifetime access. One payment, unlimited customization.',
  keywords: [
    'custom invoice design',
    'branded invoices',
    'shopify invoice app',
    'invoice customization',
    'lifetime subscription',
    'no watermark invoices',
    'pixel perfect invoicing',
    'professional invoice templates'
  ],
  authors: [{ name: 'Custom Invoicing Team' }],
  creator: 'Custom Invoicing',
  publisher: 'Custom Invoicing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://custominvoicing.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Custom Invoicing - Design Freedom Meets Lifetime Value',
    description: 'Stop paying monthly for basic templates. Get unlimited custom branded invoices with one lifetime payment.',
    url: 'https://custominvoicing.com',
    siteName: 'Custom Invoicing',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom Invoicing - Branded Invoice Freedom',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Invoicing - Break Free from Template Limitations',
    description: 'Pixel-perfect branded invoices. One payment, lifetime access.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="msapplication-TileColor" content="#1e293b" />
      </head>
      <body className="font-sans antialiased bg-white text-navy-900 selection:bg-trust-100 selection:text-trust-900">
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}