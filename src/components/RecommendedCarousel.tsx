"use client";
import { BookmarkContext } from "@/contexts/BookmarkContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import movieData from "../data/movieData";
import BookmarkButton from "./BookmarkButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function RecommendedCarousel() {
  const bookmarkContext = useContext(BookmarkContext);
  if (!bookmarkContext) {
    return null;
  }
  const { bookmarkedMovies, toggleBookmark } = bookmarkContext;

  return (
    <Carousel>
      <CarouselContent>
        {movieData
          .filter((item) => !item.isTrending)
          .slice(0, 10)
          .map((item) => (
            <div key={item.slug}>
              <CarouselItem className="sm:basis-1/4 md:basis-1/3 lg:basis-1/5 relative w-[50vh] h-[60vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]">
                <div className="relative w-full h-full">
                  <Link key={item.title} href={`/movie/${item.slug}`}>
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      quality={5}
                      priority
                      fill
                    ></Image>
                  </Link>
                  <BookmarkButton
                    isBookmarked={bookmarkedMovies.some(
                      (m) => m.slug === item.slug
                    )}
                    onClick={() => toggleBookmark(item)}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="mt-2">
                <div className="text-white flex mr-1 ml-1 justify-between">
                  <p className="mr-2">Released: {item.year}</p>
                  <p className="mr-2">Rated: {item.rating}</p>
                </div>
              </CarouselItem>
            </div>
          ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 size-14 border-black text-black text-4xl hover:text-red-600 transition-colors duration-300">
        &#8249;
      </CarouselPrevious>
      <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 size-14 border-black text-black text-4xl hover:text-red-600 transition-colors duration-300">
        &#8250;
      </CarouselNext>
    </Carousel>
  );
}
