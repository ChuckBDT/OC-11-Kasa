import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="w-80 text-2xl flex text-end">
      <Link className=" block w-1/2" to="/">
        Accueil
      </Link>
      <Link className="block w-1/2" to="about">
        À propos
      </Link>
    </nav>
  );
};

export default Menu;
