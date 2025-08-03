"use client";
import { toast } from "@/shared/lib";
import { useQuery, useState, useEffect } from "@/shared/hooks";
import { MainModal, MainTitle, TrailerVideo } from "@/shared/components";
import { mainFormsHandlerTypeRaw } from "@/util/http";

const usePlayTrailer = () => {
  const [showModal, setShowModal] = useState(false);
  const [showId, setShowId] = useState(null);

  const clearData = () => {
    setShowId(null);
    setShowModal(false);
  };

  const {
    data: trailers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["trailers", showId],
    queryFn: () =>
      mainFormsHandlerTypeRaw({
        type: `/movie/${showId}/videos`,
        params: { api_key: process.env.MOVIE_KEY },
        serverReq: false,
      }),
    enabled: !!showId,
  });

  useEffect(() => {
    if (trailers && showId) {
      if (trailers?.results?.length > 0) {
        setShowModal(true);
      } else {
        clearData();
        toast.info("There are no trailers for this show yet!");
      }
    }
  }, [trailers, showId]);

  useEffect(() => {
    if (isError && showId) {
      clearData();
      toast.error("Something went wrong, try again later!");
    }
  }, [isError, showId]);

  const getTrailers = (id) => {
    setShowId(id);
  };

  const officialTrailers = trailers?.results?.filter(
    (show) => show.type === "Trailer"
  );

  const trailesrModal = (
    <MainModal
      isOpen={showModal}
      onClose={clearData}
      myWidth="max-w-full w-[1200px]"
    >
      <section className="my-4">
        <MainTitle>Official Trailers</MainTitle>
        <div className="flex flex-wrap gap-2 items-center justify-evenly">
          <TrailerVideo officialTrailers={officialTrailers} />
        </div>
      </section>
    </MainModal>
  );

  return { trailesrModal, getTrailers, isLoading, isError };
};

export default usePlayTrailer;
