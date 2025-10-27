# 🧭 Plano de Estudos — Preparação Completa Microsoft M365 (.NET/C#)
Período: 25/10 → 05/11  
Método: Feynman (Explicar → Testar → Corrigir → Simplificar)  
Linguagem: C# .NET 8.0  
IDE: Visual Studio Community 2022 ou VS Code com C# Dev Kit  

---

## Aula 0 – Preparando o Ambiente
### 🎯 Objetivo
Configurar o ambiente de desenvolvimento em C#, criar o primeiro projeto e entender a estrutura base de um programa.

### 🔧 Passo 1 — Instalar o .NET SDK
1. Acesse [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download)  
2. Baixe a versão **.NET 8 SDK (LTS)**.  
3. Após a instalação, verifique no terminal:
   ```bash
   dotnet --version
   ```

### 🔧 Passo 2 — Instalar a IDE
#### Opção A — Visual Studio
1. Baixe em [https://visualstudio.microsoft.com/vs/community/](https://visualstudio.microsoft.com/vs/community/)
2. Durante a instalação, selecione **Desenvolvimento com .NET**.
3. Crie um novo projeto **Console App (.NET 8)**.

#### Opção B — Visual Studio Code
1. Baixe em [https://code.visualstudio.com](https://code.visualstudio.com)  
2. Instale as extensões:
   - `C# Dev Kit`
   - `C#`
   - `NuGet Gallery`
3. Teste criando e executando um app:
   ```bash
   dotnet new console -o MeuPrimeiroApp
   cd MeuPrimeiroApp
   dotnet run
   ```

---

### 🧩 Passo 3 — Estrutura básica de um programa C#
```csharp
using System;

namespace MeuPrimeiroApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Olá, mundo!");
        }
    }
}
```
**Explicação Feynman:**  
- `using System;` importa funcionalidades básicas.  
- `namespace` organiza o código.  
- `class Program` é o contêiner principal.  
- `Main()` é o ponto de entrada.  
- `Console.WriteLine()` imprime no terminal.

---

### 🧪 Exercício Prático
Crie um programa que:
1. Peça o nome e a idade do usuário.
2. Imprima:  
   `Olá, <nome>! Você tem <idade> anos.`

```csharp
Console.Write("Digite seu nome: ");
string nome = Console.ReadLine();

Console.Write("Digite sua idade: ");
int idade = int.Parse(Console.ReadLine());

Console.WriteLine($"Olá, {nome}! Você tem {idade} anos.");
```

---

### 🧩 Desafios Extras
1. Some dois números digitados.  
2. Calcule o IMC (peso / altura²).  
3. Mostre a data e hora atuais (`DateTime.Now`).  
4. Descubra a diferença entre `Console.Write()` e `Console.WriteLine()`.  
5. Faça o “Olá Mundo” repetir 3 vezes com `for`.

---

## Aulas Seguintes
| Dia | Tema | Foco Principal |
|-----|------|----------------|
| 1 | Fundamentos do C# | Tipos, operadores, condicionais |
| 2 | Laços e Repetição | for, while, arrays |
| 3 | Coleções | List, Dictionary, foreach |
| 4 | Funções e Escopo | Métodos e retorno |
| 5 | Complexidade | Big-O e eficiência |
| 6 | Strings | Manipulação e algoritmos |
| 7 | Pilhas e Filas | Stack, Queue, expressões |
| 8 | Grafos | BFS, DFS, componentes |
| 9 | Heaps e Greedy | PriorityQueue e estratégias |
| 10 | Programação Dinâmica | Subproblemas e memorização |
| 11 | SQL e Lógica de Dados | SELECT, LINQ e consultas |
| 12 | Simulado Final | Desafios completos + revisão |

---

## 🧠 Dica
Use o **Método Feynman** diariamente:
1. Explique o conceito em suas palavras.  
2. Resolva 1 exercício sem olhar.  
3. Identifique onde travou.  
4. Reescreva sua explicação de forma simples.

---
