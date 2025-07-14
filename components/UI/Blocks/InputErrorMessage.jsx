"use client";
import { motion } from "@/shared/lib";

const InputErrorMessage = (props) => {
  return (
    <motion.p
      initial={{ x: -30, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, type: "spring", stiffness: 500 },
      }}
      exit={{ x: -30, opacity: 0 }}
      className="text-red-600 font-bold text-xs absolute top-[88%] start-[2px]"
    >
      {props.text ? props.text : props.children?.value || props.children}
    </motion.p>
  );
};

export default InputErrorMessage;
