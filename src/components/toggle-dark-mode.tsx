"use client";

import { useEffect, useRef, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export enum ColorScheme {
  Light = "light",
  Dark = "dark",
}

export default function ToggleDarkMode() {
  const isClient = typeof window !== "undefined";

  const [colorMode, toggleColorMode] = useState(ColorScheme.Light);

  const updateColorScheme = () => {
    const newColorScheme =
      colorMode === ColorScheme.Light ? ColorScheme.Dark : ColorScheme.Light;
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", newColorScheme);
    }
    toggleColorMode(newColorScheme);
  };
  useEffect(() => {
    function updateColorPreference() {
      const storedColorScheme = window.localStorage.getItem(
        "theme"
      ) as ColorScheme;
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const preferredColorScheme =
        storedColorScheme ||
        (!storedColorScheme && systemPrefersDark
          ? ColorScheme.Dark
          : ColorScheme.Light);
      toggleColorMode(preferredColorScheme);
    }
    if (isClient) {
      updateColorPreference();
    }
  }, [isClient]);

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
