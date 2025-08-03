"use client";
import { useTrailer } from "@/shared/hooks";
import { motion } from "@/shared/lib";
import { MainModal } from "@/shared/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TrailerVideo = ({ officialTrailers }) => {
  const { handlePlay, handleClose, frameVideo, selectedTrailer } = useTrailer();
  const [loadedVideos, setLoadedVideos] = useState({});

  const handleIframeLoad = (id) => {
    setLoadedVideos((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="w-full px-4">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="[&_.swiper-pagination-bullet]:!bg-gray-400 [&_.swiper-pagination-bullet-active]:!bg-main"
      >
        {officialTrailers.map((trailer) => (
          <SwiperSlide key={trailer.key}>
            <motion.div
              onClick={() => handlePlay(trailer)}
              className="rounded shadow-lg cursor-pointer transition-transform hover:scale-[1.02] duration-500 my-10 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Skeleton overlay */}
              {!loadedVideos[trailer.key] && (
                <div className="skeleton w-full aspect-video rounded absolute top-0 left-0 z-10 pointer-events-none" />
              )}

              {/* Iframe with fade-in when loaded */}
              <iframe
                title={trailer.name}
                src={`https://www.youtube.com/embed/${trailer.key}`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className={`w-full aspect-video rounded transition-opacity duration-500 pointer-events-none  ${
                  loadedVideos[trailer.key] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleIframeLoad(trailer.key)}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <MainModal
        myWidth="max-w-[100%] w-[95%] md:w-[65%]"
        isOpen={!!selectedTrailer}
        onClose={handleClose}
      >
        {frameVideo}
      </MainModal>
    </section>
  );
};

export default TrailerVideo;
