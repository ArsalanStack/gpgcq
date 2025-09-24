import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <head>
  ...
  {(process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview") && (
    // eslint-disable-next-line @next/next/no-sync-scripts
    <script
      data-recording-token="jCqPzolzIO9pnqzMWOg4WnPpqYEdIT1mYwzN4Fh7"
      data-is-production-environment="false"
      src="https://snippet.meticulous.ai/v1/meticulous.js"
    />
  )}
  ...
</head>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
