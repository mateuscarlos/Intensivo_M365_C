import { Link } from "react-router-dom";

import styles from "./NotFound.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1>404 — Página não encontrada</h1>
      <p>
        Talvez o conteúdo tenha sido movido. Volte para a página inicial e continue seus estudos.
      </p>
      <Link to="/">Ir para o início</Link>
    </div>
  );
}
