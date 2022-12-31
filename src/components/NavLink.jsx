import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CategoryActions } from "../store/categorySlice";

function NavLink({ category }) {
  const dispatch = useDispatch()
  const {category:active} = useSelector(state => state.category)
  function toggleCategory(){
    dispatch(CategoryActions.setCategory(category))
  }

  return (
    <button to={`/`} className={`navLink ${active === category && 'bg-black dark:bg-blue-400  text-white'}`} onClick={toggleCategory} >
        {category}
        </button>
  );
}

export default NavLink;
