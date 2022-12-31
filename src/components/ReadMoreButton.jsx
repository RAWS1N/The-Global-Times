import React from "react";
import {useNavigate} from 'react-router-dom'

function ReadMoreButton() {
  // const Navigator = useNavigate()
  // function handleClick() {
  //   const queryString = Object.entries(article).map(([key, value]) => `${key}=${value}`).join("/");
  //   const url = `/article/${queryString}/`
  //   Navigator(url)

  // }
  return (
    <button className="bg-red-400 px-4 w-full py-2 rounded-b-lg    text-white">
      Read More
    </button>
  );
}

export default ReadMoreButton;
