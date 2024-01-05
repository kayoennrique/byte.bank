import React from 'react';
import styles from './Extract.module.css';
import Transactions from './Transactions';

export default function Extract({ transactions }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Extrato</h2>
      <ul data-testid="lista-transacoes" data-test="lista-transacoes">
        {transactions.map((transaction, index) => {
          return (
            <Transactions
              key={index}
              transaction={transaction}
              styles={styles}
            />
          );
        })}
      </ul>
    </section>
  );
}
