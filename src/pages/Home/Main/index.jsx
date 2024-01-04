import React from 'react';
import styles from './Main.module.css';
import { ReactComponent as Illustration } from './ilustracao.svg';
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
      <h1 data-test="title-welcome" className={styles.title}>
        Bem vindo de volta!
      </h1>
      <p data-testid="current-date" className={styles.data}>{`${
        daysOfTheWeek[today.getDay()]
      }, ${today.toLocaleDateString('pt-BR')}`}</p>
      <div className={styles.wrapper}>
        <Illustration className={styles.illustration} width="250" height="225" />
        <Balance balance={balance} />
      </div>
      <div className={styles.detail__bottom} />
    </section>
  );
}
