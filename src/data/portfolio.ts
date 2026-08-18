import { asset } from "@/lib/site";

export const navigation = [
  { label: "Sobre", href: "#sobre" },
  { label: "Competências", href: "#competencias" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Certificados", href: "#certificados" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export const skillGroups = [
  {
    number: "01",
    title: "Front-end",
    description: "Interfaces web responsivas, acessíveis e orientadas à experiência do usuário.",
    skills: [
      { name: "HTML & CSS", level: 4 },
      { name: "JavaScript", level: 4 },
      { name: "jQuery", level: 5, highlighted: true },
      { name: "TypeScript", level: 3 },
      { name: "React", level: 3 },
      { name: "Vue.js", level: 3 },
      { name: "Next.js", level: 3 },
    ],
  },
  {
    number: "02",
    title: "Back-end",
    description: "APIs, integrações e aplicações que conectam regras de negócio a dados.",
    skills: [
      { name: "Node.js", level: 3 },
      { name: "PHP", level: 5, highlighted: true },
      { name: "Laravel", level: 5, highlighted: true },
      { name: "Java", level: 3 },
      { name: "Spring", level: 2 },
      { name: "Python", level: 5, highlighted: true },
      { name: "Django", level: 2 },
    ],
  },
  {
    number: "03",
    title: "Dados",
    description: "Análise, engenharia e visualização para transformar dados em decisões.",
    skills: [
      { name: "Python", level: 5, highlighted: true },
      { name: "SQL", level: 5, highlighted: true },
      { name: "Power BI", level: 3 },
      { name: "Airflow", level: 2 },
      { name: "Spark", level: 2 },
      { name: "Jupyter", level: 3 },
      { name: "Pentaho PDI", level: 2 },
    ],
  },
  {
    number: "04",
    title: "Engenharia",
    description: "Ferramentas e práticas para desenvolver, colaborar e entregar com qualidade.",
    skills: [
      { name: "Git", level: 4 },
      { name: "Docker", level: 3 },
      { name: "MySQL", level: 4 },
      { name: "APIs REST", level: 4 },
      { name: "Scrum", level: 3 },
      { name: "Deploy", level: 3 },
      { name: "Linux", level: 3 },
    ],
  },
];

export const education = [
  {
    period: "2015 — 2022",
    title: "Bacharelado em Ciência da Computação",
    organization: "Universidade Federal de Uberlândia — UFU",
    location: "Uberlândia, MG",
    logo: asset("/images/logos/ufu.png"),
    details: [
      "Monitoria em Programação Lógica",
      "Iniciação científica e TCC na área de dados",
      "Coautoria de artigo sobre classificação de séries temporais",
    ],
  },
  {
    period: "2011 — 2014",
    title: "Técnico em Informática integrado ao Ensino Médio",
    organization: "Instituto Federal da Bahia — IFBA",
    location: "Eunápolis, BA",
    logo: asset("/images/logos/ifba.png"),
    details: ["Primeiro contato com algoritmos, programação e fundamentos da computação"],
  },
];

export const experience = [
  {
    period: "2023 — atual",
    title: "Analista de Sistemas Júnior",
    organization: "Sicoob Credicom",
    location: "Belo Horizonte, MG",
    logo: asset("/images/logos/sicoob-credicom.png"),
    details: [
      "Desenvolvimento e manutenção de sistemas internos e externos",
      "Aplicações em PHP e Laravel com banco de dados MySQL",
      "Atualização, implantação e sustentação de soluções",
    ],
  },
  {
    period: "2017 — 2019",
    title: "Estágio em Desenvolvimento de Software",
    organization: "Neppo",
    location: "Uberlândia, MG",
    logo: asset("/images/logos/neppo.png"),
    details: [
      "Desenvolvimento full-stack em produtos internos",
      "PHP, AngularJS, Java, Spring e Vue.js",
      "ETL com Pentaho, MySQL, Git e metodologia Scrum",
    ],
  },
];

export const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    issuedAt: "27 de agosto de 2025",
    issuedAtIso: "2025-08-27",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  href: string;
  externalLinkLabel: string;
  challenge: string;
  solution: string;
  results: string[];
  gallery?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "analise-dados-brasil",
    title: "Análise da área de dados no Brasil",
    category: "Análise de dados",
    description: "Estudo sobre salários, tecnologias e atividades dos principais cargos de dados no Brasil.",
    image: asset("/images/projects/kaggle-state-of-data.png"),
    imageAlt: "Visualização do projeto Análise da área de dados no Brasil",
    tags: ["Python", "Kaggle", "Storytelling"],
    href: "https://www.kaggle.com/code/rafanthx13/analise-da-rea-de-dados-no-brasil/notebook",
    externalLinkLabel: "Ver notebook no Kaggle",
    challenge: "Entender o perfil da área de dados no Brasil, reunindo informações sobre cargos, salários, ferramentas e atividades mais frequentes.",
    solution: "Foi feita uma análise exploratória dos dados, com Python, para organizar as informações e transformá-las em gráficos e comparações fáceis de interpretar.",
    results: [
      "Comparação de faixas salariais entre os principais cargos de dados.",
      "Levantamento das tecnologias mais utilizadas por profissionais da área.",
      "Visualizações que facilitam a leitura dos dados e a identificação de tendências.",
    ],
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/rafanthx13", handle: "@rafanthx13" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rafael-m-de-assis/", handle: "rafael-m-de-assis" },
  { label: "Kaggle", href: "https://www.kaggle.com/rafanthx13", handle: "@rafanthx13" },
  { label: "E-mail", href: "mailto:rafaassis15@gmail.com", handle: "rafaassis15@gmail.com" },
];
