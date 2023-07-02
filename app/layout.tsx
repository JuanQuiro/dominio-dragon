import Navbar from '@/components/Navbar'
import './globals.css'
import { Josefin_Sans } from 'next/font/google'

const jssans = Josefin_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - Alejandro Dalzotto'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jssans.className}  bg-gradient-to-tr from-black to-neutral-800 scroll`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
