import type { Lesson } from "../types/content";

const lessonFiles = import.meta.glob("../content/lessons/*.md", {
  eager: true,
  as: "raw"
}) as Record<string, string>;

type LessonMeta = {
  level: Lesson["level"];
  duration: string;
  topics: string[];
  summary?: string;
};

const lessonMeta: Record<string, LessonMeta> = {
  Aula01_M365: {
    level: "Iniciante",
    duration: "45 min",
    topics: ["Fundamentos", "Variáveis", "Fluxo"],
    summary: "Fundamentos do C#, variáveis, operadores e controle de fluxo com pensamento algorítmico."
  },
  Aula02_M365: {
    level: "Iniciante",
    duration: "50 min",
    topics: ["Arrays", "Listas", "Complexidade"],
    summary: "Diferenças entre arrays e listas, processamento de coleções e análise Big-O."
  },
  Aula03_M365: {
    level: "Iniciante",
    duration: "45 min",
    topics: ["Strings", "Dicionários", "Mapeamentos"],
    summary: "Manipulação de strings, uso de StringBuilder e contagem com dicionários."
  },
  Aula04_M365: {
    level: "Intermediário",
    duration: "50 min",
    topics: ["Two Pointers", "Sliding Window", "Substrings"],
    summary: "Resolução de problemas com dois ponteiros e janelas deslizantes para subarrays eficientes."
  },
  Aula05_M365: {
    level: "Intermediário",
    duration: "45 min",
    topics: ["Pilhas", "Filas", "Expressões"],
    summary: "Aplicações de pilhas e filas em validação de expressões e simulações."
  },
  Aula06_M365: {
    level: "Intermediário",
    duration: "55 min",
    topics: ["Grafos", "DFS", "BFS"],
    summary: "Representação de grafos, busca em profundidade e largura com casos práticos."
  },
  Aula07_M365: {
    level: "Intermediário",
    duration: "55 min",
    topics: ["Grafos", "Topological Sort", "Bipartição"],
    summary: "Ordenação topológica, detecção de ciclos e verificação de bipartição em grafos."
  },
  Aula08_M365: {
    level: "Intermediário",
    duration: "50 min",
    topics: ["Heaps", "Greedy", "Prioridades"],
    summary: "Estruturas de heap e estratégias gananciosas para alocação de recursos."
  },
  Aula09_M365: {
    level: "Avançado",
    duration: "55 min",
    topics: ["Programação Dinâmica", "Subproblemas"],
    summary: "Introdução à programação dinâmica com memorização e exemplos clássicos."
  },
  Aula10_M365: {
    level: "Avançado",
    duration: "60 min",
    topics: ["Programação Dinâmica", "Tabulação"],
    summary: "DP em grade, coin change e abordagem bottom-up para otimização."
  },
  Aula11_M365: {
    level: "Intermediário",
    duration: "50 min",
    topics: ["SQL", "Depuração", "Tratamento de Erros"],
    summary: "Consultas SQL, funções de janela e estratégias de debugging em C#."
  },
  Aula12_M365: {
    level: "Avançado",
    duration: "70 min",
    topics: ["DevOps", "Resiliência", "Simulado"],
    summary: "Boas práticas de DevOps, resiliência e simulado final multi-disciplinar."
  }
};

function extractTitle(content: string): string {
  const match = content.match(/^#\s+(.*)$/m);
  return match ? match[1].trim() : "Lição sem título";
}

function extractObjectives(content: string): string[] {
  const match = content.match(/##\s+🎯[^\n]*\n([\s\S]*?)(?:\n-{3,}|^##\s+)/m);
  if (!match) {
    return [];
  }

  return match[1]
    .split("\n")
    .map((line) => line.trim().replace(/^[-*]\s*/, ""))
    .filter((line) => line.length > 0);
}

function normaliseId(filename: string): { id: string; order: number } {
  const orderMatch = filename.match(/(\d{2})/);
  const order = orderMatch ? Number.parseInt(orderMatch[1], 10) : 0;
  const id = filename
    .replace(/\.md$/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return { id, order };
}

export const lessons: Lesson[] = Object.entries(lessonFiles)
  .map(([path, rawContent]) => {
    const fileName = path.split("/").pop() ?? "lesson";
    const key = fileName.replace(/\.md$/i, "");
    const { id, order } = normaliseId(fileName);
    const title = extractTitle(rawContent);
    const objectives = extractObjectives(rawContent);
    const meta = lessonMeta[key] ?? {
      level: "Intermediário",
      duration: "45 min",
      topics: []
    };

    const summary = meta.summary ?? objectives[0] ?? "Veja o conteúdo completo da lição.";

    return {
      id,
      order,
      title,
      level: meta.level,
      duration: meta.duration,
      summary,
      objectives,
      topics: meta.topics,
      content: rawContent.trim()
    } satisfies Lesson;
  })
  .sort((a, b) => a.order - b.order);
