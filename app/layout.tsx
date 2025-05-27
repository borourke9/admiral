import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Admiral Detailing | Harbor Springs',
  description: 'Premium car and boat detailing in Harbor Springs, MI. Mobile service, online booking, and unmatched results.',
  generator: 'Next.js',
  icons: {
    icon: '/images/admiral-favicon-transparent.ico',
  },
  metadataBase: new URL('https://admiraldetailing.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Admiral Detailing | Harbor Springs',
    description: 'Premium car and boat detailing in Harbor Springs, MI. Mobile service, online booking, and unmatched results.',
    url: 'https://admiraldetailing.com',
    siteName: 'Admiral Mobile Detailing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admiral Detailing | Harbor Springs',
    description: 'Premium car and boat detailing in Harbor Springs, MI. Mobile service, online booking, and unmatched results.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/admiral-favicon-transparent.ico" />
        <link rel="canonical" href="https://admiraldetailing.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}
