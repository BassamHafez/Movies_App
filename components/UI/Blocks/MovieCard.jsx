import { playFairFont } from "@/logic/static";
import { Image } from "@/shared/lib";
import { Star, Play } from "@/shared/icons";
import CardControllers from "./CardControllers";

const MovieCard = ({ movie }) => {
  return (
    <div className="card bg-base-200 rounded w-[100%] xs:w-[17.1875rem] overflow-hidden">
      <figure className="relative overflow-hidden group w-[275px] h-[450px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/w342${movie.poster_path}`}
          alt={movie.title}
          fill
          sizes="100%"
          className="object-cover rounded"
        />
        <div className="absolute -top-[-102%] left-0 w-full h-full flex justify-center items-center bg-black/80  opacity-0 group-hover:top-0 group-hover:opacity-100 transition-all duration-500">
          <div
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
          <h2 className={`font-bold text-lg truncate ${playFairFont}`}>
            {movie.title}{" "}
          </h2>
          <span className="flex gap-1 items-center text-xs">
            <Star className="fill-main stroke-0 size-4" />{" "}
            {Number(movie.vote_average).toFixed(1)}
          </span>
        </div>

        <CardControllers movieId={movie.id} />
      </div>
    </div>
  );
};

export default MovieCard;
