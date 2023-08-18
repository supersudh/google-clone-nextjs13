import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'Google Clone',
  description: 'Google Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
