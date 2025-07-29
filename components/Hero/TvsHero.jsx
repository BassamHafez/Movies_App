"use client";
import { MoviesHeroSlider } from "@/shared/components";
import { mainFormsHandlerTypeRaw } from "@/util/http";
import { useQuery } from "@/shared/hooks";
const currentPage = 1;

const TvsHero = () => {
  const { data } = useQuery({
    queryKey: ["discoverTvs", currentPage, "on_the_air"],
    queryFn: () =>
      mainFormsHandlerTypeRaw({
        type: `/tv/on_the_air`,
        params: {
          page: currentPage,
        },
      }),
    staleTime: 1000 * 60 * 60,
  });

  const tvShows = data?.results;

  return (
    <header className="mb-20 flex justify-center">
      <MoviesHeroSlider movies={tvShows} isTvShow />
    </header>
  );
};

export default TvsHero;

