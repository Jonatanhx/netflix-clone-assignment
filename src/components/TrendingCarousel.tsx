"use client";
import { BookmarkContext } from "@/contexts/BookmarkContext";
import movieData from "@/data/movieData";

import { useDarkMode } from "@/contexts/DarkModeContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import movies from "../movies.json";
import BookmarkButton from "./BookmarkButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function TrendingCarousel() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [data, setData] = useState(movies);
  const bookmarkContext = useContext(BookmarkContext);
  if (!bookmarkContext) {
    return null;
  }
  const { toggleBookmark, bookmarkedMovies } = bookmarkContext;

  return (
    <Carousel className="border-2 border-black">
      <CarouselContent className="pl-4">
        {movieData
          .filter((item) => item.isTrending)
          .map((item) => (
            <div key={item.slug}>
              <CarouselItem className="sm:basis-1/4 md:basis-1/3 lg:basis-1/5 w-[40vh] h-[60vh]">
                <div className="relative">
                  <Link key={item.title} href={`/movie/${item.slug}`}>
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      width={640}
                      height={320}
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
              <CarouselItem>
                <div
                  className={` flex m-1 justify-between ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  <p className="mr-2">Released: {item.year}</p>
                  <p className="mr-2">Rated: {item.rating}</p>
                </div>
              </CarouselItem>
            </div>
          ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 size-14 bg-white border-black text-black text-4xl hover:text-red-600 transition-colors duration-300">
        &#8249;
      </CarouselPrevious>
      <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 size-14 bg-white border-black text-black text-4xl hover:text-red-600 transition-colors duration-300">
        &#8250;
      </CarouselNext>
    </Carousel>
  );
}
