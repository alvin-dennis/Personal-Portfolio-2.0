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
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${calSans.variable} font-sans antialiased bg-[#1a2e35]`}
      >
        {children}
      </body>
    </html>
  );
}
