import { lessons } from "../data/lessons";
import { LessonCard } from "../components/LessonCard";
import styles from "./Lessons.module.css";

export default function LessonsPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Lições estruturadas</h1>
          <p>Construa sua base passo a passo, utilizando explicações curtas e apontando recursos oficiais.</p>
        </div>
        <span>{lessons.length} lições</span>
      </header>
      <div className={styles.grid}>
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
