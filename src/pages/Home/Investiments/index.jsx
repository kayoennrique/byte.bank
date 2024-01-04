import React from 'react';
import Box from './Box';
import graphic from './grafico.svg';
import styles from './Investiments.module.css';

export default function Investiments() {
  return (
    <section className="container">
      <div className="top__detail" />
      <div className={styles.wrapper}>
        <div className={styles.investiments}>
          <h2>Investimentos</h2>
          <p>Total: R$ 1.000.000,00</p>
        </div>
        <div className={styles.applications}>
          <Box income="Renda Fixa" styles={styles.income}>
            R$ 300.000,00
          </Box>
          <Box income="Renda variável" styles={styles.income}>
            R$ 700.000,00
          </Box>
        </div>
        <h3>Estatísticas</h3>
        <div className={styles.graphic}>
          <img src={graphic} alt="Gráfico dos investimentos" />
        </div>
      </div>
      <div className="detail__bottom" />
    </section>
  );
}
