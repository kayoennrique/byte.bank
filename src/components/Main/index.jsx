import React from 'react';
import styles from './Main.module.css';
import { ReactComponent as Illustration } from './ilustration.svg';
import Balance from './Balance';

const data = Date.now();
const today = new Date(data);
const daysOfTheWeek = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export default function Main({ balance }) {
  return (
    <section className={styles.container}>
      <div className={styles.top__detail} />
      <h1 className={styles.title}>Olá, Kayo :)!</h1>
      <p className={styles.data}>{`${
        daysOfTheWeek[today.getDay()]
      }, ${today.toLocaleDateString('pt-BR')}`}</p>
      <div className={styles.wrapper}>
        <Illustration
          className={styles.illustration}
          width="230"
          height="185"
        />
        <Balance balance={balance} />
      </div>
      <div className={styles.detail__bottom} />
    </section>
  );
}
