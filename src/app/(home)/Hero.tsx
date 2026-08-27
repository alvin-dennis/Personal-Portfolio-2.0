import Image from "next/image";
import { ImageZoomOutIn, RevealText, SlideInBottom, SlideInLeft } from "@/components/animations";
import { Clock } from "@/lib/time";
import { HeroProp } from "@/types";

export default function Hero({ name, image, summary, currentWork, stats }: HeroProp) {
  const [firstName, lastName] = name.split(" ");
  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden pb-15">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 relative z-10 h-full">
        <div className="md:col-span-8 flex flex-col overflow-hidden">
          <div className="p-6 md:p-8 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-secondary/60">
                  Currently working as
                </span>
                <span className="text-xs font-bold tracking-tight text-primary">{currentWork}</span>
              </div>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-[10px] uppercase tracking-[0.2em] text-secondary/60">
                From Kottayam, Kerala
              </span>
              <Clock timezone="Asia/Kolkata" />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12">
            <div className="relative">
              <h1 className="text-[20vw] md:text-[12vw] font-black leading-[0.75] uppercase text-primary select-none flex flex-col items-center md:items-start text-center md:text-left">
                <RevealText duration={0.7} viewportAmount={0.3} className="block">
                  {firstName}
                </RevealText>
                <SlideInBottom
                  duration={0.6}
                  delay={0.25}
                  className="block text-foreground mt-5 md:ml-60"
                >
                  {lastName}
                </SlideInBottom>
              </h1>
            </div>
          </div>
          <div className="mt-auto grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-10 bg-primary">
              <SlideInLeft
                duration={0.6}
                className="block text-lg md:text-xl font-bold uppercase leading-tight text-primary-foreground text-center md:text-left"
              >
                {summary}
              </SlideInLeft>
            </div>
            <div className="flex bg-secondary/5 divide-x-2 divide-border/40">
              {stats?.map((stat, index) => (
                <div
                  key={index}
                  className="flex-1 p-6 md:p-8 flex flex-col items-center justify-center text-center group cursor-pointer transition-colors duration-300"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary transition-colors duration-300">
                    {stat.label}
                  </span>
                  <span className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-primary transition-colors duration-300">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-4 relative bg-secondary/10 group overflow-hidden h-[400px] md:h-auto">
          <ImageZoomOutIn
            duration={0.9}
            className="absolute inset-0 grayscale contrast-[1.1] group-hover:grayscale-0 transition-all duration-1000"
          >
            <Image
              src={`https://images.weserv.nl/?url=${image}&output=webp`}
              alt={name}
              fill
              fetchPriority="high"
              priority
              className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-1000"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </ImageZoomOutIn>
        </div>
      </div>
    </section>
  );
}
