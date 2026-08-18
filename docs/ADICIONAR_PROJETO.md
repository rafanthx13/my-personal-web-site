# Como adicionar um projeto

Cada projeto é definido em `src/data/portfolio.ts`, dentro da lista `projects`.

1. Adicione a imagem de capa em `public/images/projects/`.
2. Crie um novo objeto na lista, seguindo este modelo:

```ts
{
  slug: "nome-do-projeto",
  title: "Nome do projeto",
  category: "Desenvolvimento web",
  description: "Resumo curto que aparece no card.",
  image: asset("/images/projects/nome-do-projeto.png"),
  imageAlt: "Descrição objetiva da imagem",
  tags: ["PHP", "Laravel", "MySQL"],
  href: "https://github.com/usuario/repositorio",
  externalLinkLabel: "Ver repositório no GitHub",
  challenge: "Qual problema o projeto resolve?",
  solution: "Como ele foi construído e quais decisões foram tomadas?",
  results: ["Resultado ou aprendizado 1", "Resultado ou aprendizado 2"],
  gallery: [
    { src: asset("/images/projects/nome-do-projeto-tela-1.png"), alt: "Descrição da tela" },
  ],
}
```

O campo `gallery` é opcional. Assim que o objeto for adicionado, o card na página inicial, a página em `/projetos/nome-do-projeto/` e o sitemap serão gerados automaticamente.
