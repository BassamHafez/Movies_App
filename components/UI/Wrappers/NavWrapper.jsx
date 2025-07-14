"use client";
import { playFairFont } from "@/logic/static";
import { motion } from "@/shared/lib";
import { useAnimation, useState, usePathname, useEffect } from "@/shared/hooks";

const NavWrapper = ({ children }) => {
  const pathname = usePathname();
  const isPublicHome = pathname === "/" || pathname.startsWith("/auth");

  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 0) {
        controls.start({ y: 0 });
      } else if (currentY > lastScrollY) {
        controls.start({ y: "-100%" });
      } else {
        controls.start({ y: 0 });
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, controls]);

  return (
    <motion.nav
      animate={controls}
      initial={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`navbar bg-base-100/60 shadow-md shadow-white/5 backdrop-blur-xs ${
        isPublicHome ? "fixed" : "sticky top-0"
      } z-50 px-3 ${playFairFont}`}
    >
      {children}
    </motion.nav>
  );
};

export default NavWrapper;
