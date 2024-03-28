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
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4 text-white">Bookmarked Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bookmarkedMovies.map((item) => (
          <Link key={item.title} href={`/movie/${item.slug}`}>
            <div className="relative border-solid" key={item.slug}>
              <div className="relative">
                <Image
                  src={item.thumbnail}
                  width={320}
                  height={640}
                  alt={item.title}
                  quality={5}
                  priority
                  className="object-cover w-full h-full"
                ></Image>
                <BookmarkButton
                  isBookmarked={bookmarkedMovies.some(
                    (m) => m.slug === item.slug
                  )}
                  onClick={() => toggleBookmark(item)}
                />
              </div>
              <h3 className="text-white font-bold p-2">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
