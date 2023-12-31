import React from 'react';
import styles from './Balance.module.css';
import { ReactComponent as Icon } from './icon-eye.svg';

export default function Balance({ balance }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.balance}>Saldo</h2>
        <Icon />
      </div>
      <div className={styles.divisor} />
      <p className={styles.account}>Conta corrente</p>
      <p className={styles.value}>{`R$ ${balance}`}</p>
    </div>
  );
}
