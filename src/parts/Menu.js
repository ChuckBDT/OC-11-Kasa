import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="w-80 text-2xl flex text-end">
      <NavLink className=" block w-1/2" to="/">
        Accueil
      </NavLink>
      <NavLink className="block w-1/2" to="about">
        À propos
      </NavLink>
    </nav>
  );
};

export default Menu;
