import { TopBar } from "./components/TopBar";
import { AppRoutes } from "./routes/AppRoutes";
import styles from "./styles/App.module.css";

export default function App() {
  return (
    <div className={styles.appShell}>
      <TopBar />
      <main className={styles.mainContent}>
        <AppRoutes />
      </main>
    </div>
  );
}
