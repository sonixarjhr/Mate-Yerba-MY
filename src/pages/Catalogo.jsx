import { yerbas } from "../data/yerbas";
import { useCarrito } from "../context/CarritoContext";
import "./Catalogo.css";

export default function Catalogo() {
  const { agregar } = useCarrito();

  return (
    <main className="catalogo">
      <header className="catalogo-cabecera">
        <h1>Nuestro catálogo</h1>
        <p>Elegí tu yerba y armá tu pedido.</p>
      </header>

      <section className="catalogo-grilla">
        {yerbas.map((y) => (
          <article className="tarjeta" key={y.id}>
            <div className="tarjeta-imagen">🧉</div>
            <div className="tarjeta-cuerpo">
              <h2>{y.nombre}</h2>
              <p className="tarjeta-desc">{y.descripcion}</p>
              <div className="tarjeta-pie">
                <span className="tarjeta-precio">${y.precio.toLocaleString("es-AR")}</span>
                <span className="tarjeta-peso">{y.peso}</span>
              </div>
              <button className="btn-agregar" onClick={() => agregar(y.id)}>
                Agregar al carrito
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}