"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type TProps = {
  techStack: string[];
};

export default function TechStack({ techStack }: TProps) {
  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-sm">
      <CarouselContent>
        {techStack.map((tech, i) => (
          <CarouselItem key={i} className="basis-auto pl-2 first:pl-4">
            <p className="rounded-full border px-2 select-none cursor-grab text-sm text-muted-foreground bg-card">
              {tech}
            </p>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
