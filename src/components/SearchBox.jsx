import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SearchActions } from "../store/searchQuerySlice";

function SearchBox() {
  const [text, setText] = useState("");
  const navigator = useNavigate();
  const dispatch = useDispatch();

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;
    dispatch(SearchActions.changeQuery(text));
    // navigator(`/search?term=${text}`);
  }

  useEffect(() => {
    if (!text) {
      dispatch(SearchActions.changeQuery(""));
    }
  }, [text]);
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl my-4 mx-auto flex gap-4 justify-between items-center px-5"
    >
      <input
        type="text"
        onChange={handleChange}
        value={text}
        required={true}
        placeholder="search keywords..."
        className="w-full h-8 text-gray-500 placeholder-gray-500 bg-transparent border indent-2 dark:text-red-400 rounded-full flex-1 outline-none "
      />
      <button
        disabled={!text}
        className="disabled:bg-gray-400 bg-black dark:disabled:bg-gray-400 dark:bg-red-400 text-white px-4 rounded-full h-8"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
