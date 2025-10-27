import type { Challenge } from "../types/content";

export const challenges: Challenge[] = [
  {
    id: "challenge-aula01-faixas-energia",
    title: "Classificador de Faixas de Energia",
    difficulty: "Fácil",
    description:
      "Receba uma lista de medições inteiras e retorne uma lista de rótulos (\"Baixa\", \"Normal\", \"Alta\") usando `switch` expression com padrões relacionais.",
    sampleInput: "[12, 55, 103]",
    sampleOutput: "[\"Baixa\", \"Normal\", \"Alta\"]",
    acceptanceCriteria: [
      "Mapear faixas: < 40 é Baixa, 40 a 99 é Normal, >= 100 é Alta",
      "Usar `switch` expression com padrões de comparação",
      "Retornar uma nova lista sem modificar a coleção original"
    ],
    hints: [
      "Crie um método auxiliar que converte uma leitura em rótulo.",
      "Valide entradas negativas retornando \"Baixa\" por padrão."
    ],
    topics: ["Fundamentos", "Fluxo"]
  },
  {
    id: "challenge-aula02-metricas-janela",
    title: "Médias Móveis com Span",
    difficulty: "Fácil",
    description:
      "Implemente uma função que calcula a média móvel de tamanho `k` sobre um array de `double` sem criar arrays temporários.",
    sampleInput: "valores = [4, 6, 8, 10], k = 2",
    sampleOutput: "[5, 7, 9]",
    acceptanceCriteria: [
      "Lançar `ArgumentException` quando `k` < 1 ou maior que o tamanho do array",
      "Usar `Span<double>` ou `ReadOnlySpan<double>` no processamento",
      "Retornar `IEnumerable<double>` com as médias na ordem correta"
    ],
    hints: [
      "Calcule a soma incremental removendo o elemento que sai da janela.",
      "Use `AsSpan()` para evitar cópias de memória."
    ],
    topics: ["Arrays", "Listas", "Complexidade"]
  },
  {
    id: "challenge-aula03-sinalizador-email",
    title: "Primeiro Caractere Único",
    difficulty: "Fácil",
    description:
      "Dado um texto, retorne o índice do primeiro caractere que aparece apenas uma vez ou -1 caso não exista.",
    sampleInput: "\"microsoft\"",
    sampleOutput: "0",
    acceptanceCriteria: [
      "Ignorar diferença entre maiúsculas e minúsculas",
      "Retornar -1 quando todas as ocorrências são repetidas",
      "Complexidade O(n) utilizando dicionário de frequências"
    ],
    hints: [
      "Normalize a string com `ToLowerInvariant()`.",
      "Percorra a string duas vezes: contagem e verificação."
    ],
    topics: ["Strings", "Dicionários"]
  },
  {
    id: "challenge-aula04-menor-substring",
    title: "Menor Substring Cobertura",
    difficulty: "Médio",
    description:
      "Encontre a menor substring de `s` que contenha todos os caracteres de `t` (com multiplicidade).",
    sampleInput: "s = \"ADOBECODEBANC\", t = \"ABC\"",
    sampleOutput: "\"BANC\"",
    acceptanceCriteria: [
      "Retornar string vazia quando não for possível",
      "Manter contagens corretas para caracteres repetidos",
      "Complexidade O(n) com sliding window"
    ],
    hints: [
      "Use dois ponteiros e um dicionário de frequências.",
      "Controle a quantidade de caracteres válidos dentro da janela."
    ],
    topics: ["Two Pointers", "Sliding Window"]
  },
  {
    id: "challenge-aula05-editor-undo",
    title: "Editor com Undo e Redo",
    difficulty: "Médio",
    description:
      "Construa um editor de texto simples que suporte comandos `TYPE`, `UNDO` e `REDO` preservando o histórico.",
    sampleInput: "TYPE a; TYPE b; UNDO; TYPE c; REDO",
    sampleOutput: "\"ac\"",
    acceptanceCriteria: [
      "`UNDO` desfaz a última operação TYPE ativa",
      "`REDO` reaplica a operação desfeita mais recente",
      "Limpar a pilha de redo quando um novo TYPE ocorrer"
    ],
    hints: [
      "Use duas pilhas: uma para ações aplicadas e outra para desfazer.",
      "Armazene apenas o caractere digitado para reduzir memória."
    ],
    topics: ["Pilhas", "Filas"]
  },
  {
    id: "challenge-aula06-rotas-bfs",
    title: "Menor Número de Voos",
    difficulty: "Médio",
    description:
      "Dado um mapa de conexões entre cidades, encontre o número mínimo de voos entre origem e destino usando BFS.",
    sampleInput: "rotas = [(\"GRU\", \"LHR\"), (\"GRU\", \"JFK\"), (\"JFK\", \"LHR\")], origem = GRU, destino = LHR",
    sampleOutput: "1",
    acceptanceCriteria: [
      "Retornar -1 quando não houver caminho",
      "Construir lista de adjacência a partir do input",
      "Retornar também o caminho reconstruído (lista de aeroportos)"
    ],
    hints: [
      "Rastreie predecessores durante o BFS para reconstruir o caminho.",
      "Use `Queue<string>` para percorrer os níveis."
    ],
    topics: ["Grafos", "BFS"]
  },
  {
    id: "challenge-aula07-planejador-cursos",
    title: "Planejador de Cursos",
    difficulty: "Médio",
    description:
      "Receba pares pré-requisito->curso e devolva uma ordem válida de estudo ou detecte ciclo.",
    sampleInput: "[[\"Algoritmos\", \"Estruturas\"], [\"Estruturas\", \"Grafos\"], [\"Grafos\", \"DP\"]]",
    sampleOutput: "[\"Algoritmos\", \"Estruturas\", \"Grafos\", \"DP\"]",
    acceptanceCriteria: [
      "Retornar lista vazia quando houver ciclo",
      "Usar ordenação topológica com Kahn ou DFS",
      "Aceitar múltiplos cursos sem dependências"
    ],
    hints: [
      "Um contador de graus de entrada ajuda a escolher nós sem dependências.",
      "DFS com pilha de recursão também identifica ciclos."
    ],
    topics: ["Topological Sort", "Bipartição"]
  },
  {
    id: "challenge-aula08-agenda-salas",
    title: "Agendamento de Salas com Heap",
    difficulty: "Médio",
    description:
      "Dada uma lista de reuniões com início e fim, calcule o número mínimo de salas necessárias.",
    sampleInput: "[(9:00, 10:00), (9:30, 11:00), (11:00, 12:00)]",
    sampleOutput: "2",
    acceptanceCriteria: [
      "Ordenar as reuniões por horário de início",
      "Usar min-heap para controlar horários de término",
      "Retornar contador máximo de salas simultâneas"
    ],
    hints: [
      "`PriorityQueue<int,int>` pode armazenar horários de saída.",
      "Remova da heap reuniões finalizadas antes da próxima começar."
    ],
    topics: ["Heaps", "Greedy"]
  },
  {
    id: "challenge-aula09-formas-memorizadas",
    title: "Contagem de Escadas",
    difficulty: "Médio",
    description:
      "Calcule quantas maneiras diferentes existem para subir `n` degraus podendo avançar 1 ou 2 por vez.",
    sampleInput: "n = 5",
    sampleOutput: "8",
    acceptanceCriteria: [
      "Usar recursão com memoização",
      "Retornar 1 quando n <= 1",
      "Evitar recomputar subproblemas repetidos"
    ],
    hints: [
      "Guarde resultados em `Dictionary<int,int>`.",
      "A relação é `f(n) = f(n-1) + f(n-2)`."
    ],
    topics: ["Programação Dinâmica", "Subproblemas"]
  },
  {
    id: "challenge-aula10-sequencia-comum",
    title: "Maior Subsequência Comum",
    difficulty: "Difícil",
    description:
      "Implemente o cálculo bottom-up do comprimento da maior subsequência comum entre duas strings.",
    sampleInput: "a = \"azure\", b = \"amarelo\"",
    sampleOutput: "3",
    acceptanceCriteria: [
      "Montar tabela (m+1)x(n+1) preenchida iterativamente",
      "Retornar também uma subsequência reconstruída",
      "Complexidade O(m*n) e memória otimizada para O(n) opcional"
    ],
    hints: [
      "Percorra as strings e use tabela com base em prefixos.",
      "Armazene decisões para recuperar a subsequência ao final."
    ],
    topics: ["Programação Dinâmica", "Tabulação"]
  },
  {
    id: "challenge-aula11-monitoramento-sql",
    title: "Dashboard de Pedidos",
    difficulty: "Médio",
    description:
      "Escreva uma consulta SQL que classifique clientes por volume mensal e gere alertas em C# quando ultrapassar limite.",
    sampleInput: "Pedidos(cliente, valor, data) + limite = 50000",
    sampleOutput: "Clientes ordenados com campo Alerta = true/false",
    acceptanceCriteria: [
      "Usar `SUM(valor)` e `OVER (PARTITION BY cliente, MONTH(data))`",
      "Gerar objeto DTO em C# com nível de alerta",
      "Registrar log estruturado quando alerta for true"
    ],
    hints: [
      "Combine SQL parametrizado com Dapper ou EF Core.",
      "Use logger assíncrono para registrar eventos críticos."
    ],
    topics: ["SQL", "Depuração", "Tratamento de Erros"]
  },
  {
    id: "challenge-aula12-circuit-breaker",
    title: "Simulador de Circuit Breaker",
    difficulty: "Difícil",
    description:
      "Modele um serviço que faz chamadas HTTP e aplica circuit breaker com estados Fechado, Aberto e Meio-Aberto.",
    sampleInput: "falhas consecutivas = 5, tempo de reset = 30s",
    sampleOutput: "Sequência de estados conforme respostas falham ou sucedem",
    acceptanceCriteria: [
      "Transicionar para Aberto após N falhas consecutivas",
      "Testar Meio-Aberto após tempo configurado",
      "Expor métricas de sucesso/falha e último estado"
    ],
    hints: [
      "Use `Timer` ou `Stopwatch` para controlar o período de reset.",
      "Registre eventos no logger para inspeção posterior."
    ],
    topics: ["DevOps", "Resiliência"]
  }
];
