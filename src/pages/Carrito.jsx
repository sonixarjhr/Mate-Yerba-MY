import { Link } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import "./Carrito.css";

const formato = (n) => `$${n.toLocaleString("es-AR")}`;

export default function Carrito() {
  const { items, agregar, restar, quitar, vaciar, cantidadTotal, total } = useCarrito();

  if (items.length === 0) {
    return (
      <main className="carrito">
        <div className="carrito-vacio">
          <h1>Tu carrito está vacío</h1>
          <p>Todavía no agregaste ninguna yerba.</p>
          <Link to="/catalogo" className="btn-volver">
            Ver catálogo
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="carrito">
      <h1>Tu carrito</h1>

      <div className="carrito-contenido">
        <ul className="carrito-lista">
          {items.map((i) => (
            <li className="carrito-item" key={i.id}>
              <div className="carrito-info">
                <h2>{i.nombre}</h2>
                <p>
                  {i.peso} · {formato(i.precio)} c/u
                </p>
              </div>

              <div className="carrito-cantidad">
                <button onClick={() => restar(i.id)} aria-label="Quitar una unidad">
                  −
                </button>
                <span>{i.cantidad}</span>
                <button onClick={() => agregar(i.id)} aria-label="Agregar una unidad">
                  +
                </button>
              </div>

              <p className="carrito-subtotal">{formato(i.precio * i.cantidad)}</p>

              <button
                className="carrito-quitar"
                onClick={() => quitar(i.id)}
                aria-label={`Quitar ${i.nombre} del carrito`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        <aside className="carrito-resumen">
          <h2>Resumen</h2>
          <div className="resumen-fila">
            <span>Productos</span>
            <span>{cantidadTotal}</span>
          </div>
          <div className="resumen-fila resumen-total">
            <span>Total</span>
            <span>{formato(total)}</span>
          </div>
          <button className="btn-vaciar" onClick={vaciar}>
            Vaciar carrito
          </button>
          <Link to="/catalogo" className="btn-seguir">
            Seguir comprando
          </Link>
        </aside>
      </div>
    </main>
  );
}