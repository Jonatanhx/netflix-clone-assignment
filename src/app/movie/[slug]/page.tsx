import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
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
    <main className="flex flex-col md:flex-row">
      <Image src={movie.thumbnail} width={200} height={200} alt={movie.title} />
      <Card>
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
