import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

const listMenu = [
  { link: 'Início', href: '/home' },
  { link: 'Minha conta', href: '/my-account' },
  { link: 'Cartões', href: '/home/cards' },
  { link: 'Serviços', href: '/home/services' },
  { link: 'Investimentos', href: '/home/investiments' },
];

export default function Menu({ path }) {
  return (
    <nav className={styles.menu}>
      {listMenu.map((item, index) => {
        return (
          <div key={item.href} className={styles.item}>
            <Link
              to={item.href}
              className={`${styles.link} ${
                path === item.href && styles.linkActive
              }`}
            >
              {item.link}
            </Link>
            {index !== listMenu.length - 1 && (
              <div className={styles.divisor} />
            )}
          </div>
        );
      })}
    </nav>
  );
}
