"use client";
import { mainFormsHandlerTypeRaw } from "@/util/http";
import {
  useEffect,
  useQuery,
  useQueryClient,
  useSelector,
  useState,
} from "@/shared/hooks";
import {
  LoadingCards,
  MovieCard,
  NoResultsFound,
  Pagination,
  ShowsContentHeader,
} from "@/shared/components";

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filterType = useSelector((state) => state.filterSidebar.type);
  const filters = useSelector((state) => state.filterSidebar.filters);
  const queryClient = useQueryClient();

  const urlPath = searchTerm
    ? "/search/movie"
    : filterType === "discover"
    ? `/discover/movie`
    : `/movie/${filterType}`;

  const { data, isFetching } = useQuery({
    queryKey: [
      "discoverMovies",
      currentPage,
      filterType,
      searchTerm,
      JSON.stringify(filters),
    ],
    queryFn: () =>
      mainFormsHandlerTypeRaw({
        type: urlPath,
        params: {
          page: currentPage,
          query: searchTerm,
          ...filters,
        },
      }),
    keepPreviousData: true,
    staleTime: 1000 * 60 * 60,
  });

  useEffect(() => {
    if (data?.total_pages && currentPage < data.total_pages) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery({
        queryKey: [
          "discoverMovies",
          nextPage,
          filterType,
          searchTerm,
          JSON.stringify(filters),
        ],
        queryFn: () =>
          mainFormsHandlerTypeRaw({
            type: urlPath,
            params: { page: nextPage, query: searchTerm, ...filters },
          }),
      });
    }
  }, [data, currentPage, queryClient]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filters]);

  console.log(data);

  const filteredData = data?.results.filter(
    (movie) => movie.poster_path && movie.backdrop_path
  );

  return (
    <>
      <ShowsContentHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

      <section className="flex items-center justify-evenly flex-wrap gap-y-16 gap-x-4">
        {!data || isFetching ? (
          <LoadingCards />
        ) : filteredData?.length > 0 ? (
          filteredData?.map((movie) => (
            <div key={movie.id} className="flex justify-center items-center">
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <NoResultsFound />
        )}
      </section>

      {data && filteredData?.length > 0 && (
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
