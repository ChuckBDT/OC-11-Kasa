import React from "react";

import Logo from "../assets/Logo";
import { colors } from "../assets/Colors";

import Menu from "./Menu";

const Header = () => {
  return (
    <header className="bg-white txt-color-primary flex justify-between items-center h-40 text-2xl">
      <Logo color={colors.primary} height={4.25} />
      <Menu />
    </header>
  );
};

export default Header;
