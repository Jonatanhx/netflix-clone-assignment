"use client";
import { createContext, useEffect, useState } from "react";

interface Movie {
  slug: string;
  thumbnail: string;
  title: string;
}

interface BookmarkContextType {
  bookmarkedMovies: Movie[];
  toggleBookmark: (movie: Movie) => void;
}

export const BookmarkContext = createContext<BookmarkContextType | null>(null);

export const BookmarkProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const storedMovies = localStorage.getItem("bookmarkedMovies");
    if (storedMovies) {
      setBookmarkedMovies(JSON.parse(storedMovies));
    }
  }, []);

  const toggleBookmark = (movie: Movie) => {
    console.log("toggled bookmark");
    setBookmarkedMovies((prevBookmarks) => {
      const movieIndex = prevBookmarks.findIndex(
        (item) => item.slug === movie.slug
      );
      if (movieIndex === -1) {
        const updatedBookmarks = [...prevBookmarks, movie];
        localStorage.setItem(
          "bookmarkedMovies",
          JSON.stringify(updatedBookmarks)
        );
        return updatedBookmarks;
      } else {
        const updatedBookmarks = [
          ...prevBookmarks.slice(0, movieIndex),
          ...prevBookmarks.slice(movieIndex + 1),
        ];
        localStorage.setItem(
          "bookmarkedMovies",
          JSON.stringify(updatedBookmarks)
        );
        return updatedBookmarks;
      }
    });
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedMovies, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};
