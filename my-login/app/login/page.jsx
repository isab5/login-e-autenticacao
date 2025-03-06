import styles from "../../styles/page.module.css";
import Button from "../../components/Button";

export default function Home() {
  return (
    <div>
        <div className={styles.card}>
          <h1 className={styles.title}>Login</h1>
          <label className={styles.label} htmlFor="text">Email:</label>
          <input className={styles.input}  type="text" placeholder="meuemail@email.com" />
          <label className={styles.label}  htmlFor="text">Senha:</label>
          <input className={styles.input} type="password" placeholder="********" />
          <Button props="Entrar" />
          <p>Não possui uma conta? <a href="/register">Cadastre-se</a></p>
          <p>Saiba mais sobre o criador em: <a href="/creator">Profile</a></p>
        </div>
    </div>
  );
}
