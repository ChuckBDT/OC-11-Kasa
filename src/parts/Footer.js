import React from "react";
import Logo from "../assets/Logo";
import { colors } from "../assets/Colors";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex justify-center flex-col items-center h-52 text-2xl">
      <Logo color={colors.white} height={2.5} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
