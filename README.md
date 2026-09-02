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
- projetos públicos, projetos reais e pesquisa experimental
- tecnologias utilizadas
- processo de trabalho
- FAQ comercial
- layout responsivo
- SEO técnico básico com canonical
- metadados Open Graph e Twitter
- social preview 1200×630 com arte própria
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

Produto de observabilidade de projetos de software em desenvolvimento, com foco em transformar atividade do GitHub em sinais de saúde, atenção e contexto acionável.

- Next.js
- TypeScript
- PostgreSQL
- Drizzle ORM

### StageTrack

Sistema web para acompanhamento de estágios supervisionados, com autenticação, PostgreSQL/Supabase, RLS e evolução orientada por domínio.

- Next.js
- TypeScript
- Supabase
- PostgreSQL
- Row Level Security

### Plataforma de Gestão para Academia

Projeto real web/mobile para gestão de alunos, prescrição de treinos, registro de cargas e progressão de Powerlifting, incluindo suporte offline no aplicativo do aluno.

- Next.js
- React Native / Expo
- Firebase
- PWA
- testes automatizados

O repositório permanece privado.

### Plataforma de Nutrição & Performance

Produto real em desenvolvimento com painel profissional, aplicativo do paciente, domínio compartilhado e arquitetura preparada para integrações e recursos de IA.

- Next.js
- Expo
- TypeScript
- Firebase
- Vitest

O repositório permanece privado.

### Sports Motion Analyzer

Projeto experimental de visão computacional aplicada ao esporte. O módulo atual trabalha Powerlifting/Squat, análise offline, qualidade de captura, tracking de barra, segmentação temporal e métricas biomecânicas.

- Python
- MediaPipe
- OpenCV
- análise de dados
- biomecânica computacional

O repositório permanece privado.

O Pádua FloodSim está em fase inicial e será adicionado à vitrine quando possuir uma versão demonstrável.

## Social preview

O card usado por WhatsApp, LinkedIn, Discord e outras plataformas utiliza uma arte própria em proporção Open Graph `1200×630`.

A URL pública permanece estável em:

```text
https://cerjo.dev/og-image.jpg
```

O `vercel.json` encaminha essa URL para `api/og.js`, que entrega os bytes JPEG da arte. Assim, os metadados sociais continuam usando uma URL simples no domínio oficial sem depender de serviços externos de imagem.

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
├── og-image.jpg
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
