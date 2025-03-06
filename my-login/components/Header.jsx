import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Sobre a criadora</h1>
            <ul className={styles.links}>
                <li className={styles.list}> <a className={styles.list} href="/login">Entrar</a></li>
                <li className={styles.list}> <a className={styles.list} href="/register">Cadastre-se</a></li>
            </ul>
        </div>
    );
}