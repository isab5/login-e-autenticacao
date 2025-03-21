import styles from "./profile.module.css";
import Header from "../../components/Header";
import Image from "next/image";
import Isabella from "../../public/Isabella.jpg";
import Card from "../../components/Card";
import JavaScript from "../../public/JavaScript.png";
import Nodejs from "../../public/Nodejs.png";
import Postgresql from "../../public/Postgresql.png";
import React from "../../public/React.png";
import Nextjs from "../../public/Nextjs.png";
import HTML from "../../public/HTML.png";
import CSS from "../../public/CSS.png";

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
          <Card image={React} linguagem={"React"} description={"O React é uma biblioteca JavaScript que serve para criar interfaces de usuário (UI) para aplicativos web e dispositivos móveis."} />
          <Card image={React} linguagem={"React Native"} description={"O React Native é uma estrutura de código que permite criar aplicativos para dispositivos móveis, como Android e iOS, usando JavaScript."} />
          <Card image={Nextjs} linguagem={"Next.js"} description={"O Next.js é um framework JavaScript que serve para criar aplicações web. Ele é uma extensão do React, que é uma biblioteca JavaScript. O Next.js ajuda a construir sites e aplicações web de alto desempenho, com foco na experiência do usuário. "} />
          <Card image={HTML} linguagem={"HTML"} description={"O HTML (Hypertext Markup Language) é uma linguagem de marcação de hipertexto que serve para estruturar a estrutura e o conteúdo de uma página web."} />
          <Card image={CSS} linguagem={"CSS"} description={"O CSS (Cascading Style Sheets) é uma linguagem de programação que define a aparência de páginas da web. "} />
        </main>
      </div>
    );
  }