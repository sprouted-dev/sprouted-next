"use client";

import { MouseEvent, useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ToggleDarkMode() {
  const { matchMedia, localStorage } = window;
  const storedColorScheme = localStorage.getItem("theme");
  const systemPrefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
  const preferredColorScheme =
    storedColorScheme ||
    (!storedColorScheme && systemPrefersDark ? "dark" : "light");

  const [colorMode, toggleColorMode] = useState(preferredColorScheme);

  const updateColorScheme = () => {
    const newColorScheme = colorMode === "light" ? "dark" : "light";
    localStorage.setItem("theme", newColorScheme);
    toggleColorMode(newColorScheme);
  };
  useEffect(() => {
    if (colorMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [colorMode]);

  return (
    <div onClick={updateColorScheme} className="flex items-center">
      {colorMode === "dark" ? (
        <MoonIcon className="h-6 w-6 text-slate-50" />
      ) : (
        <SunIcon className="h-6 w-6 text-slate-700" />
      )}
    </div>
  );
}
