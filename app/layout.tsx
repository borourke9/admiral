import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Admiral Mobile Detailing',
  description: 'Premium detailing services for luxury automobiles and yachts in Harbor Springs, Michigan',
  generator: 'Next.js',
  icons: {
    icon: '/admiral-favicon-transparent.ico',
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
        <link rel="icon" href="/admiral-favicon-transparent.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
