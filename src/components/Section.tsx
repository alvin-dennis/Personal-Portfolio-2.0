import { SlideInLeft, SlideInRight } from "@/components/animations";

interface Props {
  text?: string;
  href: string;
  paragraph?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Section({ text, href, paragraph, children, className }: Props) {
  return (
    <section id={href} className={`py-20 ${className}`}>
      {text && (
        <SlideInLeft className="mb-6 block">
          <h2 className="text-5xl md:text-7xl text-primary">{text}</h2>
        </SlideInLeft>
      )}
      {paragraph && (
        <SlideInRight delay={0.15} className="mb-14 block max-w-2xl">
          <p className="text-md leading-relaxed">{paragraph}</p>
        </SlideInRight>
      )}
      {children}
    </section>
  );
}
