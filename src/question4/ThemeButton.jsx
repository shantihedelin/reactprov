import { useTheme } from "./ThemeContext";
import { useEffect } from "react";

function Theme_Toggler() {
  const { state, dispatch } = useTheme();

  function toggleTheme() {
    dispatch({
      type: "TOGGLE_THEME",
      theme: state.theme === "light" ? "dark" : "light",
    });
  }

  useEffect(() => {
    if (state.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.theme]);

  return (
    <div>
      <button onClick={toggleTheme}> Toggle Theme</button>
    </div>
  );
}
export default Theme_Toggler;
