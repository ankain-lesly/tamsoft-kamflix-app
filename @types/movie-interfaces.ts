import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export {};

declare global {
  type MediaType = "movie" | "tv";

  interface CustomComponentProps {
    children?: ReactNode;
    className?: string;
  }

  interface Episode {
    id: number;
    title: string;
    overview: string;
    airDate: string;
    stillPath: string;
    episodeNumber: number;
  }

  interface Season {
    id: number;
    filmName: string;
    name: string;
    seasonNumber: number;
    // posterPath: string;
    posterPath: StaticImageData;
    episodes: Episode[];
    airDate: string;
  }

  interface Film {
    id: number;
    mediaType: string | MediaType;
    title: string;
    description: string;
    // posterPath: string;
    posterPath: StaticImageData;
    // coverPath: string;
    coverPath: StaticImageData;
    genreIds: number[];
    seasons: Season[];
  }

  interface Cast {
    id: number;
    name: string;
    characterName: string;
    profilePath: string;
  }

  interface Trailer {
    id: number;
    key: string;
  }

  interface Genre {
    id: number;
    name: string;
  }
}
