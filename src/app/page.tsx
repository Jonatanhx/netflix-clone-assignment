import RecommendedCarousel from "@/components/RecommendedCarousel";
import TrendingCarousel from "@/components/TrendingCarousel";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl p-2 font-bold text-white">Trending</h1>
      <TrendingCarousel></TrendingCarousel>
      <h1 className="text-2xl p-2 font-bold text-white">Recommended for you</h1>
      <RecommendedCarousel></RecommendedCarousel>
    </main>
  );
}
