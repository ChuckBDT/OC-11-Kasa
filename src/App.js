import React from "react";

import "./App.css";
import Header from "./parts/Header";
import Footer from "./parts/Footer";

import KasaRoutes from "./router/Routes";

function App() {
  return (
    <React.Fragment>
      <Header />
      <KasaRoutes />
      <Footer />
    </React.Fragment>
  );
}

export default App;
