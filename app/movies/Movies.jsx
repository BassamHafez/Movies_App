"use client";
import { mainFormsHandlerTypeRaw } from "@/util/http";
import {
  useEffect,
  useQuery,
  useQueryClient,
  useSelector,
  useState,
} from "@/shared/hooks";
import { MainTitle, Pagination, SkeletonCard } from "@/shared/components";
import { separator } from "@/shared/images";
import { Image } from "@/shared/lib";
import MovieCard from "./MovieCard";

const titleMap = {
  discover: "Discover",
  now_playing: "Now Playing",
  top_rated: "Top Rated",
  popular: "Popular",
  upComing: "UpComing",
};

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const filterType = useSelector((state) => state.filterSidebar.type);
  const urlPath =
    filterType === "discover" ? `/discover/movie` : `/movie/${filterType}`;
  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery({
    queryKey: ["discoverMovies", currentPage, filterType],
    queryFn: () =>
      mainFormsHandlerTypeRaw({
        type: urlPath,
        params: {
          page: currentPage,
          language: "en-US",
        },
      }),
    keepPreviousData: true,
    staleTime: 1000 * 60 * 60,
  });

  useEffect(() => {
    if (data?.total_pages && currentPage < data.total_pages) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery({
        queryKey: ["discoverMovies", nextPage],
        queryFn: () =>
          mainFormsHandlerTypeRaw({
            type: "/discover/movie",
            params: { page: nextPage },
          }),
      });
    }
  }, [data, currentPage, queryClient]);

  return (
    <>
      <div className="flex flex-col items-center gap-4 mb-12">
        <MainTitle classes="text-center">
          & {titleMap[filterType]} Movies &
        </MainTitle>
        <Image src={separator} alt="separator" />
      </div>

      <section className="flex items-center justify-evenly flex-wrap gap-y-16">
        {!data || isFetching
          ? Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className="flex justify-center items-center">
                <SkeletonCard />
              </div>
            ))
          : data.results?.map((movie) => (
              <div key={movie.id} className="flex justify-center items-center">
                <MovieCard movie={movie} />
              </div>
            ))}
      </section>
      {data && (
        <div className="mb-8 mt-6">
          <Pagination
            totalPages={data.total_pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </>
  );
};

export default Movies;
