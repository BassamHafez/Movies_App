import { playFairFont } from "@/logic/static";
import { CurvedSvgLine, MainBtn, WhiteBtn } from "@/shared/components";
import { MotionSectionWrapper } from "@/shared/providers";
import { Link } from "@/shared/lib";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <header
      className={`${styles.hero} snap-start w-full h-screen flex items-center justify-center relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <MotionSectionWrapper
        fadeOnly
        classes={`flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-1/2  z-20 text-white text-center w-full ${playFairFont}`}
      >
        <h1
          className="font-extrabold text-5xl sm:text-6xl md:text-8xl mb-8 
             text-transparent bg-clip-text 
             bg-gradient-to-r from-[#d9a520] via-[#f1c857] to-[#d9a520]"
        >
          Cinematic Royale
        </h1>
        <h4 className="text-xl md:text-2xl text-gray-400">
          Unlimited movies, TV shows, and more
        </h4>
        <p className="md:text-2xl text-gray-400">
          Premium stories. Exclusive access. Pure cinematic excellence.
        </p>
        <div className="flex justify-center flex-wrap gap-8 mt-8">
          <Link href="/auth">
            <MainBtn classes="md:btn-lg">Get Started</MainBtn>
          </Link>
          <WhiteBtn classes="md:btn-lg">More Info</WhiteBtn>
        </div>
      </MotionSectionWrapper>

      <CurvedSvgLine />
    </header>
  );
};

export default Hero;
