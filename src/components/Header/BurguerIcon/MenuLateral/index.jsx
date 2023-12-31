import { Link } from 'react-router-dom';
import styles from './MenuLateral.module.css';

const listMenuLateral = [
  { link: 'Início', href: '/home' },
  { link: 'Minha conta', href: '/my-account' },
  { link: 'Cartões', href: '/home/cards' },
  { link: 'Serviços', href: '/home/services' },
  { link: 'Investimentos', href: '/home/investiments' },
];

export default function MenuLateral({
  path,
  toggleHamburguer,
  whenLoggingOut,
}) {
  return (
    <nav data-test="menu-lateral" className={styles.menu}>
      <button
        className={styles.fechar__modal}
        onClick={() => toggleHamburguer()}
      >
        X
      </button>
      {listMenuLateral.map((item, indice) => {
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
            {indice !== listMenuLateral.length - 1 && (
              <div className={styles.divisor} />
            )}
          </div>
        );
      })}
      <div className={styles.item}>
        <div className={styles.divisor} />
        <Link to="/" className={styles.link} onClick={() => whenLoggingOut()}>
          Sair
        </Link>
      </div>
    </nav>
  );
}
