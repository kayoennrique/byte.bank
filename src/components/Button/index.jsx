import React from 'react';
import styles from './Button.module.css';

export default function Button({
  text,
  onClick,
  kind = 'primary',
  dataTest,
}) {
  return (
    <button
      data-test={dataTest}
      className={
        kind === 'secondary' ? styles.btn__secondary : styles.btn__primary
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
}
