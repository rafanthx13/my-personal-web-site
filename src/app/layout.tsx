import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rafaelmassis.com.br"),
  title: {
    default: "Rafael Assis",
    template: "%s | Rafael Assis",
  },
  description: "Site pessoal e portfólio de Rafael Assis.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

