# 📗 Solucoes_M365_Prep — Soluções dos Exercícios (Aulas 00–10)

> Todas as soluções estão em **C#**, com explicações curtas antes de cada trecho de código.  
> Use-as como referência após tentar resolver por conta própria.

---

## ✅ Aula 00 — Preparação do Ambiente

### Ex 1 — Olá, mundo do .NET
**Ideia:** imprimir uma string fixa.
```csharp
Console.WriteLine("Olá, mundo do .NET!");
```

### Ex 2 — Cumprimento com nome
**Ideia:** ler entrada e interpolar.
```csharp
Console.Write("Seu nome: ");
string nome = Console.ReadLine();
Console.WriteLine($"Olá, {nome}!");
```

### Ex 3 — Soma de dois inteiros
```csharp
Console.Write("A e B: ");
var p = Console.ReadLine().Split();
int a = int.Parse(p[0]), b = int.Parse(p[1]);
Console.WriteLine(a + b);
```

### Ex 4 — Data e hora atuais
```csharp
Console.WriteLine(DateTime.Now);
```

### Ex 5 — Projeto `TesteAmbiente` (exibir nome e versão)
```csharp
Console.Write("Seu nome: ");
string nome = Console.ReadLine();
Console.WriteLine($"Nome: {nome}");
var versao = System.Diagnostics.FileVersionInfo.GetVersionInfo(typeof(object).Assembly.Location).ProductVersion;
Console.WriteLine($"DOTNET SDK (reportado pela CLI, execute externamente): use `dotnet --version`");
```

---

## ✅ Aula 01 — Fundamentos do C#

### Ex 1 — Par ou ímpar
```csharp
int n = int.Parse(Console.ReadLine());
Console.WriteLine(n % 2 == 0 ? "Par" : "Ímpar");
```

### Ex 2 — Maior de três números
```csharp
var v = Console.ReadLine().Split();
int a = int.Parse(v[0]), b = int.Parse(v[1]), c = int.Parse(v[2]);
Console.WriteLine(Math.Max(a, Math.Max(b, c)));
```

### Ex 3 — Tabuada 1..10
```csharp
int n = int.Parse(Console.ReadLine());
for (int i = 1; i <= 10; i++) Console.WriteLine($"{n} x {i} = {n*i}");
```

### Ex 4 — Contagem regressiva
```csharp
int n = int.Parse(Console.ReadLine());
for (int i = n; i >= 0; i--) Console.WriteLine(i);
```

### Ex 5 — Soma dos pares até N
```csharp
int n = int.Parse(Console.ReadLine()), s = 0;
for (int i = 0; i <= n; i += 2) s += i;
Console.WriteLine(s);
```

---

## ✅ Aula 02 — Arrays e Listas

### Ex 1 — Soma de 5 inteiros
```csharp
int[] a = Array.ConvertAll(Console.ReadLine().Split(), int.Parse);
Console.WriteLine(a.Sum());
```

### Ex 2 — Maior e menor dentre N
```csharp
int n = int.Parse(Console.ReadLine());
int min = int.MaxValue, max = int.MinValue;
for (int i = 0; i < n; i++) {
    int x = int.Parse(Console.ReadLine());
    min = Math.Min(min, x); max = Math.Max(max, x);
}
Console.WriteLine($"min={min}, max={max}");
```

### Ex 3 — Remover duplicados mantendo ordem
```csharp
var nums = Console.ReadLine().Split().Select(int.Parse).ToList();
var seen = new HashSet<int>();
var res = new List<int>();
foreach (var x in nums) if (seen.Add(x)) res.Add(x);
Console.WriteLine(string.Join(" ", res));
```

### Ex 4 — Ordenar nomes
```csharp
var nomes = Console.ReadLine().Split().ToList();
nomes.Sort(StringComparer.OrdinalIgnoreCase);
Console.WriteLine(string.Join(", ", nomes));
```

### Ex 5 — Notas até -1 (média, maior, menor)
```csharp
var notas = new List<double>();
while (true) {
    double v = double.Parse(Console.ReadLine());
    if (v == -1) break;
    notas.Add(v);
}
Console.WriteLine($"media={notas.Average():F2}, max={notas.Max()}, min={notas.Min()}");
```

---

## ✅ Aula 03 — Strings e Dicionários

### Ex 1 — Tamanho da palavra
```csharp
string s = Console.ReadLine();
Console.WriteLine(s.Length);
```

### Ex 2 — Contar 'a' (case-insensitive)
```csharp
string s = Console.ReadLine().ToLower();
int cnt = s.Count(ch => ch == 'a');
Console.WriteLine(cnt);
```

### Ex 3 — Palavras palíndromos entre si (“amor”/“roma”)
```csharp
string a = Console.ReadLine().ToLower(), b = Console.ReadLine().ToLower();
string ra = new string(a.Reverse().ToArray());
Console.WriteLine(ra == b ? "Sim" : "Não");
```

### Ex 4 — Frequência de letras
```csharp
string s = Console.ReadLine().ToLower();
var freq = new Dictionary<char,int>();
foreach (char c in s.Where(char.IsLetter)) freq[c] = freq.GetValueOrDefault(c,0)+1;
foreach (var kv in freq.OrderBy(k=>k.Key)) Console.WriteLine($"{kv.Key}: {kv.Value}");
```

### Ex 5 — Palavra mais longa
```csharp
string texto = Console.ReadLine();
var palavras = texto.Split(new[]{' ', '	', '
', '', ',', '.', ';', '!', '?'}, StringSplitOptions.RemoveEmptyEntries);
string ans = palavras.OrderByDescending(p=>p.Length).FirstOrDefault() ?? "";
Console.WriteLine(ans);
```

---

## ✅ Aula 04 — Two Pointers e Sliding Window

### Ex 1 — Remover duplicados em array ordenado (retornar novo tamanho)
```csharp
int RemoveDuplicados(int[] nums){
    if (nums.Length==0) return 0;
    int i=0;
    for (int j=1;j<nums.Length;j++){
        if (nums[j]!=nums[i]) nums[++i]=nums[j];
    }
    return i+1;
}
// uso:
var arr = Array.ConvertAll(Console.ReadLine().Split(), int.Parse);
Console.WriteLine(RemoveDuplicados(arr));
```

### Ex 2 — Maior soma de subarray de tamanho k
```csharp
var parts = Console.ReadLine().Split(); // numeros
int k = int.Parse(Console.ReadLine());
int[] a = parts.Select(int.Parse).ToArray();
int soma=0, max;
for (int i=0;i<k;i++) soma+=a[i];
max=soma;
for (int i=k;i<a.Length;i++){ soma+=a[i]-a[i-k]; max=Math.Max(max,soma); }
Console.WriteLine(max);
```

### Ex 3 — Substring mais longa sem repetição
```csharp
string s = Console.ReadLine();
var last = new Dictionary<char,int>();
int ini=0, best=0;
for (int i=0;i<s.Length;i++){
    char c=s[i];
    if (last.ContainsKey(c) && last[c]>=ini) ini=last[c]+1;
    last[c]=i;
    best=Math.Max(best, i-ini+1);
}
Console.WriteLine(best);
```

### Ex 4 — Todos os pares com soma alvo (array não ordenado)
```csharp
int[] a = Array.ConvertAll(Console.ReadLine().Split(), int.Parse);
int alvo = int.Parse(Console.ReadLine());
var seen = new HashSet<int>();
var pares = new List<(int,int)>();
foreach (var x in a){
    int y = alvo - x;
    if (seen.Contains(y)) pares.Add((y,x));
    seen.Add(x);
}
foreach (var p in pares) Console.WriteLine($"{p.Item1}+{p.Item2}");
```

### Ex 5 — Máximo subarray com #0 == #1 (binário)
```csharp
int[] a = Array.ConvertAll(Console.ReadLine().Split(), int.Parse); // 0/1
var map = new Dictionary<int,int>{{0,-1}};
int sum=0, best=0;
for (int i=0;i<a.Length;i++){
    sum += (a[i]==1?1:-1);
    if (map.ContainsKey(sum)) best = Math.Max(best, i - map[sum]);
    else map[sum]=i;
}
Console.WriteLine(best);
```

---

## ✅ Aula 05 — Recursão e Backtracking

### Ex 1 — Fatorial
```csharp
int Fat(int n)=> n<=1?1:n*Fat(n-1);
```

### Ex 2 — Soma 1..n (recursivo)
```csharp
int Soma(int n)=> n==0?0:n+Soma(n-1);
```

### Ex 3 — Fibonacci (contando chamadas)
```csharp
int calls=0;
int Fib(int n){ calls++; return n<=1?n:Fib(n-1)+Fib(n-2); }
int n = int.Parse(Console.ReadLine());
Console.WriteLine($"fib={Fib(n)}, chamadas={calls}");
```

### Ex 4 — Combinações binárias de n
```csharp
void Comb(int n, string pref){
    if (pref.Length==n){ Console.WriteLine(pref); return; }
    Comb(n, pref+"0");
    Comb(n, pref+"1");
}
Comb(int.Parse(Console.ReadLine()), "");
```

### Ex 5 — Permutações de inteiros
```csharp
int[] a = Array.ConvertAll(Console.ReadLine().Split(), int.Parse);
void Perm(List<int> path, bool[] used){
    if (path.Count==a.Length){ Console.WriteLine(string.Join(" ", path)); return; }
    for (int i=0;i<a.Length;i++){
        if (used[i]) continue;
        used[i]=true; path.Add(a[i]);
        Perm(path, used);
        path.RemoveAt(path.Count-1); used[i]=false;
    }
}
Perm(new List<int>(), new bool[a.Length]);
```

---

## ✅ Aula 06 — Pilhas e Filas

### Ex 1 — Pilha de inteiros (operações básicas)
```csharp
var st = new Stack<int>();
st.Push(10); st.Push(20);
Console.WriteLine(st.Peek()); // 20
Console.WriteLine(st.Pop());  // 20
Console.WriteLine(st.Count);  // 1
```

### Ex 2 — Simular fila de 5 pessoas
```csharp
var q = new Queue<string>();
for (int i=1;i<=5;i++) q.Enqueue($"Pessoa {i}");
while (q.Count>0) Console.WriteLine($"Atendido: {q.Dequeue()}");
```

### Ex 3 — Palíndromo com pilha
```csharp
string s = Console.ReadLine();
var st = new Stack<char>(s);
Console.WriteLine(new string(st.ToArray()) == s ? "Sim" : "Não");
```

### Ex 4 — Infixa para pós-fixa (Shunting-yard simplificado: +,-,*,/ e parênteses)
```csharp
string[] tokens = Console.ReadLine().Split();
int Prec(string op)=> op=="+"||op=="-"?1: (op=="*"||op=="/"?2:0);
var outp = new List<string>();
var ops = new Stack<string>();
foreach (var t in tokens){
    if (int.TryParse(t, out _)) outp.Add(t);
    else if (t=="(") ops.Push(t);
    else if (t==")"){
        while (ops.Peek()!="(") outp.Add(ops.Pop());
        ops.Pop();
    } else {
        while (ops.Count>0 && Prec(ops.Peek())>=Prec(t)) outp.Add(ops.Pop());
        ops.Push(t);
    }
}
while (ops.Count>0) outp.Add(ops.Pop());
Console.WriteLine(string.Join(" ", outp));
```

### Ex 5 — Fila circular de tamanho fixo (conceito)
```csharp
class FilaCircular{
    int[] a; int h=0, t=0, cnt=0;
    public FilaCircular(int cap){ a=new int[cap]; }
    public bool Enqueue(int x){ if (cnt==a.Length) return false; a[t]=x; t=(t+1)%a.Length; cnt++; return true; }
    public int? Dequeue(){ if (cnt==0) return null; int v=a[h]; h=(h+1)%a.Length; cnt--; return v; }
}
```

---

## ✅ Aula 07 — Listas Ligadas

### Ex 1 — Inserções no início e no final
```csharp
// veja implementação da aula; exemplo:
var lst = new ListaLigada();
lst.InserirNoInicio(2);
lst.InserirNoFinal(5);
lst.InserirNoInicio(1);
lst.Imprimir();
```

### Ex 2 — Buscar(valor)
```csharp
bool Buscar(Node cabeca, int valor){
    for (var n=cabeca; n!=null; n=n.Proximo) if (n.Valor==valor) return true;
    return false;
}
```

### Ex 3 — Contar nós
```csharp
int Contar(Node cabeca){ int c=0; for (var n=cabeca; n!=null; n=n.Proximo) c++; return c; }
```

### Ex 4 — Inverter lista
```csharp
Node Inverter(Node head){
    Node prev=null, cur=head;
    while (cur!=null){ var nxt=cur.Proximo; cur.Proximo=prev; prev=cur; cur=nxt; }
    return prev;
}
```

### Ex 5 — Lista duplamente ligada (assinaturas básicas)
```csharp
class NodeDuplo{ public int V; public NodeDuplo Ant, Prox; public NodeDuplo(int v){V=v;} }
class ListaDupla{
    NodeDuplo head, tail;
    public void Adicionar(int v){ var n=new NodeDuplo(v); if (tail==null){head=tail=n;} else {tail.Prox=n; n.Ant=tail; tail=n;} }
    public void Remover(int v){
        for (var n=head;n!=null;n=n.Prox) if (n.V==v){ if (n.Ant!=null) n.Ant.Prox=n.Prox; else head=n.Prox; if (n.Prox!=null) n.Prox.Ant=n.Ant; else tail=n.Ant; break; }
    }
    public void Imprimir(){ for (var n=head;n!=null;n=n.Prox) Console.Write($"{n.V} "); Console.WriteLine(); }
}
```

---

## ✅ Aula 08 — Árvores Binárias e BST

### Ex 1 — Inserção e em-ordem
```csharp
void EmOrdem(Node r){ if (r==null) return; EmOrdem(r.Esquerda); Console.Write(r.Valor+" "); EmOrdem(r.Direita); }
```

### Ex 2 — Contar nós
```csharp
int Contar(Node r)=> r==null?0: 1+Contar(r.Esquerda)+Contar(r.Direita);
```

### Ex 3 — Altura da árvore
```csharp
int Altura(Node r)=> r==null?0: 1+Math.Max(Altura(r.Esquerda), Altura(r.Direita));
```

### Ex 4 — Min e Max na BST
```csharp
int Min(Node r){ while (r.Esquerda!=null) r=r.Esquerda; return r.Valor; }
int Max(Node r){ while (r.Direita!=null) r=r.Direita; return r.Valor; }
```

### Ex 5 — Verificar BST válida
```csharp
bool ValidaBST(Node r, int? min=null, int? max=null){
    if (r==null) return true;
    if ((min!=null && r.Valor<=min) || (max!=null && r.Valor>=max)) return false;
    return ValidaBST(r.Esquerda, min, r.Valor) && ValidaBST(r.Direita, r.Valor, max);
}
```

---

## ✅ Aula 09 — Ordenação e Busca

### Ex 1 — Bubble Sort com contagem de trocas
```csharp
int TrocasBubble(int[] a){
    int trocas=0;
    for (int i=0;i<a.Length-1;i++)
        for (int j=0;j<a.Length-i-1;j++)
            if (a[j]>a[j+1]){ (a[j],a[j+1])=(a[j+1],a[j]); trocas++; }
    return trocas;
}
```

### Ex 2 — Insertion Sort para strings
```csharp
string[] arr = Console.ReadLine().Split();
for (int i=1;i<arr.Length;i++){
    string key=arr[i]; int j=i-1;
    while (j>=0 && string.Compare(arr[j], key, StringComparison.OrdinalIgnoreCase)>0){
        arr[j+1]=arr[j]; j--;
    }
    arr[j+1]=key;
}
Console.WriteLine(string.Join(" ", arr));
```

### Ex 3 — Merge Sort em 20 números
```csharp
// usar a implementação da aula; aqui, apenas chamada:
int[] a = Array.ConvertAll(Console.ReadLine().Split(), int.Parse);
MergeSort(a, 0, a.Length-1);
Console.WriteLine(string.Join(" ", a));
```

### Ex 4 — Busca binária testar 10 valores
```csharp
int[] a = Array.ConvertAll(Console.ReadLine().Split(), int.Parse);
Array.Sort(a);
for (int t=0;t<10;t++){
    int alvo = int.Parse(Console.ReadLine());
    Console.WriteLine(Array.BinarySearch(a, alvo)>=0 ? "encontrado" : "não encontrado");
}
```

### Ex 5 — Comparar tempos (indicativo)
```csharp
var rnd = new Random();
int[] origem = Enumerable.Range(0,1000).Select(_=>rnd.Next()).ToArray();
int[] b = (int[])origem.Clone();
int[] c = (int[])origem.Clone();

var sw = System.Diagnostics.Stopwatch.StartNew();
QuickSort(b,0,b.Length-1);
sw.Stop(); Console.WriteLine($"QuickSort: {sw.ElapsedMilliseconds} ms");

sw.Restart();
MergeSort(c,0,c.Length-1);
sw.Stop(); Console.WriteLine($"MergeSort: {sw.ElapsedMilliseconds} ms");
```

---

## ✅ Aula 10 — Programação Dinâmica

### Ex 1 — Fibonacci (Top-Down e Bottom-Up)
```csharp
// Top-Down
var memo = new Dictionary<int,int>();
int FibTD(int n){ if (n<=1) return n; if (memo.TryGetValue(n, out var v)) return v; v = FibTD(n-1)+FibTD(n-2); memo[n]=v; return v; }
// Bottom-Up
int FibBU(int n){ if (n<=1) return n; int a=0,b=1; for (int i=2;i<=n;i++){ int t=a+b; a=b; b=t; } return b; }
```

### Ex 2 — Mochila (DP)
```csharp
int MochilaDP(int[] w, int[] val, int cap){
    int n=w.Length; int[,] dp = new int[n+1, cap+1];
    for (int i=1;i<=n;i++){
        for (int c=0;c<=cap;c++){
            dp[i,c]=dp[i-1,c];
            if (w[i-1]<=c) dp[i,c]=Math.Max(dp[i,c], val[i-1]+dp[i-1,c-w[i-1]]);
        }
    }
    return dp[n,cap];
}
```

### Ex 3 — Degraus (1 ou 2 passos)
```csharp
int Ways(int n){ if (n<=2) return n; int a=1,b=2; for (int i=3;i<=n;i++){ int t=a+b; a=b; b=t; } return b; }
```

### Ex 4 — LCS + reconstrução
```csharp
(string subseq, int len) LCS(string s1, string s2){
    int m=s1.Length, n=s2.Length;
    int[,] dp = new int[m+1,n+1];
    for (int i=1;i<=m;i++)
        for (int j=1;j<=n;j++)
            dp[i,j] = s1[i-1]==s2[j-1] ? 1+dp[i-1,j-1] : Math.Max(dp[i-1,j], dp[i,j-1]);
    // reconstrução
    int x=m, y=n; var st = new Stack<char>();
    while (x>0 && y>0){
        if (s1[x-1]==s2[y-1]){ st.Push(s1[x-1]); x--; y--; }
        else if (dp[x-1,y]>=dp[x,y-1]) x--;
        else y--;
    }
    return (new string(st.ToArray()), dp[m,n]);
}
```

### Ex 5 — Mínimo de moedas
```csharp
int CoinChange(int[] coins, int amount){
    int INF = 1_000_000;
    int[] dp = Enumerable.Repeat(INF, amount+1).ToArray();
    dp[0]=0;
    foreach (var c in coins)
        for (int v=c; v<=amount; v++)
            dp[v] = Math.Min(dp[v], dp[v-c]+1);
    return dp[amount]==INF ? -1 : dp[amount];
}
```

---

_Fim das soluções (Aulas 00–10)._

