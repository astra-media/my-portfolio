import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/sketchy/bootstrap.min.css'
import '../styles/custom.css'
import Head from 'next/head'

export const metadata = {
  title: 'M. Sakeeb',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head></Head>
      <body>{children}</body>
    </html>
  )
}
