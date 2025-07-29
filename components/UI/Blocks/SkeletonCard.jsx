const SkeletonCard = () => {
  return (
    <div className="flex flex-col gap-4 w-[275px]">
      <div className="skeleton w-[275px] h-[450px] rounded-t"></div>
      <div className="flex justify-between gap-2 my-2">
        <div className="skeleton h-4 w-[85%]"></div>
        <div className="skeleton h-4 w-[10%]"></div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="skeleton h-8 w-[80%] rounded bg-white/50"></div>
        <div className="skeleton h-8 w-[80%] rounded bg-main/50"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
