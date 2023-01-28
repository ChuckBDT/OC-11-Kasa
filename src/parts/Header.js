import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo";
import { colors } from "../assets/Colors";

import Menu from "./Menu";

const Header = () => {
  return (
    <header className="txt-color-primary flex justify-between items-center h-20 xl:h-40 px-5 xl:px-24">
      <Link to="/">
        <Logo className="h-11 xl:h-16 w-32 xl:w-48" color={colors.primary} />
      </Link>

      <Menu />
    </header>
  );
};

export default Header;
