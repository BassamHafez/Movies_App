import { SkeletonCard } from "@/shared/components";

const LoadingCards = () => {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="flex justify-center items-center">
          <SkeletonCard />
        </div>
      ))}
    </>
  );
};

export default LoadingCards;
