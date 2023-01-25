import "./App.css";
import Header from "./parts/Header";
import Footer from "./parts/Footer";

import { Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import APropos from "./views/APropos";
import ErrorPage from "./views/ErrorPage";

function App() {
  return (
    <div className="App h-screen flex flex-col">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="a-propos" element={<APropos />} />

        <Route path="/*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
