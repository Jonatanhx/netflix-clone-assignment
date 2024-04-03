"use client";
import RecommendedCarousel from "@/components/RecommendedCarousel";
import TrendingCarousel from "@/components/TrendingCarousel";
import { useDarkMode } from "@/contexts/DarkModeContext";

export default function Home() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <main className={`${isDarkMode ? "bg-black" : "bg-white"}`}>
      <h1
        className={`text-2xl p-2 font-bold
        ${isDarkMode ? "text-white" : "text-black"}`}
      >
        Trending
      </h1>
      <TrendingCarousel></TrendingCarousel>
      <h1
        className={`text-2xl p-2 font-bold
        ${isDarkMode ? "text-white" : "text-black"}`}
      >
        Recommended for you
      </h1>
      <RecommendedCarousel></RecommendedCarousel>
    </main>
  );
}
