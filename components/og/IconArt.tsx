// Icône C4 dessinée en blocs pour `next/og` (qui ne rend pas les <svg> <text>).
// `s` = taille en pixels du côté de l'icône.
export function IconArt({ s, radius = 0 }: { s: number; radius?: number }) {
  const u = s / 100;
  return (
    <div
      style={{
        width: s,
        height: s,
        position: "relative",
        display: "flex",
        background: "#2A2622",
        borderRadius: radius,
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", left: 0, top: 0, width: s, height: 30 * u, background: "#1D1A16" }} />
      <div
        style={{
          position: "absolute",
          left: 62 * u,
          top: 10 * u,
          width: 22 * u,
          height: 12 * u,
          borderRadius: 3 * u,
          background: "#0B0A09",
          border: `${1.2 * u}px solid #4A443B`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 17 * u,
          top: 11 * u,
          width: 10 * u,
          height: 10 * u,
          borderRadius: 999,
          background: "#E4572E",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 17 * u,
          top: 40 * u,
          width: 66 * u,
          height: 40 * u,
          borderRadius: 10 * u,
          background: "#0B0A09",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F2A07F",
          fontSize: 28 * u,
          fontWeight: 700,
          fontFamily: "monospace",
        }}
      >
        27
      </div>
    </div>
  );
}
