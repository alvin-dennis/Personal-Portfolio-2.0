import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface MetadataParams {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
  canonical,
}: MetadataParams = {}): Metadata {
  const isBrandInTitle = title === siteConfig.name || title.includes(siteConfig.shortName);

  const titleObj = isBrandInTitle
    ? { absolute: title }
    : {
        default: title,
        template: `%s | ${siteConfig.shortName}`,
      };

  return {
    title: titleObj,
    description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.creator, url: siteConfig.url }],
    creator: siteConfig.creator,
    category: "Technology",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical || siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: siteConfig.name,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonical || siteConfig.url,
    },
    other: {
      "application-name": siteConfig.shortName,
      "apple-mobile-web-app-title": siteConfig.shortName,
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default",
      "mobile-web-app-capable": "yes",
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
