"use client";
import { motion } from "@/shared/lib";

const MAIN = "#d9a520";

const overlayVariants = {
  rest: { scaleX: 0, scaleY: 0, originX: 0, originY: 0 },
  hover: {
    scaleX: 2,
    scaleY: 2,
    originX: 0,
    originY: 0, 
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const labelVariants = {
  rest: { color: "#ffffff" },
  hover: { color: MAIN, transition: { duration: 0.5, ease: "easeInOut" } },
};

const MainBtn = ({ classes = "", type = "button", onClick, children }) => (
  <motion.button
    type={type}
    onClick={onClick}
    className={`btn
      relative inline-flex items-center justify-center overflow-hidden
      rounded-lg font-semibold min-w-24
      bg-gradient-to-br from-[#d9a520] via-[#a27d18] to-[#291e01]
      cursor-pointer
      border-none
      ${classes}
    `}
    initial="rest"
    whileHover="hover"
    animate="rest"
  >
    <motion.div
      variants={overlayVariants}
      className="absolute inset-0 bg-white z-0 " /* tiny tilt feels wave‑ish */
    />
    <motion.span variants={labelVariants} className="relative z-10">
      {children}
    </motion.span>
  </motion.button>
);

export default MainBtn;
