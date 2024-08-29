import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/sketchy/bootstrap.min.css'
import '../styles/custom.css'

export const metadata = {
  title: 'M. Sakeeb',
  description: 'Web Portfolio for M. Sakeeb.',
  icons: {
    icon: '/selfPortrait/selfPortrait_favicon.png',
    apple: '/selfPortrait/selfPortrait_apple-icon.png',
  },
  openGraph: {
    title: 'M. Sakeeb',
    description: 'Web Portfolio for M. Sakeeb.',
    url: 'https://my-portfolio-j961.onrender.com/',
    siteName: 'Web Portfolio',
    images: [
      {
        url: 'https://my-portfolio-j961.onrender.com/selfPortrait/selfPortrait_Large.jpg',
        width: 1200,
        height: 630,
        alt: 'Self Portrait',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M. Sakeeb',
    description: 'Web Portfolio for M. Sakeeb.',
    images: [
      'https://my-portfolio-j961.onrender.com/selfPortrait/selfPortrait_Large.jpg',
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
