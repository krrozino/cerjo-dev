# cerjo.dev

Portfólio pessoal e profissional de desenvolvimento web de Sérgio Izaque.

**Produção:** https://cerjo.dev  
**Instagram:** https://www.instagram.com/cerjo.dev/  
**GitHub:** https://github.com/krrozino

## Objetivo

O cerjo.dev funciona como apresentação profissional, portfólio de projetos e ponto de contato para novos trabalhos.

## O que o site apresenta

- apresentação profissional
- serviços de desenvolvimento web
- projetos e produtos em desenvolvimento
- tecnologias utilizadas
- processo de trabalho
- FAQ comercial
- layout responsivo
- SEO técnico básico com canonical
- metadados Open Graph e Twitter
- social preview 1200×630 gerado com `@vercel/og`
- dados estruturados com Schema.org
- sitemap e robots.txt
- favicon e web manifest
- acessibilidade básica e suporte a `prefers-reduced-motion`
- integração com Vercel Web Analytics

## Projetos apresentados

### Vértice Performance

Landing page conceitual para academia, criada como case de UI/UX e desenvolvimento front-end.

- React
- TypeScript
- Vite
- design responsivo

### DevBoard

Produto de observabilidade de projetos de software em desenvolvimento, com foco em transformar atividade do GitHub em sinais de saúde e atenção.

- Next.js
- TypeScript
- PostgreSQL
- Drizzle ORM

## Social preview

O card usado por WhatsApp, LinkedIn, Discord e outras plataformas é gerado pela função `api/og.js` com `@vercel/og` em 1200×630.

A URL pública permanece estável em:

```text
https://cerjo.dev/og-image.jpg
```

O `vercel.json` reescreve essa rota para a função de geração do card, permitindo atualizar a identidade visual por código sem versionar um arquivo binário pesado.

## Deploy

O projeto está conectado ao repositório `krrozino/cerjo-dev` na Vercel.

A branch de produção é:

```text
main
```

Fluxo atual:

```text
GitHub main
    ↓
Vercel
    ↓
cerjo.dev
```

Alterações enviadas para `main` geram deploy automático de produção.

## Estrutura

```text
.
├── api/
│   └── og.js
├── index.html
├── favicon.svg
├── site.webmanifest
├── robots.txt
├── sitemap.xml
├── package.json
├── vercel.json
└── README.md
```

## Status

Em evolução contínua. Novos cases, melhorias de SEO, performance e conteúdo são adicionados conforme o portfólio cresce.
