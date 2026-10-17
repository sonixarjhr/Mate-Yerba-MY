import { useNavigate } from "react-router-dom";
import IconoMate from "./IconoMate";
import Beneficios from "./Beneficios";
import "./Inicio.css";

export default function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="inicio">
      <div className="inicio-fondo" aria-hidden="true" />

      <section className="inicio-portada">
        <div className="inicio-contenido">
          <IconoMate />
          <h1>Mate Yerba MY</h1>
          <p>Yerba mate para compartir, de la tierra a tu mate.</p>
          <button className="btn-catalogo" onClick={() => navigate("/catalogo")}>
            Ver catálogo
          </button>
        </div>

        <a href="#beneficios" className="inicio-bajar">
          <span>Beneficios de la yerba mate</span>
          <span aria-hidden="true">&darr;</span>
        </a>
      </section>

      <Beneficios />
    </div>
  );
}