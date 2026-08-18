import { ImageResponse } from "next/og";

export const alt = "Rafael Assis — Sistemas, Software e Dados";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#07111f",
          color: "white",
          display: "flex",
          height: "100%",
          padding: "64px 80px",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ background: "#67e8d4", borderRadius: "999px", height: "420px", opacity: 0.12, position: "absolute", right: "-110px", top: "-150px", width: "420px" }} />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "850px" }}>
          <div style={{ alignItems: "center", color: "#67e8d4", display: "flex", fontSize: 24, fontWeight: 700, letterSpacing: 3 }}>
            <span style={{ alignItems: "center", background: "#67e8d4", borderRadius: "50%", color: "#07111f", display: "flex", fontSize: 22, height: 54, justifyContent: "center", letterSpacing: 0, marginRight: 18, width: 54 }}>RA</span>
            PORTFÓLIO PROFISSIONAL
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -3, lineHeight: 1.05, marginTop: 46 }}>Rafael Assis</div>
          <div style={{ color: "#cbd5e1", fontSize: 33, lineHeight: 1.35, marginTop: 24 }}>Sistemas, software e dados para transformar boas ideias em soluções.</div>
          <div style={{ color: "#67e8d4", display: "flex", fontSize: 23, fontWeight: 700, gap: 26, marginTop: 46 }}>
            <span>PHP</span><span>Laravel</span><span>SQL</span><span>Python</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
