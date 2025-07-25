import "./globals.css";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-calsans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Portfolio - Alvin Dennis",
  description:
    "A portfolio website showcasing my work and skills as a developer.",
  keywords: [
    "Alvin Dennis",
    "Portfolio",
    "Developer",
    "Software Engineer",
    "Web Development",
  ],
  authors: [{ name: "Alvin Dennis" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/CalSans-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;"
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
