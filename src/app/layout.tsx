import { Metadata, Viewport } from "next";
import { League_Spartan, Pacifico } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a1a",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.creator,
  url: siteConfig.url,
  jobTitle: siteConfig.jobTitle,
  description: siteConfig.description,
  sameAs: [],
};

const nougat = localFont({
  src: "../components/fonts/Nougat.ttf",
  variable: "--font-nougat",
  display: "swap",
});

const leaguespartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-leaguespartan",
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${nougat.variable} ${leaguespartan.variable} ${pacifico.variable} font-leaguespartan antialiased bg-background text-foreground`}
      >
        <main className="mx-auto flex-1 px-5 pb-28 md:pb-10">{children}</main>
      </body>
    </html>
  );
}
