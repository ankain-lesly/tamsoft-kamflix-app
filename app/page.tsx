"use client";

import { movieList, tvList } from "@/api/data-movie-library";
import { useRouter } from "next/navigation";
import { TrendingHero } from "@/components/wrappers/trending-hero";
import { Section } from "@/components/wrappers/section";
import MovieCard, { MovieCardBig } from "@/components/cards/movie-card";
import { mergeFilms } from "@/lib/utils";
import Download from "@/components/pages/home/download";
import { Slider } from "@/components/slider/slider";

export default function Home() {
  const navigate = useRouter();

  const playTrailer = async (film: Film) => {
    // const trailers = await getTrailers(film.mediaType, film.id)

    // setTrailerSrc(`https://www.youtube.com/embed/${trailers[0].key}?autoplay=0`)
    alert("Getting Trailer for " + film.mediaType + " >> " + film.id);
  };

  const goToDetailPage = (film: Film) => {
    navigate.push(`/${film.mediaType}/${film.id}`);
  };
  return (
    <>
      {/* Hero Trending */}
      <section className="py-0 bg-bg" id="movie-home-hero">
        <Slider
          className="slick-hero"
          autoplay={true}
          slidesToShow={1}
          slidesToScroll={1}>
          {(onSwipe) =>
            [...movieList, ...tvList].map((film, i) => (
              <TrendingHero
                onPlayTrailer={() => playTrailer(film)}
                onClick={() =>
                  !onSwipe ? navigate.push(`/${film.mediaType}/${film.id}`) : ""
                }
                film={film}
                key={i}></TrendingHero>
            ))
          }
        </Slider>
      </section>

      {/* BLOCK: Theaters */}
      <Section title="In Theaters" hidden={movieList.length === 0}>
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"> */}
        <Slider isMovieCard={true}>
          {() => movieList.map((film, i) => <MovieCardBig {...film} key={i} />)}
        </Slider>
        {/* </div> */}
      </Section>

      {/* BLOCK: Popular */}
      <Section title="What's Popular" hidden={false}>
        <Slider isMovieCard={true}>
          {(_) =>
            mergeFilms(movieList, tvList, 20).map((film, i) => (
              <MovieCardBig {...film} key={i} />
            ))
          }
        </Slider>
      </Section>

      {/* Download */}
      <Download />

      {/* top rated tv */}
      <Section
        title="Top Rated TV"
        hidden={false}
        onTitleClick={() => navigate.push(`/list/top-rated-tv`)}>
        <Slider isMovieCard={true}>
          {(_) =>
            tvList.map((film, i) => <MovieCard {...film} key={i}></MovieCard>)
          }
        </Slider>
      </Section>
      {/* to rated movies*/}
      <Section
        hidden={false}
        title="Top Rated Movies"
        onTitleClick={() => navigate.push(`/list/top-rated-movies`)}>
        <Slider isMovieCard={true}>
          {(_) =>
            movieList.map((film, i) => <MovieCardBig {...film} key={i} />)
          }
        </Slider>
      </Section>
    </>
  );
}
