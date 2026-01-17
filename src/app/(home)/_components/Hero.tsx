import { HeroProp } from "@/types";
import Image from "next/image";
import { MotionDiv, MotionH1, MotionP, MotionSpan } from "@/components/Framer";

export default function Hero({
  name,
  image,
  summary,
  currentWork,
}: HeroProp) {
  const [firstName, lastName] = name.split(" ");
  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden mt-2">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 relative z-10 h-full border-2 border-border/40">
        <div className="md:col-span-8 flex flex-col border-b-2 md:border-b-0 md:border-r-2 border-border/40 overflow-hidden">
          <div className="p-6 md:p-8 flex justify-between items-center border-b-2 border-border/40">
            <MotionDiv
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="flex items-center gap-3"
            >
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary/60">Currently working as</span>
                <span className="text-xs font-bold tracking-tight text-secondary">{currentWork}</span>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "circOut" }}
              className="hidden sm:flex flex-col text-right"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-secondary/60">Origin / 2026</span>
              <span className="text-xs font-bold uppercase tracking-tight text-secondary">A.DENNIS</span>
            </MotionDiv>
          </div>

          <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12">
            <div className="relative">
              <MotionH1
                className="text-[16vw] md:text-[12vw] font-black leading-[0.75] uppercase text-primary select-none flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="overflow-hidden">
                  <MotionSpan
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    {firstName}
                  </MotionSpan>
                </div>
                <div className="overflow-hidden">
                  <MotionSpan
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-foreground mt-5 md:ml-60"
                  >
                    {lastName}
                  </MotionSpan>
                </div>
              </MotionH1>
            </div>
          </div>

          <div className="mt-auto grid grid-cols-1 lg:grid-cols-2 border-t-2 border-border/40">
            <div className="p-8 md:p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-border/40 bg-secondary/5">
              <MotionP
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg md:text-xl font-bold uppercase leading-tight text-foreground/80 text-center md:text-left"
              >
                {summary}
              </MotionP>
            </div>

            <div className="p-6 md:p-8 flex bg-primary text-primary-foreground hover:bg-primary/90 items-center justify-center cursor-pointer">
              <div className="flex flex-wrap group px-6 py-6 h-fit text-xl font-black uppercase tracking-widest gap-4">
                Resume
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 relative bg-secondary/10 group overflow-hidden h-[400px] md:h-auto">
          <MotionDiv
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="absolute inset-0 grayscale contrast-[1.1] group-hover:grayscale-0 transition-all duration-1000"
          >
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-1000"
              priority
              unoptimized
            />
          </MotionDiv>

          <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end gap-1 opacity-40">
            <div className="w-12 h-[1px] bg-foreground" />
            <div className="w-8 h-[1px] bg-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
