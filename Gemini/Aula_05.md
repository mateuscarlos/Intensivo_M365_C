# 💻 Aula 5 (C\#/.NET): Stacks e Queues (Gerenciamento de Fluxo $O(1)$)

Mateus, na aula anterior, você integrou o `HashSet` à Janela Deslizante, dominando a otimização de subsequências em $O(n)$. Hoje, o foco muda para a **gestão da ordem e do fluxo de trabalho**, usando as estruturas **Stack** e **Queue**. Estas são essenciais para modelar tarefas em sistemas concorrentes como o M365.

-----

## 🎯 Objetivos da Aula

| Conceito | Estrutura/Técnica | Foco em C\#/.NET |
| :--- | :--- | :--- |
| **Stack (Pilha)** | `Stack<T>` (LIFO) | Aplicação em balanceamento e simulação de chamadas. |
| **Queue (Fila)** | `Queue<T>` (FIFO) | Aplicação em filas de processamento e travessia BFS (futuramente). |
| **Prática** | Balanceamento de Símbolos | Uso da Stack para verificar expressões em $O(n)$. |

Com certeza\! Pilhas (Stacks) e Filas (Queues) são estruturas de dados sequenciais essenciais para gerenciar o **fluxo de trabalho** em muitos algoritmos.

Ambas fornecem garantias de tempo constante ($\mathbf{O(1)}$) para suas operações primárias de inserção e remoção, focando apenas nas extremidades da coleção.

-----

## Aula: Stacks e Queues (Gerenciamento de Fluxo $\mathbf{O(1)}$)

### 1\. Pilhas (Stacks): LIFO (Last In, First Out)

Uma pilha funciona como uma pilha de pratos: o último prato colocado em cima é o primeiro a ser retirado. É um modelo **"Último a Entrar, Primeiro a Sair" (LIFO)**.

#### 1.1. Implementação em C\#

A classe em C\# para Pilhas é **`Stack<T>`** (`System.Collections.Generic`).

| Operação | Nome em C\# | Descrição | Complexidade |
| :--- | :--- | :--- | :--- |
| **Inserção** | `Push(item)` | Adiciona um item ao topo da pilha. | $\mathbf{O(1)}$ (amortizado) |
| **Remoção** | `Pop()` | Remove e retorna o item do topo da pilha. | $\mathbf{O(1)}$ |
| **Consulta** | `Peek()` | Retorna o item do topo sem removê-lo. | $\mathbf{O(1)}$ |
| **Contagem** | `Count` | Retorna o número de itens na pilha. | $\mathbf{O(1)}$ |

#### 1.2. Exemplo e Aplicação

O uso clássico de Stacks é para rastrear o estado atual e permitir o **retorno** (rollback) ou **anulação** (undo).

**Exemplo: Verificação de Parênteses (Balanceamento)**

A pilha é usada para garantir que cada parêntese de abertura (`{`, `[`, `(`) seja fechado corretamente na ordem inversa.

```csharp
Stack<char> stack = new Stack<char>();

// Adiciona um item ao topo
stack.Push('{'); 

// Adiciona outro item, que fica por cima do anterior
stack.Push('['); 

// O último adicionado é o primeiro a sair
char ultimo = stack.Pop(); // ']'

// Consulta o novo topo
char novoTopo = stack.Peek(); // '{'
```

### 2\. Filas (Queues): FIFO (First In, First Out)

Uma fila funciona como uma fila de banco ou supermercado: o primeiro cliente a chegar é o primeiro a ser atendido. É um modelo **"Primeiro a Entrar, Primeiro a Sair" (FIFO)**.

#### 2.1. Implementação em C\#

A classe em C\# para Filas é **`Queue<T>`** (`System.Collections.Generic`).

| Operação | Nome em C\# | Descrição | Complexidade |
| :--- | :--- | :--- | :--- |
| **Inserção** | `Enqueue(item)` | Adiciona um item ao *final* da fila. | $\mathbf{O(1)}$ (amortizado) |
| **Remoção** | `Dequeue()` | Remove e retorna o item do *início* da fila. | $\mathbf{O(1)}$ |
| **Consulta** | `Peek()` | Retorna o item do início sem removê-lo. | $\mathbf{O(1)}$ |
| **Contagem** | `Count` | Retorna o número de itens na fila. | $\mathbf{O(1)}$ |

#### 2.2. Exemplo e Aplicação

O uso clássico de Queues é para gerenciar tarefas que devem ser processadas na ordem em que chegaram, como filas de impressão, buffers ou, mais importante em algoritmos, a **Busca em Largura (BFS)**.

**Exemplo: Gerenciamento de Tarefas**

```csharp
Queue<string> filaDeImpressao = new Queue<string>();

// Adiciona um item ao final da fila
filaDeImpressao.Enqueue("DocumentoA.pdf");

// Adiciona o próximo item (vai para trás do DocumentoA)
filaDeImpressao.Enqueue("ImagemB.jpg");

// O primeiro adicionado é o primeiro a ser processado e removido
string proximaTarefa = filaDeImpressao.Dequeue(); // "DocumentoA.pdf"
```

### 3\. O Segredo do $\mathbf{O(1)}$ (Amortizado)

Tanto `Stack<T>` quanto `Queue<T>` em C\# são geralmente implementadas internamente usando um **Array Dinâmico** (semelhante ao `List<T>`).

  * **Por que $\mathbf{O(1)}$ (Amortizado)?** A maioria das operações de `Push`/`Pop` ou `Enqueue`/`Dequeue` é $\mathbf{O(1)}$. O único momento em que a complexidade aumenta é quando o Array interno **enche** e precisa ser redimensionado (geralmente dobrando de tamanho). Essa operação de redimensionamento leva $\mathbf{O(N)}$, pois todos os elementos precisam ser copiados.
  * No entanto, como o redimensionamento é raro e o custo é "espalhado" por muitas operações $\mathbf{O(1)}$ que vieram antes, a complexidade média (amortizada) de todas as operações permanece $\mathbf{O(1)}$, o que é a métrica que realmente importa na prática.

### 4\. Aplicação Avançada: Pilha na Janela Deslizante

Em problemas de Janela Deslizante (que vimos na aula anterior), Pilhas e Filas são usadas para otimizar ainda mais as operações internas do loop $\mathbf{O(N)}$.

**Exemplo: Encontrando o Máximo (ou Mínimo) em uma Janela Deslizante**

Se o problema exigir que você encontre o valor *máximo* dentro da sua Janela Deslizante (em $\mathbf{O(1)}$), você pode usar uma **Fila Deques (Double-Ended Queue)**, que mantém os elementos em ordem decrescente, garantindo que o `Peek()` sempre forneça o máximo da janela.

Em resumo, Pilhas e Filas são ferramentas indispensáveis que, graças à sua garantia de $\mathbf{O(1)}$ nas operações de fluxo, são a base para construir soluções eficientes para:

  * **Rastreamento de estado:** (Stack - LIFO)
  * **Processamento sequencial:** (Queue - FIFO)
  * **Algoritmos de grafos:** (Queue para BFS, Stack para DFS)
  * **Otimização de subproblemas em $\mathbf{O(N)}$:** (Filas Deques)

-----

## Seção A: Stack (`Stack<T>`) – Last-In, First-Out (LIFO)

### 1\. Estudar: O Princípio LIFO

  * **Conceito:** A Stack (Pilha) funciona como uma pilha de pratos: o último prato colocado é o primeiro a ser retirado.
  * **Operações C\#:**
      * `Push(item)`: Adiciona um item ao topo. **$O(1)$**
      * `Pop()`: Remove e retorna o item do topo. **$O(1)$**
      * `Peek()`: Retorna o item do topo sem removê-lo. **$O(1)$**
  * **Aplicações:**
      * Gerenciamento de chamadas de função (Call Stack).
      * Desfazer/Refazer operações.
      * Avaliação de expressões matemáticas.
      * Travessia de grafos/árvores (DFS - Aula 6).

### 2\. Atividade Feynman: Explicando o Balanceamento

**Cenário:** Você precisa verificar se os parênteses `()`, chaves `{}` e colchetes `[]` em um código C\# estão corretamente balanceados e fechados na ordem certa (ex: `({[]})` é válido; `([)]` é inválido).

**Explique:** Por que a **Stack** é a estrutura perfeita para resolver este problema?

> **Resposta Ideal:** Explicar que a Stack impõe a ordem inversa (LIFO). Um parêntese de abertura (`(`) deve ser fechado por seu parêntese de fechamento (`)`) antes que qualquer parêntese *interno* a ele seja fechado. A Stack armazena o símbolo de abertura e, quando um símbolo de fechamento é encontrado, ele só pode corresponder ao **último** símbolo de abertura que foi adicionado (o topo da pilha).

### 3\. Prática de Codificação: Validação de Parênteses

**Problema:** Implemente um método que verifica se uma string de símbolos está balanceada.

**Lógica:**

1.  Use um `Dictionary` para mapear os símbolos de fechamento aos seus símbolos de abertura correspondentes (ex: `')' -> '('`).
2.  Percorra a string:
      * Se for um símbolo de abertura, faça **`Push`** na Stack.
      * Se for um símbolo de fechamento, verifique se o **`Pop`** da Stack corresponde ao seu par de abertura. Se não corresponder, a string é inválida.

<!-- end list -->

```csharp
using System.Collections.Generic;

public bool IsValidParentheses(string s)
{
    // Mapeia símbolos de fechamento para abertura (O(1) para look-up)
    var map = new Dictionary<char, char> {
        { ')', '(' },
        { ']', '[' },
        { '}', '{' }
    };
    
    // O(1) para Push/Pop
    var stack = new Stack<char>();

    // O(n) - Percorre cada caractere
    foreach (char c in s)
    {
        if (map.ContainsKey(c)) // É um símbolo de fechamento
        {
            char topElement = stack.Count == 0 ? '#' : stack.Pop();

            if (topElement != map[c])
            {
                return false; // Mismatch ou pilha vazia
            }
        }
        else // É um símbolo de abertura
        {
            stack.Push(c);
        }
    }

    // Se a Stack estiver vazia, todos os símbolos foram fechados corretamente.
    return stack.Count == 0;
}
// Complexidade: O(n) em tempo e O(n) em espaço (para a Stack)
```

-----

## Seção B: Queue (`Queue<T>`) – First-In, First-Out (FIFO)

### 1\. Estudar: O Princípio FIFO

  * **Conceito:** A Queue (Fila) funciona como uma fila de espera: o primeiro a entrar é o primeiro a ser atendido.
  * **Operações C\#:**
      * `Enqueue(item)`: Adiciona um item ao final da fila. **$O(1)$**
      * `Dequeue()`: Remove e retorna o item do início da fila. **$O(1)$**
      * `Peek()`: Retorna o item do início sem removê-lo. **$O(1)$**
  * **Aplicações:**
      * Filas de impressão, filas de processamento de e-mails (Exchange).
      * Gerenciamento de requisições de rede.
      * Travessia de grafos/árvores (BFS - Aula 6).

### 2\. Atividade Feynman: Simulando o Exchange

**Cenário:** O servidor Exchange M365 recebe continuamente novos e-mails para processamento. Se um e-mail cair na fila primeiro, ele deve ser processado primeiro, para garantir a ordem cronológica.

**Explique:** Se usássemos uma **Stack** para gerenciar a fila de processamento, qual seria o problema prático que os usuários enfrentariam?

> **Resposta Ideal:** Se usarmos uma Stack (LIFO), o e-mail mais recente (o último a ser adicionado à Stack) seria processado primeiro, enquanto o e-mail mais antigo (o primeiro a ser adicionado) ficaria no fundo, potencialmente esperando indefinidamente. A Queue (FIFO) garante **justiça** e processamento na ordem de chegada.

### 3\. Prática de Codificação: Simulação de Fila

**Problema:** Simule o processamento de 5 tarefas (IDs 1 a 5) em uma fila e determine a ordem de execução.

**Tarefa:** Use a sintaxe `Queue<int>` para simular as operações.

```csharp
using System;
using System.Collections.Generic;

public string ProcessQueueSimulation()
{
    var taskQueue = new Queue<int>();
    
    // Enqueue: Adiciona na ordem 1, 2, 3...
    Console.WriteLine("Adicionando tarefas: 1, 2, 3, 4, 5");
    for (int i = 1; i <= 5; i++)
    {
        taskQueue.Enqueue(i);
    }
    
    string result = "Ordem de Processamento: ";
    
    // Dequeue: Processa na ordem 1, 2, 3...
    while (taskQueue.Count > 0)
    {
        int taskId = taskQueue.Dequeue();
        result += taskId.ToString() + " ";
    }
    
    // O resultado deve ser "1 2 3 4 5"
    return result;
}
```

-----

## 🚀 Próximos Passos (Aula 6)

**Revisão:** Garanta que você consegue escrever o código C\# `IsValidParentheses` e explicar por que ele é $O(n)$.

**Próxima Aula:** Conectaremos Stacks e Queues ao mundo da **Organização Hierárquica**. Iremos explorar as estruturas de **Árvores e Grafos**, e como o **DFS (Depth-First Search)** e o **BFS (Breadth-First Search)** usam Stack e Queue, respectivamente, para navegação.

**Tarefa de Preparação:** Tente visualizar como um `for` loop infinito em um código C\# se assemelha a uma Stack que nunca fica vazia (Stack Overflow).