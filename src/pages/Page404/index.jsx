import React from 'react';
import styles from './Page404.module.css';
import space from './404.svg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export default function Page404() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <div data-testid="page-404" className={styles.container}>
          <h1>Ops! Não encontramos a página...</h1>
          <p>
            E olha que exploramos o universo procurando por ela! Que tal voltar
            e tentar novamente?
          </p>
          <Link to="/" className={styles.link}>
            Voltar ao início
          </Link>
          <img src={space} alt="Imagem ilustrativa do espaço" />
        </div>
      </div>
      <Footer />
    </>
  );
}