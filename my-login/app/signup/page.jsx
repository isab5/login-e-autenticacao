"use client";
import styles from "./signup.module.css"
import Button from "../../components/Button"
import { useState } from "react";

export default function SignUp() {
  const [input1, setInput1] = useState(""); 
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [match, setMatch] = useState(null);
  const [error, setError] = useState(null);

  const handleCheck = () => {
    if (input3.length === 0) {
      setMatch(false);
      setError("Preencha todos os campos!");
    } else if (input4.length === 0) {
      setMatch(false);
      setError("Preencha todos os campos!");
    } else if (input5.length === 0) {
      setMatch(false);
      setError("Preencha todos os campos!");
    } else if (input1.length === 0) {
      setMatch(false); 
      setError("Preencha o campo senha!");
    } else if (input2.length === 0) {
      setMatch(false);
      setError("Preencha o campo confirmar senha");
    } else if (input1.length < 8) {
      setMatch(false);
      setError("A senha deve ter no mínimo 8 caracteres!"); 
    } else if (input1 !== input2) {
      setMatch(false); 
      setError("As senhas não conferem!"); 
      } else {
        setMatch(true); 
        setError("Sucesso!");
      }
  };

  return (
    <div>
      <div className={styles.card}>
          <h1 className={styles.title}>Cadastra-se</h1>
          <label className={styles.label} htmlFor="text">Primeiro nome:</label>
          <input className={styles.input}  type="text" placeholder="Ex: Pedro" value={input3} onChange={(e) => setInput3(e.target.value)} />
          <label className={styles.label} htmlFor="text">Último nome:</label>
          <input className={styles.input}  type="text" placeholder="Ex: Santos" value={input4} onChange={(e) => setInput4(e.target.value)} />
          <label className={styles.label} htmlFor="text">Email:</label>
          <input className={styles.input}  type="text" placeholder="meuemail@email.com" value={input5} onChange={(e) => setInput5(e.target.value)} />
          <label className={styles.label}  htmlFor="text">Senha:</label>
          <input className={styles.input} type="password" placeholder="********" value={input1} onChange={(e) => setInput1(e.target.value)}/>
          <label className={styles.label}  htmlFor="text">Confirme a senha:</label>
          <input className={styles.input} type="password" placeholder="********" value={input2} onChange={(e) => setInput2(e.target.value)} />
          <Button action={handleCheck} props="Criar" /> {""}
          {match !== null && <p>{error}</p>}{""}
          <p>Já possui uma conta? <a href="/signin">Faça Login</a></p>
          <p>Saiba mais sobre o criador em: <a href="/profile">Profile</a></p>
        </div>
    </div>
  );
}