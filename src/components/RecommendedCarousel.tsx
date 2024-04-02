"use client";
import { BookmarkContext } from "@/contexts/BookmarkContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import movieData from "../data/movieData";
import BookmarkButton from "./BookmarkButton";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

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
            <CarouselItem
              className="sm:basis-1/4 md:basis-1/3 lg:basis-1/5 relative w-[50vh] h-[60vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]"
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
                <BookmarkButton
                  isBookmarked={bookmarkedMovies.some(
                    (m) => m.slug === item.slug
                  )}
                  onClick={() => toggleBookmark(item)}
                />
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
}
