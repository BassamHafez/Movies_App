"use client";
import { motion } from "@/shared/lib";

const MotionSectionWrapper = ({ children, classes }) => {
  return (
    <motion.section
      className={classes}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {children}
    </motion.section>
  );
};

export default MotionSectionWrapper;
