"use client";
import { motion } from "@/shared/lib";

const MotionSectionWrapper = ({
  children,
  classes,
  horizontalShift = false,
  fadeOnly = false,
}) => {
  return (
    <motion.section
      className={classes}
      initial={{
        opacity: 0,
        y: fadeOnly ? 0 : 100,
        x: horizontalShift ? -200 : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.section>
  );
};

export default MotionSectionWrapper;
