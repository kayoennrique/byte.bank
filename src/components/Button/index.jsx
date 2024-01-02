import React from 'react';
import styles from './Button.module.css';

export default function Button({
  text,
  onClick,
  kind = 'primary',
  actionButton,
}) {
  return (
    <button
      data-test={`button-${actionButton}`}
      className={
        kind === 'secondary' ? styles.btn__secondary : styles.btn__primary
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
}
