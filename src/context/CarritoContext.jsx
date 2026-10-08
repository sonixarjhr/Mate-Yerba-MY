import { createContext, useContext, useEffect, useState } from "react";
import { yerbas } from "../data/yerbas";

const CarritoContext = createContext(null);

// Lee el carrito guardado en el navegador (si hay uno)
function leerGuardado() {
  try {
    const guardado = localStorage.getItem("carrito");
    return guardado ? JSON.parse(guardado) : [];
  } catch {
    return [];
  }
}

export function CarritoProvider({ children }) {
  // Solo guardamos id y cantidad; el resto sale del catálogo
  const [items, setItems] = useState(leerGuardado);

  useEffect(() => {
    try {
      localStorage.setItem("carrito", JSON.stringify(items));
    } catch {
      // si no se puede guardar, el carrito sigue funcionando en memoria
    }
  }, [items]);

  const agregar = (id) => {
    setItems((actual) => {
      const existe = actual.find((i) => i.id === id);
      if (existe) {
        return actual.map((i) =>
          i.id === id ? { ...i, cantidad: i.cantidad + 1 } : i
        );
      }
      return [...actual, { id, cantidad: 1 }];
    });
  };

  const restar = (id) => {
    setItems((actual) =>
      actual
        .map((i) => (i.id === id ? { ...i, cantidad: i.cantidad - 1 } : i))
        .filter((i) => i.cantidad > 0)
    );
  };

  const quitar = (id) => setItems((actual) => actual.filter((i) => i.id !== id));
  const vaciar = () => setItems([]);

  // Une cada id con los datos del catálogo (nombre, precio, peso)
  const lineas = items
    .map((i) => {
      const producto = yerbas.find((y) => y.id === i.id);
      return producto ? { ...producto, cantidad: i.cantidad } : null;
    })
    .filter(Boolean);

  const cantidadTotal = lineas.reduce((suma, l) => suma + l.cantidad, 0);
  const total = lineas.reduce((suma, l) => suma + l.precio * l.cantidad, 0);

  return (
    <CarritoContext.Provider
      value={{ items: lineas, agregar, restar, quitar, vaciar, cantidadTotal, total }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCarrito() {
  const contexto = useContext(CarritoContext);
  if (!contexto) {
    throw new Error("useCarrito debe usarse dentro de CarritoProvider");
  }
  return contexto;
}