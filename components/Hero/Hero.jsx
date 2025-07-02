import styles from "./Hero.module.css";
import { disney } from "@/shared/images";
import { Image } from "@/shared/lib";

const Hero = () => {
  return (
    <header
      className={`${styles.hero} w-full h-screen flex items-center justify-center relative`}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-1/2  z-20 text-white text-center w-full">
        <Image
          className="w-50 md:w-64"
          src={disney}
          alt="disney_logo"
          priority
        />
        <h1 className="text-2xl md:text-4xl mt-4 text-gray-200">
          Unlimited movies, TV shows, and more
        </h1>
        <h4 className="md:text-2xl text-gray-200">
          Watch anywhere, Cancel anytime.
        </h4>
      </div>
    </header>
  );
};

export default Hero;
