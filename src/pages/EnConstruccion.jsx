export default function EnConstruccion({ titulo }) {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "96px 24px",
        background: "var(--negro-mate)",
        color: "var(--crema)",
      }}
    >
      <h1>{titulo}</h1>
      <p style={{ marginTop: 8, color: "#b9ad98" }}>Próximamente.</p>
    </main>
  );
}