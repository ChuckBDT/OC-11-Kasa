import "./App.css";
import Header from "./parts/Header";
import Footer from "./parts/Footer";

import KasaRoutes from "./router/Routes";

function App() {
  return (
    <div className="App h-screen flex flex-col">
      <Header />
      <KasaRoutes />

      <Footer />
    </div>
  );
}

export default App;
