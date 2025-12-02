import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { Pixelify_Sans } from 'next/font/google'

const font = Pixelify_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'VS World Edit Models',
  description: 'Vintage Story world edit models sharespace',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable} antialiased font-sans`}>
        <header className="bg-vintage-800 border-b-4 border-vintage-900 p-6">
          <nav>
            <ul className="flex items-center justify-center">
              <li>
                <Link
                  className="bg-vintage-300 p-2 aspect-square border-4 border-vintage-800 hover:bg-vintage-400 active:translate-y-0.5 active:shadow-inner transition-all duration-100"
                  href="/"
                >
                  🏠
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="bg-vintage-200">{children}</main>
        <footer className="grid items-center p-4 justify-center text-xs bg-vintage-800 text-vintage-500">
          Copyrights @RomainGueffier {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  )
}
