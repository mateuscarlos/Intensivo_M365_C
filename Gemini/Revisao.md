# 💻 Aula 9: Revisão Geral e Integração de Conceitos (Simulação)

Mateus, você completou o curso intensivo de 8 aulas\! Você revisou todas as estruturas de dados e algoritmos essenciais para o teste da Microsoft.

O objetivo da Aula 9 é **consolidar** o conhecimento, forçar a **integração** dos conceitos e **simular** a pressão do teste, garantindo que você não apenas sabe a teoria, mas consegue aplicá-la em código C\#.

-----

## 🎯 Objetivos da Revisão

| Foco | Atividade | Meta |
| :--- | :--- | :--- |
| **Consolidação** | Revisão Feynman de $O()$ | Garantir que a Complexidade de Tempo é o primeiro pensamento. |
| **Integração** | Resolução de Problemas Mistos | Aplicar a estrutura de dados certa para a otimização. |
| **Simulação** | Teste Rápido Cronometrado | Simular a pressão de um teste de codificação real. |

-----

## Seção A: Revisão Rápida de Complexidade e Escolha de Estrutura (Feynman)

Responda rapidamente a cada pergunta, explicando o *porquê*:

| Cenário | Estrutura C\# Ideal | Complexidade da Operação |
| :--- | :--- | :--- |
| **1. Encontrar o caminho mais curto** entre dois usuários no Microsoft Graph. | `Queue<T>` (Implementação BFS) | $O(V + E)$ |
| **2. Checar se um `ID` de sessão** é duplicado em um lote de 1 milhão. | `HashSet<string>` (`Contains`) | $O(1)$ |
| **3. Inserir um novo e-mail** na fila de processamento do Exchange. | `Queue<T>` (`Enqueue`) | $O(1)$ |
| **4. Buscar um nome** em um `Array` **ordenado** de 10 milhões de nomes. | Busca Binária | $O(\log n)$ |
| **5. Encontrar a maior subsequência** de caracteres válidos. | Sliding Window + `HashSet<char>` | $O(n)$ |
| **6. Calcular um valor recorrente** (ex: PD) sem recalcular subproblemas. | `Dictionary<int, long>` (Memorização) | $O(n)$ |

-----

## Seção B: Problemas Integrados (Desafio de Codificação em C\#)

Tente resolver os problemas abaixo, **escolhendo a melhor técnica e justificando a complexidade**.

### Desafio 1: Three Sum (Integração: Arrays, Sorting, Two Pointers)

**Problema:** Encontre todos os conjuntos não duplicados de três números em um array `nums` que somam zero.

**Lógica (Dica de Otimização):**

1.  **Ordene** o array: $O(n \log n)$.
2.  Use um loop `for` externo para fixar o primeiro número ($a$).
3.  Use o algoritmo **Two Pointers** (Aula 1) nos elementos restantes para encontrar os dois números restantes ($b$ e $c$) que somam $-a$: $O(n)$.
4.  Resultado: $O(n \log n + n^2) \implies **O(n^2)**$. É o melhor que se pode fazer aqui.

### Desafio 2: Mover Zeros (Integração: Arrays, Two Pointers Eficiente)

**Problema:** Mova todos os zeros para o final de um array `nums` sem alterar a ordem relativa dos elementos não-zero. Faça isso **in-place** (sem criar um novo array).

**Lógica (Dica de Otimização):** Use a técnica de **Two Pointers** (um `writeIndex` e um `readIndex`). O `readIndex` percorre o array. Se encontra um não-zero, ele o copia para a posição `writeIndex` e avança o `writeIndex`. Ao final, o `writeIndex` marca o ponto onde todos os zeros devem ser preenchidos. Complexidade: **$O(n)$**.

```csharp
// Exemplo de solução (para conferência após a tentativa)
public void MoveZeroes(int[] nums) {
    int writeIndex = 0;
    
    // Move todos os não-zeros para o início
    for (int readIndex = 0; readIndex < nums.Length; readIndex++) {
        if (nums[readIndex] != 0) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }
    
    // Preenche o restante com zeros
    while (writeIndex < nums.Length) {
        nums[writeIndex] = 0;
        writeIndex++;
    }
}
```

### Desafio 3: Validação de Árvore de Busca Binária (Integração: Árvores, Recursão, Conceitos de BST)

**Problema:** Dada a raiz de uma Árvore Binária, determine se ela é uma **Binary Search Tree (BST) válida**.

**Lógica (Dica de Otimização):** A simples checagem `left.val < root.val < right.val` não é suficiente\! Você deve garantir que **todos** os valores na subárvore esquerda sejam menores que a raiz, e **todos** os valores na subárvore direita sejam maiores. Use a **Recursão (DFS)**, passando um intervalo (mínimo e máximo) válido para cada nó. Complexidade: **$O(n)$** (visita cada nó uma vez).

-----

## Seção C: Simulação Cronometrada do Teste

**Instruções:**

  * Escolha **UM** dos problemas de codificação da Seção B (ou um problema de nível Médio no LeetCode/HackerRank).
  * Defina um cronômetro para **45 minutos**.
  * **Foco:** Não apenas em fazer funcionar, mas em escrever código **limpo** e **bem otimizado** (como um M365 Software Engineer faria).

| Etapa | Tempo Estimado | Ação |
| :--- | :--- | :--- |
| **Análise** | 5 minutos | Leia o problema. Defina os inputs/outputs. Entenda os *edge cases* (casos extremos). |
| **Rascunho** | 10 minutos | Pense na solução $O(n^2)$ (força bruta). Defina a solução **otimizada** ($O(n)$ ou $O(\log n)$) e as estruturas necessárias (Dictionary? Two Pointers? Queue?). |
| **Codificação** | 25 minutos | Escreva o código C\# da solução otimizada. Use nomes de variáveis claros. |
| **Revisão e Teste** | 5 minutos | Teste seu código mentalmente com 1-2 *edge cases* (ex: array vazio, array de 1 elemento, todos os elementos iguais). |

## 🏁 Encerramento

Você tem todas as ferramentas para ter sucesso no teste. A diferença entre um bom e um ótimo engenheiro é a capacidade de **justificar** o *porquê* da solução ser a mais eficiente. Use a Técnica Feynman até o último minuto\!

