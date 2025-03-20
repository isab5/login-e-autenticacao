import styles from "./profile.module.css";
import Header from "../../components/Header";
import Image from "next/image";
import Isabella from "../../public/Isabella.jpg";
import Card from "../../components/Card";
import JavaScript from "../../public/JavaScript.png";
import Nodejs from "../../public/Nodejs.png";
import Postgresql from "../../public/Postgresql.png";

export default function Profile() {
    return (
      <div className={styles.all}>
        <Header />
        <main className={styles.main}>
          <Image className={styles.image} src={Isabella} alt="Foto da criadora do login" />
          <h2 className={styles.name}>Isabella Borin</h2>
          <p className={styles.text}>Oi, eu sou a Isabella, tenho 17 anos e minha vida é uma mistura de desafios e coisas que amo. Estou fazendo o curso técnico de Desenvolvimento de Sistemas, que é bem puxado, mas estou adorando aprender sobre tecnologia. Além dos estudos, também trabalho, então meu dia a dia é bem corrido. Nos meus momentos livres, eu curto ler livros de comédia romântica, que sempre me animam e deixam tudo mais leve. Também adoro assistir filmes e jogar games de terror, que dão aquela dose de adrenalina. Outra paixão minha é fotografar paisagens; adoro passear e capturar a beleza da natureza. É assim que eu equilibro minha rotina: entre códigos, histórias divertidas, sustos e cliques incríveis!</p>
          <h2 className={styles.name}>Linguagens aprendidas:</h2>
          <Card image={JavaScript} linguagem={"JavaScript"} description={"JavaScript é uma linguagem de programação que permite criar páginas da web interativas."} />
          <Card image={Nodejs} linguagem={"Node.js"} description={"Node.js é uma plataforma que permite executar JavaScript no lado do servidor, ou seja, fora do navegador."} />
          <Card image={Postgresql} linguagem={"PostgreSQL"} description={"PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto."} />
        </main>
      </div>
    );
  }