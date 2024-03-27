"use client";
import { BookmarkContext } from "@/contexts/BookmarkContext";
import { BookmarkIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import movieData from "../data/movieData";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export default function RecommendedCarousel() {
  const bookmarkContext = useContext(BookmarkContext);
  if (!bookmarkContext) {
    return null;
  }
  const { toggleBookmark } = bookmarkContext;
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
                <div
                  className="absolute top-2 right-2 z-20 cursor-pointer"
                  onClick={() => toggleBookmark(item)}
                >
                  <BookmarkIcon className="size-16 text-red-700"></BookmarkIcon>
                </div>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
}
