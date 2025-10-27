import type { Quiz } from "../types/content";

export const quizzes: Quiz[] = [
  {
    id: "quiz-aula01",
    title: "Aula 01 • Fundamentos e Fluxo",
    description: "Revise tipos, operadores e estruturas de controle em C#.",
    topic: "Fundamentos",
    duration: "12 min",
    questions: [
      {
        id: "aula01-q1",
        question: "Qual palavra-chave define uma constante avaliada em tempo de compilação?",
        options: [
          { label: "const", value: "const" },
          { label: "readonly", value: "readonly" },
          { label: "static", value: "static" },
          { label: "var", value: "var" }
        ],
        answer: "const",
        explanation: "Use `const` para valores imutáveis conhecidos em tempo de compilação; `readonly` é avaliado em tempo de execução."
      },
      {
        id: "aula01-q2",
        question: "Qual chamada converte com segurança uma `string` em `int` sem lançar exceção?",
        options: [
          { label: "int.Parse(valor)", value: "int.Parse" },
          { label: "Convert.ToInt32(valor)", value: "Convert" },
          { label: "int.TryParse(valor, out var numero)", value: "int.TryParse" },
          { label: "(int)valor", value: "cast" }
        ],
        answer: "int.TryParse",
        explanation: "`int.TryParse` devolve `false` em vez de lançar exceção, permitindo fluxo de controle seguro."
      },
      {
        id: "aula01-q3",
        question: "Qual expressão condicional é mais legível para retornar rótulos com base em faixas numéricas?",
        options: [
          { label: "Operador ternário aninhado", value: "ternary" },
          { label: "`switch` expression com padrões relacionais", value: "switch" },
          { label: "`if` encadeado", value: "if" },
          { label: "`goto`", value: "goto" }
        ],
        answer: "switch",
        explanation: "O `switch` expression moderno permite padrões como `>=` e `<` produzindo código declarativo e fácil de testar."
      }
    ]
  },
  {
    id: "quiz-aula02",
    title: "Aula 02 • Arrays e Listas",
    description: "Compare coleções lineares e complexidade de operações básicas.",
    topic: "Coleções",
    duration: "12 min",
    questions: [
      {
        id: "aula02-q1",
        question: "Quando uma `List<T>` deve ser preferida a um array?",
        options: [
          { label: "Quando o tamanho varia em tempo de execução", value: "dinamico" },
          { label: "Quando os dados são somente leitura", value: "readonly" },
          { label: "Quando preciso de acesso indexado O(1)", value: "indexado" },
          { label: "Quando os dados são em blocos fixos", value: "fixo" }
        ],
        answer: "dinamico",
        explanation: "`List<T>` cresce dinamicamente e evita realocações manuais para tamanhos variáveis."
      },
      {
        id: "aula02-q2",
        question: "Qual é a complexidade amortizada de `List<T>.Add` em .NET?",
        options: [
          { label: "O(1)", value: "O(1)" },
          { label: "O(log n)", value: "O(log n)" },
          { label: "O(n)", value: "O(n)" },
          { label: "O(n log n)", value: "O(n log n)" }
        ],
        answer: "O(1)",
        explanation: "Inserções são O(1) amortizado; realocações ocasionais distribuem o custo ao longo das inserções."
      },
      {
        id: "aula02-q3",
        question: "Qual estrutura reduz custo de cópias ao percorrer fatias de um array grande?",
        options: [
          { label: "`Span<T>`", value: "span" },
          { label: "`Queue<T>`", value: "queue" },
          { label: "`LinkedList<T>`", value: "linked" },
          { label: "`HashSet<T>`", value: "hashset" }
        ],
        answer: "span",
        explanation: "`Span<T>` cria uma janela sobre o array sem alocar novas estruturas, ideal para análises de desempenho."
      }
    ]
  },
  {
    id: "quiz-aula03",
    title: "Aula 03 • Strings e Dicionários",
    description: "Teste manipulação eficiente de texto e contagem baseada em mapas.",
    topic: "Strings",
    duration: "12 min",
    questions: [
      {
        id: "aula03-q1",
        question: "Qual classe reduz alocações ao concatenar em um laço?",
        options: [
          { label: "`StringBuilder`", value: "StringBuilder" },
          { label: "`string.Concat`", value: "Concat" },
          { label: "Interpolação de string", value: "Interpolacao" },
          { label: "`string.Join`", value: "Join" }
        ],
        answer: "StringBuilder",
        explanation: "`StringBuilder` reutiliza buffers internos e minimiza cópias, ideal para cenários iterativos."
      },
      {
        id: "aula03-q2",
        question: "Qual abordagem encontra a primeira ocorrência de um caractere que não se repete?",
        options: [
          { label: "Varredura única com `Dictionary<char,int>`", value: "dic" },
          { label: "Ordenar a string e percorrer", value: "sort" },
          { label: "Converter para `HashSet<char>`", value: "hashset" },
          { label: "Usar `Regex`", value: "regex" }
        ],
        answer: "dic",
        explanation: "Contar frequências em um dicionário e percorrer novamente preserva a ordem original."
      },
      {
        id: "aula03-q3",
        question: "Qual método normaliza comparações evitando diferenças de cultura?",
        options: [
          { label: "`string.Equals` com `StringComparison.OrdinalIgnoreCase`", value: "equals" },
          { label: "`ToLower()`", value: "tolower" },
          { label: "`CompareInfo.Compare`", value: "compare" },
          { label: "`ReferenceEquals`", value: "reference" }
        ],
        answer: "equals",
        explanation: "`StringComparison.OrdinalIgnoreCase` garante comportamento consistente independente de cultura."
      }
    ]
  },
  {
    id: "quiz-aula04",
    title: "Aula 04 • Two Pointers e Sliding Window",
    description: "Aplique técnicas de ponteiros duplos em problemas de substring e subarray.",
    topic: "Two Pointers",
    duration: "15 min",
    questions: [
      {
        id: "aula04-q1",
        question: "Quando preferir dois ponteiros em vez de uma busca dupla O(n²)?",
        options: [
          { label: "Quando o array está ordenado", value: "ordenado" },
          { label: "Quando a entrada é aleatória", value: "random" },
          { label: "Quando há hashing disponível", value: "hashing" },
          { label: "Quando uso recursão", value: "recursao" }
        ],
        answer: "ordenado",
        explanation: "Arrays ordenados permitem mover ponteiros extremos para aproximar o alvo em O(n)."
      },
      {
        id: "aula04-q2",
        question: "Qual estrutura acompanha frequências em uma janela deslizante de caracteres?",
        options: [
          { label: "`Dictionary<char,int>`", value: "dictionary" },
          { label: "`Stack<char>`", value: "stack" },
          { label: "`PriorityQueue<char,int>`", value: "priority" },
          { label: "`Queue<char>`", value: "queue" }
        ],
        answer: "dictionary",
        explanation: "Dicionários permitem atualizar contagens conforme a janela expande ou contrai."
      },
      {
        id: "aula04-q3",
        question: "Qual condição encerra o movimento do ponteiro esquerdo ao buscar a menor janela válida?",
        options: [
          { label: "Quando a contagem mínima é violada", value: "violada" },
          { label: "Quando a janela alcança o fim", value: "fim" },
          { label: "Quando o alvo é negativo", value: "negativo" },
          { label: "Quando o ponteiro direito moveu duas posições", value: "duas" }
        ],
        answer: "violada",
        explanation: "Reduzir a janela até quebrar a condição mantém a solução mínima e correta."
      }
    ]
  },
  {
    id: "quiz-aula05",
    title: "Aula 05 • Pilhas e Filas",
    description: "Domine fluxos FIFO e LIFO em problemas inspirados em editores e simulações.",
    topic: "Estruturas Lineares",
    duration: "12 min",
    questions: [
      {
        id: "aula05-q1",
        question: "Qual situação modela melhor uma `Queue<T>`?",
        options: [
          { label: "Compilar parênteses balanceados", value: "parenteses" },
          { label: "Processar requisições em ordem de chegada", value: "fifo" },
          { label: "Implementar desfazer/refazer", value: "undo" },
          { label: "Percorrer profundidade", value: "dfs" }
        ],
        answer: "fifo",
        explanation: "Filas preservam ordem de chegada, crucial em simulações de atendimento e BFS."
      },
      {
        id: "aula05-q2",
        question: "Qual é a complexidade de `Push` e `Pop` em `Stack<T>`?",
        options: [
          { label: "O(1)", value: "O(1)" },
          { label: "O(log n)", value: "O(log n)" },
          { label: "O(n)", value: "O(n)" },
          { label: "O(n log n)", value: "O(n log n)" }
        ],
        answer: "O(1)",
        explanation: "Pilhas são implementadas sobre arrays dinâmicos e oferecem operações O(1) amortizadas."
      },
      {
        id: "aula05-q3",
        question: "Qual técnica detecta pares válidos em uma expressão matemática?",
        options: [
          { label: "Empilhar aberturas e verificar ao fechar", value: "stack" },
          { label: "Ordenar os caracteres", value: "ordenar" },
          { label: "Contar caracteres total", value: "contagem" },
          { label: "Usar recursão profunda", value: "recursao" }
        ],
        answer: "stack",
        explanation: "Padrões de validação de parênteses se resolvem empilhando aberturas e conferindo pares ao fechar."
      }
    ]
  },
  {
    id: "quiz-aula06",
    title: "Aula 06 • Grafos e Buscas",
    description: "Reforce percursos BFS/DFS e modelagem de adjacência.",
    topic: "Grafos",
    duration: "15 min",
    questions: [
      {
        id: "aula06-q1",
        question: "Qual representação é mais eficiente para grafos esparsos?",
        options: [
          { label: "Matriz de adjacência", value: "matriz" },
          { label: "Lista de adjacência", value: "lista" },
          { label: "Matriz de incidência", value: "incidencia" },
          { label: "Lista ordenada de arestas", value: "arestas" }
        ],
        answer: "lista",
        explanation: "Listas de adjacência evitam armazenar zeros e reduzem memória em grafos esparsos."
      },
      {
        id: "aula06-q2",
        question: "Qual busca encontra o caminho mais curto em grafos não ponderados?",
        options: [
          { label: "DFS", value: "dfs" },
          { label: "BFS", value: "bfs" },
          { label: "Dijkstra", value: "dijkstra" },
          { label: "Bellman-Ford", value: "bellman" }
        ],
        answer: "bfs",
        explanation: "BFS visita níveis em ordem, garantindo o menor número de arestas até o destino."
      },
      {
        id: "aula06-q3",
        question: "Qual estratégia evita loops infinitos em DFS?",
        options: [
          { label: "Marcador de visitados", value: "visitados" },
          { label: "Reiniciar a pilha", value: "reset" },
          { label: "Usar fila", value: "fila" },
          { label: "Remover arestas duplicadas", value: "duplicadas" }
        ],
        answer: "visitados",
        explanation: "Controlar nós visitados impede revisitar ciclos e garante término."
      }
    ]
  },
  {
    id: "quiz-aula07",
    title: "Aula 07 • Ordenação Topológica e Bipartição",
    description: "Verifique dependências direcionais e cores alternadas em grafos.",
    topic: "Grafos Avançados",
    duration: "15 min",
    questions: [
      {
        id: "aula07-q1",
        question: "Qual condição torna impossível uma ordenação topológica?",
        options: [
          { label: "Grafo com ciclo dirigido", value: "ciclo" },
          { label: "Grafo disconexo", value: "disconexo" },
          { label: "Grafo com pesos", value: "pesos" },
          { label: "Grafo bipartido", value: "bipartido" }
        ],
        answer: "ciclo",
        explanation: "Ciclos dirigidos criam dependências circulares que impedem uma ordem linear."
      },
      {
        id: "aula07-q2",
        question: "Qual algoritmo detecta ciclo em grafo direcionado durante ordenação topológica?",
        options: [
          { label: "Kahn com contagem de graus", value: "kahn" },
          { label: "Prim", value: "prim" },
          { label: "Kruskal", value: "kruskal" },
          { label: "Floyd-Warshall", value: "floyd" }
        ],
        answer: "kahn",
        explanation: "Se restarem vértices com grau de entrada não reduzido a zero, há ciclo detectado pelo algoritmo de Kahn."
      },
      {
        id: "aula07-q3",
        question: "Como verificar bipartição em grafo não direcionado?",
        options: [
          { label: "Colorir com BFS alternando cores", value: "colorir" },
          { label: "Ordenar vértices", value: "ordenar" },
          { label: "Executar Prim", value: "prim" },
          { label: "Usar matriz identidade", value: "identidade" }
        ],
        answer: "colorir",
        explanation: "BFS/DFS alternando cores detecta conflitos que invalidam a bipartição."
      }
    ]
  },
  {
    id: "quiz-aula08",
    title: "Aula 08 • Heaps e Estratégias Gulosas",
    description: "Confirme domínio de filas de prioridade e escolhas ótimas locais.",
    topic: "Heaps",
    duration: "15 min",
    questions: [
      {
        id: "aula08-q1",
        question: "Qual coleção .NET implementa uma min-heap pronta para uso?",
        options: [
          { label: "`PriorityQueue<TElement,TPriority>`", value: "priorityqueue" },
          { label: "`SortedDictionary<TKey,TValue>`", value: "sorteddictionary" },
          { label: "`SortedList<TKey,TValue>`", value: "sortedlist" },
          { label: "`ConcurrentQueue<T>`", value: "concurrentqueue" }
        ],
        answer: "priorityqueue",
        explanation: "`PriorityQueue` expõe inserção O(log n) e extração do menor elemento de forma direta."
      },
      {
        id: "aula08-q2",
        question: "Qual técnica garante solução ótima em problemas de interval scheduling?",
        options: [
          { label: "Ordenar por tempo de término e selecionar guloso", value: "guloso" },
          { label: "Backtracking completo", value: "backtracking" },
          { label: "Programação dinâmica", value: "dp" },
          { label: "Busca binária", value: "busca" }
        ],
        answer: "guloso",
        explanation: "Escolher sempre o intervalo que termina mais cedo maximiza a quantidade de tarefas agendadas."
      },
      {
        id: "aula08-q3",
        question: "Qual estrutura auxilia a manter os maiores N elementos vistos até agora?",
        options: [
          { label: "Heap mínima com tamanho fixo", value: "heap" },
          { label: "Lista ordenada", value: "lista" },
          { label: "Pilha", value: "pilha" },
          { label: "Dicionário", value: "dicionario" }
        ],
        answer: "heap",
        explanation: "Uma min-heap limitada descarta automaticamente o menor elemento ao inserir novo item relevante."
      }
    ]
  },
  {
    id: "quiz-aula09",
    title: "Aula 09 • Programação Dinâmica com Memorização",
    description: "Acompanhe subproblemas e otimizações top-down.",
    topic: "DP Memo",
    duration: "15 min",
    questions: [
      {
        id: "aula09-q1",
        question: "Qual característica define um problema adequado para DP?",
        options: [
          { label: "Subproblemas sobrepostos", value: "subproblemas" },
          { label: "Independência total", value: "independente" },
          { label: "Ordenação necessária", value: "ordenacao" },
          { label: "Dados em fluxo", value: "stream" }
        ],
        answer: "subproblemas",
        explanation: "DP aproveita subproblemas recursivos que se repetem e podem ser armazenados."
      },
      {
        id: "aula09-q2",
        question: "Qual estrutura costuma armazenar resultados memorizados?",
        options: [
          { label: "Dictionary ou array indexado", value: "memo" },
          { label: "Queue", value: "queue" },
          { label: "Stack", value: "stack" },
          { label: "PriorityQueue", value: "priority" }
        ],
        answer: "memo",
        explanation: "Memoização associa argumentos do subproblema a resultados já computados em mapas ou arrays."
      },
      {
        id: "aula09-q3",
        question: "Qual problema clássico memorizado soma combinações para atingir alvo?",
        options: [
          { label: "Coin Change (top-down)", value: "coin" },
          { label: "Prim MST", value: "prim" },
          { label: "Busca binária", value: "binary" },
          { label: "Merge Sort", value: "merge" }
        ],
        answer: "coin",
        explanation: "Coin Change usa memoização para evitar recomputar combinações de moedas."
      }
    ]
  },
  {
    id: "quiz-aula10",
    title: "Aula 10 • Programação Dinâmica Tabulada",
    description: "Construa soluções bottom-up em tabelas iterativas.",
    topic: "DP Bottom-Up",
    duration: "15 min",
    questions: [
      {
        id: "aula10-q1",
        question: "Qual é a principal diferença entre memoização e tabulação?",
        options: [
          { label: "Tabulação preenche iterativamente do menor subproblema", value: "iterativo" },
          { label: "Memoização usa mais memória", value: "memoria" },
          { label: "Tabulação exige recursão", value: "recursivo" },
          { label: "Memoização não usa pilha", value: "pilha" }
        ],
        answer: "iterativo",
        explanation: "Tabulação resolve subproblemas em ordem iterativa sem pilha recursiva."
      },
      {
        id: "aula10-q2",
        question: "Qual ordem de preenchimento resolve DP em grade (caminhos únicos)?",
        options: [
          { label: "Varredura linha por linha da origem ao destino", value: "linhas" },
          { label: "Varredura diagonal", value: "diagonal" },
          { label: "Varredura aleatória", value: "aleatorio" },
          { label: "Busca em largura", value: "bfs" }
        ],
        answer: "linhas",
        explanation: "Percorrer linhas/colunas garante que subproblemas vizinhos já foram calculados."
      },
      {
        id: "aula10-q3",
        question: "Qual otimização reduz memória em DP de subsequências?",
        options: [
          { label: "Usar apenas duas linhas (rolling array)", value: "rolling" },
          { label: "Aplicar heap", value: "heap" },
          { label: "Usar set", value: "set" },
          { label: "Converter em recursão", value: "recursao" }
        ],
        answer: "rolling",
        explanation: "Rolling array mantém resultados da linha atual e anterior, reduzindo a tabela para O(n)."
      }
    ]
  },
  {
    id: "quiz-aula11",
    title: "Aula 11 • SQL, Depuração e Erros",
    description: "Consolide técnicas de consulta, logging e tratamento de exceções.",
    topic: "Produtividade",
    duration: "12 min",
    questions: [
      {
        id: "aula11-q1",
        question: "Qual cláusula SQL calcula rankings mantendo empates?",
        options: [
          { label: "`DENSE_RANK()`", value: "dense" },
          { label: "`ROW_NUMBER()`", value: "row" },
          { label: "`RANK()`", value: "rank" },
          { label: "`NTILE()`", value: "ntile" }
        ],
        answer: "dense",
        explanation: "`DENSE_RANK` não cria saltos após empates, comum em dashboards de resultados."
      },
      {
        id: "aula11-q2",
        question: "Qual bloco captura exceções específicas mantendo rastros úteis?",
        options: [
          { label: "`catch (SpecificException ex)`", value: "specific" },
          { label: "`catch (Exception)`", value: "generic" },
          { label: "`catch` vazio", value: "empty" },
          { label: "`finally`", value: "finally" }
        ],
        answer: "specific",
        explanation: "Capturar tipos específicos evita ocultar erros e permite mensagens orientadas."
      },
      {
        id: "aula11-q3",
        question: "Qual abordagem de logging evita bloquear threads em produção?",
        options: [
          { label: "Logger assíncrono com buffering", value: "async" },
          { label: "`Console.WriteLine` direto", value: "console" },
          { label: "Armazenar em lista estática", value: "lista" },
          { label: "Escrever arquivo a cada linha", value: "arquivo" }
        ],
        answer: "async",
        explanation: "Buffers assíncronos amortizam escrita e reduzem impacto em threads de requisição."
      }
    ]
  },
  {
    id: "quiz-aula12",
    title: "Aula 12 • DevOps e Resiliência",
    description: "Avalie práticas de observabilidade, pipelines e estratégias tolerantes a falhas.",
    topic: "DevOps",
    duration: "15 min",
    questions: [
      {
        id: "aula12-q1",
        question: "Qual métrica monitora latência em APIs críticas?",
        options: [
          { label: "Apdex ou percentis de tempo de resposta", value: "apdex" },
          { label: "Uso de disco", value: "disco" },
          { label: "Contagem de commits", value: "commits" },
          { label: "Tamanho do repositório", value: "repo" }
        ],
        answer: "apdex",
        explanation: "Apdex e percentis oferecem visibilidade de desempenho percebido por usuários."
      },
      {
        id: "aula12-q2",
        question: "Qual prática garante rollback rápido em pipelines?",
        options: [
          { label: "Deploy blue-green com alternância de tráfego", value: "bluegreen" },
          { label: "Deploy manual em produção", value: "manual" },
          { label: "Comprimir logs", value: "logs" },
          { label: "Desabilitar testes", value: "notestes" }
        ],
        answer: "bluegreen",
        explanation: "Blue-green mantém duas versões e permite revertê-las trocando o roteamento."
      },
      {
        id: "aula12-q3",
        question: "Qual padrão evita sobrecarga cascata ao chamar serviços externos?",
        options: [
          { label: "Circuit breaker", value: "circuit" },
          { label: "Retry infinito", value: "retry" },
          { label: "Thread.Sleep", value: "sleep" },
          { label: "Cache sempre", value: "cache" }
        ],
        answer: "circuit",
        explanation: "Circuit breakers abrem o circuito após falhas sucessivas, protegendo o sistema contra colapso."
      }
    ]
  }
];
