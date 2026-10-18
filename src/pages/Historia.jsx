import { Link } from "react-router-dom";
import "./Historia.css";

function Hoja({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6 6 4 12 6 18c1 2 3 3 6 4 3-1 5-2 6-4 2-6 0-12-6-16z" />
      <path className="hist-vena" d="M12 6v15" />
    </svg>
  );
}

function Bloque({ titulo, children }) {
  return (
    <section className="historia-bloque">
      <h2>
        <Hoja className="hist-hoja hist-hoja-titulo" />
        {titulo}
      </h2>
      <p>{children}</p>
    </section>
  );
}

// Texto de ejemplo: reemplazalo por la historia real de tu marca
export default function Historia() {
  return (
    <div className="historia">
      <div className="historia-fondo" aria-hidden="true" />

      <main className="historia-capa">
        <div className="historia-contenido">
          <header className="historia-cabecera">
            <h1>Historia de nuestra yerba</h1>
            <p>Una ronda de mate que empezó hace mucho y todavía no terminó.</p>
            <div className="historia-divisor" aria-hidden="true">
              <span className="historia-madera" />
              <Hoja className="hist-hoja" />
              <Hoja className="hist-hoja hist-hoja-chica" />
              <span className="historia-madera" />
            </div>
          </header>

          <Bloque titulo="Todo empezó con una ronda">
            Antes de ser una marca, fuimos una mesa larga bajo un árbol, en una
            chacra del nordeste argentino. Ahí aprendimos que el mate no es solo
            una bebida: es la excusa para quedarse, para escuchar y para que
            nadie se sienta solo. Cada domingo el mate pasaba de mano en mano
            mientras se contaban las novedades de la semana.
          </Bloque>

          <Bloque titulo="De la tierra a tu mate">
            Cuando miramos de cerca cómo se hace la yerba, nos enamoramos del
            proceso: la cosecha cuidada, el secado paciente, el estacionamiento
            que le da su carácter. Nada de eso se apura. Trabajamos con
            productores que conocemos por su nombre y que comparten una idea
            simple: hacer las cosas bien, aunque lleve más tiempo.
          </Bloque>

          <blockquote className="historia-cita">
            <Hoja className="hist-hoja hist-hoja-cita" />
            Una buena yerba se hace con tiempo, con manos que saben y con ganas
            de compartirla.
          </blockquote>

          <Bloque titulo="Lo que nos mueve">
            Queremos que cada paquete llegue a tu casa con algo de ese lugar: el
            olor a campo después de la lluvia, la calma de una tarde frente al
            agua, la compañía de quienes importan. Por eso cuidamos el sabor,
            pero también el trato: acá no hay clientes anónimos, hay gente con
            quien nos gustaría compartir un mate.
          </Bloque>

          <footer className="historia-cierre">
            <p>Gracias por ser parte de esta ronda.</p>
            <Link to="/catalogo" className="btn-historia">
              Ver catálogo
            </Link>
          </footer>
        </div>
      </main>
    </div>
  );
}