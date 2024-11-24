import { MdPlayCircleOutline } from "react-icons/md";
import { Section } from "./section";
import { Image } from "../others/image";
import { Star } from "lucide-react";

interface Props {
  film: Film;
  onClick: () => void;
  onPlayTrailer: () => void;
}

export const TrendingHero = (props: Props) => {
  return (
    <Section className="py-0">
      <div
        className="h-[400px] md:h-[520px] relative flex items-center cursor-pointer__ text-white"
        // onClick={() => props.onClick()}
      >
        {/* bg image */}
        <div className="absolute left-0 top-0 right-0 bottom-0">
          <div className="overlay-slick-hero"></div>
          <Image
            src={props.film.coverPath}
            alt="some key"
            className="rounded-0 rounded-none"
          />
          <div className="overlay-film-cover"></div>
        </div>
        {/* text */}
        <div className="w-full flex flex-col gap-3 items-start relative z-10 max-w-[50%] mobile:max-w-[100%]">
          <h2 className="text-3xl md:text-4xl font-bold line-clamp-1">
            {props.film.title}
          </h2>

          {/* Desc */}
          <p className="text-sm_ line-clamp-3 max-w-md mb-4">
            {props.film.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Odio commodi assumenda quidem impedit sit, harum
            ipsum nulla labore eaque nostrum?
          </p>

          {/* Meta */}
          <div className="flex gap-5 items-center text-dryGray">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Adventure</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="text-subMain w-3 h-3"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path>
              </svg>
              <span className="text-sm font-medium">2022</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-subMain w-3 h-3"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                <path d="M13 7h-2v6h6v-2h-4z"></path>
              </svg>
              <span className="text-sm font-medium">5hr</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-5 items-center">
            <button className="bg-danger hover:text-subMain transitions text-white p-2 w-10 rounded text-sm">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
              </svg>
            </button>
            <button
              className="px-3 py-2 flex items-center gap-3 bg-primary rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                props.onPlayTrailer();
              }}>
              <MdPlayCircleOutline size={18}></MdPlayCircleOutline>
              <span>Play trailer</span>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              5.5
            </span>
            <span>Sci-Fi</span>
          </div>
        </div>
      </div>
    </Section>
  );
};
