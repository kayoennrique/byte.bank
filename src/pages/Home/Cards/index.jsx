import React from 'react';
import styles from './Cards.module.css';
import physicalCard from './fisico.svg';
import digitalCard from './digital.svg';

export default function Cards() {
  return (
    <section className="container">
      <div className="top__detail" />
      <div className={styles.wrapper}>
      <h2 data-test='titulo-cartoes'>Meus cartões</h2>
        <p>Cartão físico</p>
        <div className={styles.card}>
          <img src={physicalCard} alt="Cartão físico" />
          <div className={styles.functions}>
            <button className={styles.buttonConfigure}>Configurar</button>
            <button className={styles.buttonLock}>Bloquear</button>
            <span>Função: Débito/Crédito</span>
          </div>
        </div>
        <p>Cartão digital</p>
        <div className={styles.card}>
          <img src={digitalCard} alt="Cartão digital" />
          <div className={styles.functions}>
            <button className={styles.buttonConfigure}>Configurar</button>
            <button className={styles.buttonLock}>Bloquear</button>
            <span>Função: Débito</span>
          </div>
        </div>
      </div>
      <div className="detail__bottom" />
    </section>
  );
}
