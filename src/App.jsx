import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Catalogo from "./pages/Catalogo";
import Carrito from "./pages/Carrito";
import EnConstruccion from "./pages/EnConstruccion";

function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/historia" element={<EnConstruccion titulo="Historia de nuestra yerba" />} />
          <Route path="/redes" element={<EnConstruccion titulo="Nuestras redes" />} />
          <Route path="/lugar" element={<EnConstruccion titulo="Nuestro lugar" />} />
        </Routes>
      </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;