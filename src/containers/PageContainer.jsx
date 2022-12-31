import React from "react";
import HeaderContainer from "./HeaderContainer";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function PageContainer({ children }) {
  const darkMode = useSelector(state => state.darkMode)
  return (
    <div className={darkMode.dark ? "dark bg-zinc-900 transition-all duration-700 ease-in-out" : ""}>
      <Router>
        <HeaderContainer />
        <div className=" max-w-6xl mx-auto ">
          <Routes>{children}</Routes>
        </div>
      </Router>
    </div>
  );
}

export default PageContainer;
