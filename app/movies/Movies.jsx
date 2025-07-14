"use client";
import { mainFormsHandlerTypeRaw } from "@/util/http";
import { useEffect, useQuery, useQueryClient, useState } from "@/shared/hooks";
import MovieCard from "./MovieCard";
import { Pagination } from "@/shared/components";

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["discoverMovies", currentPage],
    queryFn: () =>
      mainFormsHandlerTypeRaw({
        type: "/discover/movie",
        params: {
          page: currentPage,
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
      {data ? (
        <section className="grid grid-cols-4 gap-y-16 p-6">
          {data.results?.map((movie) => (
            <div
              key={movie.id}
              className="col-span-1 flex justify-center items-center"
            >
              <MovieCard movie={movie} />
            </div>
          ))}

          <Pagination
            totalPages={data.total_pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </section>
      ) : (
        <p>"No Data"</p>
      )}
    </>
  );
};

export default Movies;

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
