# CS Learning Hub

Portal interativo para acelerar o aprendizado de C# combinando lições teóricas, quizzes, desafios e um playground de código.

## 🚀 Stack
- React 18 + TypeScript
- Vite
- React Router DOM
- Monaco Editor (`@monaco-editor/react`)
- ESLint + TypeScript ESLint Rules

## 📦 Scripts
```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção
npm run preview  # pré-visualização do build
npm run lint     # análise estática
```

## 🗺️ Organização
- `src/data` — conteúdo base (lições, quizzes, desafios, snippets)
- `src/pages` — páginas que representam cada área do portal
- `src/components` — peças reutilizáveis (cards, listagens, barra superior, etc.)
- `src/routes` — definição central de rotas
- `src/styles` — folha de estilos global

## 🧑‍💻 Playground de Código
O editor usa o Monaco com tema escuro e auto layout. A execução do código é uma simulação: ao clicar em **Executar**, o app mostra dicas e passos sugeridos para validar o snippet em um ambiente .NET real (ex.: `dotnet-script` ou `try.dot.net`). Isso evita dependência de backend.

## ✅ Próximos Passos
1. `npm install`
2. `npm run dev`
3. Acessar `http://localhost:5173`

Sinta-se livre para adaptar o conteúdo às suas próprias anotações de estudo!
