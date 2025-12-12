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

const TvShows = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filterType = useSelector((state) => state.filterSidebar.type);
  const filters = useSelector((state) => state.filterSidebar.filters);
  const queryClient = useQueryClient();

  // Create a stable filter key for query key
  const filterKey = `${filters.include_adult}-${filters.primary_release_year || 'null'}`;

  const urlPath = searchTerm
    ? "/search/tv"
    : filterType === "discover"
    ? `/discover/tv`
    : `/tv/${filterType}`;

  const { data, isFetching, isError, error, refetch } = useQuery({
    queryKey: [
      "discoverTvShows",
      currentPage,
      filterType,
      searchTerm,
      filterKey,
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
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: 1000,
  });

  useEffect(() => {
    if (data?.total_pages && currentPage < data.total_pages) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery({
        queryKey: [
          "discoverTvShows",
          nextPage,
          filterType,
          searchTerm,
          filterKey,
        ],
        queryFn: () =>
          mainFormsHandlerTypeRaw({
            type: urlPath,
            params: { page: nextPage, query: searchTerm, ...filters },
          }),
      });
    }
  }, [data, currentPage, queryClient, filterType, searchTerm, filterKey, filters, urlPath]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filters]);

  const filteredData = data?.results.filter(
    (show) => show.poster_path && show.backdrop_path
  );
  return (
    <>
      <ShowsContentHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isTv
      />

      <section className="flex items-center justify-evenly flex-wrap gap-y-16 gap-x-4">
        {isFetching || (isError && !data) ? (
          <LoadingCards />
        ) : isError ? (
          <div className="w-full text-center py-8">
            <p className="text-error mb-4">Error loading TV shows: {error?.message || "Unknown error"}</p>
            <button 
              onClick={() => refetch()} 
              className="btn btn-primary"
            >
              Retry
            </button>
          </div>
        ) : filteredData?.length > 0 ? (
          filteredData?.map((show) => (
            <div key={show.id} className="flex justify-center items-center">
              <MovieCard movie={show} isTvShow />
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

export default TvShows;
