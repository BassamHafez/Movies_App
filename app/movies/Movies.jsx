"use client";
import { mainFormsHandlerTypeRaw } from "@/util/http";
import {
  useEffect,
  useQuery,
  useQueryClient,
  useSelector,
  useState,
} from "@/shared/hooks";
import MovieCard from "./MovieCard";
import { Pagination } from "@/shared/components";
import SkeletonCard from "@/components/UI/Blocks/SkeletonCard";

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
      <section className="grid grid-cols-12 gap-y-16">
        {!data || isFetching
          ? Array.from({ length: 20 }).map((_, index) => (
              <div
                key={index}
                className="col-span-3 flex justify-center items-center"
              >
                <SkeletonCard />
              </div>
            ))
          : data.results?.map((movie) => (
              <div
                key={movie.id}
                className="col-span-3 flex justify-center items-center"
              >
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
