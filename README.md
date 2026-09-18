# cerjo.dev

Portfólio pessoal e profissional de desenvolvimento de software de Sérgio Izaque.

**Produção:** https://cerjo.dev  
**Instagram:** https://www.instagram.com/cerjo.dev/  
**LinkedIn:** https://www.linkedin.com/in/sergioizaque/  
**GitHub:** https://github.com/krrozino

## Objetivo

O cerjo.dev funciona como apresentação profissional, portfólio de projetos e ponto de contato para novos trabalhos. A vitrine procura mostrar projetos demonstráveis e diferentes tipos de problema — não simplesmente espelhar todos os repositórios da conta.

## O que o site apresenta

- apresentação profissional
- serviços de desenvolvimento web
- trabalho entregue para cliente
- produtos web e mobile
- automação para Windows
- projetos acadêmicos e geoespaciais
- pesquisa em visão computacional
- experiências web interativas
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

### Trabalho real

#### Mães que Oram — Landing Page

Landing page desenvolvida para Rosangela Pereira com apresentação do projeto, redes sociais e vitrine de produtos digitais.

- HTML, CSS e JavaScript
- experiência responsiva
- deploy na Vercel
- repositório público

**Live:** https://landing-page-rosangela.vercel.app  
**Código:** https://github.com/krrozino/landing-page-rosangela

### Produtos e sistemas

#### Plataforma de Gestão para Academia

Projeto real web/mobile para gestão de alunos, prescrição de treinos e acompanhamento de musculação e Powerlifting.

- Next.js
- React Native / Expo
- Firebase / Firestore
- PWA offline-first
- registro de cargas e progressão
- sessões com múltiplos exercícios em andamento
- testes de domínio e Security Rules
- produção e homologação separadas

O repositório permanece privado.

#### NutriApp

Plataforma operacional de acompanhamento contínuo para nutricionistas, organizada em torno de pacientes, check-ins, jornada, planos de acompanhamento, evolução e fila de atenção.

- Next.js
- Expo
- Firebase Auth
- domínio compartilhado e testável
- contratos de IA multi-provedor
- quality gates e ambientes governados

O repositório permanece privado.

#### StageTrack

Sistema web para acompanhamento de estágios supervisionados obrigatórios.

- Next.js
- Supabase Auth
- PostgreSQL
- Row Level Security
- sessões SSR
- cadastro e acompanhamento do estágio
- registros de atividades
- revisão por orientador
- atribuição de orientadores pela coordenação

**Deploy:** https://stagetrack-ashy.vercel.app  
**Código:** https://github.com/krrozino/stagetrack

#### DevBoard

Produto de observabilidade de projetos de software que transforma atividade do GitHub em sinais de saúde, atenção e contexto acionável.

- Next.js
- PostgreSQL
- Drizzle ORM
- Vitest
- GitHub Actions
- regras de atenção explicáveis
- avaliação agendada de sinais dependentes de tempo

**Deploy:** https://devboard-phi-six.vercel.app  
**Código:** https://github.com/krrozino/devboard

#### WinLab Configurator

Gerador local-first de configurações PowerShell para Windows compartilhados em escolas, laboratórios, totens e pequenas empresas.

- presets por cenário
- políticas por usuário
- AppLocker AuditOnly/Enabled
- controle de Chrome/Edge
- USB granular
- inventário e manutenção
- rollback, auditoria e verificação
- CI em PowerShell 5.1 e PowerShell 7

**Código:** https://github.com/krrozino/winlab

### Pesquisa e experiências

#### Pádua FloodSim

Plataforma experimental para visualização de cenários de inundação do Rio Pomba em Santo Antônio de Pádua.

A V1 atual apresenta extensão oficial do Serviço Geológico do Brasil por cota entre 3,00 e 5,50 m, mantendo limites científicos explícitos e sem apresentar profundidade ou risco de bairro que ainda não foram calculados.

- Next.js
- TypeScript
- MapLibre GL
- GeoJSON
- dados oficiais do SGB
- metodologia e limitações documentadas

**Live:** https://padua-floodsim.vercel.app  
**Código:** https://github.com/krrozino/padua-floodsim

#### Sports Motion Analyzer

Projeto experimental em Python para análise de movimentos esportivos por visão computacional.

- MediaPipe Pose Landmarker
- OpenCV
- tracking experimental de barra
- gravações JSON
- análise offline
- relatórios de qualidade
- segmentação temporal do agachamento
- métricas biomecânicas genéricas

O repositório permanece privado.

#### Injorn Web

Site público e interativo do universo de Injorn, voltado exclusivamente ao conteúdo que jogadores podem conhecer.

- Next.js
- TypeScript
- experiência responsiva
- engine de cenas e hotspots
- identidade visual própria
- transições e efeitos ambientais contextuais
- separação rígida entre conteúdo público e conteúdo privado do mestre

**Live:** https://injorn-web-preview.vercel.app  
**Código:** https://github.com/krrozino/injorn-web

### Case conceitual

#### Vértice Performance

Landing page conceitual para academia premium, criada como case de UI/UX, responsividade e desenvolvimento front-end orientado à conversão.

- React
- TypeScript
- Vite
- design responsivo

**Live:** https://vertice-performance-alpha.vercel.app/  
**Código:** https://github.com/krrozino/vertice-performance

## Social preview

O card usado por WhatsApp, LinkedIn, Discord e outras plataformas utiliza uma arte própria em proporção Open Graph `1200×630`.

A URL pública permanece estável em:

```text
https://cerjo.dev/og-image.jpg
```

O `vercel.json` encaminha essa URL para `api/og.js`, que entrega os bytes JPEG da arte.

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

Em evolução contínua. A vitrine é atualizada quando projetos ganham uma versão suficientemente demonstrável ou quando mudanças relevantes alteram o que vale apresentar profissionalmente.
