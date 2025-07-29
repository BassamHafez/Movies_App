import { useState } from "@/shared/hooks";

const useTrailer = () => {
  const [selectedTrailer, setSelectedTrailer] = useState(null);

  const handlePlay = (trailer) => {
    setSelectedTrailer(trailer);
  };

  const handleClose = () => {
    setSelectedTrailer(null);
  };

  const frameVideo = selectedTrailer ? (
    <div className="w-full aspect-video mx-auto">
      <iframe
        src={`https://www.youtube.com/embed/${selectedTrailer.key}?autoplay=1`}
        title={selectedTrailer.name}
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="size-full rounded"
      />
    </div>
  ) : null;

  return { handlePlay, handleClose, frameVideo, selectedTrailer };
};

export default useTrailer;
