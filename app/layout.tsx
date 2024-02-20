import './globals.css'
import type { Metadata } from 'next'
import Header from './Header'
import Footer from './Footer'
import { notojp, inter } from './fonts'
import Favicon from '../public/favicons/favicon.ico'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { Suspense } from 'react'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: '25000cc',
  description: '25000cc\'s portfolio',
  icons: [{rel: 'icon', url: Favicon.src}],
  openGraph: {
    locale: 'ja_JP',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Suspense>
        <GoogleAnalytics></GoogleAnalytics>
      </Suspense>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header></Header>
        <main className={`bg-gray-100 flex-grow px-4 py-10 ${notojp.className}`}>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  )
}
