import './globals.css'
import { Roboto_Flex as Roboto } from 'next/font/google'
import { Providers } from './providers'
import Header from './components/Header'
import Footer from './components/Footer'
import NextAuthSessionProvider from '@/providers/sessionProvider'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Igreja Alcançados pela Graça',
  description: 'Site oficial da igreja Alcançados pela Graça',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${roboto.variable}`}>
        <NextAuthSessionProvider>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}
