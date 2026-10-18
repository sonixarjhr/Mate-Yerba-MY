import { redes } from "../data/redes";
import "./Redes.css";

export default function Redes() {
  return (
    <div className="redes">
      <div className="redes-fondo" aria-hidden="true" />

      <section className="redes-portada">
        <div className="redes-portada-contenido">
          <h1>Ponete en contacto con nuestras redes</h1>
          <p>Seguinos, escribinos o sumate a la ronda.</p>
        </div>

        <a href="#canales" className="redes-bajar" aria-label="Ir a nuestras redes">
          &darr;
        </a>
      </section>

      <section className="redes-canales" id="canales">
        <div className="redes-grilla">
          {redes.map((r) => (
            <a key={r.id} href={r.enlace} className={`banner banner-${r.tono}`}>
              <img className="banner-logo" src={r.logo} alt={`Logo de ${r.red}`} />
              <div className="banner-texto">
                <span className="banner-red">{r.red}</span>
                <h2>{r.nombre}</h2>
                <p className="banner-usuario">{r.usuario}</p>
                <p className="banner-desc">{r.descripcion}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}