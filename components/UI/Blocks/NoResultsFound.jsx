"use client";
import { motion } from "@/shared/lib";

const NoResultsFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="min-h-[60vh] flex flex-col justify-center items-center text-center gap-2"
    >
      <h2 className="font-bold text-4xl md:text-6xl">No Result Found!</h2>
      <p className="text-gray-400">
        Try using another keywords or try again later
      </p>
    </motion.div>
  );
};

export default NoResultsFound;
