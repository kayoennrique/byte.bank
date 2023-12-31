import React from 'react';

export default function Transactions({ transaction, styles }) {
  return (
    <li>
      <p className={styles.month}>{transaction.month}</p>
      <div className={styles.transaction}>
        <p data-testid="typeTransaction">{transaction.transaction}</p>
        <span>{transaction.data}</span>
      </div>
      {transaction.transaction === 'Transferência' ? (
        <h3
          data-testid="valueTransaction"
          className={styles.amount}
        >{`- R$ ${transaction.amount}`}</h3>
      ) : (
        <h3
          data-testid="valueTransaction"
          className={styles.amount}
        >{` R$ ${transaction.amount}`}</h3>
      )}
      <div className={styles.divisor} />
    </li>
  );
}
