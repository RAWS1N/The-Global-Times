import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { darkModeActions } from "../store/darkModeSlice";
import { useSelector,useDispatch } from "react-redux";

function DarkModeButton() {
  const darkMode = useSelector(state => state.darkMode)
  const dispatch = useDispatch()

  function toggleDarkMode(){
    dispatch(darkModeActions.toggleDarkMode())
  }
  
  return (
    <div>
      {darkMode.dark ? (
        <SunIcon className="h-8 w-8 cursor-pointer text-red-400"
        onClick={toggleDarkMode} />
      ) : (
        <MoonIcon className="h-8 w-8 cursor-pointer text-gray-900"
        onClick={toggleDarkMode} />
      )}
    </div>
  );
}

export default DarkModeButton;
