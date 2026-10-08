import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Catalogo from "./pages/Catalogo";
import EnConstruccion from "./pages/EnConstruccion";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/historia" element={<EnConstruccion titulo="Historia de nuestra yerba" />} />
        <Route path="/redes" element={<EnConstruccion titulo="Nuestras redes" />} />
        <Route path="/lugar" element={<EnConstruccion titulo="Nuestro lugar" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;