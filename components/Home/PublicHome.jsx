import { Hero, MotionSectionWrapper, Packages } from "@/shared/components";
import { thrones, googlePlay, appStore, tvShows, kids } from "@/shared/images";
import { Image } from "@/shared/lib";

const appsClasses =
  "cursor-pointer w-40 mx-3 my-4 sm:my-0 hover:scale-106 duration-300 ease-linear";

const PublicHome = () => {
  return (
    <main>
      <Hero />
      <MotionSectionWrapper classes="grid md:grid-cols-2 gap-2 place-content-center p-10 mt-10">
        <div className="col-span-1 flex justify-center items-center">
          <Image className="w-92" src={thrones} alt="game_of_thrones" />
        </div>

        <div className="col-span-1  flex flex-col gap-8 justify-center items-center">
          <div className="flex flex-col gap-6 text-center">
            <h2 className="text-4xl xl:text-6xl text-main">
              Watch everywhere.
            </h2>
            <h4 className="text-gray-400 text-lg xl:text-2xl ">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </h4>
          </div>
          <div className="flex justify-center flex-wrap">
            <Image className={appsClasses} src={appStore} alt="app_store" />
            <Image className={appsClasses} src={googlePlay} alt="google_play" />
          </div>
        </div>
      </MotionSectionWrapper>

      <MotionSectionWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        classes="grid md:grid-cols-2 gap-5 place-content-center p-10 my-10"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <h2 className="mb-10 text-4xl xl:text-5xl text-main">
              Create profiles for kids
            </h2>
            <h4 className="text-gray-400 text-lg xl:text-xl mb-10">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership
            </h4>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image src={kids} alt="kids" />
        </div>
      </MotionSectionWrapper>

      <MotionSectionWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        classes="flex flex-col items-center p-10"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <h2 className="mb-2 text-4xl xl:text-5xl text-main">
              Watch the way you want
            </h2>
            <h4 className="text-gray-400 text-lg xl:text-lg mb-4">
              Discover the world is greatest stories,all in one place.
            </h4>
          </div>
        </div>

        <div className="md:w-6/10">
          <Image src={tvShows} alt="Tv_Shows" />
        </div>
      </MotionSectionWrapper>

      <MotionSectionWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        classes="flex flex-col items-center p-10 mt-10 mb-20"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <h2 className="mb-10 text-4xl xl:text-5xl text-main">
              Choose your package
            </h2>
          </div>
        </div>
        <Packages />
      </MotionSectionWrapper>
    </main>
  );
};

export default PublicHome;
