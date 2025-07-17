"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import {
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
} from "@/shared/images";
import { Image } from "@/shared/lib";
import { CalendarFold, Clock3 } from "@/shared/icons";
import { playFairFont } from "@/logic/static";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./sliderStyles.css";

const sliderEvents = [
  {
    src: slider4,
    alt: "Kids Morning Special",
    title: "Kids Morning Special",
    time: "09:00 AM - 11:30 AM",
    date: "12/07",
  },
  {
    src: slider1,
    alt: "Family Matinée",
    title: "Family Matinée",
    time: "12:00 PM - 02:15 PM",
    date: "12/07",
  },
  {
    src: slider3,
    alt: "VIP Red-Carpet Premiere",
    title: "VIP Red-Carpet Premiere",
    time: "03:00 PM - 05:30 PM",
    date: "12/07",
  },
  {
    src: slider2,
    alt: "Classic Throwback",
    title: "Classic Throwback",
    time: "06:00 PM-08:20 PM",
    date: "12/07",
  },
  {
    src: slider5,
    alt: "Directors' Q&A Night",
    title: "Directors' Q&A Night",
    time: "08:45 PM-10:30 PM",
    date: "12/07",
  },
  {
    src: slider6,
    alt: "Late-Night Horror Fest",
    title: "Late-Night Horror Fest",
    time: "11:00 PM - 01:00 AM",
    date: "12/07",
  },
];

const PublicHomeSlider = () => {
  return (
    <div className="publicHome_swiper">
      <Swiper
        speed={1100}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 700,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {sliderEvents.map((event) => (
          <SwiperSlide key={event.alt} className="relative">
            <Image src={event.src} alt={event.alt} />
            <div className="absolute -bottom-1 left-0 w-full flex flex-wrap justify-between items-center gap-4 p-4 bg-black/60">
              <h2
                className={`font-extrabold text-xl md:text-3xl text-main ${playFairFont}`}
              >
                {event.title}
              </h2>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <Clock3 className="size-5" /> {event.time}
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CalendarFold className="size-5" /> {event.date}
                </li>
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PublicHomeSlider;
