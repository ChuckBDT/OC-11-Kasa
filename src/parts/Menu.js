import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="w-40 xl:w-96 text-xs xl:text-2xl font-medium flex text-end">
      <NavLink className="block w-1/2" to="/">
        ACCUEIL
      </NavLink>
      <NavLink className="block w-1/2" to="about">
        À PROPOS
      </NavLink>
    </nav>
  );
};

export default Menu;
