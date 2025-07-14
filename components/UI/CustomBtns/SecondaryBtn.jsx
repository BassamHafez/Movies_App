"use client";
import { motion } from "@/shared/lib";

const MAIN = "#d9a520";

const overlayVariants = {
  rest: { scale: 0, opacity: 0 },
  hover: {
    scale: 1.05,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const labelVariants = {
  rest: { color: MAIN },
  hover: {
    color: "#fff",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const SecondaryBtn = ({ classes = "", type = "button", onClick, children }) => (
  <motion.button
    type={type}
    onClick={onClick}
    className={`btn
      relative inline-flex items-center justify-center overflow-hidden
      border border-main
      rounded-lg font-semibold min-w-24
      bg-transparent cursor-pointer
      ${classes}
    `}
    initial="rest"
    whileHover="hover"
    animate="rest"
  >
    <motion.div
      variants={overlayVariants}
      className="absolute inset-0 bg-main z-0 rounded-lg"
    />

    <motion.span
      variants={labelVariants}
      className="relative z-10 pointer-events-none"
    >
      {children}
    </motion.span>
  </motion.button>
);

export default SecondaryBtn;
