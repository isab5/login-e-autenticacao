import styles from "./signin.module.css";
import Button from "../../components/Button";

export default function Signin() {
  return (
    <div>
        <div className={styles.card}>
          <h1 className={styles.title}>Login</h1>
          <label className={styles.label} htmlFor="text">Email:</label>
          <input className={styles.input}  type="text" placeholder="meuemail@email.com" />
          <label className={styles.label}  htmlFor="text">Senha:</label>
          <input className={styles.input} type="password" placeholder="********" />
          <Button props="Entrar" />
          <p>Não possui uma conta? <a href="/signup">Cadastre-se</a></p>
          <p>Saiba mais sobre o criador em: <a href="/profile">Profile</a></p>
        </div>
    </div>
  );
}
