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
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4 text-white">Bookmarked Movies</h1>
      {bookmarkedMovies.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bookmarkedMovies.map((movie) => (
            <li
              key={movie.slug}
              className="bg-[#0A0A0A] text-white p-4 rounded-md shadow-md"
            >
              <div className="relative">
                <Link key={movie.title} href={`/movie/${movie.slug}`}>
                  <Image
                    src={movie.thumbnail}
                    alt={movie.title}
                    width={640}
                    height={320}
                  />
                </Link>
                <BookmarkButton
                  isBookmarked={bookmarkedMovies.some(
                    (m) => m.slug === movie.slug
                  )}
                  onClick={() => toggleBookmark(movie)}
                />
              </div>
              <h3 className="text-lg font-bold pt-2">{movie.title}</h3>
              <p className="text-gray-400">{movie.genre}</p>
              <div className="flex flex-col">
                <p className="text-gray-400">Released: {movie.year}</p>
                <p className="text-gray-400">Rated: {movie.rating} </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white">No bookmarked movies.</p>
      )}
    </div>
  );
}
