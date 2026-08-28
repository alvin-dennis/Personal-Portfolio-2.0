import { getTestimonials } from "@/sanity/lib/queries";
import { Testimonials } from "./testimonials";

export default async function TestimonialsSection() {
  const testimonials = await getTestimonials();
  return <Testimonials testimonials={testimonials} />;
}
