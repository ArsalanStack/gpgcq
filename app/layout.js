import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from 'next/script'   // <--- THIS LINE IS REQUIRED
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GPGCQ Sariab – Excellence in Education & Training",
  description: "The gpgcq sariab original website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Toaster position="top-center" reverseOrder={false} />
        <Header />
        {children}
        <Footer />
<Script
          src="https://botify-ai.lovable.app/widget.js"
          data-bot-id="2c0ff5c0-bc62-4b90-bf25-5615024e7082"
          strategy="afterInteractive"
        />
            </body>
    </html>
  );
}
