# 💻 Aula 4 (C\#/.NET): Arrays, Strings e a Janela Deslizante de Tamanho Variável

Mateus, você dominou a busca instantânea ($O(1)$) do `Dictionary` e do `HashSet`. Hoje, vamos integrar essa capacidade com a técnica **Sliding Window** (Aula 2) para resolver problemas mais complexos de subsequência onde o **tamanho da janela não é fixo**.

Este tipo de problema é muito comum, pois exige otimização do espaço de busca.

-----

## 🎯 Objetivos da Aula

| Conceito | Estrutura/Técnica | Foco em C\#/.NET |
| :--- | :--- | :--- |
| **Integração** | Sliding Window + HashSet/Dictionary | Manter a validade da janela (ex: unicidade) em $O(1)$. |
| **Janela Variável** | Expansão e Contração | Algoritmo `while` loop para otimizar o `start` e `end`. |
| **Prática** | Substring Sem Repetição | Resolução de um problema clássico de entrevistas. |

Com certeza\! Arrays (Vetores), Strings e a técnica da "Janela Deslizante" (Sliding Window) de tamanho variável são conceitos cruciais para otimização, especialmente em problemas de sequência.

Vamos à próxima aula.

-----

## Aula: Arrays, Strings e a Janela Deslizante de Tamanho Variável

### 1\. Arrays e Strings: O Básico para Otimização

Em C\#, tanto o `Array` (`int[]`, `char[]`, etc.) quanto a `string` são estruturas baseadas em um princípio fundamental: **acesso por índice em $\mathbf{O(1)}$**.

#### 1.1. Propriedades de Arrays/Strings

| Característica | Detalhe | Complexidade |
| :--- | :--- | :--- |
| **Alocação Contígua** | Os elementos são armazenados em blocos de memória adjacentes. | N/A |
| **Acesso por Índice** | Acessar `myArray[i]` ou `myString[i]` é imediato. | $\mathbf{O(1)}$ |
| **Tamanho Fixo** (`Array`) | O tamanho é definido na criação (exceto em `List<T>`, que é um array dinâmico). | N/A |
| **Imutabilidade** (`string`) | Strings em C\# não podem ser alteradas; qualquer operação de "modificação" cria uma nova string. | $\mathbf{O(N)}$ para criar/copiar |

#### 1.2. Complexidade de Operações

| Operação | Array (`int[]`) | `List<T>` (Array Dinâmico) | `string` |
| :--- | :--- | :--- | :--- |
| **Acessar/Ler por Índice** | $\mathbf{O(1)}$ | $\mathbf{O(1)}$ | $\mathbf{O(1)}$ |
| **Inserir/Remover no Final** | $\mathbf{O(1)}$ (amortizado) | $\mathbf{O(1)}$ (amortizado) | $\mathbf{O(N)}$ |
| **Inserir/Remover no Início/Meio** | $\mathbf{O(N)}$ | $\mathbf{O(N)}$ | $\mathbf{O(N)}$ |
| **Cópia/Comparação (Tudo)** | $\mathbf{O(N)}$ | $\mathbf{O(N)}$ | $\mathbf{O(N)}$ |

### 2\. A Técnica da Janela Deslizante (Sliding Window)

A Janela Deslizante é um padrão algorítmico crucial para otimizar problemas em sequências (Arrays, Strings ou `List<T>`) que envolvem um **subsegmento** (sub-array ou substring).

#### 2.1. O Problema Ineficiente (O(N²))

Imagine que você precisa encontrar o maior sub-array que atenda a alguma condição (ex: ter soma menor que $K$).

  * **Abordagem Ingênua:** Testar todos os sub-arrays possíveis.
      * Você usaria um *loop externo* para o início (`i`) e um *loop interno* para o fim (`j`).
      * Complexidade: $\mathbf{O(N^2)}$. Para um array de $100.000$ elementos, isso é impossível.

#### 2.2. A Solução Otimizada: Janela Deslizante (O(N))

A Janela Deslizante usa dois ponteiros (ou índices) – **início** (`start`) e **fim** (`end`) – para definir um subsegmento, a "janela". O principal é que a janela **desliza** pela sequência, visitando cada elemento apenas um número constante de vezes.

  * **Complexidade:** $\mathbf{O(N)}$, pois os ponteiros `start` e `end` só avançam, nunca retrocedem além do `start`.

### 3\. Janela Deslizante de **Tamanho VARIÁVEL**

Esta é a versão mais poderosa e complexa da técnica. A janela cresce pelo ponteiro `end` e, quando a condição é violada, ela se contrai pelo ponteiro `start` até que a condição seja restabelecida.

#### 3.1. Estrutura de Código Típica

```csharp
// Variáveis para a Janela
int start = 0;
// Variáveis de Estado (para somar, contar letras, etc.)
int estadoAtual = 0;
// Variável para a Resposta Final
int maxLength = 0;

// O ponteiro 'end' (direito) sempre avança (expande a janela)
for (int end = 0; end < array.Length; end++)
{
    // 1. EXPANDIR: Adiciona o elemento atual ao 'estadoAtual'
    estadoAtual += array[end];
    
    // 2. CONTRAIR (Loop While): Se a condição for violada,
    //    reduz a janela até que a condição seja restabelecida.
    while (estadoAtual [VIOLA A CONDIÇÃO])
    {
        // Remove o elemento do ponteiro 'start'
        estadoAtual -= array[start];
        // Desliza o ponteiro 'start' para a direita
        start++;
    }
    
    // 3. ATUALIZAR RESPOSTA: A janela atual é válida.
    //    A Janela Deslizante tem tamanho: (end - start + 1)
    maxLength = Math.Max(maxLength, end - start + 1);
}

return maxLength;
```

#### 3.2. Exemplo Prático: Maior Sub-array com Soma $\le K$

**Objetivo:** Encontrar o comprimento do maior sub-array em que a soma dos elementos não ultrapasse um valor $K$.

```csharp
public static int LongestSubArray(int[] nums, int k)
{
    int start = 0;
    int currentSum = 0;
    int maxLength = 0;

    for (int end = 0; end < nums.Length; end++)
    {
        // 1. EXPANDIR: Adiciona o novo elemento à soma
        currentSum += nums[end];

        // 2. CONTRAIR: Se a soma ultrapassar K, encolhe a janela
        //    pela esquerda até que a soma seja válida novamente.
        while (currentSum > k)
        {
            currentSum -= nums[start]; // Remove o elemento à esquerda
            start++;                   // Move o ponteiro esquerdo
        }

        // 3. ATUALIZAR RESPOSTA: A janela [start, end] é a maior VÁLIDA até agora.
        //    O tamanho é (end - start + 1)
        maxLength = Math.Max(maxLength, end - start + 1);
    }

    return maxLength;
}
```

A beleza dessa abordagem é que cada elemento do array é adicionado (por `end++`) e removido (por `start++`) no máximo uma vez, garantindo a performance de **$\mathbf{O(N)}$** e transformando um problema potencialmente lento em um algoritmo altamente eficiente.

-----

## Seção A: Sliding Window com Verificação $O(1)$

### 1\. Estudar: O Dilema da Janela Variável

Em muitos problemas de Janela Deslizante, o objetivo não é um tamanho $K$ fixo, mas sim encontrar a **maior/menor janela** que satisfaça uma **condição**.

  * **O Problema:** Como saber se a condição dentro da janela atual é válida de forma rápida?
  * **A Solução:** Usar um **`HashSet<T>`** ou **`Dictionary<TKey, TValue>`** para rastrear os elementos **dentro da janela**.

| Operação | Sem Hash Set (Lento) | Com Hash Set (Rápido) |
| :--- | :--- | :--- |
| **Checar Condição** | Percorrer a janela a cada passo. $O(N)$ por iteração. | Checar se o elemento está no `HashSet`. **$O(1)$**. |
| **Complexidade Final** | $O(n^2)$ | **$O(n)$** |

### 2\. Atividade Feynman: Explicando a Contração

**Problema:** Encontrar a maior substring sem caracteres repetidos.

**Explique:** Se o ponteiro `end` encontra um caractere repetido (que já está no seu `HashSet`), você deve mover o ponteiro `start` para a direita. Por que você precisa **remover** o caractere em `start` do seu `HashSet` *enquanto* move o `start`?

> **Resposta Ideal:** O `HashSet` representa o **conteúdo atual da janela**. Se movermos `start` mas não removermos o caractere antigo do `HashSet`, o `HashSet` continuará indicando que o caractere antigo (que saiu da janela) está presente, resultando em falsos positivos e impedindo que a nova janela seja considerada válida, mesmo após a repetição ter sido resolvida.

-----

## Seção B: Prática – Substring Sem Caracteres Repetidos

### 1\. Prática de Codificação: O Algoritmo

Este é um dos problemas mais comuns em entrevistas. O algoritmo usa o `HashSet` para garantir $O(1)$ na checagem de repetição.

**Lógica:**

1.  Use `start` e `end` para definir a janela.
2.  Use um `HashSet<char>` para rastrear caracteres dentro de `start` e `end`.
3.  **Loop Principal (Expansão):** Mova `end` para a direita.
4.  **Contração (Se Repetição):** Se `s[end]` já estiver no `HashSet`, mova `start` para a direita, **removendo** `s[start]` do `HashSet` a cada passo, até que a repetição seja resolvida.
5.  Atualize o `maxLength` a cada iteração de sucesso (`end - start + 1`).

<!-- end list -->

```csharp
using System;
using System.Collections.Generic;

public int LengthOfLongestSubstring(string s)
{
    // O(1) em tempo para verificar caracteres.
    HashSet<char> charSet = new HashSet<char>();
    
    int start = 0;
    int maxLength = 0;

    // Loop de expansão: 'end' sempre avança (O(n) no total)
    for (int end = 0; end < s.Length; end++)
    {
        // Contração (O(n) no total, pois cada elemento é removido apenas uma vez)
        // Enquanto o caractere já estiver no conjunto (repetição)
        while (charSet.Contains(s[end]))
        {
            // Remove o caractere de 'start' e move 'start' para a direita.
            charSet.Remove(s[start]);
            start++;
        }
        
        // Adiciona o novo caractere 'end' (agora a janela é válida)
        charSet.Add(s[end]);

        // Atualiza o comprimento máximo da janela válida
        // Comprimento = end - start + 1
        maxLength = Math.Max(maxLength, end - start + 1);
    }

    return maxLength;
}
// Complexidade: O(n) em tempo (cada ponteiro, start e end, move-se no máximo N vezes).
```

### 2\. Lacuna Feynman: Debugging Mental

**Teste-se:** Trace o algoritmo acima na string `"abccba"`.

  * **Passo 1:** Quando `end` chega no segundo 'c' (índice 3), `charSet` contém `{'a', 'b', 'c'}`. A condição `charSet.Contains('c')` é verdadeira.
  * **Pergunta:** O que acontece na fase de contração (`while`) até o `start` parar de se mover?
  * **Resposta Ideal:**
    1.  `start=0`, remove 'a', `start=1`. `charSet` é `{'b', 'c'}`.
    2.  `start=1`, remove 'b', `start=2`. `charSet` é `{'c'}`.
    3.  `start=2`, remove 'c', `start=3`. `charSet` é `{}`.
    4.  A repetição foi resolvida. O loop `while` termina.

-----

## Seção C: Visão Geral das Estruturas de Ordem

Faremos uma transição para as estruturas que gerenciam a **ordem** das operações, essenciais para gerenciar filas de e-mail (Exchange) e chamadas (Teams) em um sistema M365.

### 1\. Stacks (`Stack<T>`) - LIFO

  * **Regra:** **L**ast **I**n, **F**irst **O**ut (O último a entrar é o primeiro a sair).
  * **Operações C\#:** `Push` (adicionar), `Pop` (remover e retornar o topo), `Peek` (retornar o topo sem remover). Todas são **$O(1)$**.
  * **Uso:** Gerenciamento de chamadas de função (recursão), Desfazer/Refazer.

### 2\. Queues (`Queue<T>`) - FIFO

  * **Regra:** **F**irst **I**n, **F**irst **O**ut (O primeiro a entrar é o primeiro a sair).
  * **Operações C\#:** `Enqueue` (adicionar ao final), `Dequeue` (remover e retornar o início), `Peek` (retornar o início sem remover). Todas são **$O(1)$**.
  * **Uso:** Filas de tarefas, processamento de e-mails, Breadth-First Search (BFS - Aula 6).

### 3\. Próxima Aula: Prática com Ordem

**Próxima Aula:** Aplicaremos o $O(1)$ das Stacks e Queues para resolver problemas práticos de balanceamento de estruturas e simulação de fluxo.

**Tarefa de Preparação:** Familiarize-se com a sintaxe `Stack<T>` e `Queue<T>` em C\#.

```csharp
Stack<int> stack = new Stack<int>();
stack.Push(10); // Adiciona
int top = stack.Pop(); // Remove e retorna 10

Queue<string> queue = new Queue<string>();
queue.Enqueue("Email1"); // Adiciona
string next = queue.Dequeue(); // Remove e retorna "Email1"
```