import React from 'react';
import styles from './Transaction.module.css';
import { ReactComponent as Illustration } from './ilustration.svg';
import Form from './Form';

export default function Transaction({ carryOutTransaction }) {
  return (
    <section className={styles.container}>
      <div className={styles.top__detail} />
      <div className={styles.wrapper}>
        <Form carryOutTransaction={carryOutTransaction} />
      </div>
      <Illustration height="229" width="359" />
      <div className={styles.detail__bottom} />
    </section>
  );
}
