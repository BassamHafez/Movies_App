const RatingStars = ({ rateNum }) => {
  const fullStars = Math.round(Number(rateNum) / 2);
  const totalStars = 5;

  return (
    <div className="flex items-center gap-2">
      <div className="rating rating-sm">
        {Array.from({ length: totalStars }, (_, i) => (
          <div
            key={i}
            className={`mask mask-star-2 ${
              i < fullStars ? "bg-yellow-400" : ""
            }`}
            aria-label={`${i + 1} star`}
            aria-current={i+1 === fullStars ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingStars;
