import BlurText from "@/components/ui/BlurText";
import { HeroProp } from "@/types";
import Image from "next/image";

export default function Hero({
  name,
  image,
  currentWork,
  summary,
}: HeroProp) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="top-0 left-0 right-0 z-50 px-6 py-6">
        <nav className="flex items-center justify-center max-w-screen-2xl mx-auto">
            <Image
              src="/assets/common/logo-nobg.png"
              alt="Logo"
              width={50}
              height={50}
              className="object-contain"
            />
        </nav>
      </header>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <div className="relative text-center">
            <div>
              <BlurText
                text="ALVIN"
                delay={30}
                animateBy="letters"
                direction="top"
                className="font-bold text-primary text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
                style={{ fontFamily: "'Fira Code', monospace" }}
              />
            </div>
            <div>
              <BlurText
                text="DENNIS"
                delay={60}
                animateBy="letters"
                direction="top"
                className="font-bold text-primary mt-5 text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
                style={{ fontFamily: "'Fira Code', monospace" }}
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-[65px] h-[20px] sm:w-[90px] sm:h-[152px] md:w-[110px] md:h-[185px] lg:w-[129px] lg:h-[218px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer">
                <Image
                  src={`https://images.weserv.nl/?url=${image}&output=webp`}
                  width={190}
                  height={190}
                  alt={name}
                  className="object-cover md:h-full md:w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 xl:bottom-36 left-1/2 -translate-x-1/2 w-full px-6">
          <div className="flex justify-center">
            <BlurText
              text={summary}
              delay={90}
              animateBy="words"
              direction="top"
              className="font-semibold text-lg md:text-2xl mt-2 text-center"
            />
          </div>
          <div className="flex items-center justify-center">
            <BlurText
              text={currentWork}
              delay={120}
              animateBy="words"
              direction="top"
              className="font-semibold text-lg md:text-2xl text-center mt-2"
            />
          </div>
        </div>
    </div>
  );
}