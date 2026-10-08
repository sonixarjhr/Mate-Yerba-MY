import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const enlaces = [
  { to: "/", texto: "Inicio" },
  { to: "/catalogo", texto: "Catálogo" },
  { to: "/historia", texto: "Historia de nuestra yerba" },
  { to: "/redes", texto: "Redes" },
  { to: "/lugar", texto: "Nuestro lugar" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);

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