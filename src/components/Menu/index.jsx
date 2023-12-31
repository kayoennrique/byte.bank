import React from 'react';
import styles from './Menu.module.css';

const listMenu = [
  'Inicial',
  'Transferências',
  'Investments',
  'Outros serviços',
];

export default function Menu() {
  return (
    <nav className={styles.menu}>
      {listMenu.map((item, index) => {
        return (
          <div key={item} className={styles.item}>
            <a href="/" className={styles.link}>
              {item}
            </a>
            {index !== listMenu.length - 1 && (
              <div className={styles.divisor} />
            )}
          </div>
        );
      })}
    </nav>
  );
}
