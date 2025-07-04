import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Triston Miller - Early Childhood Education Professional",
  description: "Portfolio of Triston Miller, Early Childhood Education Professional specializing in child development and educational excellence.",
  keywords: "early childhood education, child development, teaching, education portfolio, Triston Miller",
  authors: [{ name: "Triston Miller" }],
  creator: "Triston Miller",
  openGraph: {
    title: "Triston Miller - Early Childhood Education Professional",
    description: "Portfolio showcasing experience in early childhood education, child development, and educational leadership.",
    url: "https://tristonmiller.com",
    siteName: "Triston Miller Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triston Miller - Early Childhood Education Professional",
    description: "Portfolio showcasing experience in early childhood education and child development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
