import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Space_Grotesk, DM_Sans, Geist_Mono } from 'next/font/google'
import './globals.css'
import { LoadingScreen } from '@/components/LoadingScreen'

const playfair = Playfair_Display({ 
  variable: '--font-playfair', 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800', '900'] 
})
const spaceGrotesk = Space_Grotesk({ 
  variable: '--font-space-grotesk', 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'] 
})
const dmSans = DM_Sans({ 
  variable: '--font-dm-sans', 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'] 
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Visual Stories | Video Editor & Motion Graphics',
  description: 'Professional video editing and motion graphics portfolio. Crafting visual stories that convert.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${spaceGrotesk.variable} ${dmSans.variable} ${geistMono.variable} dark`}>
      <body className="bg-background text-foreground antialiased">
        <LoadingScreen />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
