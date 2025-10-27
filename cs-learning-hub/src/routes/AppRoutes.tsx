import { useRoutes } from "react-router-dom";

import ChallengeDetailPage from "../pages/ChallengeDetail";
import ChallengesPage from "../pages/Challenges";
import HomePage from "../pages/Home";
import LessonDetailPage from "../pages/LessonDetail";
import LessonsPage from "../pages/Lessons";
import NotFoundPage from "../pages/NotFound";
import PlaygroundPage from "../pages/Playground";
import QuizDetailPage from "../pages/QuizDetail";
import QuizzesPage from "../pages/Quizzes";

export function AppRoutes() {
  const element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/lessons", element: <LessonsPage /> },
    { path: "/lessons/:lessonId", element: <LessonDetailPage /> },
    { path: "/quizzes", element: <QuizzesPage /> },
    { path: "/quizzes/:quizId", element: <QuizDetailPage /> },
    { path: "/playground", element: <PlaygroundPage /> },
    { path: "/challenges", element: <ChallengesPage /> },
    { path: "/challenges/:challengeId", element: <ChallengeDetailPage /> },
    { path: "*", element: <NotFoundPage /> }
  ]);

  return element ?? null;
}
