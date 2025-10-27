Mateus, excelente ideia! A prática imediata é a melhor forma de solidificar o aprendizado.

Abaixo está uma lista de problemas clássicos do HackerRank/LeetCode para cada uma das 8 aulas concluídas. Os problemas são relevantes para a vaga de Software Engineer M365 (foco em *backend* e otimização).

---

# 📚 Exercícios de Prática (HackerRank/LeetCode) por Aula

## 💻 Aula 1: Complexidade e Arrays (Two Pointers)

| Tema Principal | Problema (LeetCode/HackerRank) | Foco no Aprendizado | Complexidade Alvo |
| :--- | :--- | :--- | :--- |
| **Complexidade O()** | **Valid Mountain Array** (LeetCode 941) | Aplicar Two Pointers em direções opostas para uma única travessia $O(n)$. | $O(n)$ |
| **Two Pointers** | **Squares of a Sorted Array** (LeetCode 977) | Usar Two Pointers para criar um novo array ordenado sem um Sort $O(n \log n)$. | $O(n)$ |
| **Arrays/Busca** | **Find Target Indices After Sorting Array** (LeetCode 2089) | Busca linear (simples) para estabelecer o conceito $O(n)$. | $O(n)$ |

## 💻 Aula 2: Strings e Sliding Window (Janela Fixa)

| Tema Principal | Problema (LeetCode/HackerRank) | Foco no Aprendizado | Complexidade Alvo |
| :--- | :--- | :--- | :--- |
| **Strings** | **Valid Palindrome** (LeetCode 125) | Implementar o Two Pointers em Strings, lidando com caracteres e normalização. | $O(n)$ |
| **Janela Fixa** | **Maximum Average Subarray I** (LeetCode 643) | Aplicar o princípio de Sliding Window (adição e subtração) para evitar $O(n^2)$. | $O(n)$ |
| **Strings/Arrays** | **Find Pivot Index** (LeetCode 724) | Calcular somas parciais de prefixo e sufixo. | $O(n)$ |

## 💻 Aula 3: Hash Maps e Sets ($O(1)$)

| Tema Principal | Problema (LeetCode/HackerRank) | Foco no Aprendizado | Complexidade Alvo |
| :--- | :--- | :--- | :--- |
| **Hash Map** | **Two Sum** (LeetCode 1) | O problema canônico. Reduzir a busca de pares de $O(n^2)$ para $O(n)$ usando `Dictionary<TKey, TValue>`. | $O(n)$ |
| **Hash Set** | **Contains Duplicate** (LeetCode 217) | Uso direto do `HashSet<T>` para verificar unicidade em $O(n)$. | $O(n)$ |
| **Frequência** | **Majority Element** (LeetCode 169) | Usar o `Dictionary` para contar a frequência dos elementos. | $O(n)$ |

## 💻 Aula 4: Sliding Window de Tamanho Variável

| Tema Principal | Problema (LeetCode/HackerRank) | Foco no Aprendizado | Complexidade Alvo |
| :--- | :--- | :--- | :--- |
| **Janela Variável** | **Longest Substring Without Repeating Characters** (LeetCode 3) | A fusão de Sliding Window com `HashSet<char>` para checagem de $O(1)$. | $O(n)$ |
| **Janela/Condição** | **Minimum Size Subarray Sum** (LeetCode 209) | Encontrar a *menor* janela que satisfaça uma condição (o ponteiro `start` avança condicionalmente). | $O(n)$ |
| **Strings/Janela** | **Permutation in String** (LeetCode 567) | Usar a Sliding Window e o `Dictionary` (ou array de frequência) para verificar anagramas. | $O(n)$ |

## 💻 Aula 5: Stacks e Queues (LIFO/FIFO)

| Tema Principal | Problema (LeetCode/HackerRank) | Foco no Aprendizado | Complexidade Alvo |
| :--- | :--- | :--- | :--- |
| **Stack** | **Valid Parentheses** (LeetCode 20) | Uso canônico da `Stack<char>` para rastrear símbolos de abertura e verificar o LIFO. | $O(n)$ |
| **Stack** | **Min Stack** (LeetCode 155) | Problema avançado de Stack que exige que você mantenha uma segunda Stack para otimização. | $O(1)$ para Push/Pop/Min |
| **Queue** | **Implement Queue using Stacks** (LeetCode 232) | Exige o entendimento profundo de como a `Queue` funciona para simular a FIFO com LIFO. | $O(1)$ amortizado |

## 💻 Aula 6: Árvores e Grafos (DFS e BFS)

| Tema Principal | Problema (LeetCode/HackerRank) | Foco no Aprendizado | Complexidade Alvo |
| :--- | :--- | :--- | :--- |
| **DFS (Recursão)** | **Invert Binary Tree** (LeetCode 226) | Aplicação recursiva direta (DFS) para modificar a estrutura da árvore. | $O(n)$ |
| **BFS (Queue)** | **Binary Tree Level Order Traversal** (LeetCode 102) | Uso canônico da `Queue<TreeNode>` para travessia nível por nível. | $O(n)$ |
| **DFS (Grafo)** | **Number of Islands** (LeetCode 200) | Aplicação do DFS para explorar componentes conectados em uma *grid* (Grafo implícito). | $O(m \cdot n)$ |

## 💻 Aula 7: Busca Binária ($O(\log n)$) e BST

| Tema Principal | Problema (LeetCode/HackerRank) | Foco no Aprendizado | Complexidade Alvo |
| :--- | :--- | :--- | :--- |
| **Busca Binária** | **Binary Search** (LeetCode 704) | A implementação padrão do algoritmo. | $O(\log n)$ |
| **Busca Binária** | **Find First and Last Position of Element in Sorted Array** (LeetCode 34) | Variação que exige que você use a Busca Binária duas vezes (uma para o limite inferior e outra para o superior). | $O(\log n)$ |
| **BST** | **Validate Binary Search Tree** (LeetCode 98) | Aplicar o conceito de BST (passando min/max) em uma travessia (DFS). | $O(n)$ |

## 💻 Aula 8: Programação Dinâmica (PD)

| Tema Principal | Problema (LeetCode/HackerRank) | Foco no Aprendizado | Complexidade Alvo |
| :--- | :--- | :--- | :--- |
| **PD (Básico)** | **Climbing Stairs** (LeetCode 70) | O problema mais simples de PD. Aplicações de Fibonacci (Bottom-Up/Tabulação). | $O(n)$ |
| **PD (Subproblemas)**| **House Robber** (LeetCode 198) | Identificar a "estrutura ótima" e a relação de recorrência para preencher o array `dp`. | $O(n)$ |
| **PD (Memorização)**| **N-th Fibonacci Number** (LeetCode 509) | Implementação da PD (Top-Down/Bottom-Up) para garantir a complexidade $O(n)$. | $O(n)$ |

---

**Instrução para a Prática:**

1.  **Escolha 2 a 3 problemas** da tabela relevante após concluir a aula.
2.  Tente resolver o problema **sozinho** primeiro.
3.  Se ficar preso, **use o Feynman**: explique o problema, identifique a lacuna (qual estrutura está faltando?) e só então procure a solução.
4.  **Reescreva o código em C#** após entender a solução.

Boa sorte na sua maratona de prática!