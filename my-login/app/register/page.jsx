import styles from "../../styles/register.module.css"
import Button from "../../components/Button"

export default function Register() {
  return (
    <div>
      <div className={styles.card}>
          <h1 className={styles.title}>Cadastra-se</h1>
          <label className={styles.label} htmlFor="text">Primeiro nome:</label>
          <input className={styles.input}  type="text" placeholder="Ex: Pedro" />
          <label className={styles.label} htmlFor="text">Último nome:</label>
          <input className={styles.input}  type="text" placeholder="Ex: Santos" />
          <label className={styles.label} htmlFor="text">Email:</label>
          <input className={styles.input}  type="text" placeholder="meuemail@email.com" />
          <label className={styles.label}  htmlFor="text">Senha:</label>
          <input className={styles.input} type="password" placeholder="********" />
          <label className={styles.label}  htmlFor="text">Confirme a senha:</label>
          <input className={styles.input} type="password" placeholder="********" />
          <Button props="Criar" />
          <p>Já possui uma conta?<a href="/login">Faça Login</a></p>
          <p>Saiba mais sobre o criador em: <a href="/creator">Profile</a></p>
        </div>
    </div>
  );
}