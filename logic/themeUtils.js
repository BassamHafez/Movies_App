import { themeActions } from "@/store/themeMode-slice";

export const detectTheme = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = prefersDark ? "black" : "light";
  return { prefersDark, resolved };
};

export const applyTheme = (theme, dispatch) => {
  const html = document.documentElement;

  if (theme === "system") {
    const { prefersDark, resolved } = detectTheme();
    html.setAttribute("data-theme", resolved);
    html.classList.toggle("dark", prefersDark);
    dispatch?.(themeActions.setAppliedTheme(resolved));
    return resolved;
  } else {
    html.setAttribute("data-theme", theme);
    html.classList.toggle(
      "dark",
      ["dark", "night", "black", "sunset"].includes(theme)
    );
    dispatch?.(themeActions.setAppliedTheme(theme));
    return theme;
  }
};

export const watchSystemThemeChanges = (dispatch) => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const listener = (e) => {
    const newResolved = e.matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newResolved);
    document.documentElement.classList.toggle("dark", e.matches);
    dispatch(themeActions.setAppliedTheme(newResolved));
  };

  mediaQuery.addEventListener("change", listener);
  return () => mediaQuery.removeEventListener("change", listener); // cleanup
};

export const darkThemeChecker = (theme) => {
  if (theme === "system") return detectTheme().prefersDark;
  return ["dark", "night", "black", "sunset"].includes(theme);
};

export const applyColorsToRoot = (colorObj) => {
  const map = {
    mainColor: "--color-main",
    secondaryColor: "--color-main-secondary",
    lighterColor: "--color-main-light",
    borderColorLight: "--color-light-border",
    borderColorDark: "--color-dark-border",
  };

  const root = document.documentElement;
  Object.entries(colorObj).forEach(([key, value]) => {
    if (map[key]) root.style.setProperty(map[key], value);
  });
};
