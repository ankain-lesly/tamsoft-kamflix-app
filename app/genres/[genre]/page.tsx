"use client";

import { Section } from "@/components/wrappers/section";
import { movieList } from "@/api/data-movie-library";
import { MovieCardBig } from "@/components/cards/movie-card";
import { useParams } from "next/navigation";

// async function getTrendingMovies() {
//   // Fetch trending movies from your API
//   // This is a placeholder implementation
//   const res = await fetch("https://api.example.com/movies/trending");
//   if (!res.ok) return [];
//   return res.json();
// }

// export default async function SingleGenre() {
export default function SingleGenre() {
  // const trendingMovies = await getTrendingMovies();
  const { genre } = useParams();
  return (
    <div className="">
      <Section title={genre + " Movies"} hidden={movieList.length === 0}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movieList.map((film, i) => (
            <MovieCardBig {...film} key={i} />
          ))}
        </div>
      </Section>
    </div>
  );
}
