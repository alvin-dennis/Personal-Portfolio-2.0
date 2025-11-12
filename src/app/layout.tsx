import { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/app/theme-provider";

import "./globals.css";


export const metadata: Metadata = {
  title: "Alvin Dennis — Builder | Maker | Manager",
  description:
    "Builder, maker, and developer passionate about crafting digital solutions and innovative technology. I blend creativity with technical expertise to solve real-world problems and empower communities.",
  authors: [{ name: "Alvin Dennis", url: "https://alvindennis.tech/" }],
  openGraph: {
    title: "Alvin Dennis — Builder | Maker | Manager",
    description:
      "DBuilder, maker, and developer passionate about crafting digital solutions and innovative technology. I blend creativity with technical expertise to solve real-world problems and empower communities.",
    siteName: "Alvin Dennis — Builder | Maker | Manager",
    url: "https://alvindennis.tech/",
    type: "website",
    images: [
      {
        url: "/assets/og.webp",
        width: 1200,
        height: 630,
        alt: "Alvin Dennis Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvin Dennis — Builder | Maker | Manager",
    description:
      "Builder, maker, and developer passionate about crafting digital solutions and innovative technology. I blend creativity with technical expertise to solve real-world problems and empower communities.",
    images: ["/assets/logo.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  metadataBase: new URL("https://alvindennis.tech/"),
};


const drukwide = localFont({
  src: "../components/fonts/Druk-Super-Trial.otf",
  variable: "--font-drukwide",
  display: "swap",
});

const druksuper = localFont({
  src: "../components/fonts/DrukText-Super-Trial.otf",
  variable: "--font-druksuper",
  display: "swap",
});

const leaguespartan = localFont({
  src: "../components/fonts/LeagueSpartan-Regular.ttf",
  variable: "--font-leaguespartan",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${drukwide.variable} ${druksuper.variable} ${leaguespartan.variable}`}
      >
        <body className="font-leaguespartan antialiased bg-[#FAF9F6] min-h-screen dark:bg-[#0a0a0a]">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            enableColorScheme
            disableTransitionOnChange
          >
          <main className="mx-auto max-w-3xl flex-1 px-5 pb-28">
            {children}
          </main>
            <Navbar />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
