"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import movieData from "../../../data/movieData";

export default function SearchResults() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const term = searchParams.get("searchTerm") || "";
    setSearchTerm(term);
  }, [searchParams]);

  const filteredMovies = movieData.filter((movie) =>
    movie.title.toLowerCase().includes(String(searchTerm).toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">
        Search Results for {searchTerm}
      </h1>
      {filteredMovies.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredMovies.map((movie) => (
            <li
              key={movie.slug}
              className="bg-gray-800 text-white p-4 rounded-md shadow-md"
            >
              <Image
                src={movie.thumbnail}
                alt={movie.title}
                width={640}
                height={360}
              />
              <h3 className="text-lg font-bold">{movie.title}</h3>
              <p className="text-gray-400">{movie.genre}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}
