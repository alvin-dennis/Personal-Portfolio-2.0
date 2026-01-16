import BlurText from "@/components/ui/BlurText";
import { Button } from "@/components/ui/button";
import { HeroProp } from "@/types";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero({
  name,
  image,
  currentWork,
  summary,
}: HeroProp) {
  return (
    <div className="min-h-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <div className="relative text-center">
          <div>
            <BlurText
              text="ALVIN"
              delay={30}
              animateBy="letters"
              direction="top"
              className="font-bold text-primary text-[90px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
              style={{ fontFamily: "'Fira Code', monospace" }}
            />
          </div>
          <div>
            <BlurText
              text="DENNIS"
              delay={60}
              animateBy="letters"
              direction="top"
              className="font-bold text-primary mt-5 text-[90px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
              style={{ fontFamily: "'Fira Code', monospace" }}
            />
          </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-[65px] h-20 sm:w-[90px] sm:h-[152px] md:w-[110px] md:h-[185px] lg:w-[129px] lg:h-[218px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer">
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
      <div className="absolute justify-center bottom-28 sm:bottom-26 md:bottom-36 lg:bottom-44 xl:bottom-52 left-1/2 -translate-x-1/2 w-full">
        <div className="flex flex-col justify-center items-center">
          <BlurText
            text={summary}
            delay={90}
            animateBy="words"
            direction="top"
            className="font-semibold text-md md:text-2xl text-center"
          />
        </div>
      </div>
      <Button
        variant="default"
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 transition-colors duration-300"
      >
        <ChevronDown className="w-5 h-5 md:w-8 md:h-8" />
      </Button>

    </div>
  );
}