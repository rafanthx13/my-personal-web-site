# Portfólio de Rafael Assis

Nova versão do site pessoal, construída com Next.js, TypeScript e exportação estática para o GitHub Pages.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Verificações

```bash
npm run lint
npm run build
```

O build estático é criado em `out/`.

## Site anterior

O código anterior está preservado em `legacy-site/` para consulta durante a migração. O arquivo `bkp-original.zip` é o backup fornecido antes do início da nova versão.

## Publicação

O workflow `.github/workflows/deploy-pages.yml` publica a pasta `out/` no GitHub Pages após um push para `main`. Nas configurações do repositório, a origem do GitHub Pages deve estar definida como **GitHub Actions**.
