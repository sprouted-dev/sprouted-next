"use client";

import { MouseEvent, useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export enum ColorScheme {
  Light = "light",
  Dark = "dark",
}

export default function ToggleDarkMode() {
  const { matchMedia, localStorage } = window;
  const storedColorScheme = localStorage.getItem("theme");
  const systemPrefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
  const preferredColorScheme =
    storedColorScheme ||
    (!storedColorScheme && systemPrefersDark
      ? ColorScheme.Dark
      : ColorScheme.Light);

  const [colorMode, toggleColorMode] = useState(preferredColorScheme);

  const updateColorScheme = () => {
    const newColorScheme =
      colorMode === ColorScheme.Light ? ColorScheme.Dark : ColorScheme.Light;
    localStorage.setItem("theme", newColorScheme);
    toggleColorMode(newColorScheme);
  };
  useEffect(() => {
    if (colorMode === ColorScheme.Dark) {
      document.documentElement.classList.add(ColorScheme.Dark);
    } else {
      document.documentElement.classList.remove(ColorScheme.Dark);
    }
  }, [colorMode]);

  return (
    <div onClick={updateColorScheme} className="flex items-center">
      {colorMode === ColorScheme.Light ? (
        <MoonIcon className="h-6 w-6 text-slate-700" />
      ) : (
        <SunIcon className="h-6 w-6 text-slate-50" />
      )}
    </div>
  );
}
