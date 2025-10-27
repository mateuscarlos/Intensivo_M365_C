# 💻 Aula 7 (C\#/.NET): Busca Binária e BST (O Poder do $O(\log n)$)

Mateus, você dominou as travessias de Grafos e Árvores ($O(V+E)$) usando Stacks e Queues. Hoje, o foco é em **acelerar a busca** em conjuntos ordenados de dados, alcançando a eficiência **logarítmica** ($O(\log n)$), um requisito de baixa latência em serviços como o M365.

-----

## 🎯 Objetivos da Aula

| Conceito | Estrutura/Técnica | Foco em C\#/.NET |
| :--- | :--- | :--- |
| **Busca Binária** | Algoritmo de Pesquisa | Redução drástica da complexidade: $O(n) \to O(\log n)$. |
| **Binary Search Tree (BST)** | Árvore de Busca Binária | Estrutura que mantém os dados ordenados dinamicamente. |
| **Prática** | Implementação de Busca Binária | Aplicação do algoritmo em um Array. |

Absolutamente\! Chegamos à complexidade **Logarítmica, $\mathbf{O(\log N)}$**, que representa a elite da eficiência em busca de dados. Ela é o resultado de estratégias inteligentes de divisão de problemas.

Vamos explorar a **Busca Binária** e sua estrutura de dados favorita, a **Árvore de Busca Binária (BST)**.

-----

## Aula: Busca Binária e BST (O Poder do $\mathbf{O(\log N)}$)

### 1\. A Complexidade Logarítmica $\mathbf{O(\log N)}$

O $\mathbf{O(\log N)}$ (Logaritmo de $N$ na base 2) significa que a cada passo (iteração) do seu algoritmo, você consegue **eliminar (descartar) metade** do problema restante.

Pense assim:

  * Se $N = 1.000.000$, um algoritmo $\mathbf{O(N)}$ faria 1 milhão de passos.
  * Um algoritmo $\mathbf{O(\log N)}$ faria apenas $\approx 20$ passos\! (Pois $2^{20} \approx 1$ milhão).

Este é um salto gigantesco de performance e é a base da **Busca Binária**.

### 2\. Busca Binária (Binary Search)

A Busca Binária é um algoritmo de busca extremamente rápido, mas que exige uma condição fundamental: o conjunto de dados (Array ou Lista) deve estar **ordenado**.

#### 2.1. Como Funciona

1.  **Pré-requisito:** A coleção deve estar **ordenada** (crescente ou decrescente).
2.  **Passo 1: Meio:** Encontre o elemento do meio da coleção.
3.  **Passo 2: Comparação:** Compare o valor procurado com o valor do meio.
4.  **Passo 3: Descarte:**
      * Se o valor procurado for **menor** que o do meio, você descarta a metade **direita** da coleção.
      * Se o valor procurado for **maior** que o do meio, você descarta a metade **esquerda** da coleção.
      * Se for igual, você encontrou o valor.
5.  **Repetição:** Repita o processo na metade restante até encontrar o elemento ou até não restar mais nada para buscar.

#### 2.2. Complexidade e Uso em C\#

  * **Complexidade de Busca:** $\mathbf{O(\log N)}$.

Em C\#, você não precisa implementar a Busca Binária do zero para um `Array` ou `List<T>`, pois o .NET a fornece:

```csharp
int[] numeros = { 10, 20, 30, 40, 50 }; // DEVE estar ordenado!

// Usa a implementação nativa de Busca Binária do .NET
int indice = Array.BinarySearch(numeros, 30); // indice = 2
```

> **Atenção:** A Busca Binária só é eficiente se o conjunto já estiver ordenado. Se você precisar ordená-lo antes, o custo da ordenação ($\mathbf{O(N \log N)}$) deve ser levado em conta.

### 3\. Árvore de Busca Binária (Binary Search Tree - BST)

Enquanto a Busca Binária é aplicada a arrays lineares, a BST é uma estrutura de dados **hierárquica** (um tipo de Árvore) que aplica o mesmo princípio $\mathbf{O(\log N)}$ em sua própria estrutura.

#### 3.1. Regra da BST

Uma BST é construída com uma regra simples:

1.  Para qualquer nó na árvore, todos os valores na sua **subárvore esquerda** devem ser **menores** que o valor do nó.
2.  Todos os valores na sua **subárvore direita** devem ser **maiores** que o valor do nó.

Essa ordem permite que as operações de busca, inserção e remoção sejam feitas com a mesma eficiência da Busca Binária.

#### 3.2. Operações em uma BST

| Operação | Complexidade (Melhor/Médio Caso) | Complexidade (Pior Caso) |
| :--- | :---: | :---: |
| **Busca** | $\mathbf{O(\log N)}$ | $\mathbf{O(N)}$ |
| **Inserção** | $\mathbf{O(\log N)}$ | $\mathbf{O(N)}$ |
| **Remoção** | $\mathbf{O(\log N)}$ | $\mathbf{O(N)}$ |

**Explicação do Pior Caso ($\mathbf{O(N)}$):**

O pior caso ocorre quando a BST fica **desbalanceada**. Isso acontece quando os elementos são inseridos em ordem crescente ou decrescente (ex: 1, 2, 3, 4, 5...). A árvore degenera em uma linha (lista encadeada), e a busca precisa percorrer todos os $N$ elementos, perdendo a eficiência $\mathbf{O(\log N)}$.

#### 3.3. Uso em C\# (.NET)

O .NET não possui uma classe `BST` genérica pura, mas a funcionalidade de BST balanceada é usada internamente por classes que precisam de ordenação rápida:

  * **`SortedDictionary<TKey, TValue>`:** Implementa um dicionário ordenado.
  * **`SortedSet<T>`:** Implementa um conjunto ordenado.

Ambas as classes utilizam estruturas de árvore binária **autobalanceáveis** (como Red-Black Trees) nos bastidores. O autobalanceamento é crucial, pois garante que as complexidades de busca, inserção e remoção permaneçam consistentemente em **$\mathbf{O(\log N)}$** (sem o pior caso $\mathbf{O(N)}$ da BST simples).

Em resumo, a Busca Binária e a BST (ou suas implementações autobalanceadas) são suas ferramentas de escolha sempre que você precisar de **buscas ultrarrápidas** em coleções **ordenadas** de grande volume.

-----

## Seção A: Busca Binária – O $O(\log n)$

### 1\. Estudar: O Princípio da Divisão

  * **Conceito:** A Busca Binária é um algoritmo de pesquisa **extremamente rápido** que só pode ser aplicado a coleções de dados **estritamente ordenadas** (Arrays ou Listas).
  * **Como Funciona:** Em cada passo, o algoritmo elimina **metade** do espaço de busca restante.
  * **Complexidade:** **$O(\log n)$**.
      * **Por que é tão rápido?** Para uma lista com $1$ milhão de itens ($N \approx 10^6$), a Busca Binária leva, no máximo, **20 passos** ($\log_2 10^6 \approx 19.9$). Uma busca linear ($O(n)$) levaria até 1 milhão de passos\!

### 2\. Atividade Feynman: Explicando a Eficiência

**Cenário:** Você está procurando o e-mail de um colega em uma lista alfabética de 1.000.000 de funcionários (sem usar um *hash map*).

**Explique:** Se você chutar o nome no meio da lista e ele for "maior" que o alvo, por que você pode descartar com segurança **metade** da lista inteira?

> **Resposta Ideal:** Explicar que, como a lista está **ordenada**, se o seu chute do meio é maior que o alvo, **todos** os nomes à direita daquele chute também serão maiores que o alvo. Assim, não é necessário verificá-los, eliminando $50\%$ do problema com uma única comparação.

### 3\. Prática de Codificação: Busca Binária Iterativa

**Problema:** Dado um array `nums` **ordenado** e um `target`, retorne o índice do `target`.

**Lógica:** Use os índices `low` (início) e `high` (fim). Calcule `mid = low + (high - low) / 2` para evitar *overflow*.

```csharp
public int BinarySearch(int[] nums, int target)
{
    int low = 0;
    int high = nums.Length - 1;

    // O(log n)
    while (low <= high)
    {
        // Cálculo de 'mid' seguro para evitar overflow em inteiros grandes
        int mid = low + (high - low) / 2;

        if (nums[mid] == target)
        {
            return mid; // Encontrado
        }
        else if (nums[mid] < target)
        {
            // O alvo está na metade direita (maior)
            low = mid + 1; 
        }
        else // nums[mid] > target
        {
            // O alvo está na metade esquerda (menor)
            high = mid - 1;
        }
    }

    return -1; // Não encontrado
}
```

-----

## Seção B: Binary Search Tree (BST) – Ordem Dinâmica

### 1\. Estudar: O BST

  * **Conceito:** Uma BST é uma Árvore Binária **ordenada**. Ela combina a velocidade de acesso de uma busca binária com a flexibilidade de uma estrutura de lista encadeada.
  * **Regra da BST:** Para **qualquer** nó na árvore:
    1.  Todos os valores na subárvore **esquerda** são **menores** que o valor do nó.
    2.  Todos os valores na subárvore **direita** são **maiores** que o valor do nó.
  * **Performance:**
      * **Busca, Inserção, Deleção (Melhor e Caso Médio):** **$O(\log n)$** (muito rápido).
      * **Pior Caso:** Se os dados são inseridos em ordem estritamente crescente, a BST se degenera em uma lista encadeada, e a complexidade de busca se torna $O(n)$.

### 2\. Atividade Feynman: Inserção vs. Acesso

**Cenário:** Comparando um Array Ordenado com uma BST.

  * **Array Ordenado:**
      * Busca: $O(\log n)$ (ótimo\!).
      * Inserção de novo item: $O(n)$ (ruim\! exige mover todos os elementos).
  * **BST:**
      * Busca: $O(\log n)$ (ótimo\!).
      * Inserção de novo item: $O(\log n)$ (ótimo\!).

**Explique:** Por que a BST é muito melhor para sistemas que exigem **inserção/deleção frequente** (como logs de eventos) do que um Array Ordenado?

> **Resposta Ideal:** Explicar que a BST gerencia a ordem através de ponteiros (referências) e não por alocação contígua de memória. Inserir um novo nó (manter a ordem) exige apenas $O(\log n)$ comparações para encontrar o local e $O(1)$ para atualizar os ponteiros, enquanto o Array exige o custoso $O(n)$ para mover fisicamente os dados.

### 3\. Prática de Conceito: Inserção em BST

**Tarefa:** Descreva a lógica de inserção em uma BST (sem código, apenas o fluxo de decisão).

1.  Comece na Raiz.
2.  Se o valor a ser inserido for **menor** que o nó atual, vá para a **esquerda**.
3.  Se o valor a ser inserido for **maior** que o nó atual, vá para a **direita**.
4.  Repita até encontrar um nó vazio (`null`) para inserir o novo nó.

-----

## 🚀 Próximos Passos (Aula 8)

**Lacuna Feynman:** Se você tivesse um array muito grande que **muda raramente**, você usaria o Array com Busca Binária ($O(\log n)$) ou a BST? Por quê? (Resposta: O Array, pois o $O(n)$ da inserção é tolerável e a busca é mais rápida devido à localidade de referência).

**Próxima Aula:** Abordaremos a **Programação Dinâmica (PD)**. Este é o tópico mais desafiador e importante para otimização de subproblemas e envolve o uso inteligente de Hash Maps e Arrays (Memorização) para evitar recalcular resultados (evitar $O(2^n)$ e alcançar $O(n)$).

**Tarefa de Preparação:** Tente calcular o 50º número de Fibonacci de forma recursiva (sem cache). Perceba o quão lento é o processo e isso justificará a necessidade de PD.