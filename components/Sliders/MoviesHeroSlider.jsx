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
const currentPage = 1;

const MoviesHeroSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { data } = useQuery({
    queryKey: ["discoverMovies", currentPage, "now_playing"],
    queryFn: () =>
      mainFormsHandlerTypeRaw({
        type: `/movie/now_playing`,
        params: {
          page: currentPage,
        },
      }),
    staleTime: 1000 * 60 * 60,
  });

  const movies = data?.results;

  return (
    <div className="movies_swiper relative lg:border-2 border-main/30 rounded-xl bg-base-200">
      <Swiper
        loop={false}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2 rounded-xl"
      >
        {movies ? (
          movies.map((movie, index) => (
            <SwiperSlide key={movie.id} className="relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/w1280${movie.backdrop_path}`}
                alt={movie.title}
                fill
                sizes="100%"
                className="rounded-xl"
                priority={index === 0}
              />
              <div className="flex md:items-center px-4 absolute inset-0  bg-gradient-to-r from-black via-black/70 to-transparent rounded-xl">
                <div className="sm:max-w-3/4 lg:max-w-1/2 mt-8 md:mb-[10%] lg:mb-[20%] 2xl:mb-[10%] max-h-1/2">
                  <h1 className="font-extrabold text-2xl sm:text-3xl">
                    {movie.title}
                  </h1>
                  <div className="hidden xs:block">
                    <div className="flex gap-4 mb-4 mt-1">
                      <RatingStars rateNum={movie.vote_average} />
                      <span className="text-gray-400 text-sm">
                        {movie.release_date}
                      </span>
                    </div>
                    <p className="text-sm line-clamp-2 xl:line-clamp-4 2xl:line-clamp-6">
                      {movie.overview}
                    </p>

                    <div className="flex gap-4 my-4">
                      <MainBtn classes="btn-sm sm:btn-md">
                        <span className="flex gap-1 items-center">
                          <Play className="size-4" /> Watch Trailer
                        </span>{" "}
                      </MainBtn>
                      <SecondaryBtn classes="btn-sm sm:btn-md">
                        Show Details
                      </SecondaryBtn>
                    </div>
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
        loop={false}
        spaceBetween={5}
        slidesPerView={7}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          395: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
          1280: {
            slidesPerView: 7,
          },
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper mini_slider rounded-b-xl"
      >
        {movies ? (
          movies.map((movie, index) => (
            <SwiperSlide key={`${movie.id}_${index}`}>
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
