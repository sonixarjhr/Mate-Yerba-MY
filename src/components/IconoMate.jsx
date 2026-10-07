import "./IconoMate.css";

export default function IconoMate() {
  return (
    <svg className="icono-mate" viewBox="0 0 120 140" role="img" aria-label="Mate con vapor">
      <path className="vapor v1" d="M45 40 C35 30, 55 22, 45 10" />
      <path className="vapor v2" d="M62 42 C52 30, 72 20, 62 6" />
      <path className="vapor v3" d="M79 40 C69 30, 89 22, 79 10" />
      <path className="calabaza" d="M25 55 C20 100, 35 130, 60 130 C85 130, 100 100, 95 55 Z" />
      <ellipse className="borde" cx="60" cy="55" rx="35" ry="9" />
      <ellipse className="yerba" cx="60" cy="55" rx="28" ry="6" />
      <line className="bombilla" x1="78" y1="54" x2="100" y2="22" />
    </svg>
  );
}