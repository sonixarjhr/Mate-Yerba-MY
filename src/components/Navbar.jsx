import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import "./Navbar.css";

const enlaces = [
  { to: "/", texto: "Inicio" },
  { to: "/catalogo", texto: "Catálogo" },
  { to: "/carrito", texto: "Carrito" },
  { to: "/historia", texto: "Historia de nuestra yerba" },
  { to: "/redes", texto: "Redes" },
  { to: "/lugar", texto: "Nuestro lugar" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const { cantidadTotal } = useCarrito();

  useEffect(() => {
    const cerrarConEsc = (e) => {
      if (e.key === "Escape") setAbierto(false);
    };
    window.addEventListener("keydown", cerrarConEsc);
    return () => window.removeEventListener("keydown", cerrarConEsc);
  }, []);

  return (
    <>
      <button
        className={`hamburguesa ${abierto ? "abierto" : ""}`}
        onClick={() => setAbierto(!abierto)}
        aria-label="Abrir o cerrar menú"
        aria-expanded={abierto}
      >
        <span />
        <span />
        <span />
      </button>

      <Link
        to="/carrito"
        className="carrito-flotante"
        aria-label={`Ver carrito (${cantidadTotal} productos)`}
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        {cantidadTotal > 0 && <span className="carrito-contador">{cantidadTotal}</span>}
      </Link>

      <div
        className={`fondo-menu ${abierto ? "visible" : ""}`}
        onClick={() => setAbierto(false)}
      />

      <nav className={`menu-lateral ${abierto ? "abierto" : ""}`}>
        <ul>
          {enlaces.map((e) => (
            <li key={e.to}>
              <NavLink to={e.to} end={e.to === "/"} onClick={() => setAbierto(false)}>
                {e.texto}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}