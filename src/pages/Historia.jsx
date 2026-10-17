import { Link } from "react-router-dom";
import "./Historia.css";

// Texto de ejemplo: reemplazalo por la historia real de tu marca
export default function Historia() {
  return (
    <main className="historia">
      <div className="historia-contenido">
        <header className="historia-cabecera">
          <h1>Historia de nuestra yerba</h1>
          <p>Una ronda de mate que empezó hace mucho y todavía no terminó.</p>
        </header>

        <section className="historia-bloque">
          <h2>Todo empezó con una ronda</h2>
          <p>
            Antes de ser una marca, fuimos una mesa larga bajo un árbol, en una
            chacra del nordeste argentino. Ahí aprendimos que el mate no es solo
            una bebida: es la excusa para quedarse, para escuchar y para que
            nadie se sienta solo. Cada domingo el mate pasaba de mano en mano
            mientras se contaban las novedades de la semana.
          </p>
        </section>

        <section className="historia-bloque">
          <h2>De la tierra a tu mate</h2>
          <p>
            Cuando miramos de cerca cómo se hace la yerba, nos enamoramos del
            proceso: la cosecha cuidada, el secado paciente, el estacionamiento
            que le da su carácter. Nada de eso se apura. Trabajamos con
            productores que conocemos por su nombre y que comparten una idea
            simple: hacer las cosas bien, aunque lleve más tiempo.
          </p>
        </section>

        <blockquote className="historia-cita">
          Una buena yerba se hace con tiempo, con manos que saben y con ganas
          de compartirla.
        </blockquote>

        <section className="historia-bloque">
          <h2>Lo que nos mueve</h2>
          <p>
            Queremos que cada paquete llegue a tu casa con algo de ese lugar: el
            olor a campo después de la lluvia, la calma de una tarde frente al
            agua, la compañía de quienes importan. Por eso cuidamos el sabor,
            pero también el trato: acá no hay clientes anónimos, hay gente con
            quien nos gustaría compartir un mate.
          </p>
        </section>

        <footer className="historia-cierre">
          <p>Gracias por ser parte de esta ronda.</p>
          <Link to="/catalogo" className="btn-historia">
            Ver catálogo
          </Link>
        </footer>
      </div>
    </main>
  );
}