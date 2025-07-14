"use client";
import { motion } from "@/shared/lib";

const CurvedSvgLine = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="absolute -bottom-15 left-0 right-0 w-full"
    >
      <path
        fill="#000"
        fillOpacity="1"
        d="M0,224L120,197.3C240,171,480,117,720,122.7C960,128,1200,192,1320,224L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />

      <motion.path
        stroke="#d9a52055"
        strokeWidth="2"
        fill="none"
        className="strok-1 strok-main"
        d="M0,224L120,197.3C240,171,480,117,720,122.7C960,128,1200,192,1320,224L1440,256"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
};

export default CurvedSvgLine;
