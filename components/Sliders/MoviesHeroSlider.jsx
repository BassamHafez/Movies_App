"use client";
import { Image } from "@/shared/lib";
import { useQuery, useState } from "@/shared/hooks";
import { MainBtn, RatingStars, SecondaryBtn } from "@/shared/components";
import { Play } from "@/shared/icons";
import { mainFormsHandlerTypeRaw } from "@/util/http";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./sliderStyles.css";
import { FreeMode, Thumbs } from "swiper/modules";

const MoviesHeroSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { data } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: () =>
      mainFormsHandlerTypeRaw({
        type: "/discover/movie",
        params: {
          sort_by: "popularity.desc",
          page: 1,
          include_adult: false,
          include_video: false,
        },
      }),
    staleTime: 1000 * 60 * 60,
  });

  const movies = data?.results;
  console.log(movies);
  return (
    <div className="movies_swiper relative border-2 border-main/30 rounded-xl bg-base-200">
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2 rounded-xl"
      >
        {movies ? (
          movies.map((movie) => (
            <SwiperSlide key={movie.id} className="relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/w1280${movie.backdrop_path}`}
                alt={movie.title}
                fill
                sizes="100%"
                className="rounded-xl"
              />
              <div className="flex items-center px-4 absolute inset-0  bg-gradient-to-r from-black via-black/70 to-transparent rounded-xl">
                <div className="max-w-1/2">
                  <h1 className="font-extrabold text-3xl">{movie.title}</h1>
                  <div className="flex gap-4 mb-4 mt-1">
                    <RatingStars rateNum={movie.vote_average} />
                    <span className="text-gray-400 text-sm">
                      {movie.release_date}
                    </span>
                  </div>
                  <p className="text-sm">{movie.overview}</p>

                  <div className="flex gap-4 my-4">
                    <MainBtn>
                      <span className="flex gap-1 items-center">
                        <Play className="size-4" /> Watch Trailer
                      </span>{" "}
                    </MainBtn>
                    <SecondaryBtn>Show Details</SecondaryBtn>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>no data</p>
        )}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={5}
        slidesPerView={7}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper mini_slider rounded-b-xl"
      >
        {movies ? (
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/w500${movie.poster_path}`}
                alt={movie.title}
                width={300}
                height={450}
              />
            </SwiperSlide>
          ))
        ) : (
          <p>no data</p>
        )}
      </Swiper>
    </div>
  );
};

export default MoviesHeroSlider;
