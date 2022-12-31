import React from "react";
import NavLink from "./NavLink";
import Categories from '../lib/Categories'
import { useDispatch, useSelector } from "react-redux";
import { CategoryActions } from "../store/categorySlice";

function NavLinks() {
  const {category:active} = useSelector(state => state.category)
  const dispatch = useDispatch()

  function toggle(){
    dispatch(CategoryActions.setCategory('all'))
  }
  
 
  return (
    <nav className="grid px-2 grid-cols-4 md:grid-cols-7 text-xs border-b border-gray-400 pb-10 md:text-sm gap-2 md:gap-4  max-w-6xl mx-auto">
      <button to={`/`} className={`navLink ${active === 'all' && 'bg-black dark:bg-blue-400  text-white'}`} onClick={toggle} >
        all
        </button>
      {Categories.map((category) => (
        <NavLink
          key={category}
          category={category}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
