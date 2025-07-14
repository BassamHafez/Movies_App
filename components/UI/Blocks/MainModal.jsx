"use client";
import { useEffect } from "@/shared/hooks";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "@/shared/lib";
import { SignBtn, SubmitBtn } from "@/shared/components";

const MainModal = ({ isOpen, onClose, onConfirm, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-base-100/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal-box rounded shadow-xs shadow-white/20"
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {children}
            <div className="modal-action">
              <button onClick={onClose} className="btn btn-secondary rounded">
                Close
              </button>
              <SubmitBtn type="button" onClick={onConfirm} myWidth="min-w-24">
                Sign out
              </SubmitBtn>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return typeof window !== "undefined"
    ? createPortal(modalContent, document.body)
    : null;
};

export default MainModal;
