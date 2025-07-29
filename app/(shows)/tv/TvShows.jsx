"use client";
import { mainFormsHandlerTypeRaw } from "@/util/http";
import {
  useCallback,
  useEffect,
  useQuery,
  useQueryClient,
  useSelector,
  useState,
} from "@/shared/hooks";
import {
  FilerHeader,
  LoadingCards,
  MainTitle,
  MovieCard,
  NoResultsFound,
  Pagination,
} from "@/shared/components";
import { separator } from "@/shared/images";
import { Image } from "@/shared/lib";

const titleMap = {
  discover: "Discover",
  top_rated: "Top Rated",
  popular: "Popular",
  on_the_air: "On The Air",
  airing_today: "Airing Today",
};

//   selectType
//     ? `${process.env.REACT_APP_MOVIE_URL}/tv/${type}`
//     : `${process.env.REACT_APP_MOVIE_URL}/${type}/tv`,
// discover
// popular
// top_rated
// on_the_air
// airing_today

const TvShows = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filterType = useSelector((state) => state.filterSidebar.type);
  const filters = useSelector((state) => state.filterSidebar.filters);
  const queryClient = useQueryClient();

  const urlPath = searchTerm
    ? "/search/tv"
    : filterType === "discover"
    ? `/discover/tv`
    : `/tv/${filterType}`;

  const { data, isFetching } = useQuery({
    queryKey: [
      "discoverTvShows",
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
          "discoverTvShows",
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

  const handleSearch = (val) => setSearchTerm(val);
  const clearSearch = () => setSearchTerm("");

  console.log("tv", data);
  return (
    <>
      <div className="flex flex-col items-center gap-4 mb-12">
        <MainTitle classes="text-center">
          & {titleMap[filterType]} TV Shows &
        </MainTitle>
        <Image src={separator} alt="separator" />
      </div>

      <FilerHeader
        classes="mb-6 px-2"
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        clearSearch={clearSearch}
      />

      <section className="flex items-center justify-evenly flex-wrap gap-y-16 gap-x-4">
        {!data || isFetching ? (
          <LoadingCards />
        ) : data.results?.length > 0 ? (
          data.results?.map(
            (show) =>
              show.poster_path &&
              show.backdrop_path && (
                <div
                  key={show.id}
                  className="flex justify-center items-center"
                >
                  <MovieCard movie={show} isTvShow />
                </div>
              )
          )
        ) : (
          <NoResultsFound />
        )}
      </section>
      {data && data.results?.length > 0 && (
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
