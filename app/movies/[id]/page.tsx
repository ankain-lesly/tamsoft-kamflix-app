// import { notFound } from "next/navigation";
import MovieInfo from "@/components/movie-info";
import { movieList } from "@/api/data-movie-library";
import { Images1, Images1a } from "@/public/assets";
import { Section } from "@/components/wrappers/section";
import { MovieCardBig } from "@/components/cards/movie-card";
// import MovieReviews from '@/components/movie-reviews'
// import MovieTrailers from '@/components/movie-trailers'

// async function getMovie(id: string) {
//   // Fetch movie data from your API
//   // This is a placeholder implementation
//   const res = await fetch(`https://api.example.com/movies/${id}`);
//   if (!res.ok) return undefined;
//   return res.json();
// }

// export default async function MoviePage({
export default function MoviePage({ params }: { params: { id: string } }) {
  // const movie = await getMovie(params.id);

  // if (!movie) {
  //   notFound();
  // }

  console.log(params);

  const movie = {
    id: "string",
    title: "The Movie",
    backdropUrl: Images1a,
    posterUrl: Images1,
    rating: 3.65,
    duration: 132,
    releaseDate: "11/23/45",
    genres: ["action", "comdedy", "sci-fi"],
    synopsis: "some synopsis",
    director: "Ank Lee",
    cast: ["jean", "leae"],
  };

  return (
    <div className="">
      <MovieInfo movie={movie} />
      {/* <MovieTrailers movieId={movie.id} />
      <MovieReviews movieId={movie.id} /> */}
      <Section title="Movie Trailers" hidden={movieList.length === 0}></Section>
      <Section title="Movie Reviews" hidden={movieList.length === 0}></Section>
      <div className="">
        <Section title="Similar Movies" hidden={movieList.length === 0}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {movieList.map((film, i) => (
              <MovieCardBig {...film} key={i} />
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
