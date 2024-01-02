import React from 'react';
import styles from './Transaction.module.css';
import { ReactComponent as Illustration } from './ilustration.svg';
import Form from './Form';

export default function Transaction({ carryOutTransaction }) {
  return (
    <section className="container">
      <div className="top__detail" />
      <div className={styles.wrapper}>
        <Form carryOutTransaction={carryOutTransaction} />
      </div>
      <Illustration height="229" width="459" />
      <div className="detail__bottom" />
    </section>
  );
}
