import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/sheard/Header/Header";
import Footer from "@/components/sheard/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
  variable: "--font-heading"
});

export const metadata = {
  title: "Kawsar Alam - Frontend Developer",
  description: "Portfolio of Kawsar Alam, a passionate Frontend Developer specializing in React, Next.js, and modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="kawsar.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className={`${inter.className} ${spaceGrotesk.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  );
}