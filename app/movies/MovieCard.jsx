import { playFairFont } from "@/logic/static";
import { SubmitBtn, WhiteBtn } from "@/shared/components";
import { Image } from "@/shared/lib";
import { Star } from "lucide-react";

const MovieCard = ({ movie }) => {
  return (
    <div className="card bg-base-200 w-fit rounded">
      <figure>
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/w500${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
          className="object-cover rounded"
        />
      </figure>
      <div className="card-body px-3 py-4">
        <div className="flex justify-between items-center">
          <h2 className={`card-title  ${playFairFont}`}>{movie.title} </h2>
          <span className="flex gap-1 items-center text-xs">
            <Star className="fill-main stroke-0 size-4" />{" "}
            {Number(movie.vote_average).toFixed(1)}
          </span>
        </div>

        <div className="card-actions flex-col justify-center items-center mt-2">
          <WhiteBtn classes="btn-sm min-w-[20em]">Watch Trailer</WhiteBtn>
          <SubmitBtn myWidth="min-w-[20em]" classes="btn-sm">
            Details
          </SubmitBtn>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
