// Componentes
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCardContent from "./TestimonialCard";

// Constantes & Utils
import { TestimonialsCards } from "@/constants";
import { cn } from "@/lib/utils";

const TestimonialCarousel = () => {
  return (
    <Carousel className="lg:hidden" opts={{ align: "center" }}>
      <CarouselContent className="gap-8 m-1 ">
        {TestimonialsCards.map((testimony) => (
          <CarouselItem
            key={testimony.authorKey}
            className={cn(
              "basis-full sm:basis-[60%] rounded-[24px] overflow-hidden p-8 flex flex-col gap-6 items-center h-fit",
              testimony.bgColor,
            )}
          >
            <TestimonialCardContent testimony={testimony} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={"ghost"} />
      <CarouselNext variant={"ghost"} />
    </Carousel>
  );
};

export default TestimonialCarousel;
