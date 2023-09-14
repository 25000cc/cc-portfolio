import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './Header'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '25000cc | Movie creater / Programmer',
  description: '25000cc\'s portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header></Header>
        <main className='bg-gray-100 flex-grow px-4 py-10'>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  )
}
