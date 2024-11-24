import Image, { StaticImageData } from "next/image";
import { Star, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MovieInfoProps {
  movie: {
    id: string;
    title: string;
    posterUrl: StaticImageData;
    backdropUrl: StaticImageData;
    rating: number;
    duration: number;
    releaseDate: string;
    genres: string[];
    synopsis: string;
    director: string;
    cast: string[];
  };
}

export default function MovieInfo({ movie }: MovieInfoProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image
          src={movie.backdropUrl}
          alt={`${movie.title} backdrop`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      <div className="relative container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            <Image
              src={movie.posterUrl}
              alt={movie.title}
              width={300}
              height={450}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-grow text-white">
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span>{movie.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-1" />
                <span>{movie.duration} min</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-1" />
                <span>{movie.releaseDate}</span>
              </div>
            </div>
            <div className="mb-4">
              {movie.genres.map((genre) => (
                <Badge key={genre} variant="secondary" className="mr-2 mb-2">
                  {genre}
                </Badge>
              ))}
            </div>
            <p className="mb-4">{movie.synopsis}</p>
            <div className="mb-4">
              <strong>Director:</strong> {movie.director}
            </div>
            <div className="mb-6">
              <strong>Cast:</strong> {movie.cast.join(", ")}
            </div>
            <div className="flex space-x-4">
              <Button>Add to Watchlist</Button>
              <Button variant="outline">Write a Review</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
