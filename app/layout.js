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
          src="https://26cda84f-9edb-482e-a1a9-2060748c7271.lovableproject.com/widget.js"
          data-bot-id="031dbfa0-5706-4112-b379-f426807feedc"
          strategy="afterInteractive"
        />
                     </body>
    </html>
  );
}
