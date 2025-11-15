"use client";
import { playFairFont } from "@/logic/static";
import { Image } from "@/shared/lib";
import { Star, Play } from "@/shared/icons";
import { useRouter } from "@/shared/hooks";

const MovieCard = ({ movie, isTvShow }) => {
  const router = useRouter();

  const title = isTvShow ? movie.name : movie.title;

  const navigateToDetailsHandler = (id) => {
    sessionStorage.setItem("lastClickedMovieId", movie.id);
    router.push(`/${isTvShow ? "tv" : "movie"}-${id}`);
  };

  return (
    <div
      id={`movie-${movie.id}`}
      className="card bg-base-200 rounded w-[100%] xs:w-[17.1875rem] overflow-hidden"
    >
      <figure className="relative overflow-hidden group w-[275px] h-[450px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/w342${movie.poster_path}`}
          alt={title}
          fill
          sizes="100%"
          className="object-cover rounded group-hover:scale-105 transision-all duration-500"
        />
        <div className="absolute -top-[-102%] left-0 w-full h-full flex justify-center items-center bg-black/80  opacity-0 group-hover:top-0 group-hover:opacity-100 transition-all duration-500">
          <div
            role="pointer"
            onClick={() => navigateToDetailsHandler(movie.id)}
            className="flex justify-center items-center border-2 border-solid border-main rounded-full size-18 cursor-pointer hover:bg-main/20 transition-all duration-500"
            style={{
              borderRightStyle: "dashed",
            }}
          >
            <Play className="size-10" strokeWidth={1.5} />
          </div>
        </div>
      </figure>
      <div className="card-body px-3 py-4">
        <div className="flex justify-between items-center w-full">
          <h2
            role="button"
            onClick={() => navigateToDetailsHandler(movie.id)}
            className={`font-bold text-lg truncate ${playFairFont} cursor-pointer hover:text-white/70 duration-300`}
          >
            {title}
          </h2>
          <span className="flex gap-1 items-center text-xs">
            <Star className="fill-main stroke-0 size-4" />{" "}
            {Number(movie.vote_average).toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
