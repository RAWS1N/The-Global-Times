import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";


function Header() {
  return (
    <header className="grid  grid-cols-3 items-center py-6 px-10">
      <Bars3Icon className="h-6 w-6 cursor-pointer dark:text-white" />
      <Link to="/">
        <h1 className="text-2xl dark:text-white uppercase font-serif underline decoration-2 decoration-blue-400 tracking-widest text-center ">
          the global times
        </h1>
      </Link>
      <div className="flex items-center justify-end space-x-2 gap-4">
        <DarkModeButton />
        <button className="hidden md:inline dark:bg-blue-400 rounded-full bg-gray-800 px-4 lg:px-8 lg:py-2 my-0 text-white">
          Subscribe now
        </button>
      </div>
    </header>
  );
}

export default Header;
