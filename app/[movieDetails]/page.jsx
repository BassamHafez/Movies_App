import { mainFormsHandlerTypeRaw } from "@/util/http";
import { Image, Link } from "@/shared/lib";
import { CalendarFold, Clock3, Play } from "@/shared/icons";
import {
  MainBtn,
  MainTitle,
  RatingStars,
  Recommendations,
  TrailerVideo,
  WhiteBtn,
} from "@/shared/components";
import { adult } from "@/shared/images";
import DetailsBreadCrampLinks from "./DetailsBreadCrampLinks";

const MovieDetailsPage = async ({ params }) => {
  const currentParams = await params;
  const [rawType, movieId] = currentParams.movieDetails.split("-");
  const type = rawType.replace("/", "");

  const movie = await mainFormsHandlerTypeRaw({
    type: `/${type}/${movieId}`,
    params: {
      language: "en-US",
      append_to_response: "videos",
    },
    serverReq: true,
    tags: `${type}-${movieId}`,
    revalidateTime: 3600,
  });

  const movieVideos = movie?.videos?.results || [];

  const officialTrailers = movieVideos?.filter(
    (movie) => movie?.type === "Trailer"
  );

  const title = type === "tv" ? movie?.name : movie?.title;
  const releaseDate =
    type === "tv" ? movie?.first_air_date : movie?.release_date;
  const runTime = type === "tv" ? movie?.episode_run_time : movie?.runtime;
  const runTimeHours = Math.floor(runTime / 60);
  const runTimeMin = Math.floor(runTime % 60);
  const runtTimeStr = `${
    runTimeHours > 0 ? `${runTimeHours}h` : ""
  } ${runTimeMin}m`;

  return (
    <main className="relative h-[90vh]">
      {/* layer */}
      <div className="fixed inset-0 size-full -z-1">
        <div className="absolute backdrop-blur-[2px] inset-0 bg-black/80 z-10" />
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/w1920${movie.backdrop_path}`}
          alt={title}
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>
      <DetailsBreadCrampLinks type={type} />

      <section className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-12 p-8">
        <div className="flex flex-col">
          <div className="relative w-[18.75rem] h-[28.125rem] bg-base-200">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/w500${movie.poster_path}`}
              alt={title}
              fill
              sizes="100%"
              priority
              className="object-cover rounded"
            />
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <MainBtn classes="flex-1">
              <span className="flex gap-1 items-center text-nowrap w-full">
                <Play className="size-4" /> Watch Now
              </span>
            </MainBtn>
            <WhiteBtn classes="flex-1">Download</WhiteBtn>
          </div>
        </div>

        <div className="px-4 flex flex-col gap-4">
          <MainTitle classes="w-fit relative">
            <>
              {movie?.homepage ? (
                <Link
                  href={movie?.homepage}
                  target="_blank"
                  className="text-white tooltip tooltip-bottom"
                  data-tip="Go to home page"
                  style={{ textDecoration: "underline" }}
                >
                  {title}
                </Link>
              ) : (
                <span className="text-white">{title}</span>
              )}
              {movie?.adult && (
                <Image
                  className="size-6 absolute -top-1 -right-6"
                  src={adult}
                  alt="for adult +18"
                />
              )}
            </>
          </MainTitle>

          <div
            className="flex items-center gap-4 tooltip w-fit"
            data-tip={Number(movie?.vote_average).toFixed(1)}
          >
            <RatingStars rateNum={movie?.vote_average} />{" "}
            <div className="badge badge-sm badge-soft rounded">
              {movie?.status}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <CalendarFold className="size-4" /> {releaseDate}
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              <Clock3 className="size-4" /> <span>{runtTimeStr}</span>
            </p>
          </div>

          {movie?.genres && movie?.genres.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {movie?.genres.map((g) => (
                <div key={g.id} className="badge badge-neutral rounded">
                  {g.name}
                </div>
              ))}
            </div>
          )}

          <div className="my-4 sm:max-w-4/5">
            <h2 className="text-gray-400 text-lg">Overview</h2>
            <p className="mt-2">{movie?.overview}</p>
          </div>

          {movie?.production_companies &&
            movie?.production_companies.length > 0 && (
              <div>
                <h2 className="text-gray-400 text-lg">Production Companies</h2>
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  {movie?.production_companies.map((company) =>
                    company.logo_path ? (
                      <div
                        key={company.id}
                        className="relative tooltip tooltip-bottom w-[110px] h-[70px] bg-white/30 rounded hover:bg-white duration-500"
                        data-tip={company.name}
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/w185${company.logo_path}`}
                          alt={company.name}
                          fill
                          sizes="100%"
                          className="object-contain rounded"
                        />
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            )}
        </div>
      </section>

      {officialTrailers && officialTrailers.length > 0 && (
        <section className=" my-8 p-8">
          <MainTitle>
            <span className="text-white">Official Trailers</span>
          </MainTitle>
          <div className="flex flex-wrap gap-2 items-center justify-evenly">
            <TrailerVideo officialTrailers={officialTrailers} />
          </div>
        </section>
      )}

      <Recommendations id={movieId} type={type} />
    </main>
  );
};

export default MovieDetailsPage;
