import { quizzes } from "../data/quizzes";
import { QuizCard } from "../components/QuizCard";
import styles from "./Quizzes.module.css";

export default function QuizzesPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Quizzes interativos</h1>
          <p>Verifique sua retenção de conteúdo com feedback imediato.</p>
        </div>
        <span>{quizzes.length} quizzes</span>
      </header>
      <div className={styles.grid}>
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
}
