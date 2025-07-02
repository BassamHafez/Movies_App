"use client";
import { applyTheme } from "@/logic/themeUtils";
import { Moon, SunMedium } from "@/shared/icons";
import { useDispatch, useSelector, useInitTheme } from "@/shared/hooks";
import { themeActions } from "@/store/themeMode-slice";

const SwapThemeBtn = () => {
  const selectedTheme = useSelector((state) => state.themeMode.selected);
  const dispatch = useDispatch();
  useInitTheme();

  const toggleMode = (e) => {
    const newTheme = e.target.checked ? "light" : "black";
    dispatch(themeActions.setTheme(newTheme));
    applyTheme(newTheme, dispatch);
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        onChange={toggleMode}
        checked={selectedTheme === "black" ? false : true}
        role="button"
        aria-label="Toggle dark mode"
        name="toggleTheme"
      />
      <SunMedium className="swap-on size-6" strokeWidth={1.5} />
      <Moon className="swap-off size-6 " strokeWidth={1.5} />
    </label>
  );
};

export default SwapThemeBtn;
