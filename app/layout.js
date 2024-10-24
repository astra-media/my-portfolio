import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/sketchy/bootstrap.min.css'
import '../styles/custom.css'

export const metadata = {
  title: 'Full Stack Developer – Mohammad Sakeeb',
  description:
    'Task-driven Full-Stack Developer and UI/UX Specialist skilled in React, Next.js, and Express.js. Experienced in e-commerce development and web design.',
  icons: {
    icon: '/selfPortrait/selfPortrait_favicon.png',
    apple: '/selfPortrait/selfPortrait_apple-icon.png',
  },
  openGraph: {
    title: 'Full Stack Developer – Mohammad Sakeeb',
    description:
      'Task-driven Full-Stack Developer and UI/UX Specialist skilled in React, Next.js, and Express.js. Experienced in e-commerce development and web design.',
    url: 'https://www.sakeeb.dev/',
    siteName: 'Mohammad Sakeeb | Full Stack Developer',
    images: [
      {
        url: 'https://www.sakeeb.dev/selfPortrait/selfPortrait_Large.jpg',
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
    title: 'Full Stack Developer – Mohammad Sakeeb',
    description:
      'Task-driven Full-Stack Developer and UI/UX Specialist skilled in React, Next.js, and Express.js. Experienced in e-commerce development and web design.',
    images: ['https://www.sakeeb.dev/selfPortrait/selfPortrait_Large.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
