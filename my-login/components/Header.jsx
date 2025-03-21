import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Sobre a criadora</h1>
            <ul className={styles.links}>
                <li className={styles.list}> <a className={styles.list} href="/signin">Entrar</a></li>
                <li className={styles.list}> <a className={styles.list} href="/signup">Cadastre-se</a></li>
            </ul>
        </div>
    );
}