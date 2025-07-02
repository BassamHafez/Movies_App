'use client';
import { applyTheme, watchSystemThemeChanges } from "@/logic/themeUtils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useInitTheme = () => {
  const selectedTheme = useSelector((state) => state.themeMode.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    applyTheme(selectedTheme, dispatch);
    let cleanup;

    if (selectedTheme === "system") {
      cleanup = watchSystemThemeChanges(dispatch);
    }

    return () => {
      if (cleanup) cleanup();
    };
  }, [selectedTheme, dispatch]);
};

export default useInitTheme;
