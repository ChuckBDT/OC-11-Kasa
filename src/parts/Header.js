import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo";
import { colors } from "../assets/Colors";

import Menu from "./Menu";

const Header = () => {
  //Todo: Colors txt-color-primary
  return (
    <header className="txt-color-primary flex justify-between items-center h-20 text-2xl px-5">
      <Link to="/">
        <Logo className="h-11 w-32" color={colors.primary} />
      </Link>

      <Menu />
    </header>
  );
};

export default Header;
