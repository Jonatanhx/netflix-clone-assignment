import Image from "next/image";
import Link from "next/link";
import movieData from "../data/movieData";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export default function RecommendedCarousel() {
  return (
    <Carousel>
      <CarouselContent>
        {movieData
          .filter((item) => !item.isTrending)
          .map((item) => (
            <CarouselItem
              className="sm:basis-1/4 md:basis-1/3 lg:basis-1/5 relative w-[50vh] h-[60vh] sm:h-[40vh] md:h-[50vh] lg:h-[50vh]"
              key={item.slug}
            >
              <div className="absolute inset-0">
                <Link key={item.title} href={`/movie/${item.slug}`}>
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    quality={5}
                    priority
                    fill
                  ></Image>
                </Link>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
}
