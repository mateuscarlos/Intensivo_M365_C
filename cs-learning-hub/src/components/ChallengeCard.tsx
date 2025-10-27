import { Link } from "react-router-dom";

import type { Challenge } from "../types/content";
import styles from "./ChallengeCard.module.css";

type ChallengeCardProps = {
  challenge: Challenge;
};

const difficultyColors: Record<Challenge["difficulty"], string> = {
  Fácil: "#10b981",
  Médio: "#f59e0b",
  Difícil: "#ef4444"
};

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  return (
    <article className={styles.card}>
      <header>
        <span
          className={styles.badge}
          style={{ backgroundColor: difficultyColors[challenge.difficulty] }}
        >
          {challenge.difficulty}
        </span>
        <h3>{challenge.title}</h3>
      </header>
      <p>{challenge.description}</p>
      <footer>
        <div className={styles.topics}>
          {challenge.topics.map((topic) => (
            <span key={topic}>{topic}</span>
          ))}
        </div>
        <Link to={`/challenges/${challenge.id}`} className={styles.link}>
          Ver detalhes
        </Link>
      </footer>
    </article>
  );
}
