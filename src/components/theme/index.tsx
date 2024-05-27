"use client";

import { useTheme } from "next-themes";
import { PiMoonLight, PiSunLight } from "react-icons/pi";

const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isActive = theme === "light";

  return (
    <div className="relative cursor-pointer select-none" onClick={toggleTheme}>
      <button className="flex items-center justify-center" aria-label="Dark Mode Button">
        {isActive ? <PiSunLight size={25} /> : <PiMoonLight size={25} />}
      </button>
    </div>
  );
};

export default ThemeSwitch;
