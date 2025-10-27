# 💻 Aula 2 (C\#/.NET): Strings e Sliding Window (A Janela Deslizante)

Mateus, na Aula 1, você estabeleceu a base de Complexidade $O$ e dominou a otimização de Arrays com o Two Pointers. Hoje, vamos aplicar isso a **Strings** e introduzir uma das técnicas de otimização mais valiosas para o *backend* de larga escala: a **Sliding Window**.

-----

## 🎯 Objetivos da Aula

| Conceito | Estrutura/Técnica | Foco em C\#/.NET |
| :--- | :--- | :--- |
| **Strings em C\#** | `string` vs. `StringBuilder` | Entender a **imutabilidade** e o custo da concatenação. |
| **Two Pointers** | Aplicação em Strings | Otimizar a checagem de Palíndromos. |
| **Sliding Window** | Técnica de Otimização | Reduzir $O(n^2)$ para $O(n)$ em problemas de subsequência. |


Essa é uma excelente combinação de tópicos\! **Strings** são uma estrutura de dados onipresente, e a técnica de **Janela Deslizante (Sliding Window)** é um padrão de algoritmo poderoso e fundamental para otimizar o processamento delas (e de Arrays/Listas).

Vamos à aula\!

-----

## Aula: Strings em C\# e Algoritmo de Janela Deslizante (Sliding Window)

### 1\. Strings em C\# e Complexidade

Em C\#, uma `string` é uma sequência de caracteres (texto) e é, na verdade, uma classe do .NET (`System.String`).

#### 1.1. Strings são Imutáveis (O Conceito Chave)

O ponto mais importante sobre Strings em C\# é a sua **imutabilidade**.

**O que significa Imutável?**
Uma vez que você cria uma string, ela **nunca pode ser alterada** na memória. Qualquer operação que *parece* estar modificando uma string (como concatenação, substituição ou conversão para maiúsculas) está, na verdade, **criando uma nova string** na memória.

**Exemplo Prático (e o Custo Escondido):**

```csharp
string nome = "Ana"; // String 1: "Ana"

// Concatenação:
nome += " Silva"; // String 2: "Ana Silva"
// O C# não alterou a String 1, ele criou uma String 2 com o novo conteúdo.
// A variável 'nome' agora aponta para a String 2.
```

#### 1.2. Complexidade das Operações de String

A imutabilidade tem um impacto direto na Complexidade de Tempo, especialmente na **Concatenação** (unir strings).

Seja $N$ o tamanho da string original e $M$ o tamanho da string a ser adicionada.

| Operação | Complexidade | Explicação |
| :--- | :---: | :--- |
| **Acessar Caractere** | $\mathbf{O(1)}$ | A string é um array interno de caracteres (char[]), então o acesso por índice é instantâneo. Ex: `minhaString[5]` |
| **Comparar Duas Strings** | $\mathbf{O(N)}$ | No pior caso, é preciso comparar cada um dos $N$ caracteres. |
| **Substituir/Substring** | $\mathbf{O(N)}$ | É necessário copiar o novo segmento da string. |
| **Concatenar (`+`)** | $\mathbf{O(N)}$ | O C\# precisa **alocar espaço para a nova string** e **copiar** o conteúdo da string antiga ($N$ caracteres) e o conteúdo da nova ($M$ caracteres). |

#### 1.3. Otimização para Concatenação: `StringBuilder`

Se você precisa fazer muitas operações de concatenação (ex: dentro de um loop), usar o operador `+` repetidamente é muito ineficiente, pois ele gera várias strings intermediárias ($\mathbf{O(N^2)}$ no total).

A solução no C\# é a classe **`StringBuilder`**.

  * O `StringBuilder` é **mutável** (pode ser alterado).
  * Ele armazena o texto em um buffer interno que pode crescer de forma mais eficiente.
  * Adicionar texto ao `StringBuilder` é, em média, $\mathbf{O(1)}$ (amortizado).

<!-- end list -->

```csharp
// EXTREMAMENTE LENTO para 1000 repetições (O(N^2) no total)
string resultadoLento = "";
for (int i = 0; i < 1000; i++) {
    resultadoLento += "a";
}

// RÁPIDO para 1000 repetições (O(N) no total)
System.Text.StringBuilder sb = new System.Text.StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.Append("a");
}
string resultadoRapido = sb.ToString();
```

-----

### 2\. Algoritmo de Janela Deslizante (Sliding Window)

A Janela Deslizante é uma técnica algorítmica essencial usada para processar coleções de dados (como Arrays ou Strings) de forma eficiente, geralmente transformando uma solução $\mathbf{O(N^2)}$ em $\mathbf{O(N)}$.

#### 2.1. A Ideia Principal

Em muitos problemas com Strings ou Arrays, você precisa encontrar algo (o maior/menor subarray, uma soma máxima, uma substring específica) em um **subconjunto contíguo** de elementos.

Em vez de usar dois *loops aninhados* (um para começar, outro para terminar o subconjunto), o que leva a $\mathbf{O(N^2)}$, a Janela Deslizante usa:

1.  Um ponteiro **esquerdo (Left)**.
2.  Um ponteiro **direito (Right)**.

A área entre **Left** e **Right** é a sua **"Janela"**.

#### 2.2. O Mecanismo da Janela Deslizante

A técnica funciona com um único loop principal que move o ponteiro direito (`Right`) para **expandir** a janela. O ponteiro esquerdo (`Left`) é movido para **contrair** a janela, mas só quando uma condição é violada.

**Passos:**

1.  **Inicialização:** Defina `Left` e `Right` (geralmente ambos em 0).
2.  **Expansão:** Mova `Right` para a direita, incorporando um novo elemento na janela e **atualizando** os resultados da janela. (Ex: Adicionar o novo elemento à soma).
3.  **Contração (Ajuste):** Se a janela **violar** a condição do problema (Ex: a soma máxima foi ultrapassada, ou um caractere proibido entrou na janela), mova `Left` para a direita até que a condição seja **restabelecida**. (Ex: Remover o elemento mais à esquerda da soma).
4.  **Cálculo:** Em cada passo, você calcula o resultado (máximo, mínimo, etc.) da janela atual.
5.  **Término:** O algoritmo para quando `Right` chega ao final da coleção.

#### 2.3. Exemplo Didático: Encontrar a Maior Soma Contígua de Tamanho K

**Problema:** Dado um array de inteiros e um tamanho $K$, encontre o sub-array (janela) de tamanho $K$ com a maior soma.

**Array:** `[1, 4, 2, 10, 23, 3, 1, 0, 20]` e **K = 4**

**Solução $\mathbf{O(N^2)}$ (Lenta):**

```csharp
// Iterar por todas as janelas possíveis (Lenta)
for (int i = 0; i <= N - K; i++) { // Começo da janela
    int somaAtual = 0;
    for (int j = 0; j < K; j++) { // Percorrer a janela de tamanho K
        somaAtual += array[i + j];
    }
    // ... encontrar a maior soma
}
// O(N) * O(K) = O(N*K), que no pior caso (K próximo de N) é O(N^2)
```

**Solução com Janela Deslizante $\mathbf{O(N)}$ (Rápida):**

```csharp
int[] array = { 1, 4, 2, 10, 23, 3, 1, 0, 20 };
int K = 4;
int N = array.Length;

// 1. Calcular a primeira janela (de 0 a K-1)
int somaAtual = 0;
for (int i = 0; i < K; i++) {
    somaAtual += array[i];
}
int somaMaxima = somaAtual; // 1 + 4 + 2 + 10 = 17

// 2. Deslizar a Janela
// 'i' representa o novo elemento que entra (ponteiro Right)
for (int i = K; i < N; i++) {
    // EXPANDIR: Adiciona o novo elemento
    somaAtual += array[i];

    // CONTRAIR: Subtrai o elemento que saiu (o da esquerda, 'K' posições atrás)
    somaAtual -= array[i - K];

    // 3. CÁLCULO: Atualiza a soma máxima
    somaMaxima = Math.Max(somaMaxima, somaAtual);
}

// Resultado: 38 (janela: 10, 23, 3, 1)
```

#### 2.4. A Importância da Complexidade $\mathbf{O(N)}$

No exemplo da Janela Deslizante, observe que, em vez de recalcular a soma dos $K$ elementos a cada passo (o que levaria $\mathbf{O(K)}$), nós apenas fazemos **duas operações $\mathbf{O(1)}$** (uma adição e uma subtração) para mover a janela:

$$\text{Nova Soma} = \text{Soma Antiga} + \text{Elemento Novo} - \text{Elemento Antigo}$$

Como fazemos isso apenas $N$ vezes, a complexidade total se torna **$\mathbf{O(N)}$** (Linear), que é o ideal.

A Janela Deslizante é a sua principal ferramenta para otimizar problemas de subconjuntos contíguos\!

-----

## Seção A: Strings em C\# – Imutabilidade e Performance

### 1\. Estudar: O Custo da Imutabilidade

Em C\#, a estrutura `string` é **imutável**.

  * **O que significa:** Uma vez criada, seu valor não pode ser alterado. Qualquer operação que pareça modificar a string (ex: `myString = myString + "novo"`) na verdade cria uma **nova string** na memória.
  * **Implicação de Performance:** Se você concatena strings repetidamente dentro de um `for` loop, o runtime do .NET precisa alocar e copiar memória a cada iteração, levando a uma complexidade de $O(n^2)$ no pior caso.

### 2\. Solução: `StringBuilder`

  * Para operações de *build* ou *append* repetidas (como construir uma string a partir de muitos pequenos pedaços), use a classe **`StringBuilder`**.
  * O `StringBuilder` é **mutável** e otimiza a alocação de memória, tornando as operações de adição de string muito mais próximas de $O(1)$ amortizado.

### 3\. Atividade Feynman: Explicando a Escolha da Classe

**Cenário:** Você está escrevendo um serviço M365 que gera um log detalhado a partir de 10.000 eventos. Cada evento adiciona uma linha ao log.

**Explique:** Você deve usar a concatenação padrão (`string result += line;`) ou o `StringBuilder`? Por quê?

> **Resposta Ideal:** Deve-se usar o **`StringBuilder`**. Explicar que usar a concatenação padrão criaria e copiaria strings 10.000 vezes, resultando em desempenho $O(n^2)$ total. O `StringBuilder` garante que o processo de construção do log seja eficiente, mantendo-o próximo de $O(n)$.

### 4\. Prática de Codificação: Palíndromo com Two Pointers em C\#

**Problema:** Dada uma `string s`, use Two Pointers para determinar se ela é um Palíndromo (lendo igual para frente e para trás).

```csharp
public bool IsPalindrome(string s)
{
    int left = 0;
    int right = s.Length - 1;

    // O(n) - Apenas um loop
    while (left < right)
    {
        // Se os caracteres não correspondem, não é um palíndromo.
        if (s[left] != s[right])
        {
            return false;
        }

        // Move os ponteiros para o centro
        left++;
        right--;
    }

    return true;
}
```

-----

## Seção B: Técnica de Otimização – Sliding Window (Janela Deslizante)

### 1\. Estudar: Otimizando Subsequências

A técnica **Sliding Window** é um padrão de algoritmo que resolve problemas sobre *sub-arrays* ou *substrings* de forma linear ($O(n)$), evitando o custo de $O(n^2)$ da força bruta.

  * **O Princípio:** Em vez de recalcular a soma, a contagem ou o estado de cada nova janela a partir do zero, você **reaproveita** o cálculo da janela anterior:
    $$
    $$$$\\text{Nova Soma} = \\text{Soma Antiga} - \\text{Elemento que Sai} + \\text{Elemento que Entra}
    $$
    $$$$
    $$
  * **Ponteiros:** A janela é definida por dois índices: `start` (início) e `end` (fim).

### 2\. Atividade Feynman: Explicando a Eficiência da Janela

**Problema Clássico:** Encontrar a soma máxima de qualquer sub-array de tamanho **fixo** $K$.

**Explique:** Onde estaria o loop aninhado ($O(n^2)$) na solução de força bruta, e como a **subtração/adição** da Janela Deslizante o elimina?

> **Resposta Ideal:** A solução de Força Bruta tem um loop externo que itera $N$ vezes e um loop interno que itera $K$ vezes para calcular a soma (totalizando $O(n \cdot k)$ ou $O(n^2)$). A Janela Deslizante elimina o loop interno. Para cada passo da janela, ela faz apenas $O(1)$ de trabalho (uma soma e uma subtração), resultando em um único loop principal de **$O(n)$**.

### 3\. Prática de Codificação: Soma Máxima com Janela Fixa em C\#

**Problema:** Dado um array `nums` e um tamanho $K$, encontre a soma máxima de qualquer sub-array de tamanho $K$.

**Tarefa:** Implemente o Sliding Window, focando em como `currentSum` é atualizada.

```csharp
public int MaxSubarraySum(int[] nums, int k)
{
    if (nums == null || nums.Length < k)
    {
        throw new ArgumentException("Array inválido.");
    }

    int maxSum = 0;
    int currentSum = 0;

    // 1. Inicializa a primeira janela (O(k))
    for (int i = 0; i < k; i++)
    {
        currentSum += nums[i];
    }
    maxSum = currentSum;

    // 2. Desliza a janela (O(n) a partir daqui)
    for (int end = k; end < nums.Length; end++)
    {
        // Adiciona o elemento que entra (no índice 'end')
        currentSum += nums[end];
        
        // Subtrai o elemento que sai (no índice 'end - k')
        currentSum -= nums[end - k];

        // Atualiza o resultado máximo encontrado
        maxSum = Math.Max(maxSum, currentSum);
    }

    return maxSum;
}
```

-----

## 🚀 Próximos Passos (Aula 3)

**Lacuna Feynman:** Você consegue adaptar o código `MaxSubarraySum` acima para lidar com uma janela de **tamanho variável** (ex: encontrar a menor janela cuja soma seja maior que $S$)? Isso é mais avançado, mas será o foco da próxima aula.

**Próxima Aula:** Introduziremos o **Hash Map (`Dictionary<TKey, TValue>`)** e **Hash Set (`HashSet<T>`)** em C\#, as estruturas que nos permitem reduzir a complexidade de busca de $O(n)$ para **$O(1)$**, algo fundamental para otimizar problemas de frequência e a própria Janela Deslizante.