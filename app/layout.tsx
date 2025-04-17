import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-calsans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Portfolio - Alvin Dennis",
  description: "Personal portfolio website showcasing projects and skills",
  keywords: [
    "Alvin Dennis",
    "Portfolio",
    "Developer",
    "Software Engineer",
    "Web Development",
  ],
  authors: [{ name: "Alvin Dennis" }],
  creator: "Alvin Dennis",
  publisher: "Alvin Dennis",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />
        <meta
          httpEquiv="Strict-Transport-Security"
          content="max-age=31536000; includeSubDomains; preload"
        />
      </head>
      <body
        className={`${poppins.variable} ${calSans.variable} font-sans antialiased bg-[#1a2e35]`}
      >
        {children}
      </body>
    </html>
  );
}
