import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export const metadata: Metadata = {
  title: "Alvin Dennis — Builder | Maker | Manager",
  description:
    "Builder, maker, and developer passionate about crafting digital solutions and innovative technology. I blend creativity with technical expertise to solve real-world problems and empower communities.",
  authors: [{ name: "Alvin Dennis", url: "https://alvinn.me/" }],
  openGraph: {
    title: "Alvin Dennis — Builder | Maker | Manager",
    description:
      "Builder, maker, and developer passionate about crafting digital solutions and innovative technology. I blend creativity with technical expertise to solve real-world problems and empower communities.",
    siteName: "Alvin Dennis — Builder | Maker | Manager",
    url: "https://alvinn.me/",
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
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  metadataBase: new URL("https://alvinn.me/"),
};

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
      <html lang="en" suppressHydrationWarning>
        <body className={`${druksuper.variable} ${leaguespartan.variable} font-leaguespartan antialiased bg-background text-foreground`}>
        <main className="mx-auto max-w-7xl flex-1 px-5 pb-28">
          <ScrollProgress className="bg-primary" />
            {children}
        </main>
        <Navbar />
        </body>
      </html>
  );
}