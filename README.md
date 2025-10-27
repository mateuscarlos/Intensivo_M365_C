# 🧠 Preparação Microsoft M365 — Software Engineer (C# / .NET)

Este repositório contém o plano completo de estudos **de 25/10 a 05/11**, usando o **Método Feynman** para aprender algoritmos, estruturas de dados, SQL e fundamentos de engenharia de software para o teste técnico do HackerRank da Microsoft.

Cada dia contém:
- 📘 Explicação teórica em linguagem simples  
- 💻 Exemplo de código em C#  
- 🧩 Exercícios guiados e desafios  
- 🧠 Atividade Feynman (você explica o que aprendeu)

---

## 📅 Cronograma Geral

| Dia | Tema | Objetivo |
|-----|------|-----------|
| 0 | Preparação do Ambiente | Instalar e configurar .NET, VS Code / Visual Studio |
| 1 | Fundamentos do C# | Sintaxe, variáveis, condicionais e loops |
| 2 | Arrays e Listas | Estruturas lineares e complexidade Big-O |
| 3 | Strings e Dicionários | Manipulação de texto e contagem de frequência |
| 4 | Two Pointers & Sliding Window | Subarrays/substrings e eficiência |
| 5 | Pilhas e Filas | Estruturas LIFO/FIFO e monotonic stack |
| 6 | Grafos I | Representação, DFS e BFS |
| 7 | Grafos II | Ordenação Topológica e Bipartição |
| 8 | Heaps & Greedy | Prioridade e agendamento de tarefas |
| 9 | Programação Dinâmica I | Pensar em estados e subproblemas |
| 10 | Programação Dinâmica II | Coin Change e Grid Paths |
| 11 | SQL + Depuração | Consultas, janelas, debugging e testes |
| 12 | DevOps + Simulado Final | Resiliência de sistemas e prova completa |

---

# 🧰 Dia 0 — Preparação do Ambiente (.NET + IDE)

### 🎯 Objetivo
Instalar o .NET SDK, configurar VS Code ou Visual Studio, e testar o primeiro programa C#.

### Passos
1. Baixe o **.NET SDK 8** em [dotnet.microsoft.com/download](https://dotnet.microsoft.com/download/dotnet).  
   Verifique:  
   ```bash
   dotnet --version
   ```
2. Instale o **VS Code** ou **Visual Studio Community 2022**.  
   Extensões recomendadas no VS Code:
   - `C#`
   - `C# Dev Kit`
   - `Code Runner`
3. Crie o primeiro projeto:
   ```bash
   dotnet new console -n HelloWorld
   cd HelloWorld
   dotnet run
   ```

### 🧩 Exercícios
1. Alterar o “Hello World” para perguntar o nome e cumprimentar o usuário.  
2. Criar um projeto `TesteAmbiente` e exibir a soma de dois números.

### 🧠 Feynman
Explique:  
- O que é o .NET SDK e para que serve o comando `dotnet run`?  
- Por que o SDK deve estar no PATH?

---

# 📘 Dia 1 — Fundamentos do C# e Pensamento Algorítmico

### 🧩 Conceitos
- Tipos (`int`, `double`, `string`, `bool`)  
- Condicionais e loops (`if`, `for`, `while`)  
- Entrada/Saída com `Console.ReadLine` e `Console.WriteLine`

### 💻 Exemplo
```csharp
using System;
using System.Linq;

class Program {
    static void Main() {
        Console.Write("Digite três números: ");
        var nums = Console.ReadLine().Split().Select(int.Parse).ToArray();
        Console.WriteLine($"Maior: {nums.Max()}, Média: {nums.Average():F2}");
    }
}
```

### 🧩 Exercícios
1. Leia `N` números e calcule média e soma.  
2. Imprima de 1 a 100, substituindo múltiplos de 3 e 5 por “Fizz” e “Buzz”.  

### 🧠 Feynman
Explique com suas palavras:  
> O que é um programa e como o computador decide o que fazer dentro de um `if`?

---

# 📘 Dia 2 — Arrays, List<T> e Complexidade

### 🧩 Conceitos
- Arrays (fixos) vs Listas (dinâmicas)  
- Big-O (O(1), O(n), O(n log n))  

### 💻 Exemplo
```csharp
var list = new List<int>{3,1,4};
list.Add(1);
list.Sort();
Console.WriteLine(string.Join(",", list));
```

### 🧩 Exercícios
1. Leia `N` números e imprima min, max, média.  
2. Remova duplicados mantendo a ordem.

### 🧠 Feynman
Explique a diferença entre array e lista e o que significa “complexidade O(n log n)”.

---

# 📘 Dia 3 — Strings e Dicionários

### 🧩 Conceitos
- Strings imutáveis  
- Dicionário (chave → valor)  

### 💻 Exemplo
```csharp
string s = "microsoft";
var freq = new Dictionary<char,int>();
foreach (char c in s)
    freq[c] = freq.ContainsKey(c) ? freq[c]+1 : 1;
```

### 🧩 Exercícios
1. Verificar se uma palavra é palíndromo.  
2. Contar frequência de cada letra.

### 🧠 Feynman
Por que `string` é imutável?  
Como o `Dictionary` melhora o desempenho da contagem?

---

# 📘 Dia 4 — Two Pointers e Sliding Window

### 💡 Conceito
Dois ponteiros percorrem a estrutura ajustando uma “janela” de elementos.

### 💻 Exemplo
```csharp
string s = "abcabcbb";
var last = new Dictionary<char,int>();
int start = 0, ans = 0;
for (int i = 0; i < s.Length; i++) {
    if (last.ContainsKey(s[i]) && last[s[i]] >= start)
        start = last[s[i]] + 1;
    last[s[i]] = i;
    ans = Math.Max(ans, i - start + 1);
}
Console.WriteLine(ans);
```

### 🧩 Exercícios
1. Soma máxima de subarray de tamanho fixo `k`.  
2. Substring mais longa sem caracteres repetidos.

### 🧠 Feynman
Explique com uma metáfora o que é “deslizar a janela”.

---

# 📘 Dia 5 — Pilhas e Filas

### 🧩 Conceitos
- **Stack** (LIFO): usado para desfazer e validar expressões.  
- **Queue** (FIFO): usado para processar em ordem.  

### 💻 Exemplo
```csharp
var st = new Stack<char>();
string s = "(())";
foreach (var c in s) {
    if (c=='(') st.Push(c);
    else st.Pop();
}
Console.WriteLine(st.Count==0 ? "Válido" : "Inválido");
```

### 🧩 Exercícios
1. Verificar sequência de parênteses.  
2. Simular fila de atendimento (Queue).

---

# 📘 Dia 6 — Grafos I: DFS e BFS

### 💡 Conceito
- Representação: `Dictionary<int, List<int>>`  
- DFS (profundidade)  
- BFS (largura)

### 💻 Exemplo
```csharp
var g = new Dictionary<int,List<int>> {
  [1]=new(){2,3}, [2]=new(){4}, [3]=new(){4}, [4]=new()
};
var vis = new HashSet<int>();
void DFS(int u){
    if(vis.Contains(u)) return;
    vis.Add(u);
    Console.Write(u+" ");
    foreach(var v in g[u]) DFS(v);
}
DFS(1);
```

### 🧩 Exercícios
1. Contar componentes conexos.  
2. Caminho mínimo com BFS.

---

# 📘 Dia 7 — Grafos II: Topological Sort e Bipartição

### 💡 Conceito
- Ordenar tarefas com dependências (DAG).  
- Verificar se grafo é bipartido (duas cores sem conflito).

### 💻 Exemplo
```csharp
var edges = new List<(int,int)>{(0,1),(1,2),(0,2)};
var indeg = new int[3];
var adj = new Dictionary<int,List<int>> {
 [0]=new(){1,2}, [1]=new(){2}, [2]=new()
};
var q = new Queue<int>(new[]{0});
while(q.Count>0){
 var u=q.Dequeue(); Console.Write(u+" ");
 foreach(var v in adj[u]) if(--indeg[v]==0) q.Enqueue(v);
}
```

### 🧩 Exercícios
1. Grafo bipartido com BFS colorido.  
2. Detectar ciclo em grafo direcionado.

---

# 📘 Dia 8 — Heaps e Algoritmos Gananciosos

### 💡 Conceito
Heap é uma estrutura de prioridade; remove sempre o menor (ou maior) elemento.

### 💻 Exemplo
```csharp
var pq = new PriorityQueue<int,int>();
pq.Enqueue(5,5);
pq.Enqueue(2,2);
Console.WriteLine(pq.Dequeue()); // 2
```

### 🧩 Exercícios
1. Top K elementos mais frequentes.  
2. Número mínimo de salas de reunião.

---

# 📘 Dia 9 — Programação Dinâmica I

### 💡 Conceito
Guardar resultados intermediários — subestrutura ótima.

### 💻 Exemplo
```csharp
int Fib(int n){
 if(n<=1) return n;
 int[] dp=new int[n+1];
 dp[1]=1;
 for(int i=2;i<=n;i++) dp[i]=dp[i-1]+dp[i-2];
 return dp[n];
}
```

### 🧩 Exercícios
1. Longest Increasing Subsequence (LIS).  
2. House Robber (dp[i]=max(dp[i-1],dp[i-2]+nums[i])).

---

# 📘 Dia 10 — Programação Dinâmica II

### 💡 Conceito
DP 1D — Coin Change e caminhos em grid.

### 💻 Exemplo
```csharp
int CoinChange(int[] coins, int amount){
 int INF=999999;
 int[] dp=new int[amount+1];
 Array.Fill(dp,INF); dp[0]=0;
 foreach(int c in coins)
  for(int i=c;i<=amount;i++)
   dp[i]=Math.Min(dp[i],dp[i-c]+1);
 return dp[amount]==INF?-1:dp[amount];
}
```

### 🧩 Exercícios
1. Coin Change (combinações).  
2. Caminhos em grid `m x n` com bloqueios.

---

# 📘 Dia 11 — SQL + Depuração

### 💡 Conceito
- `SELECT`, `GROUP BY`, `HAVING`, `ORDER BY`, `LIMIT`.  
- Janelas: `ROW_NUMBER() OVER(PARTITION BY ... ORDER BY ...)`.  
- Testes de borda e debugging.

### 🧩 Exercícios
1. SQL: top 3 usuários por soma em 30 dias.  
2. C#: tratar entrada inválida (try-parse).

---

# 📘 Dia 12 — DevOps e Simulado Final

### 💡 Conceito
Serviços confiáveis: idempotência, retries, circuit breaker, SLO/SLI, feature flags.

### 🧩 Exercícios
1. Escreva runbook de latência alta.  
2. Esboce middleware idempotente.

### 🧩 Simulado (2h)
- **Q1:** Sliding Window (strings)  
- **Q2:** DP ou Grafos  
- **Q3:** SQL (agrupamento e ranking)  
Explique cada um com Feynman (150 palavras).

---

# 📚 Método Feynman (use todo dia)

> **Definição:** …  
> **Analogia:** …  
> **Quando usar:** …  
> **Passo a passo:** …  
> **Exemplo:** …  
> **Bordas:** …  
> **Erros comuns:** …  
> **Resumo (150 palavras):** …

---

# ✅ Resultado Esperado
Ao final:
- Capacidade de resolver 2–3 problemas médios em 90–120 minutos.  
- Entendimento prático de estruturas de dados, DP, SQL e C#.  
- Capacidade de explicar *como e por que* a solução funciona.  
- Base sólida para entrevistas técnicas e para o ecossistema Microsoft 365.

---

**🚀 Boa sorte no desafio da Microsoft, Mateus!**
