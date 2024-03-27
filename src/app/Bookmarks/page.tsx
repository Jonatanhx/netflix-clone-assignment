"use client";
import { BookmarkContext } from "@/contexts/BookmarkContext";
import { BookmarkIcon } from "lucide-react";
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
            <div
              className="absolute top-2 right-2 z-20 cursor-pointer"
              onClick={() => toggleBookmark(item)}
            >
              <BookmarkIcon className="size-16 text-red-700"></BookmarkIcon>
            </div>
          </div>
          <h3 className="absolute bottom-2 left-2 text-white font-bold">
            {item.title}
          </h3>
        </div>
      ))}
    </main>
  );
}
