import Image from "next/image";
import Sprout from "../../public/assets/sprouts.png";
import ToggleDarkMode from "./toggle-dark-mode";

export default function AppBar() {
  return (
    <div className="z-50 flex h-16 w-screen items-center bg-slate-50 px-4 py-2 dark:bg-zinc-900">
      <Image src={Sprout} alt="sprouts" className="z-50 mr-1 h-10 w-10" />
      <h1 className="z-50 text-3xl font-bold text-slate-700 dark:text-slate-50">
        sprouted
      </h1>
      <div className="flex-grow"></div>
      <ToggleDarkMode />
    </div>
  );
}
