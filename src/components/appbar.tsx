import Image from "next/image";
import Sprout from "../../public/assets/sprouts.png";
import ToggleDarkMode from "./toggle-dark-mode";

export default function AppBar() {
  return (
    <div className="flex h-16 w-screen items-center bg-slate-50 px-4 py-2 transition-colors dark:bg-zinc-900 dark:transition-colors">
      <Image src={Sprout} alt="sprouts" className="mr-1 h-10 w-10" />
      <h1 className="text-3xl font-bold text-slate-700 dark:text-slate-50">
        sprouted
      </h1>
      <div className="flex-grow"></div>
      <a 
        href="https://github.com/sprouted-dev/garden" 
        target="_blank"
        rel="noopener noreferrer"
        className="mr-4 flex items-center gap-2 rounded-lg px-3 py-2 text-slate-700 transition-colors hover:bg-slate-200 dark:text-slate-50 dark:hover:bg-zinc-800"
        title="Star on GitHub"
      >
        <span>⭐</span>
        <span className="hidden sm:inline">GitHub</span>
      </a>
      <ToggleDarkMode />
    </div>
  );
}
