"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { TestimonialCard } from "@/types";

const testimonials = SITE_CONTENT.testimonials;

const SQRT_5000 = Math.sqrt(5000);

const TestimonialCard: React.FC<TestimonialCard> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-primary text-primary-foreground border-primary"
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <h5
        className={cn(
          "text-xs md:text-lg",
          isCenter ? "text-primary-foreground" : "text-foreground",
        )}
      >
        &quot;{testimonial.testimonial}&quot;
      </h5>
      <p
        className={cn(
          "absolute bottom-2 left-8 right-8 mt-5 text-sm italic",
          isCenter ? "text-primary-foreground/80" : "text-muted-foreground",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, id: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, id: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <Section
      text="Testimonials"
      href="testimonials"
      paragraph="Feedback and testimonials from collaborators, clients, and peers that reflect my work ethic, technical expertise, and ability to deliver high-quality solutions in a professional environment."
    >
      <div className="relative w-full overflow-hidden" style={{ height: 600 }}>
        {testimonialsList.map((testimonial, index) => {
          const position =
            testimonialsList.length % 2
              ? index - (testimonialsList.length + 1) / 2
              : index - testimonialsList.length / 2;
          return (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          <Button
            variant={"secondary"}
            onClick={() => handleMove(-1)}
            className={cn("flex h-14 w-14 items-center justify-center text-2xl transition-colors")}
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </Button>
          <Button
            variant={"secondary"}
            onClick={() => handleMove(1)}
            className={cn("flex h-14 w-14 items-center justify-center text-2xl transition-colors")}
            aria-label="Next testimonial"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </Section>
  );
};
