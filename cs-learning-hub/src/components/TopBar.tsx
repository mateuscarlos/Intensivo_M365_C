import { NavLink } from "react-router-dom";

import styles from "./TopBar.module.css";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/lessons", label: "Lições" },
  { to: "/quizzes", label: "Quizzes" },
  { to: "/playground", label: "Playground" },
  { to: "/challenges", label: "Desafios" }
];

export function TopBar() {
  return (
    <header className={styles.container}>
      <div className={styles.logoArea}>
        <span className={styles.logoMark}>⚙️</span>
        <div>
          <strong>CS Learning Hub</strong>
          <p>Aprenda C# com prática guiada</p>
        </div>
      </div>
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              [styles.navLink, isActive ? styles.active : ""].join(" ")
            }
            end={link.to === "/"}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
