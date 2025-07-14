"use client";
import { playFairFont } from "@/logic/static";
import { motion } from "@/shared/lib";

const MainTitle = ({ children, classes, noMainColor }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`text-4xl xl:text-5xl ${
        noMainColor ? "" : "text-main"
      }  font-extrabold ${classes} ${playFairFont}`}
    >
      {children}
    </motion.h2>
  );
};

export default MainTitle;
