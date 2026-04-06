import React, { useRef } from "react";
import { useNavigate } from "@tanstack/react-router";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import burgerImg from "../../assets/images/burger-potato.webp";
import pizzaDrinkImg from "../../assets/images/pizza-drink.webp";
import pizzaDrinkGarlicsticksImg from "../../assets/images/pizza-drink-garlicsticks.webp";

const ImageCarousel = () => {
  const navigate = useNavigate();

  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const handleImageClick = () => {
    navigate({ to: "/promociones" });
  };

  const slides = [
    { src: burgerImg, alt: "Hamburguesa con papas" },
    { src: pizzaDrinkImg, alt: "Pizza con bebida" },
    { src: pizzaDrinkGarlicsticksImg, alt: "Pizza de pepperoni" },
  ];

  return (
    <div className="container max-w-5xl mx-auto mt-6 md:mt-10 px-4">
      <Carousel
        plugins={[autoplayPlugin.current]}
        className="w-full rounded-2xl overflow-hidden shadow-md"
        onMouseEnter={autoplayPlugin.current.stop}
        onMouseLeave={autoplayPlugin.current.reset}
      >
        <CarouselContent>
            {slides.map((slide, index) => (
                <CarouselItem key={index}>
                
                <div className="relative w-full aspect-video md:aspect-[21/9] max-h-[450px] bg-black/5 rounded-2xl overflow-hidden">
                    <img
                    src={slide.src}
                    alt={slide.alt}
                    onClick={handleImageClick}

                    className="w-full h-full object-contain sm:object-cover cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
                    />
                </div>

                </CarouselItem>
            ))}
            </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;