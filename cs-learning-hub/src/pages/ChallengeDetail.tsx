import { Link, useNavigate, useParams } from "react-router-dom";

import { challenges } from "../data/challenges";
import styles from "./ChallengeDetail.module.css";

export default function ChallengeDetailPage() {
  const { challengeId } = useParams();
  const navigate = useNavigate();

  const challenge = challenges.find((item) => item.id === challengeId);

  if (!challenge) {
    return (
      <div className={styles.container}>
        <h1>Desafio não encontrado</h1>
        <button type="button" onClick={() => navigate(-1)}>
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <span className={styles.difficulty}>{challenge.difficulty}</span>
          <h1>{challenge.title}</h1>
          <p>{challenge.description}</p>
        </div>
        <Link to="/challenges">Explorar todos</Link>
      </header>

      <section className={styles.section}>
        <h2>Entrada de exemplo</h2>
        <pre>
          <code>{challenge.sampleInput}</code>
        </pre>
      </section>

      <section className={styles.section}>
        <h2>Saída esperada</h2>
        <pre>
          <code>{challenge.sampleOutput}</code>
        </pre>
      </section>

      <section className={styles.section}>
        <h2>Critérios de aceitação</h2>
        <ul>
          {challenge.acceptanceCriteria.map((criteria) => (
            <li key={criteria}>{criteria}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Dicas</h2>
        <ul>
          {challenge.hints.map((hint) => (
            <li key={hint}>{hint}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
