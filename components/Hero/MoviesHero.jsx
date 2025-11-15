"use client";
import { MoviesHeroSlider } from "@/shared/components";
import { mainFormsHandlerTypeRaw } from "@/util/http";
import { useQuery } from "@/shared/hooks";
const currentPage = 1;

const MoviesHero = () => {
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
    <header className="mb-20 hidden xs:flex justify-center">
      <MoviesHeroSlider movies={movies} />
    </header>
  );
};

export default MoviesHero;
