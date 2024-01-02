import React from 'react';
import styles from './Footer.module.css';

import logoBytebank from './logo-bytebank.svg';
import instagram from 'assets/instagram.svg';
import whatsapp from 'assets/whatsapp.svg';
import youtube from 'assets/youtube.svg';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.box__footer}>
        <div className={styles.column__infos}>
          <h3>Serviços</h3>
          <p>Conta corrente</p>
          <p>Conta PJ</p>
          <p>Cartão de crédito</p>
        </div>
        <div className={styles.column__infos}>
          <h3>Contato</h3>
          <p>0800 004 250 08</p>
          <p>meajuda@bytebank.com.br</p>
          <p>ouvidoria@bytebank.com.br</p>
        </div>
        <div className={styles.column__infos}>
          <h3>Desenvolvido por Kayo Ennrique</h3>
          <img
            className={styles.logo__bytebank}
            src={logoBytebank}
            alt="Logo do Bytebank"
          />
          <div className={styles.logos}>
            <img src={instagram} alt="Logo do instagram" />
            <img src={whatsapp} alt="Logo do whatsapp" />
            <img src={youtube} alt="Logo do youtube" />
          </div>
        </div>
      </div>
    </footer>
  );
}
