"use client"
import { useEffect, useState } from "@/shared/hooks";

export const useIsSmallScreen = (breakpoint = 768) => {
  const [isSmall, setIsSmall] = useState(() => window.innerWidth < breakpoint);

  useEffect(() => {
    const handler = () => setIsSmall(window.innerWidth < breakpoint);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [breakpoint]);

  return isSmall;
};
