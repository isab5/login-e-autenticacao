import styles from "./creator.module.css";
import Header from "../../components/Header";
import Image from "next/image";
import Isabella from "../../public/Isabella.jpg";

export default function Register() {
    return (
      <div>
        <Header />
        <main className={styles.main}>
          <Image className={styles.image} src={Isabella} alt="Foto da criadora do login" />
        </main>
      </div>
    );
  }