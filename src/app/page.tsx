import { Analytics } from "@vercel/analytics/next";
import ExperienceSection from "@/app/(home)/experience-section";
import Hero from "@/app/(home)/hero";
import ProjectsSection from "@/app/(home)/projects-section";
import Skills from "@/app/(home)/skills";
import TestimonialsSection from "@/app/(home)/testimonials-section";
import FooterSection from "@/components/footer-section";
import Navbar from "@/components/navbar";

export default async function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <ExperienceSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <FooterSection />
      <Analytics />
    </main>
  );
}
