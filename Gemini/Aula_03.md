# 💻 Aula 3 (C\#/.NET): Hash Maps e Sets (O Poder do $O(1)$)

Mateus, até agora você aprendeu a evitar o crescimento quadrático ($O(n^2)$) e a manipular dados em Arrays/Strings em tempo linear ($O(n)$). Hoje, vamos introduzir as estruturas de dados que permitem a **busca e inserção em tempo constante** ($O(1)$) – o santo graal da otimização: **Hash Maps** e **Hash Sets** em C\# (.NET).

-----

## 🎯 Objetivos da Aula

| Conceito | Estrutura/Técnica | Foco em C\#/.NET |
| :--- | :--- | :--- |
| **Hash Map** | `Dictionary<TKey, TValue>` | Armazenamento e recuperação de pares Chave-Valor em $O(1)$. |
| **Hash Set** | `HashSet<T>` | Verificação rápida de existência (pertencimento) em $O(1)$. |
| **Otimização** | `Two Sum` Otimizado | Reduzir a busca de pares de $O(n^2)$ para $O(n)$ usando o **Dictionary**. |

Excelente\! Chegamos ao cerne da otimização em Ciência da Computação. Os Hash Maps e Sets são as estruturas de dados que trazem a performance de $\mathbf{O(1)}$ para operações de busca, inserção e remoção, e é fundamental que você, como desenvolvedor C\# .NET, os domine.

Vamos mergulhar no "Poder do $\mathbf{O(1)}$".

-----

## Aula: Hash Maps (`Dictionary<TKey, TValue>`) e Sets (`HashSet<T>`)

### 1\. O Conceito de Hashing e o Poder do $\mathbf{O(1)}$

Em coleções tradicionais, como `List<T>`, para saber se um elemento existe, você precisa percorrer a lista inteira no pior caso (Complexidade $\mathbf{O(N)}$).

O **Hashing** muda o jogo.

#### 1.1. O que é Hashing?

O Hashing é o processo de pegar uma **chave** (que pode ser uma string, um número, ou até um objeto) e usar uma função matemática chamada **Função Hash** para transformá-la rapidamente em um **endereço numérico** (um índice) em um Array interno.

1.  **Chave (Key):** O valor que você quer armazenar/buscar (ex: `"João"`).
2.  **Função Hash:** Gera um código numérico (ex: `"João"` $\to$ `25781`).
3.  **Índice/Endereço:** O código hash é mapeado para um índice real no Array interno (ex: `25781` $\to$ Posição `5` no Array).

#### 1.2. Por que o Hashing é $\mathbf{O(1)}$?

A grande sacada é que a Funções Hash são projetadas para serem muito rápidas (Complexidade $\mathbf{O(1)}$).

Para encontrar um elemento:

1.  Você não precisa olhar a lista inteira.
2.  Você calcula o hash da chave ($\mathbf{O(1)}$).
3.  Você vai diretamente para o endereço calculado no Array ($\mathbf{O(1)}$).

Portanto, a busca, inserção e remoção são, em média, **Tempo Constante: $\mathbf{O(1)}$**.

> **Nota:** A complexidade é $\mathbf{O(1)}$ **em média**. No pior caso (chamado de **Colisão**, onde duas chaves diferentes geram o mesmo índice), o desempenho pode degradar para $\mathbf{O(N)}$, mas as implementações modernas minimizam muito esse risco.

### 2\. Hash Map: O Dicionário (`Dictionary<TKey, TValue>`)

Em C\#, a estrutura de dados que implementa o conceito de Hash Map é o **`Dictionary<TKey, TValue>`** (Dicionário).

#### 2.1. O que é um Dicionário?

É uma coleção de **pares chave-valor**. Pense nela como uma agenda telefônica:

  * **Chave (`TKey`):** Única e usada para busca (ex: o Nome).
  * **Valor (`TValue`):** O dado associado à chave (ex: o Telefone).

#### 2.2. Sintaxe Básica em C\#

```csharp
// Dicionário onde a chave é string e o valor é int
Dictionary<string, int> idades = new Dictionary<string, int>();

// 1. Inserir (Add)
idades.Add("Ana", 30);
idades.Add("Bruno", 25);

// 2. Acessar (Busca O(1)!)
int idadeDaAna = idades["Ana"]; // idades[Chave]

// 3. Verificar Existência (O(1)!)
bool temCarlos = idades.ContainsKey("Carlos"); // False

// 4. Remover (O(1)!)
idades.Remove("Bruno");

// 5. Tentativa Segura de Acessar (Melhor Prática)
if (idades.TryGetValue("Carlos", out int idadeCarlos))
{
    // A chave existe e 'idadeCarlos' foi preenchida
}
else
{
    // A chave não existe
}
```

#### 2.3. Complexidade do `Dictionary<TKey, TValue>`

| Operação | Complexidade (Média) | Complexidade (Pior Caso) |
| :--- | :---: | :---: |
| **Inserção (`Add`)** | $\mathbf{O(1)}$ | $\mathbf{O(N)}$ (em caso de muitas colisões) |
| **Busca por Chave** | $\mathbf{O(1)}$ | $\mathbf{O(N)}$ |
| **Remoção (`Remove`)** | $\mathbf{O(1)}$ | $\mathbf{O(N)}$ |
| **Percorrer Elementos** | $\mathbf{O(N)}$ | $\mathbf{O(N)}$ |

### 3\. Hash Set: O Conjunto (`HashSet<T>`)

Em C\#, a estrutura de dados que implementa o conceito de Set (Conjunto) baseado em Hashing é o **`HashSet<T>`**.

#### 3.1. O que é um HashSet?

É uma coleção de elementos que garante duas coisas:

1.  **Unicidade:** Não permite elementos duplicados.
2.  **Performance:** Oferece busca, inserção e remoção rápidas ($\mathbf{O(1)}$).

> **A Relação:** Um `HashSet<T>` é, essencialmente, um `Dictionary<T, bool>` (ou `Dictionary<T, object>`) onde você só se importa com a **Chave** (o item), e o **Valor** é apenas um indicador de que o item existe (presente).

#### 3.2. Sintaxe Básica em C\#

```csharp
// HashSet de strings
HashSet<string> cores = new HashSet<string>();

// 1. Inserir (só se for único)
cores.Add("Vermelho"); // Adiciona. Retorna 'true'.
cores.Add("Azul");
cores.Add("Vermelho"); // Não adiciona. Retorna 'false'.

// 2. Verificar Existência (O(1)!)
bool temAzul = cores.Contains("Azul"); // True
bool temVerde = cores.Contains("Verde"); // False

// 3. Remover (O(1)!)
cores.Remove("Azul");

// 4. Operações de Conjunto (Recurso Avançado)
HashSet<string> outrasCores = new HashSet<string>() { "Azul", "Amarelo" };

// Encontra a INTERSEÇÃO (elementos em comum)
cores.IntersectWith(outrasCores); // cores agora contém apenas o que é comum
```

#### 3.3. Complexidade do `HashSet<T>`

As complexidades são idênticas às do `Dictionary`, já que internamente ele é construído sobre o mesmo princípio de Hashing.

| Operação | Complexidade (Média) |
| :--- | :---: |
| **Inserção (`Add`)** | $\mathbf{O(1)}$ |
| **Busca (`Contains`)** | $\mathbf{O(1)}$ |
| **Remoção (`Remove`)** | $\mathbf{O(1)}$ |

### 4\. O Cenário de Otimização

Onde o $\mathbf{O(1)}$ faz a maior diferença é em problemas de busca.

**Problema:** Encontrar elementos duplicados em uma lista de $N$ itens.

| Solução | Complexidade |
| :--- | :--- |
| **Dois Loops Aninhados** (Comparar cada item com todos os outros) | $\mathbf{O(N^2)}$ (Muito Lento) |
| **Ordenação** (Otimizada) + **Um Loop** (Comparar vizinhos) | $\mathbf{O(N \log N)} + \mathbf{O(N)} \approx \mathbf{O(N \log N)}$ |
| **Usando um `HashSet<T>`** | $\mathbf{O(N)}$ (Rápido) |

**Exemplo de Otimização C\# (O(N)):**

```csharp
List<int> numeros = new List<int> { 1, 5, 3, 2, 5, 8 };
HashSet<int> vistos = new HashSet<int>();

foreach (int num in numeros)
{
    // A busca é O(1)!
    if (vistos.Contains(num))
    {
        Console.WriteLine($"Duplicado encontrado: {num}");
        // Saída: Duplicado encontrado: 5
        break;
    }
    // A inserção é O(1)!
    vistos.Add(num);
}
```

Ao usar o `HashSet`, você percorre a lista apenas uma vez (o que já é $\mathbf{O(N)}$), e dentro do loop, você faz operações $\mathbf{O(1)}$. O resultado é uma solução incrivelmente rápida $\mathbf{O(N)}$.

**Em resumo:** Sempre que você precisar de **buscas rápidas** ou **elementos únicos**, use **`Dictionary`** ou **`HashSet`** para desbloquear o poder da complexidade $\mathbf{O(1)}$.

-----

## Seção A: Hash Map (`Dictionary<TKey, TValue>`)

### 1\. Estudar: O que é um Hash Map

  * **Conceito:** O Hash Map (ou *Dictionary* em C\#) é uma estrutura que armazena pares **Chave-Valor** (`TKey`, `TValue`).
  * **Como Funciona:** Ele usa uma **função hash** para converter a chave (`TKey`) em um índice (endereço de memória). Este cálculo é praticamente instantâneo ($O(1)$).
  * **Performance:**
      * **Inserção, Busca e Deleção:** Média **$O(1)$** (Constante).
      * **Pior Caso:** Se houver muitas "colisões" de hash, onde diferentes chaves caem no mesmo índice, a complexidade pode degenerar para $O(n)$, mas isso é raro com boas funções hash (como as usadas pelo .NET).

### 2\. Atividade Feynman: Explicando a Magia do $O(1)$

**Cenário:** Você tem uma `List<string>` de milhões de IDs de usuários do M365 e precisa checar rapidamente se um usuário específico (`userX`) está na lista.

  * **Opção Array/List:** Percorrer a lista inteira, $O(n)$ no pior caso.
  * **Opção Dictionary:** Armazenar os IDs em um `Dictionary<string, bool>` (a chave é o ID, o valor é `true`).

**Explique:** Por que a busca no **Dictionary** é **muito mais rápida** do que a busca na **List**?

> **Resposta Ideal:** Explicar que, na **List**, o computador pode ter que checar cada célula de memória sequencialmente (busca linear $O(n)$). No **Dictionary**, o computador aplica a função hash à chave (`userX`) para **saltar diretamente** ao endereço de memória onde `userX` deveria estar, tornando a busca quase instantânea ($O(1)$).

### 3\. Prática de Codificação: Otimizando o `Two Sum`

O problema `Two Sum` (encontrar dois números que somam um alvo) é o exemplo canônico de otimização $O(n^2) \rightarrow O(n)$ com Hash Maps.

  * **Força Bruta ($O(n^2)$):** Usar dois loops aninhados para verificar todos os pares.
  * **Otimizado ($O(n)$):** Usar um **Dictionary** para armazenar números já vistos.

**Lógica O($n$):**

1.  Iterar sobre o array uma única vez ($O(n)$).
2.  Para cada número atual ($X$), calcular o `complemento` necessário: $C = \text{alvo} - X$.
3.  Perguntar ao Dictionary: "Você já viu o `complemento` $C$?" (Busca $O(1)$).
4.  Se sim, retorne os índices. Se não, adicione $X$ ao Dictionary para uso futuro.

<!-- end list -->

```csharp
using System.Collections.Generic;

public int[] TwoSumOptimized(int[] nums, int target)
{
    // Dictionary armazena (Número Visto : Índice)
    Dictionary<int, int> visitedNumbers = new Dictionary<int, int>();

    // O(n) - Apenas um loop
    for (int i = 0; i < nums.Length; i++)
    {
        int currentNum = nums[i];
        int complement = target - currentNum;

        // 1. Checa se o complemento já foi visto (O(1))
        if (visitedNumbers.ContainsKey(complement))
        {
            // Encontrado! Retorna o índice atual e o índice armazenado do complemento.
            return new int[] { visitedNumbers[complement], i };
        }

        // 2. Adiciona o número atual e seu índice para futuras buscas (O(1))
        // Verifica se a chave já existe para evitar exceção
        if (!visitedNumbers.ContainsKey(currentNum)) 
        {
            visitedNumbers.Add(currentNum, i);
        }
    }

    // Se nenhum par for encontrado
    return new int[0];
}
```

-----

## Seção B: Hash Set (`HashSet<T>`)

### 1\. Estudar: Otimizando a Verificação

  * **Conceito:** O Hash Set (`HashSet<T>`) é uma coleção de itens que garante que cada item seja **único**. Ele armazena apenas a **Chave**, sem Valor associado.
  * **Uso:** É a ferramenta ideal para problemas que exigem a verificação rápida de **pertencimento** (ex: "Esse ID já existe?").
  * **Performance:**
      * **Adicionar (`Add`) e Verificar Existência (`Contains`):** Média **$O(1)$** (Constante).

### 2\. Atividade Feynman: Conjuntos vs. Listas

**Cenário:** Você precisa garantir que todos os participantes de uma reunião do Teams tenham IDs de usuário únicos e precisa checar isso em tempo real.

**Explique:** Se você usasse uma `List<string>` para rastrear os IDs e checasse a unicidade usando `myList.Contains(newId)`, qual seria a complexidade total se você tiver que verificar $N$ novos IDs? E se usar o `HashSet<string>`?

> **Resposta Ideal:**
>
> 1.  **`List<string>`:** Cada chamada a `Contains` é $O(n)$. Se você fizer $N$ chamadas, o custo total é **$O(n^2)$**. Inaceitável para grandes $N$.
> 2.  **`HashSet<string>`:** Cada chamada a `Contains` é $O(1)$. O custo total para verificar $N$ itens é **$O(n)$**. Solução escalável.

### 3\. Prática de Codificação: Verificação de Duplicatas

**Problema:** Dado um array `nums`, verifique se ele contém números duplicados.

**Tarefa:** Use um `HashSet<int>` para resolver o problema em $O(n)$.

```csharp
using System.Collections.Generic;

public bool ContainsDuplicate(int[] nums)
{
    // O(n) em espaço
    HashSet<int> seen = new HashSet<int>();

    // O(n) em tempo
    foreach (int num in nums)
    {
        // O(1) - Checa se o número já está no conjunto
        if (seen.Contains(num))
        {
            return true; // Encontrou duplicata
        }

        // O(1) - Adiciona o número
        seen.Add(num);
    }

    return false;
}
```

-----

## 🚀 Próximos Passos (Aula 4)

**Lacuna Feynman:** Tente reescrever o código `Two Sum` de cabeça, garantindo que você use o Dictionary para armazenar o **complemento** do número atual.

**Próxima Aula:** Combinaremos o poder do $O(1)$ do **Dictionary** com o $O(n)$ da **Sliding Window** (Aula 2) para resolver problemas de **Janela Deslizante de Tamanho Variável**, como encontrar a maior substring sem caracteres repetidos. Depois, faremos uma pausa para abordar as estruturas de ordem: **Stacks e Queues**.