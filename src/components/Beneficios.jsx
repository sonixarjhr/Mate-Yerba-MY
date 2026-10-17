import { beneficios, cuidados } from "../data/beneficios";
import "./Beneficios.css";

function Tarjeta({ item, indice }) {
  return (
    <article className={`beneficio-tarjeta ${indice % 2 === 0 ? "marron" : "verde"}`}>
      <span className="beneficio-icono" aria-hidden="true">
        {item.icono}
      </span>
      <h3>{item.titulo}</h3>
      <p>{item.texto}</p>
    </article>
  );
}

export default function Beneficios() {
  return (
    <section className="beneficios" id="beneficios">
      <div className="beneficios-contenido">
        <header className="beneficios-cabecera">
          <h2>Beneficios de la yerba mate</h2>
          <p>Lo que aporta cada mate, explicado simple.</p>
        </header>

        <div className="beneficios-grilla">
          {beneficios.map((b, i) => (
            <Tarjeta key={b.id} item={b} indice={i} />
          ))}
        </div>

        <header className="beneficios-cabecera cuidados-cabecera">
          <h2>Cuidados a tener en cuenta</h2>
          <p>Disfrutarla mejor también es conocerla.</p>
        </header>

        <div className="beneficios-grilla">
          {cuidados.map((c, i) => (
            <Tarjeta key={c.id} item={c} indice={i} />
          ))}
        </div>

        <p className="beneficios-aviso">
          Información general y educativa. No reemplaza la consulta con un
          profesional de la salud.
        </p>
      </div>
    </section>
  );
}