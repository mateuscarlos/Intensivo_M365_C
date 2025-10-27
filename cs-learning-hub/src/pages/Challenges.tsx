import { challenges } from "../data/challenges";
import { ChallengeCard } from "../components/ChallengeCard";
import styles from "./Challenges.module.css";

export default function ChallengesPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Desafios de código</h1>
          <p>
            Treine as habilidades mais cobradas em entrevistas, com critérios de aceitação claros.
          </p>
        </div>
        <span>{challenges.length} desafios</span>
      </header>
      <div className={styles.grid}>
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}
