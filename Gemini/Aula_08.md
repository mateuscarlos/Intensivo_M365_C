# 💻 Aula 8 (C\#/.NET): Programação Dinâmica (PD) – Otimização de Subproblemas

Mateus, você dominou a Busca Binária ($O(\log n)$) em estruturas ordenadas. Hoje, chegamos ao ponto mais crucial da otimização algorítmica: a **Programação Dinâmica (PD)**.

A PD não é uma estrutura de dados, mas uma **abordagem de resolução de problemas** que evita recalcular a mesma solução várias vezes. É o que transforma soluções exponenciais ($O(2^n)$) em soluções lineares ou polinomiais ($O(n)$ ou $O(n^2)$), essencial para otimizar a latência em servidores M365.

-----

## 🎯 Objetivos da Aula

| Conceito | Estrutura/Técnica | Foco em C\#/.NET |
| :--- | :--- | :--- |
| **Programação Dinâmica** | Princípios Fundamentais | Identificar subproblemas sobrepostos e estrutura ótima. |
| **Memorização (Top-Down)** | `Dictionary<TKey, TValue>` | Usar o Hash Map para armazenar resultados de subproblemas. |
| **Tabulação (Bottom-Up)** | `Array` ou `List<T>` | Construir a solução iterativamente, do menor para o maior problema. |

Fechando com chave de ouro\! A **Programação Dinâmica (PD)** não é uma estrutura de dados, mas sim uma **metodologia algorítmica** de otimização de altíssimo nível. Ela é o que transforma soluções exponenciais (impraticáveis) em soluções polinomiais (rápidas).

Vamos entender o que é a PD e como ela usa os conceitos de complexidade que você aprendeu.

-----

## Aula Final: Programação Dinâmica (PD) – Otimização de Subproblemas

### 1\. O Problema da Redundância Exponencial

Muitos problemas na computação (como encontrar o caminho mais longo, a sub-sequência comum mais longa ou a sequência de Fibonacci de ordem alta) são naturalmente recursivos.

**Exemplo: Sequência de Fibonacci Ineficiente (Recursão Simples)**

A sequência de Fibonacci ($F_n$) é definida como $F_n = F_{n-1} + F_{n-2}$, com $F_0=0$ e $F_1=1$.

Para calcular $F_5$, o algoritmo recursivo faria:

$$F_5 = F_4 + F_3$$
$$F_4 = F_3 + F_2$$
$$F_3 = F_2 + F_1$$
...

Observe que para calcular $F_5$, você precisa calcular $F_3$ duas vezes, $F_2$ três vezes, e assim por diante. Essa repetição de cálculos se torna **exponencial** ($\mathbf{O(2^N)}$) e muito lenta para valores grandes de $N$.

### 2\. A Solução da Programação Dinâmica (PD)

A Programação Dinâmica é uma estratégia de otimização aplicada a problemas que têm duas características:

1.  **Estrutura Ótima de Subproblemas:** A solução ótima do problema grande pode ser construída a partir das soluções ótimas de seus subproblemas.
2.  **Superposição de Subproblemas (Overlapping Subproblems):** O mesmo subproblema é resolvido repetidamente (como no exemplo de Fibonacci, onde $F_3$ é calculado várias vezes).

A PD resolve a superposição usando uma técnica chamada **Memorização** ou **Tabulação**.

#### 2.1. O Princípio da PD: Memorizar para Não Recalcular

Em vez de refazer o cálculo para $F_3$, a PD o calcula uma vez e **armazena o resultado** em uma tabela (geralmente um Array ou `Dictionary<TKey, TValue>`). Se o cálculo for necessário novamente, o resultado é consultado em $\mathbf{O(1)}$ na tabela, em vez de ser recalculado em $\mathbf{O(2^N)}$.

Os dois métodos principais de PD são:

| Método | Abordagem | Fluxo | Estrutura de Dados |
| :--- | :--- | :--- | :--- |
| **Top-Down (Memorização)** | Começa no problema grande e quebra em subproblemas (recursão). | Descendente | Usa `Dictionary` ou `Array` para cachear resultados (memoization). |
| **Bottom-Up (Tabulação)** | Começa no problema base (o menor) e constrói as soluções até o problema grande (iteração). | Ascendente | Usa `Array` para preencher uma tabela de resultados. |

### 3\. Exemplo de Otimização em C\# (Fibonacci)

#### 3.1. Ineficiente (Recursão Pura: $\mathbf{O(2^N)}$)

```csharp
public int FibonacciRecursivo(int n)
{
    if (n <= 1) return n;
    // Recalcula o mesmo valor inúmeras vezes
    return FibonacciRecursivo(n - 1) + FibonacciRecursivo(n - 2);
}
```

#### 3.2. Programação Dinâmica (Bottom-Up: $\mathbf{O(N)}$)

Ao usar uma tabela (Array) para armazenar os resultados, transformamos o tempo exponencial em **tempo linear**\!

```csharp
public int FibonacciPD_BottomUp(int n)
{
    // A tabela (Array) DP armazena os resultados dos subproblemas
    int[] dp = new int[n + 1]; 
    
    // Casos base (os subproblemas menores)
    if (n <= 1) return n;
    dp[0] = 0;
    dp[1] = 1;

    // Constrói a solução do menor para o maior (iterativamente)
    for (int i = 2; i <= n; i++)
    {
        // O(1) de acesso aos resultados já calculados!
        dp[i] = dp[i - 1] + dp[i - 2]; 
    }

    // Retorna a solução do problema original
    return dp[n]; // Complexidade final: O(N)
}
```

### 4\. Conclusão: O Propósito da PD

O objetivo da Programação Dinâmica é a **otimização de tempo**.

| Estratégia | Complexidade Típica | Custo |
| :--- | :--- | :--- |
| **Força Bruta / Recursão Simples** | $\mathbf{O(2^N)}$, $\mathbf{O(N^2)}$, etc. (Exponencial) | Tempo de execução alto. |
| **Programação Dinâmica** | $\mathbf{O(N)}$, $\mathbf{O(N^2)}$, etc. (Polinomial) | **Espaço de memória** para guardar a tabela de resultados. |

A PD faz um *trade-off* (troca): ela gasta **mais espaço de memória** (para a tabela) para economizar **muito tempo de processamento**. Em problemas de grande escala, essa troca é sempre vantajosa.

-----

## Seção A: Princípios da Programação Dinâmica

### 1\. Estudar: O Que é PD e Seus Dois Requisitos

A Programação Dinâmica aplica-se a problemas que exibem as seguintes características:

1.  **Subproblemas Sobrepostos:** O problema maior pode ser dividido em subproblemas que são resolvidos repetidamente (ex: calcular Fibonacci(5) exige calcular Fibonacci(4) e Fibonacci(3). Ambos exigem calcular Fibonacci(2)).
2.  **Estrutura Ótima:** A solução ótima do problema maior pode ser construída a partir da solução ótima de seus subproblemas.

### 2\. Atividade Feynman: O Pesadelo da Exponencial

**Cenário:** Calcule o 50º número de Fibonacci, onde $F(n) = F(n-1) + F(n-2)$.

**Explique:** Se você usar a recursão "pura" (sem PD), por que a complexidade de tempo é **$O(2^n)$** e o que essa complexidade significa em termos práticos para $N=50$?

> **Resposta Ideal:** Explicar que para calcular $F(50)$, a função recursiva cria duas chamadas, que criam mais duas, e assim por diante. Isso gera uma "árvore de chamadas" exponencial. O número de operações é aproximadamente $2^{50}$, o que é **mais de um trilhão de operações**. O computador estaria calculando $F(10)$ milhares de vezes, desperdiçando tempo e falhando em latência.

-----

## Seção B: Abordagem Top-Down (Memorização)

### 1\. Estudar: Otimização com `Dictionary`

  * **Conceito:** **Memorização** é a abordagem Top-Down (de cima para baixo) da PD. Começamos no problema principal (o topo) e descemos até a base (subproblemas).
  * **Técnica C\#:** Usamos um **`Dictionary<int, long>`** para armazenar a solução de cada subproblema.
      * Antes de calcular $F(n)$, checamos o Dictionary ($O(1)$).
      * Se o resultado estiver lá, retornamos imediatamente ($O(1)$).
      * Se não estiver, calculamos e armazenamos no Dictionary.

### 2\. Prática de Codificação: Fibonacci Memorizado

**Problema:** Calcule o $N$-ésimo número de Fibonacci de forma eficiente usando Memorização.

**Lógica:** O `Dictionary` (nosso *cache*) armazena todos os resultados intermediários.

```csharp
using System.Collections.Generic;

public class DynamicProgramming
{
    // O Dictionary armazena (N: Resultado)
    private Dictionary<int, long> memo = new Dictionary<int, long>();

    // Complexidade: O(n) - Cada valor de N é calculado apenas uma vez.
    public long FibonacciMemoized(int n)
    {
        if (n <= 1) return n;

        // 1. Checagem do Cache (O(1))
        if (memo.ContainsKey(n))
        {
            return memo[n];
        }

        // 2. Cálculo Recursivo
        long result = FibonacciMemoized(n - 1) + FibonacciMemoized(n - 2);

        // 3. Armazenamento no Cache (O(1))
        memo[n] = result;

        return result;
    }
}
```

-----

## Seção C: Abordagem Bottom-Up (Tabulação)

### 1\. Estudar: Otimização com Array

  * **Conceito:** **Tabulação** é a abordagem Bottom-Up (de baixo para cima) da PD. Começamos no caso base conhecido e construímos a solução de forma iterativa, preenchendo uma tabela (geralmente um Array).
  * **Vantagem:** Evita a sobrecarga de chamadas de função recursivas, tornando-o ligeiramente mais rápido em C\# na prática.
  * **Técnica C\#:** Usamos um **`long[]`** para armazenar a tabela de resultados.

### 2\. Prática de Codificação: Fibonacci Tabulado

**Problema:** Calcule o $N$-ésimo número de Fibonacci de forma eficiente usando Tabulação.

**Lógica:** O Array `dp` de tamanho $N+1$ armazena a solução para cada `i` até $N$.

```csharp
public long FibonacciTabulated(int n)
{
    if (n <= 1) return n;

    // Array 'dp' para armazenar resultados (tabela)
    long[] dp = new long[n + 1];

    // Casos Base
    dp[0] = 0;
    dp[1] = 1;

    // O(n) - Loop iterativo
    for (int i = 2; i <= n; i++)
    {
        // A solução para o problema 'i' depende da solução para 'i-1' e 'i-2'
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}
```

### 3\. Lacuna Feynman: Memorização vs. Tabulação

Ambas as abordagens resolvem a Fibonacci em $O(n)$ de tempo e $O(n)$ de espaço.

**Explique:** Qual a principal diferença prática entre as abordagens **Top-Down (Memorização)** e **Bottom-Up (Tabulação)** e quando você escolheria uma em detrimento da outra?

> **Resposta Ideal:**
>
> 1.  **Top-Down (Memorização):** É mais **intuitiva** e reflete a equação matemática do problema. Ela só calcula os subproblemas **necessários**. Escolha-a quando houver uma chance de que você não precise de todos os subproblemas intermediários.
> 2.  **Bottom-Up (Tabulação):** É mais **eficiente** em termos de performance pura (sem sobrecarga de recursão) e garante que todos os subproblemas sejam resolvidos em ordem. Escolha-a quando você **sabe** que precisará de todos os subproblemas intermediários (como em problemas de caminho em *grid*).

-----

## 🚀 Próximos Passos (Revisão Final)

**Revisão:** A PD é o pico da otimização. Garanta que você consegue escrever ambas as soluções de Fibonacci (`Memoized` e `Tabulated`) de cabeça, explicando o papel do **cache** em cada uma.

**Próxima Etapa:** Concluímos as 8 aulas de Fundamentos. O próximo passo lógico é uma **Revisão Geral e Resolução de Problemas Integrados** para consolidar:

1.  Estruturas e Complexidade.
2.  Arrays e Two Pointers.
3.  Strings e Sliding Window.
4.  Hash Maps/Sets.
5.  Stacks/Queues.
6.  Árvores/Grafos (DFS/BFS).
7.  Busca Binária.
8.  Programação Dinâmica.