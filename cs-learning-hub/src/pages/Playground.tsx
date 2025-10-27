import { useMemo, useState } from "react";
import Editor from "@monaco-editor/react";

import { playgroundSnippets } from "../data/snippets";
import styles from "./Playground.module.css";

type RunResult = {
  timestamp: string;
  notes: string[];
};

const defaultSnippet = playgroundSnippets[0];

export default function PlaygroundPage() {
  const [snippetId, setSnippetId] = useState<string>(defaultSnippet?.id ?? "");
  const [code, setCode] = useState<string>(defaultSnippet?.code ?? "");
  const [result, setResult] = useState<RunResult | null>(null);

  const selectedSnippet = useMemo(
    () => playgroundSnippets.find((item) => item.id === snippetId),
    [snippetId]
  );

  const onSelectSnippet = (value: string) => {
    setSnippetId(value);
    const snippet = playgroundSnippets.find((item) => item.id === value);
    if (!snippet) {
      return;
    }

    setCode(snippet.code);
    setResult(null);
  };

  const handleRun = () => {
    const now = new Date().toLocaleTimeString();
    const notes: string[] = [
      "A execução real do código C# não acontece no navegador.",
      "Use `dotnet-script` localmente ou o serviço try.dot.net para validar o snippet.",
      "Dica: salve este arquivo como Program.cs e execute `dotnet run`."
    ];

    if (selectedSnippet) {
      notes.unshift(`Simulação baseada no snippet: ${selectedSnippet.title}`);
    }

    setResult({ timestamp: now, notes });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Playground de código</h1>
          <p>
            Pratique a sintaxe C# com snippets curados. Clique em executar para receber orientações de teste no mundo real.
          </p>
        </div>
        <div className={styles.selector}>
          <label htmlFor="snippetSelect">Snippet inicial</label>
          <select
            id="snippetSelect"
            value={snippetId}
            onChange={(event) => onSelectSnippet(event.target.value)}
          >
            {playgroundSnippets.map((snippet) => (
              <option key={snippet.id} value={snippet.id}>
                {snippet.title}
              </option>
            ))}
          </select>
        </div>
      </header>

      {selectedSnippet ? (
        <p className={styles.description}>{selectedSnippet.description}</p>
      ) : null}

      <div className={styles.editorContainer}>
        <Editor
          height="420px"
          defaultLanguage="csharp"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value ?? "")}
          options={{
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 14,
            tabSize: 4
          }}
        />
      </div>

      <div className={styles.controls}>
        <button type="button" onClick={handleRun}>
          Executar (simulação)
        </button>
      </div>

      {result ? (
        <section className={styles.result}>
          <h2>Resultado da simulação — {result.timestamp}</h2>
          <ul>
            {result.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className={styles.howTo}>
        <h2>Como executar o código de verdade</h2>
        <ol>
          <li>Instale o .NET SDK 8 e verifique com <code>dotnet --version</code>.</li>
          <li>Crie um projeto temporário: <code>dotnet new console -n Playground</code>.</li>
          <li>Substitua o conteúdo de <code>Program.cs</code> pelo snippet acima.</li>
          <li>Execute com <code>dotnet run</code> ou <code>dotnet watch run</code> para recarregar automaticamente.</li>
        </ol>
      </section>
    </div>
  );
}
