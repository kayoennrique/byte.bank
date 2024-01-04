import Menu from 'pages/Home/Menu';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { FormAccount } from './FormAccount';
import styles from './MyAccount.module.css';

export const MyAccount = () => {
  const location = useLocation();
  return (
    <main className={styles.container}>
      <Menu path={location.pathname} />
      <FormAccount />
    </main>
  );
};
