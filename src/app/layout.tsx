import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://rafaelmassis.com.br";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rafael Assis",
  url: siteUrl,
  image: `${siteUrl}/images/rafael-assis.png`,
  jobTitle: "Analista de Sistemas Júnior",
  description: "Analista de sistemas e desenvolvedor full-stack com experiência em PHP, Laravel, SQL e Python.",
  sameAs: [
    "https://github.com/rafanthx13",
    "https://www.linkedin.com/in/rafael-m-de-assis/",
    "https://www.kaggle.com/rafanthx13",
  ],
  knowsAbout: ["PHP", "Laravel", "jQuery", "SQL", "Python", "Desenvolvimento de software", "Análise de dados"],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rafaelmassis.com.br"),
  title: {
    default: "Rafael Assis | Sistemas, Software e Dados",
    template: "%s | Rafael Assis",
  },
  description: "Portfólio de Rafael Assis: analista de sistemas, desenvolvedor full-stack e profissional interessado em engenharia e ciência de dados.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Rafael Assis | Sistemas, Software e Dados",
    description: "Conheça minha trajetória, competências e projetos em desenvolvimento de software e dados.",
    url: "https://rafaelmassis.com.br",
    siteName: "Rafael Assis",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rafael Assis — Sistemas, Software e Dados" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Assis | Sistemas, Software e Dados",
    description: "Portfólio de Rafael Assis, analista de sistemas e desenvolvedor full-stack.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
