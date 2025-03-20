import styles from "../styles/Card.module.css";
import Image from "next/image";

export default function Card ({ image, linguagem, description }) {
    return (
        <div className={styles.main}>
            <Image className={styles.img} src={image} alt="" />
            <div className={styles.containerText}>
            <h3 className={styles.title}>{linguagem}</h3>
            <p className={styles.text}>{description}</p>
            </div>
        </div>
    )
}