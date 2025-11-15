"use client";
import { mainFormsHandlerTypeRaw } from "@/util/http";
import {
  useEffect,
  useQuery,
  useQueryClient,
  useSelector,
  useDispatch,
  useState,
  useRouter,
  useSearchParams,
  useRef,
} from "@/shared/hooks";
import {
  LoadingCards,
  MovieCard,
  NoResultsFound,
  Pagination,
  ShowsContentHeader,
} from "@/shared/components";
import { filterSidebarActions } from "@/store/filterSidebar-slice";

const Movies = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isHydrated, setIsHydrated] = useState(false);

  const isInitialMount = useRef(true);

  useEffect(() => {
    const urlPage = Number(searchParams.get("page")) || 1;
    const urlSearch = searchParams.get("search") || "";
    const urlType = searchParams.get("type") || "discover";
    const urlAdult = searchParams.get("adult") === "true";
    const urlYear = searchParams.get("year")
      ? Number(searchParams.get("year"))
      : null;

    setCurrentPage(urlPage);
    setSearchTerm(urlSearch);
    dispatch(
      filterSidebarActions.setAllFilters({
        include_adult: urlAdult,
        primary_release_year: urlYear,
      })
    );
    dispatch(filterSidebarActions.setFilterType(urlType));
    setIsHydrated(true);
  }, [searchParams]);

  const filterType = useSelector((state) => state.filterSidebar.type);
  const filters = useSelector((state) => state.filterSidebar.filters);

  // update URL when states change
  useEffect(() => {
    if (!isHydrated) return;

    const params = new URLSearchParams();
    if (currentPage > 1) params.set("page", currentPage);
    if (searchTerm) params.set("search", searchTerm);
    if (filterType) params.set("type", filterType);
    if (filters.include_adult) params.set("adult", filters.include_adult);
    if (filters.primary_release_year)
      params.set("year", filters.primary_release_year);

    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    router.replace(`/movies?${params.toString()}`, { scroll: false });
  }, [currentPage, searchTerm, filterType, filters, isHydrated]);

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
    enabled: isHydrated,
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

  const prevSearch = useRef(searchTerm);
  const prevFilters = useRef(filters);

  useEffect(() => {
    if (!isHydrated) return;
    if (
      searchTerm !== prevSearch.current ||
      JSON.stringify(filters) !== JSON.stringify(prevFilters.current)
    ) {
      setCurrentPage(1);
    }

    prevSearch.current = searchTerm;
    prevFilters.current = filters;
  }, [searchTerm, filters, isHydrated]);

  const filteredData = data?.results.filter(
    (movie) => movie.poster_path && movie.backdrop_path
  );

  useEffect(() => {
    const storedId = sessionStorage.getItem("lastClickedMovieId");
    if (!storedId || !data) return;

    const element = document.getElementById(`movie-${storedId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    sessionStorage.removeItem("lastClickedMovieId");
  }, [data]);

  return (
    <>
      <ShowsContentHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <section className="flex items-center justify-evenly flex-wrap gap-y-16 gap-x-4">
        {!isHydrated || !data || isFetching ? (
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
        <div className="my-8 min-h-[80px] flex justify-center">
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
