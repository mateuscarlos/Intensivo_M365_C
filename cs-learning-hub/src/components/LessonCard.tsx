import { Link } from "react-router-dom";

import type { Lesson } from "../types/content";
import styles from "./LessonCard.module.css";

type LessonCardProps = {
  lesson: Lesson;
};

export function LessonCard({ lesson }: LessonCardProps) {
  return (
    <article className={styles.card}>
      <div>
        <p className={styles.level}>{lesson.level}</p>
        <h3>{lesson.title}</h3>
        {lesson.topics.length ? (
          <div className={styles.topics}>
            {lesson.topics.map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
        ) : null}
        <p className={styles.summary}>{lesson.summary}</p>
      </div>
      <footer>
        <span>{lesson.duration}</span>
        <Link to={`/lessons/${lesson.id}`} className={styles.link}>
          Ver detalhado
        </Link>
      </footer>
    </article>
  );
}
