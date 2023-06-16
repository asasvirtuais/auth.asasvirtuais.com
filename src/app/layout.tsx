import { Metadata } from 'next'
import { comfortaa } from '@/font'
import { Analytics } from '@vercel/analytics/react'
export const metadata: Metadata = {
  title: 'Asas Virtuais - Auth',
  description: 'User Authentication by Asas Virtuais',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{height: '100%'}} >
      <body style={{height: '100%'}} className={comfortaa.className}>
          {children}
          <Analytics/>
      </body>
    </html>
  )
}
