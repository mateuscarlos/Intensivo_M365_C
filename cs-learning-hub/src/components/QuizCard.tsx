import { Link } from "react-router-dom";

import type { Quiz } from "../types/content";
import styles from "./QuizCard.module.css";

type QuizCardProps = {
  quiz: Quiz;
};

export function QuizCard({ quiz }: QuizCardProps) {
  return (
    <article className={styles.card}>
      <header>
        <span className={styles.topic}>{quiz.topic}</span>
        <h3>{quiz.title}</h3>
      </header>
      <p>{quiz.description}</p>
      <footer>
        <span>{quiz.duration}</span>
        <Link to={`/quizzes/${quiz.id}`} className={styles.link}>
          Começar
        </Link>
      </footer>
    </article>
  );
}
