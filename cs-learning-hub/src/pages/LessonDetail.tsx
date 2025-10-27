import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useNavigate, useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";

import { lessons } from "../data/lessons";
import styles from "./LessonDetail.module.css";

export default function LessonDetailPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const lesson = useMemo(
    () => lessons.find((item) => item.id === lessonId),
    [lessonId]
  );

  if (!lesson) {
    return (
      <div className={styles.container}>
        <h1>Ops, lição não encontrada.</h1>
        <p>
          Verifique o link ou retorne à lista completa para escolher outra lição.
        </p>
        <button type="button" onClick={() => navigate(-1)}>
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <span className={styles.level}>{lesson.level}</span>
          <h1>{lesson.title}</h1>
          <p className={styles.summary}>{lesson.summary}</p>
          {lesson.objectives.length ? (
            <ul className={styles.objectives}>
              {lesson.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className={styles.meta}>
          <span className={styles.badge}>{lesson.duration}</span>
          {lesson.topics.length ? (
            <div className={styles.topics}>
              {lesson.topics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
          ) : null}
          <Link to="/lessons" className={styles.backLink}>
            Ver todas
          </Link>
        </div>
      </div>
      <article className={styles.markdown}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{lesson.content}</ReactMarkdown>
      </article>
    </div>
  );
}
