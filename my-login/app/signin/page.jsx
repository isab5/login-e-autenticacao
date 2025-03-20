"use client";
import styles from "./signin.module.css";
import Button from "../../components/Button";
import { useState } from "react";

export default function SignIn() {
    const [input1, setInput1] = useState(""); 
    const [input2, setInput2] = useState("");
    const [match, setMatch] = useState(null);
    const [error, setError] = useState(null);

    const handleCheck = () => {
      if (input1.length === 0) {
        setMatch(false);
        setError("Preencha o campo email!");
      } else if (input2.length === 0) {
        setMatch(false);
        setError("Preencha o campo senha!");
        } else {
          setMatch(true); 
          setError("Sucesso!");
        }
    };

  return (
    <div>
        <div className={styles.card}>
          <h1 className={styles.title}>Login</h1>
          <label className={styles.label} htmlFor="text">Email:</label>
          <input className={styles.input}  type="text" placeholder="meuemail@email.com" value={input1} onChange={(e) => setInput1(e.target.value)} />
          <label className={styles.label}  htmlFor="text">Senha:</label>
          <input className={styles.input} type="password" placeholder="********" value={input2} onChange={(e) => setInput2(e.target.value)}/>
          <Button action={handleCheck} props="Entrar" /> {""}
          {match !== null && <p>{error}</p>}{""}
          <p>Não possui uma conta? <a href="/signup">Cadastre-se</a></p>
          <p>Saiba mais sobre o criador em: <a href="/profile">Profile</a></p>
        </div>
    </div>
  );
}
