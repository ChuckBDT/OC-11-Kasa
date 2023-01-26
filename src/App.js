import "./App.css";
import Header from "./parts/Header";
import Footer from "./parts/Footer";

import { Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import APropos from "./views/About";
import ErrorPage from "./views/ErrorPage";

function App() {
  return (
    <div className="App h-screen flex flex-col">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<APropos />} />
        <Route path="/rentals/:id" element={<Home />} />

        <Route path="/*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
