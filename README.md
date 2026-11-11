# IA na Educação Básica: guia das Diretrizes do CNE

Site estático em [Astro](https://astro.build) + TypeScript.

## Comandos

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # checa tipos e gera dist/
npm run preview   # serve dist/ localmente
```

## Onde fica cada coisa

| Para mudar…                              | Edite                              |
| ---------------------------------------- | ---------------------------------- |
| Regras de “Pode ou não pode”             | `src/data/rules.ts`                |
| Diferenças minuta × homologado           | `src/data/diffs.ts`                |
| Concordância artigo por artigo           | `src/data/concordance.ts`          |
| Etapas, risco, currículo, deveres, termos, menu | `src/data/guide.ts`         |
| Mapa artigo → página dos PDFs            | `src/data/docs.ts`                 |
| PDFs de origem (nomes fixos)             | `public/pdfs/`                     |
| Layout e visual de cada seção            | `src/components/*.astro`           |
| Cores, fontes, tema escuro               | `src/styles/global.css`            |

As referências tipo `"Art. 40, §4º · Art. 41, IX"` viram links automaticamente no build
(`src/lib/refs.ts`): cada artigo abre a página correspondente do PDF.

## Deploy na Vercel

1. Em vercel.com/new, importe este repositório (a Vercel detecta Astro sozinha).
2. Cada push na `main` publica em produção; outras branches e PRs ganham URL de prévia.

## Versão antiga

`legacy/index.html` é a página original em um arquivo só, mantida para referência.
