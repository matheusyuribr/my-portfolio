import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const inter = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })	

export const metadata: Metadata = {
  title: 'Matheus Yuri',
  description: 'Portfolio de Matheus Yuri, um desenvolvedor web.', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
