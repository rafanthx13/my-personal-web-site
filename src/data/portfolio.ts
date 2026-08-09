import { asset } from "@/lib/site";

export const navigation = [
  { label: "Sobre", href: "#sobre" },
  { label: "Competências", href: "#competencias" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export const skillGroups = [
  {
    number: "01",
    title: "Front-end",
    description: "Interfaces web responsivas, acessíveis e orientadas à experiência do usuário.",
    skills: ["HTML & CSS", "JavaScript", "TypeScript", "React", "Vue.js", "Next.js"],
  },
  {
    number: "02",
    title: "Back-end",
    description: "APIs, integrações e aplicações que conectam regras de negócio a dados.",
    skills: ["Node.js", "PHP", "Laravel", "Java", "Spring", "Python", "Django"],
  },
  {
    number: "03",
    title: "Dados",
    description: "Análise, engenharia e visualização para transformar dados em decisões.",
    skills: ["Python", "SQL", "Power BI", "Airflow", "Spark", "Jupyter", "Pentaho PDI"],
  },
  {
    number: "04",
    title: "Engenharia",
    description: "Ferramentas e práticas para desenvolver, colaborar e entregar com qualidade.",
    skills: ["Git", "Docker", "MySQL", "APIs REST", "Scrum", "Deploy", "Linux"],
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

export const projects = [
  {
    title: "Análise da área de dados no Brasil",
    category: "Análise de dados",
    description: "Estudo sobre salários, tecnologias e atividades dos principais cargos de dados no Brasil.",
    image: asset("/images/projects/kaggle-state-of-data.png"),
    tags: ["Python", "Kaggle", "Storytelling"],
    href: "https://www.kaggle.com/code/rafanthx13/analise-da-rea-de-dados-no-brasil/notebook",
  },
  {
    title: "Human Analytics",
    category: "Engenharia de dados",
    description: "Stack de dados e machine learning para analisar a possível saída de colaboradores.",
    image: asset("/images/projects/human-analytics.png"),
    tags: ["Airflow", "Docker", "Machine Learning"],
    href: "https://github.com/rafanthx13/data-eng-project-human-analytics",
  },
  {
    title: "Portfólio de Data Science",
    category: "Data Science",
    description: "Coleção de estudos, experimentos, notebooks e soluções orientadas a dados.",
    image: asset("/images/projects/ds-portifolio.webp"),
    tags: ["Python", "Jupyter", "Machine Learning"],
    href: "https://github.com/rafanthx13/ds-portifolio",
  },
  {
    title: "Barkion",
    category: "Data Science",
    description: "Projeto de análise exploratória, visualização e aprendizado de máquina.",
    image: asset("/images/projects/barkion.webp"),
    tags: ["Python", "EDA", "DataViz"],
    href: "https://github.com/rafanthx13/barkion",
  },
  {
    title: "DataEng Video Recommender",
    category: "Engenharia de dados",
    description: "Aplicação e pipeline para coleta, processamento e recomendação de vídeos.",
    image: asset("/images/projects/data-eng-video-recomender.png"),
    tags: ["Python", "Pipeline", "Recomendação"],
    href: "https://github.com/rafanthx13/data-eng-youtube-recomender",
  },
  {
    title: "Git Collection",
    category: "Desenvolvimento web",
    description: "Aplicação web para pesquisar e consultar informações de repositórios GitHub.",
    image: asset("/images/projects/git-collection.png"),
    tags: ["React", "TypeScript", "API"],
    href: "https://github.com/rafanthx13/react-type-git-collection",
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/rafanthx13", handle: "@rafanthx13" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rafael-m-de-assis/", handle: "rafael-m-de-assis" },
  { label: "Kaggle", href: "https://www.kaggle.com/rafanthx13", handle: "@rafanthx13" },
  { label: "E-mail", href: "mailto:rafaassis15@gmail.com", handle: "rafaassis15@gmail.com" },
];
