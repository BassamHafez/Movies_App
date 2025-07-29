"use client";
import { SubmitBtn, WhiteBtn } from "@/shared/components";
import { useRouter } from "@/shared/hooks";

const CardControllers = ({ movieId }) => {
  const router = useRouter();

  const watchTrailer = () => {};

  return (
    <div className="card-actions flex-col justify-center items-center mt-2">
      <WhiteBtn onClick={watchTrailer} classes="btn-sm min-w-[90%]">
        Watch Trailer
      </WhiteBtn>
      <SubmitBtn
        onClick={() => router.push(`/movie-${movieId}`)}
        myWidth="min-w-[90%]"
        classes="btn-sm"
      >
        Details
      </SubmitBtn>
    </div>
  );
};

export default CardControllers;
