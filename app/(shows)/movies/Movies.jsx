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
  now_playing: "Now Playing",
  top_rated: "Top Rated",
  popular: "Popular",
  upComing: "UpComing",
};

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

  const handleSearch = (val) => setSearchTerm(val);
  const clearSearch = () => setSearchTerm("");

  console.log(data);
  return (
    <>
      <div className="flex flex-col items-center gap-4 mb-12">
        <MainTitle classes="text-center">
          & {titleMap[filterType]} Movies &
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
            (movie) =>
              movie.poster_path &&
              movie.backdrop_path && (
                <div
                  key={movie.id}
                  className="flex justify-center items-center"
                >
                  <MovieCard movie={movie} />
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

export default Movies;
