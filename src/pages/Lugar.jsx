import { Link } from "react-router-dom";
import "./Lugar.css";

function Hoja({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6 6 4 12 6 18c1 2 3 3 6 4 3-1 5-2 6-4 2-6 0-12-6-16z" />
      <path className="hoja-vena" d="M12 6v15" />
    </svg>
  );
}

function Bloque({ titulo, children }) {
  return (
    <article className="lugar-bloque">
      <div className="lugar-banner">
        <span className="lugar-hojas" aria-hidden="true">
          <Hoja className="hoja hoja-a" />
          <Hoja className="hoja hoja-b" />
        </span>
        <h2>{titulo}</h2>
        <span className="lugar-hojas-der" aria-hidden="true">
          <Hoja className="hoja hoja-c" />
          <Hoja className="hoja hoja-d" />
        </span>
      </div>
      <p>{children}</p>
    </article>
  );
}

// Textos de ejemplo: reemplazalos por la información real de tu marca
export default function Lugar() {
  return (
    <div className="lugar">
      <div className="lugar-fondo" aria-hidden="true" />

      <main className="lugar-capa">
        <div className="lugar-contenido">
          <header className="lugar-cabecera">
            <h1>Nuestro lugar</h1>
            <p>Dónde nace cada paquete de yerba.</p>
          </header>

          <Bloque titulo="Estamos en Corrientes">
            Somos de Corrientes y de acá no nos movemos.{" "}
            <strong>
              Estamos fabricando yerbas en San Miguel, Santa Rosa, Concepción,
              Corrientes.
            </strong>{" "}
            Vivimos en una provincia donde el mate es parte de la mesa de todos
            los días, donde suena el chamamé de fondo, la gente saluda por su
            nombre y siempre hay una pava lista sobre el fuego.
          </Bloque>

          <Bloque titulo="La tierra de don Aurelio">
            Todo esto es posible gracias a don Aurelio Benítez, dueño de unas
            cuantas hectáreas de monte y campo que decidió creer en nuestra
            marca. Un día nos dijo que la tierra estaba para trabajarla y
            compartirla, y nos abrió el portón: puso el terreno, el galpón y las
            primeras manos para empezar. A cambio solo pidió que la yerba se
            hiciera bien y que el lugar quedara mejor de como lo encontramos.
          </Bloque>

          <Bloque titulo="Qué se hace acá">
            Cada mañana empieza temprano, con la cosecha de las hojas en las
            plantaciones que rodean el galpón. Después viene el sapecado, un
            golpe rápido de fuego que corta la humedad; el secado, paciente y
            sin apuro; y la molienda, hasta llegar al punto justo. Por último,
            la yerba reposa para ganar sabor y se envasa a mano, para que cada
            paquete salga con la misma dedicación.
          </Bloque>

          <Bloque titulo="Las puertas están abiertas">
            Nos encantaría que vengas a conocer cómo trabajamos. Podés
            visitarnos en cualquiera de nuestros lugares: San Miguel, Santa Rosa
            o Concepción. Recorrés las plantaciones, ves el proceso de cerca y,
            si el día acompaña, cerramos con unos mates bajo la galería mientras
            cae el sol. Escribinos para coordinar la visita y te contamos cómo
            llegar.
          </Bloque>

          <footer className="lugar-cierre">
            <p>¿Querés conocer el lugar en persona?</p>
            <Link to="/redes" className="btn-lugar">
              Contactanos para visitarnos
            </Link>
          </footer>
        </div>
      </main>
    </div>
  );
}