import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rafaelmassis.com.br"),
  title: {
    default: "Rafael Assis | Sistemas, Software e Dados",
    template: "%s | Rafael Assis",
  },
  description: "Portfólio de Rafael Assis: analista de sistemas, desenvolvedor full-stack e profissional interessado em engenharia e ciência de dados.",
  openGraph: {
    title: "Rafael Assis | Sistemas, Software e Dados",
    description: "Conheça minha trajetória, competências e projetos em desenvolvimento de software e dados.",
    url: "https://rafaelmassis.com.br",
    siteName: "Rafael Assis",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
