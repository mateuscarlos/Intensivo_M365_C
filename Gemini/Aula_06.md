# 💻 Aula 6 (C\#/.NET): Árvores e Grafos (DFS e BFS)

Mateus, você dominou as estruturas lineares e a gestão de ordem ($O(1)$) com Stacks e Queues. Hoje, vamos avançar para o **mundo das conexões e hierarquias** com **Árvores** e **Grafos**, que modelam dados complexos (como a estrutura de arquivos do SharePoint ou as redes de comunicação do Teams).

O foco será nas duas principais formas de travessia, que dependem diretamente das Stacks e Queues da aula anterior.

-----

## 🎯 Objetivos da Aula

| Conceito | Estrutura/Técnica | Foco em C\#/.NET |
| :--- | :--- | :--- |
| **Árvores & Grafos** | Conceitos Fundamentais | Entender a diferença e a representação. |
| **DFS (Depth-First Search)** | Busca em Profundidade | Aplicação da **Stack** (ou recursão) para explorar o mais fundo possível. |
| **BFS (Breadth-First Search)** | Busca em Largura | Aplicação da **Queue** para explorar camada por camada. |

Fantástico\! Árvores e Grafos são o próximo nível de complexidade e poder em estruturas de dados. Eles representam conexões, hierarquias e caminhos, sendo a base para a inteligência em roteamento, sistemas de arquivos e redes sociais.

Vamos explorar as duas estratégias de travessia mais importantes: DFS e BFS.

-----

## Aula: Árvores e Grafos (DFS e BFS)

### 1\. Grafos e Árvores: Representação de Conexões

#### 1.1. Grafos

Um **Grafo** é uma coleção de **Vértices** (Nós) e **Arestas** (Conexões) que ligam esses vértices.

  * **Não Direcionados:** A conexão é mútua (A está ligado a B, e B está ligado a A).
  * **Direcionados:** A conexão tem sentido único (A está ligado a B, mas B não está necessariamente ligado a A).

#### 1.2. Árvores

Uma **Árvore** é um tipo especial de Grafo: um grafo conexo e não cíclico. A maioria das vezes, nos concentramos em **Árvores Enraizadas** (com um nó principal, a Raiz), que representam hierarquias.

  * **Exemplos:** Árvores de Diretórios (Sistema de Arquivos), Árvores de Decisão, Árvores de Busca Binária (BSTs).

#### 1.3. Representação em Código

Em C\#, as árvores e grafos não possuem classes nativas como `List<T>`. Eles são construídos usando coleções que já estudamos:

1.  **Representação por Lista de Adjacência (Mais Comum):** Para cada Vértice, usamos uma `List<T>` (ou `HashSet<T>`) para armazenar seus vizinhos/filhos. É a representação mais eficiente para grafos esparsos (poucas arestas).

      * **Exemplo:** `Dictionary<string, List<string>> grafo;`

2.  **Representação por Matriz de Adjacência:** Usamos um `bool[,]` ou `int[,]` onde `matriz[i, j] = true` se houver uma aresta de `i` para `j`. Eficiente para grafos densos.

### 2\. Algoritmos de Travessia: DFS vs. BFS

Travessia (ou *Traversal*) é o processo de visitar cada nó de um grafo ou árvore. Os dois métodos mais importantes usam as estruturas de dados **Stack** e **Queue** que vimos na aula anterior para gerenciar a ordem das visitas.

#### 2.1. Busca em Profundidade (Depth-First Search - DFS)

A DFS explora o máximo possível ao longo de cada ramo **antes** de retornar (backtrack). É como um labirinto: você segue um caminho até o fim, e só então volta para tentar o próximo.

  * **Estrutura de Dados:** **Pilha (`Stack<T>`)** ou **Recursão** (que usa a pilha de chamadas do sistema).
  * **Princípio:** LIFO (Last In, First Out).
  * **Aplicações:**
      * Encontrar um caminho (qualquer um) entre dois nós.
      * Detecção de Ciclos.
      * Ordenação Topológica.

#### 2.2. Implementação DFS (com Pilha)

```csharp
public void DFS_Iterativo(string startNode, Dictionary<string, List<string>> graph)
{
    HashSet<string> visited = new HashSet<string>(); // Para O(1) de verificação
    Stack<string> stack = new Stack<string>();

    stack.Push(startNode);
    visited.Add(startNode);

    while (stack.Count > 0)
    {
        string current = stack.Pop(); // O(1): Pega o último adicionado
        Console.WriteLine(current);

        // Explora todos os vizinhos do nó atual
        foreach (string neighbor in graph[current])
        {
            if (!visited.Contains(neighbor))
            {
                visited.Add(neighbor);
                stack.Push(neighbor); // O(1): Vai fundo no novo vizinho
            }
        }
    }
}
```

#### 2.3. Busca em Largura (Breadth-First Search - BFS)

A BFS explora todos os vizinhos de um nó no **nível atual** antes de prosseguir para os vizinhos do próximo nível. É como a propagação de ondas na água.

  * **Estrutura de Dados:** **Fila (`Queue<T>`)**.
  * **Princípio:** FIFO (First In, First Out).
  * **Aplicações:**
      * **Encontrar o Caminho Mais Curto** (em termos de número de arestas) em um grafo não ponderado.
      * Componentes Conexos.
      * Navegação em níveis (ex: em árvores de menu).

#### 2.4. Implementação BFS (com Fila)

```csharp
public void BFS_Iterativo(string startNode, Dictionary<string, List<string>> graph)
{
    HashSet<string> visited = new HashSet<string>(); // Para O(1) de verificação
    Queue<string> queue = new Queue<string>();

    queue.Enqueue(startNode);
    visited.Add(startNode);

    while (queue.Count > 0)
    {
        string current = queue.Dequeue(); // O(1): Pega o primeiro da fila
        Console.WriteLine(current);

        // Explora todos os vizinhos do nó atual
        foreach (string neighbor in graph[current])
        {
            if (!visited.Contains(neighbor))
            {
                visited.Add(neighbor);
                queue.Enqueue(neighbor); // O(1): Adiciona no final para processar depois
            }
        }
    }
}
```

### 3\. Complexidade de Tempo (DFS e BFS)

A complexidade de tempo para ambos os algoritmos em um Grafo com $V$ Vértices e $E$ Arestas depende da forma como o grafo é representado:

| Representação | DFS / BFS (Lista de Adjacência) | DFS / BFS (Matriz de Adjacência) |
| :--- | :--- | :--- |
| **Complexidade** | $\mathbf{O(V + E)}$ | $\mathbf{O(V^2)}$ |

**Explicação:**

1.  **Vértices ($\mathbf{V}$):** Cada Vértice é visitado e adicionado/removido da Stack/Queue exatamente uma vez ($\mathbf{O(V)}$).
2.  **Arestas ($\mathbf{E}$):** O loop que itera sobre os vizinhos ($\rightarrow$ Arestas) é executado para cada Vértice. No total, todas as arestas são examinadas exatamente uma vez ($\mathbf{O(E)}$).

Portanto, a complexidade total é a soma do tempo para processar todos os Vértices e todas as Arestas: $\mathbf{O(V + E)}$.

Esta complexidade é considerada **linear** em relação ao tamanho do grafo, tornando DFS e BFS muito eficientes.

-----

## Seção A: Árvores e Grafos – Modelando Conexões

### 1\. Estudar: Definições Essenciais

  * **Grafo:** Coleção de **Vértices (Nós)** e **Arestas (Conexões)**. Pode ter ciclos (ex: Amigo A é amigo de B, e B é amigo de A).
      * **Representação C\#:** Geralmente por uma `Dictionary<T, List<T>>` (Lista de Adjacência), onde a Chave é o Nó e a Lista são seus vizinhos.
  * **Árvore:** Um tipo especial de Grafo que **não tem ciclos** e possui um único Nó de partida (Raiz).
      * **Árvore Binária:** Cada Nó tem no máximo dois filhos (Left e Right).

### 2\. Atividade Feynman: Explicando a Diferença

**Cenário:** O M365 usa Grafos e Árvores em diferentes contextos.

  * **Árvore:** Estrutura hierárquica de pastas e arquivos no OneDrive.
  * **Grafo:** A rede de conexões (quem segue quem, quem se comunica com quem) no Microsoft Graph.

**Explique:** Qual é a principal característica que diferencia a estrutura de Pastas/Arquivos (Árvore) da estrutura de Amizades/Conexões (Grafo)?

> **Resposta Ideal:** A principal diferença é a **existência de ciclos**. Numa estrutura de pastas (Árvore), você não pode ter a Pasta A contendo a Pasta B, que, por sua vez, contém a Pasta A (ciclo). Num Grafo, um ciclo é normal (ex: Eu sou seu amigo, você é meu amigo).

-----

## Seção B: Travessia DFS (Depth-First Search) – Profundidade Primeiro

### 1\. Estudar: O Princípio DFS

  * **Conceito:** A Busca em Profundidade explora o máximo possível ao longo de cada ramo antes de retroceder (backtracking).
  * **Implementação:** É tipicamente implementada de duas formas:
    1.  **Recursão:** O método mais elegante (as chamadas de função usam o **Call Stack** do sistema).
    2.  **Iterativa:** Usando explicitamente uma **`Stack<T>`** para rastrear os nós a serem visitados.
  * **Aplicações:** Verificar se um caminho existe (ex: labirinto), topologia.

### 2\. Atividade Feynman: Mapeando a Pilha de Chamadas

**Cenário:** Travessia Pré-Ordem (Raiz, Esquerda, Direita) em uma Árvore Binária.

**Explique:** Quando a recursão atinge uma Folha (um nó sem filhos), como o algoritmo "sabe" para onde voltar para explorar o lado direito da árvore?

> **Resposta Ideal:** O sistema usa a **Call Stack (Pilha de Chamadas)**. Quando o código faz a chamada recursiva para o lado esquerdo, a função atual é pausada e seu **estado** é empilhado. Ao atingir a folha, a função retorna, e o estado anterior é retirado da pilha, permitindo que o código retome a execução exatamente onde parou, que é geralmente a linha de código que chama a exploração do lado direito.

### 3\. Prática de Codificação: DFS Recursivo (Pré-Ordem)

**Tarefa:** Implemente a travessia Pré-Ordem para uma `TreeNode` simples.

```csharp
// Classe de Nó simples para Árvore Binária
public class TreeNode 
{
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class TreeTraversal 
{
    public void PreorderTraversal(TreeNode root)
    {
        if (root == null)
            return;

        // 1. Processa o Nó Raiz (Profundidade)
        Console.WriteLine(root.val); 

        // 2. Chama recursivamente a Esquerda (Pilha)
        PreorderTraversal(root.left);

        // 3. Chama recursivamente a Direita (Pilha)
        PreorderTraversal(root.right);
    }
}
// Complexidade: O(V + E) onde V é o número de Vértices/Nós e E é o número de Arestas/Conexões.
```

-----

## Seção C: Travessia BFS (Breadth-First Search) – Largura Primeiro

### 1\. Estudar: O Princípio BFS

  * **Conceito:** A Busca em Largura explora todos os vizinhos de um nó (nível) antes de avançar para o próximo nível. É a forma de "onda" de busca.
  * **Implementação:** O BFS **sempre** é implementado usando uma **`Queue<T>`** para garantir a ordem FIFO (primeiro a entrar, primeiro a ser visitado).
  * **Aplicações:** Encontrar o **caminho mais curto** não-ponderado (em número de passos), navegação em níveis (ex: interface gráfica).

### 2\. Atividade Feynman: Caminho Mais Curto

**Cenário:** Você está no Teams e quer enviar uma mensagem para um colega. O sistema precisa encontrar o caminho de rede mais rápido (em número de saltos) até esse colega.

**Explique:** Por que o **BFS** (Queue) sempre encontrará o caminho **mais curto** (em termos de número de arestas/conexões), enquanto o DFS (Stack/Recursão) pode encontrar um caminho muito longo?

> **Resposta Ideal:** A **Queue (BFS)** garante que você visite todos os nós a 1 passo de distância, depois todos os nós a 2 passos de distância, e assim por diante. Assim que você encontra o nó de destino, você tem a garantia de que foi o caminho com o menor número de passos (níveis), pois caminhos mais longos só seriam explorados *depois*.

### 3\. Prática de Codificação: BFS Iterativo

**Tarefa:** Implemente o BFS para imprimir os nós de uma Árvore Binária, nível por nível.

```csharp
using System.Collections.Generic;

public void BreadthFirstSearch(TreeNode root)
{
    if (root == null)
        return;

    // A Fila garante a ordem FIFO (nível por nível)
    Queue<TreeNode> queue = new Queue<TreeNode>();
    queue.Enqueue(root);

    // O(V + E)
    while (queue.Count > 0)
    {
        // 1. Dequeue: Processa o nó (primeiro da fila)
        TreeNode node = queue.Dequeue();
        Console.WriteLine(node.val);

        // 2. Enqueue Esquerda: Adiciona o próximo nível
        if (node.left != null)
        {
            queue.Enqueue(node.left);
        }

        // 3. Enqueue Direita: Adiciona o próximo nível
        if (node.right != null)
        {
            queue.Enqueue(node.right);
        }
    }
}
```

-----

## 🚀 Próximos Passos (Aula 7)

**Lacuna Feynman:** Desenhe uma Árvore Binária simples (com 5 nós). Simule o BFS e o DFS, anotando a ordem de visita. Certifique-se de que consegue explicar como a Queue e a Stack controlam o fluxo de cada um.

**Próxima Aula:** Abordaremos as estruturas que gerenciam a **Ordem e a Velocidade de Acesso**, focando na **Busca Binária ($O(\log n)$)** e no **Binary Search Tree (BST)**, essenciais para pesquisa rápida em grandes volumes de dados.