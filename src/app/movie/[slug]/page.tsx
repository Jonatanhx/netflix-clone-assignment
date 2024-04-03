"use client";
import BookmarkButton from "@/components/BookmarkButton";
import { BookmarkContext } from "@/contexts/BookmarkContext";
import { useDarkMode } from "@/contexts/DarkModeContext";
import Image from "next/image";
import { useContext } from "react";
import movieData from "../../../../src/data/movieData";

export default function MoviePage({ params }: { params: { slug: string } }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const movie = movieData.find((m) => m.slug === params.slug);
  const bookmarkContext = useContext(BookmarkContext);
  if (!bookmarkContext) {
    return null;
  }
  const { bookmarkedMovies, toggleBookmark } = bookmarkContext;
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <main
      className={`flex flex-col h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col sm:flex-row md:flex-row justify-center items-center flex-1">
        <div className="relative w-320 h-640 mr-8 sm:mr-0 sm:mb-8 md:mr-8 md:mb-0">
          <Image
            src={movie.thumbnail}
            width={320}
            height={640}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <BookmarkButton
            isBookmarked={bookmarkedMovies.some((m) => m.slug === movie.slug)}
            onClick={() => toggleBookmark(movie)}
          />
        </div>
        <div className="flex-1 sm:mt-0 md:mt-0 p-4">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">{movie.title}</h2>
          <p className="mb-2">Released: {movie.year}</p>
          <p className="mb-2">{movie.genre}</p>
          <p className="mb-2">Rated: {movie.rating}</p>
          <p className="mb-2">Features: {movie.actors.join(", ")}</p>
          <p className="mb-4">{movie.synopsis}</p>
        </div>
        <div className="flex flex-1"></div>
      </div>
    </main>
  );
}
