import type { PlaygroundSnippet } from "../types/content";

export const playgroundSnippets: PlaygroundSnippet[] = [
  {
    id: "snippet-hello",
    title: "Entrada e saída básica",
    description: "Leia o nome do usuário e escreva uma mensagem de boas-vindas.",
    code: `using System;\n\nConsole.Write(\"Digite seu nome: \" );\nvar nome = Console.ReadLine();\n\nConsole.WriteLine($\"Olá, {nome}!\");`
  },
  {
    id: "snippet-linq",
    title: "Filtrando com LINQ",
    description: "Liste alunos aprovados usando expressão fluente.",
    code: `using System;\nusing System.Linq;\n\nvar alunos = new[]\n{\n    new { Nome = \"Ana\", Nota = 92 },\n    new { Nome = \"Bruno\", Nota = 78 },\n    new { Nome = \"Carla\", Nota = 88 }\n};\n\nvar aprovados = alunos\n    .Where(a => a.Nota >= 80)\n    .Select(a => a.Nome);\n\nforeach (var aluno in aprovados)\n{\n    Console.WriteLine(aluno);\n}`
  }
];
