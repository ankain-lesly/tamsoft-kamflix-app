import { MdPlayCircleFilled } from "react-icons/md";
// import { Image } from "../others/image";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Card, CardContent } from "../ui/card";

type Props = Film &
  CustomComponentProps & {
    withPlay?: boolean;
  };

export const MovieCardBig = (movie: Props) => {
  // const withPlay = movie.withPlay ?? true;

  return (
    <Card key={movie.id} className="mx-1.5 overflow-hidden">
      <CardContent className="p-0">
        <Link href={`/movies/${movie.id}`} className="block">
          <div className="relative aspect-[2/3]">
            <Image
              src={movie.posterPath}
              alt={movie.title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h4 className="font-semibold truncate text-lg">{movie.title}</h4>
            <div className="flex items-center mt-1">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span className="text-sm">
                {/* {movie.rating.toFixed(1)} */}
                5.6
              </span>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export const MovieCardSmall = (props: Props) => {
  const withPlay = props.withPlay ?? true;

  return (
    <div
      // onClick={() => (props.onClick ? props.onClick() : "")}
      className={`group mx-1.5 my-1.5 cursor-pointer ${props.className}`}>
      <div
        className="
          h-[200px]
          relative
          rounded-lg overflow-hidden
      ">
        {withPlay ? (
          <div className="absolute hidden group-hover:flex items-center justify-center left-0 right-0 top-0 bottom-0 before:absolute before:content-[''] before:bg-black before:opacity-[0.7] before:left-0 before:right-0 before:top-0 before:bottom-0 ">
            <button className="relative z-10">
              <MdPlayCircleFilled size={32}></MdPlayCircleFilled>
            </button>
          </div>
        ) : (
          ""
        )}
        <Image src={props.posterPath} alt={props.title} />
      </div>
      <p className="py-1.5 line-clamp-2 text-center">{props.title}</p>
      {props.children}
    </div>
  );
};

export default function MovieCard(movie: Props) {
  return (
    <Link href={`/movies/${movie.id}`} className="group mx-1.5 block">
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-dark">
        <Image
          alt={movie.title}
          // src={movie.posterUrl}
          src={movie.posterPath}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
          <div className="text-white">
            <h3 className="font-semibold truncate">{movie.title}</h3>
            <div className="flex items-center text-sm">
              <Star className="w-4 h-4 mr-1 text-yellow-400" />
              {/* <span>{movie.rating.toFixed(1)}</span> */}
              <span>4.8</span>
              <span className="mx-2">•</span>
              {/* <span>{movie.year}</span> */}
              <span>2025</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
