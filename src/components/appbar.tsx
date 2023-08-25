import Image from "next/image";
import Sprout from "../../public/assets/sprouts.png";
import ToggleDarkMode from "./toggle-dark-mode";
import CoinbaseButton from "./coinbase-button";
import GoogleButton from "./google-button";

export default function AppBar() {
  return (
    <div className="flex h-16 w-screen items-center bg-slate-50 px-4 py-2 transition-all dark:bg-zinc-900 dark:transition-all">
      <Image src={Sprout} alt="sprouts" className="mr-1 h-10 w-10" />
      <h1 className="text-3xl font-bold text-slate-700 dark:text-slate-50">
        sprouted
      </h1>
      <div className="flex-grow"></div>
      <GoogleButton />
      <CoinbaseButton />
      <ToggleDarkMode />
    </div>
  );
}
