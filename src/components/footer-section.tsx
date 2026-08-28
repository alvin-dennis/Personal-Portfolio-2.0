import { getSiteSettings } from "@/sanity/lib/queries";
import Footer from "./footer";

export default async function FooterSection() {
  const siteSettings = await getSiteSettings();
  return <Footer contact={siteSettings.contact} socialLinks={siteSettings.socialLinks} />;
}
