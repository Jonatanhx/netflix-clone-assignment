"use client";
import BookmarkButton from "@/components/BookmarkButton";
import { BookmarkContext } from "@/contexts/BookmarkContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function Bookmarks() {
  const bookmarkContext = useContext(BookmarkContext);
  if (!bookmarkContext) {
    return null;
  }
  const { bookmarkedMovies, toggleBookmark } = bookmarkContext;

  return (
    <main>
      {bookmarkedMovies.map((item) => (
        <div className="relative w-full h-full" key={item.slug}>
          <div className="relative w-full h-full">
            <Link key={item.title} href={`/movie/${item.slug}`}>
              <Image
                src={item.thumbnail}
                width={200}
                height={200}
                alt={item.title}
                quality={5}
                priority
                className="object-cover w-full h-full"
              ></Image>
            </Link>
            <BookmarkButton
              isBookmarked={bookmarkedMovies.some((m) => m.slug === item.slug)}
              onClick={() => toggleBookmark(item)}
            />
          </div>
          <h3 className="absolute bottom-2 left-2 text-white font-bold">
            {item.title}
          </h3>
        </div>
      ))}
    </main>
  );
}
