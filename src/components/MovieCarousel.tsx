"use client";
import Image from "next/image";
import { useState } from "react";
import movies from "../movies.json";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export default function MovieCarousel() {
  const [data, setData] = useState(movies);
  const numItemsToDisplay = 15;

  return (
    <Carousel>
      <CarouselContent>
        {data.slice(3, numItemsToDisplay).map((item, index) => (
          <CarouselItem
            className="sm:basis-1/4 md:basis-1/3 lg:basis-1/4 relative w-[50vh] h-[60vh] sm:h-[40vh] md:h-[50vh] lg:h-[70vh]"
            key={index}
          >
            <div className="absolute inset-0">
              <Image
                src={item.thumbnail}
                alt="item.title"
                quality={5}
                priority
                fill
              ></Image>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/*       <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}

//Importera carousel autoplay från embla carousel plugin?
