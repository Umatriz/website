import { Nunito_Sans } from "@next/font/google"

import "./global.css"

const font = Nunito_Sans({
  weight: ['200', '300', '400', '600', '700', '800'],
  subsets: ['latin'],
  style: ['italic', 'normal']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className={font.className}>{children}</body>
    </html>
  )
}
