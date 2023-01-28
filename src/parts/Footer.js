import React from "react";
import Logo from "../assets/Logo";
import { colors } from "../assets/Colors";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex justify-center flex-col items-center gap-y-7 py-14 text-xs xl:text-2xl font-medium">
      <Logo color={colors.white} className="h-10 w-32" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
