import "./IconoMate.css";

export default function IconoMate() {
  return (
    <div className="icono-mate">
      <img className="icono-mate-img" src="/mate-icono.webp" alt="Mate con bombilla" />
      <svg className="icono-vapor" viewBox="0 0 60 80" aria-hidden="true">
        <path className="vapor v1" d="M12 78 C2 62, 22 50, 12 32 C8 22, 16 12, 12 2" />
        <path className="vapor v2" d="M30 78 C20 62, 40 50, 30 32 C26 22, 34 12, 30 2" />
        <path className="vapor v3" d="M48 78 C38 62, 58 50, 48 32 C44 22, 52 12, 48 2" />
      </svg>
    </div>
  );
}