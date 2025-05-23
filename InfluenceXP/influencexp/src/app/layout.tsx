import type { Metadata } from "next";
// import { Inter } from 'next/font/google' // removed to disable optimized font loading
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";
// import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

// const inter = Inter({ subsets: ['latin'] }) // removed optimized font use

export const metadata: Metadata = {
  title: {
    default: "LinkedIn Growth Platform | InfluenceXP - Personal Branding",
    template: "%s | InfluenceXP - LinkedIn Growth"
  },
  description: "InfluenceXP helps professionals grow their LinkedIn presence with gamification, AI-powered content tools, and strategic personal branding insights.",
  keywords: ["LinkedIn growth", "social media dashboard", "professional networking", "LinkedIn analytics", "social media growth", "personal branding", "content strategy"],
  authors: [{ name: "InfluenceXP Team" }],
  category: "Professional Development",
  creator: "InfluenceXP",
  publisher: "InfluenceXP",
  metadataBase: new URL("https://influencexp.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LinkedIn Growth Platform | InfluenceXP - Personal Branding",
    description: "Transform your LinkedIn presence with gamification and AI-powered content tools for professional growth and personal branding.",
    url: "https://influencexp.com",
    siteName: "InfluenceXP",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "InfluenceXP LinkedIn Growth Platform Dashboard"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkedIn Growth Platform | InfluenceXP",
    description: "Transform your LinkedIn presence with gamification and AI-powered content tools for professional growth.",
    images: [
      "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    ],
    creator: "@influencexp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-141526WS8Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-141526WS8Q');
          `}
        </Script>
        {/* External CSS link removed */}
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <FloatingCTA />
            <div className="noise-texture"></div>
          </div>
        </ThemeProvider>
        {/* Vercel Analytics */}
        <Script id="vercel-analytics" strategy="afterInteractive">
          {`
            window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
            window.va('init', { 
              useBeacon: true,
              includeNetworkData: true
            });
            window.va('event', 'pageview');
          `}
        </Script>
        <Script 
          src="/_vercel/insights/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
