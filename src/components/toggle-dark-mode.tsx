"use client";
import { ColorScheme, useColorScheme } from "@/hooks/use-color-scheme";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorScheme();

  return (
    <div onClick={toggleColorMode} className="flex items-center">
      {colorMode === ColorScheme.Light ? (
        <MoonIcon className="h-6 w-6 text-slate-700" />
      ) : (
        <SunIcon className="h-6 w-6 text-slate-50" />
      )}
    </div>
  );
}
