import { Link } from "react-router-dom";

import { challenges } from "../data/challenges";
import { lessons } from "../data/lessons";
import { quizzes } from "../data/quizzes";
import { LessonCard } from "../components/LessonCard";
import { QuizCard } from "../components/QuizCard";
import { ChallengeCard } from "../components/ChallengeCard";
import styles from "./Home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div>
          <h1>Construa fluência em C# com prática guiada</h1>
          <p>
            Avance pelas lições, valide o conhecimento com quizzes, experimente no
            playground e conquiste desafios inspirados em entrevistas técnicas.
          </p>
          <div className={styles.actions}>
            <Link to="/lessons" className={styles.ctaPrimary}>
              Começar pelas lições
            </Link>
            <Link to="/playground" className={styles.ctaSecondary}>
              Abrir playground
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.sectionHeader}>
          <h2>Lições em destaque</h2>
          <Link to="/lessons">Ver todas as lições</Link>
        </div>
        <div className={styles.grid}>
          {lessons.slice(0, 2).map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </section>

      <section>
        <div className={styles.sectionHeader}>
          <h2>Quizzes para revisar</h2>
          <Link to="/quizzes">Ver todos os quizzes</Link>
        </div>
        <div className={styles.grid}>
          {quizzes.slice(0, 2).map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </section>

      <section>
        <div className={styles.sectionHeader}>
          <h2>Desafios selecionados</h2>
          <Link to="/challenges">Ver todos os desafios</Link>
        </div>
        <div className={styles.grid}>
          {challenges.slice(0, 2).map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </section>
    </div>
  );
}
