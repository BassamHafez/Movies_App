import { playFairFont } from "@/logic/static";
import {
  Hero,
  MainTitle,
  Packages,
  PublicHomeSlider,
} from "@/shared/components";
import {
  googlePlay,
  appStore,
  tvShows,
  separator,
  love,
  tv,
  fireTV,
  chromecast,
} from "@/shared/images";
import { Image } from "@/shared/lib";
import BookTicketForm from "./BookTicketForm";
import styles from "./PublicHome.module.css";
import { MotionSectionWrapper } from "@/shared/providers";

const appsClasses =
  "cursor-pointer w-10 object-contain hover:scale-106 duration-300 ease-linear";

const PublicHome = () => {
  return (
    <main>
      <Hero />

      <div id="events" className="scroll-mt-28 mb-40">
        <PublicHomeSlider />
      </div>

      <div className="bg-base-200 mb-40 scroll-mt-28" id="tickets">
        <MotionSectionWrapper horizontalShift classes="flex">
          <div className="hidden lg:flex items-center h-full ">
            <Image
              src={love}
              alt="wonderful woman and man watching movie"
              className="w-[43.75rem] h-[40.625rem] object-cover rounded-md"
            />
          </div>
          <div className="p-4 flex-1">
            <section className="flex flex-col items-center text-center gap-2">
              <MainTitle>Book A Ticket</MainTitle>
              <span className={`${playFairFont} text-main`}>
                ~ Check out our place ~
              </span>
              <Image src={separator} alt="separator" />
            </section>
            <section className="mt-16">
              <BookTicketForm />
            </section>
          </div>
        </MotionSectionWrapper>
      </div>

      <section
        id="methods"
        className="grid md:grid-cols-2 gap-2 place-content-center p-10 mb-40 scroll-mt-28"
      >
        <MotionSectionWrapper
          horizontalShift
          classes="col-span-1  flex flex-col gap-8 justify-center px-4"
        >
          <div className="flex flex-col gap-6">
            <MainTitle>Watch everywhere</MainTitle>
            <h4 className="text-gray-400 text-lg xl:text-2xl ">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </h4>
          </div>
          <div className="mt-8 flex gap-8 flex-wrap items-center">
            <Image className={appsClasses} src={appStore} alt="app_store" />
            <Image className={appsClasses} src={googlePlay} alt="google_play" />
            <Image className="w-12" src={tv} alt="tv" />
            <Image className="w-12" src={fireTV} alt="fire tv" />
            <Image className="w-32" src={chromecast} alt="chrome cast" />
          </div>
        </MotionSectionWrapper>
        <MotionSectionWrapper classes="col-span-1 flex justify-center items-center">
          <Image className="w-full" src={tvShows} alt="Tv_Shows" />
        </MotionSectionWrapper>
      </section>

      <div className={`relative ${styles.fixed_bg}`}>
        <div className="absolute inset-0 bg-black/60 z-1 flex justify-center items-center text-center">
          <MainTitle>
            <span className="text-white">Enjoy every moment of your life</span>
          </MainTitle>
        </div>
      </div>

      <div
        id="packages"
        className="scroll-mt-28 bg-base-200 border-2 border-main/50 max-w-9/10 mx-auto rounded-tr-full rounded-bl-full my-20 p-10"
      >
        <MotionSectionWrapper classes="flex flex-col items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="text-center">
              <MainTitle classes="mb-10">
                <span className="">Choose your package</span>
              </MainTitle>
            </div>
          </div>
          <Packages />
        </MotionSectionWrapper>
      </div>
    </main>
  );
};

export default PublicHome;
