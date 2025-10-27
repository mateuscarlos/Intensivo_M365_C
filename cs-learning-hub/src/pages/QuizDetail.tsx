import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { quizzes } from "../data/quizzes";
import styles from "./QuizDetail.module.css";

type AnswerState = Record<string, string>;

export default function QuizDetailPage() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<AnswerState>({});

  const quiz = useMemo(
    () => quizzes.find((item) => item.id === quizId),
    [quizId]
  );

  if (!quiz) {
    return (
      <div className={styles.container}>
        <h1>Quiz não encontrado</h1>
        <button type="button" onClick={() => navigate(-1)}>
          Voltar
        </button>
      </div>
    );
  }

  const score = quiz.questions.reduce((total, question) => {
    if (answers[question.id] === question.answer) {
      return total + 1;
    }
    return total;
  }, 0);

  const answeredCount = Object.keys(answers).length;

  const handleSelect = (questionId: string, optionValue: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionValue }));
  };

  const handleReset = () => setAnswers({});

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>{quiz.title}</h1>
          <p>{quiz.description}</p>
        </div>
        <div className={styles.meta}>
          <span>{quiz.duration}</span>
          <Link to="/quizzes">Ver lista</Link>
        </div>
      </header>

      <section className={styles.progress}>
        <p>
          Respondido: {answeredCount}/{quiz.questions.length}
        </p>
        <p>
          Pontuação parcial: {score} ponto{score === 1 ? "" : "s"}
        </p>
        <button type="button" onClick={handleReset}>
          Limpar respostas
        </button>
      </section>

      <section className={styles.questions}>
        {quiz.questions.map((question, index) => {
          const selectedOption = answers[question.id];
          const isCorrect = selectedOption === question.answer;
          const isAnswered = Boolean(selectedOption);

          return (
            <article key={question.id} className={styles.questionCard}>
              <header>
                <span>Questão {index + 1}</span>
                <h2>{question.question}</h2>
              </header>
              <div className={styles.options}>
                {question.options.map((option) => {
                  const isSelected = option.value === selectedOption;
                  const showFeedback = isAnswered && isSelected;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleSelect(question.id, option.value)}
                      className={[
                        styles.option,
                        isSelected ? styles.selected : "",
                        showFeedback && isCorrect ? styles.correct : "",
                        showFeedback && !isCorrect ? styles.wrong : ""
                      ].join(" ")}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
              {isAnswered ? (
                <p className={isCorrect ? styles.feedbackPositive : styles.feedbackNegative}>
                  {isCorrect ? "Resposta correta!" : `Resposta correta: ${question.answer}`}
                </p>
              ) : null}
              {isAnswered ? <p className={styles.explanation}>{question.explanation}</p> : null}
            </article>
          );
        })}
      </section>
    </div>
  );
}
