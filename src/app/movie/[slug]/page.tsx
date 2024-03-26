import movieData from "../../../../src/data/movieData";

export async function generateStaticParams() {
  return movieData.map((movie) => ({
    slug: movie.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const movie = movieData.find((m) => m.slug === params.slug);

  if (!movie) {
    return {
      title: "Movie Not Found",
    };
  }

  return {
    title: movie.title,
  };
}

export default function MoviePage({ params }: { params: { slug: string } }) {
  const movie = movieData.find((m) => m.slug === params.slug);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Year: {movie.year}</p>
      <p>Rating: {movie.rating}</p>
      <p>Actors: {movie.actors.join(", ")}</p>
      <p>Genre: {movie.genre}</p>
      <p>{movie.synopsis}</p>
      <img src={movie.thumbnail} alt={movie.title} />
    </div>
  );
}
