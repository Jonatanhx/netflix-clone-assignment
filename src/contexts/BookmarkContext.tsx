"use client";
import { createContext, useEffect, useState } from "react";

interface Movie {
  slug: string;
  thumbnail: string;
  title: string;
}

interface BookmarkContextType {
  bookmarkedMovies: Movie[];
  addToBookmarks: (movie: Movie) => void;
  removeFromBookmarks: (movieSlug: string) => void;
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

  const addToBookmarks = (movie: Movie) => {
    setBookmarkedMovies((prevBookmarks) => {
      const updatedBookmarks = [...prevBookmarks, movie];
      localStorage.setItem(
        "bookmarkedMovies",
        JSON.stringify(updatedBookmarks)
      );
      return updatedBookmarks;
    });
  };

  const removeFromBookmarks = (movieSlug: string) => {
    setBookmarkedMovies((prevBookmarks) => {
      const updatedBookmarks = prevBookmarks.filter(
        (item) => item.slug !== movieSlug
      );
      localStorage.setItem(
        "bookmarkedMovies",
        JSON.stringify(updatedBookmarks)
      );
      return updatedBookmarks;
    });
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarkedMovies, addToBookmarks, removeFromBookmarks }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
