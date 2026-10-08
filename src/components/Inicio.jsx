import IconoMate from "./IconoMate";
import "./Inicio.css";

export default function Inicio() {
  return (
    <section className="inicio">
      <div className="inicio-contenido">
        <IconoMate />
        <h1>Mate Yerba MY</h1>
        <p>Yerba mate para compartir, de la tierra a tu mate.</p>
        <button className="btn-catalogo">Ver catálogo</button>
      </div>
    </section>
  );
}