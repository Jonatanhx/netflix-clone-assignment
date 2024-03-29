"use client";
import BookmarkButton from "@/components/BookmarkButton";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookmarkContext } from "@/contexts/BookmarkContext";
import Image from "next/image";
import { useContext } from "react";
import movieData from "../../../../src/data/movieData";

export default function MoviePage({ params }: { params: { slug: string } }) {
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
    <main className="flex flex-col justify-center">
      <div className="flex flex-row">
        <div className="flex-1"></div>
        <Image
          src={movie.thumbnail}
          width={640}
          height={320}
          alt={movie.title}
        />
        <div className="flex-1"></div>
      </div>
      <BookmarkButton
        isBookmarked={bookmarkedMovies.some((m) => m.slug === movie.slug)}
        onClick={() => toggleBookmark(movie)}
      />
      <Card className="bg-[#0E0E0E] text-white">
        <CardHeader>
          <CardTitle>{movie.title}</CardTitle>
          <p>{movie.year}</p>
          <p>{movie.genre}</p>
          <p>Rated {movie.rating}</p>
          <p>Features: {movie.actors.join(", ")}</p>
          <CardDescription>{movie.synopsis}</CardDescription>
        </CardHeader>
      </Card>
    </main>
  );
}
