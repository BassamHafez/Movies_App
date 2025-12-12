import { MainTitle, MovieCard } from "@/shared/components";
import { mainFormsHandlerTypeRaw } from "@/util/http";

const Recommendations = async ({ id ,type}) => {
  const recommendations = await mainFormsHandlerTypeRaw({
    type: `/${type}/${id}/recommendations`,
    params: { api_key: process.env.MOVIE_KEY },
    serverReq: true,
  });

  return (
    <>
      {recommendations && recommendations?.results?.length > 0 ? (
        <main className="p-8">
          <MainTitle>
            <span className="text-white">Recommendations</span>
          </MainTitle>
          <section className="flex items-center justify-evenly flex-wrap gap-y-16 gap-x-4 mt-6">
            {recommendations?.results.map((items) => (
              <div key={items.id} className="flex justify-center items-center">
                <MovieCard movie={items} />
              </div>
            ))}
          </section>
        </main>
      ) : null}
    </>
  );
};

export default Recommendations;
