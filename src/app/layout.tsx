import { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/app/theme-provider";

import "./globals.css";


export const metadata: Metadata = {
  title: "µLearn",
  description: "Break the echo chamber",
  authors: [{ name: "µLearn" }],
  openGraph: {
    title: "µLearn",
    description:
      "µLearn is a synergic philosophy of education, with a culture of mutual learning through micro groups of peers. µLearn is here to assist you in breaking through the echo chambers and free you from the shackles that have you grounded.",
    siteName: "µLearn",
    url: "https://mulearn.org/",
    type: "website",
    images: ["/assets/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://mulearn.org/"),
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
