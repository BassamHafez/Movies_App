"use client";
import { useState, useRef, useEffect } from "@/shared/hooks";
import { motion, AnimatePresence } from "@/shared/lib";
const MotionDiv = motion.div;

const DropDownWrapper = ({
  trigger,
  children,
  position = "start-0",
  close = false,
  onClose = () => {},
  parentClasses = "",
  classes = "",
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (close) {
      setOpen(false);
      onClose();
    }
  }, [close, onClose]);

  return (
    <div className={`relative inline-block ${parentClasses}`} ref={dropdownRef}>
      {/* Trigger */}
      <div className={classes} onClick={() => setOpen((prev) => !prev)}>
        {trigger}
      </div>

      {/* Dropdown content */}
      <AnimatePresence>
        {open && (
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -5 }}
            transition={{ duration: 0.15 }}
            className={`absolute mt-1 min-w-40 bg-base-100 border border-gray-800 rounded-md shadow-lg overflow-hidden z-50 ${position}`}
          >
            {children}
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDownWrapper;
