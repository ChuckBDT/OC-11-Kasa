import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import About from "../views/About";
import Rental from "../views/Rental";
import ErrorPage from "../views/ErrorPage";

function KasaRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/rentals/:id" element={<Rental />} />

      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default KasaRoutes;
