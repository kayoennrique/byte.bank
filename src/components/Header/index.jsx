import React from "react";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "./bytebank.svg";
import avatarUser from "./avatar.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.user}>
          <p>Kayo Ennrique</p>
          <img src={avatarUser} alt="Ícone de um avatar de usuário" />
        </div>
      </div>
    </header>
  );
}
