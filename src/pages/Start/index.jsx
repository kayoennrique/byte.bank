import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import illustrationBanner from 'assets/ilustracao-banner.svg';
import styles from './Start.module.css';
import gift from 'assets/presente.svg';
import withdraw from 'assets/saque.svg';
import star from 'assets/estrela.svg';
import device from 'assets/dispositivo.svg';

export default function Start() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.banner}>
            <h1 data-test="main-title">
              Experimente mais liberdade no controle da sua vida financeira.
              Crie sua conta com a gente!
            </h1>
            <img
              src={illustrationBanner}
              alt="Gráficos e uma pessoa com dinheiro na mão"
            />
          </div>
          <div className={styles.benefits}>
            <h2>Vantagens do nosso banco:</h2>
            <div className={styles.benefits__itens}>
              <div className={styles.benefits__item}>
                <img src={gift} alt="ícone de um presente" />
                <h3>Conta e cartão gratuitos</h3>
                <p>
                  Isso mesmo, nossa conta é digital, sem custo fixo e mais que
                  isso: sem tarifa de manutenção.
                </p>
              </div>
              <div className={styles.benefits__item}>
                <img src={withdraw} alt="ícone de uma mão segurando um dinheiro" />
                <h3>Saques sem custo</h3>
                <p>
                  Você pode sacar gratuitamente 4x por mês de qualquer Banco
                  24h.
                </p>
              </div>
              <div className={styles.benefits__item}>
                <img src={star} alt="ícone de uma estrela" />
                <h3>Programa de pontos</h3>
                <p>
                  Você pode acumular pontos com suas compras no crédito sem
                  pagar mensalidade!
                </p>
              </div>
              <div className={styles.benefits__item}>
                <img
                  src={device}
                  alt="ícone de um dispositivo como notebook"
                />
                <h3>Seguro Dispositivos</h3>
                <p>
                  Seus dispositivos móveis (computador e laptop) protegidos por
                  uma mensalidade simbólica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
