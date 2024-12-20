import Navbar from "./components/Navbar"
import "./globals.css"

export const metadata = {
  title: "LWS Xstream - Video Streaming",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-color-bg text-white font-exo`}>
        <div className="container mx-auto px-4 py-4">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
