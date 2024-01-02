import { Outlet, useLocation } from 'react-router-dom';
import { Extract, Menu, Main, Transaction } from 'components';
import { calculateNewBalance } from 'utils';
import { saveTransaction } from 'services/transactions';
import { updateBalance } from 'services/balance';
import useListTransactions from 'hooks/useListTransactions';
import useBalance from 'hooks/useBalance';
import styles from './App.module.css';

export default function Home() {
  const [balance, setBalance] = useBalance();
  const [transactions, setTransactions] = useListTransactions();
  const location = useLocation();

  function carryOutTransaction(values) {
    const newBalance = calculateNewBalance(values, balance);
    setBalance(newBalance);
    updateBalance(newBalance);
    setTransactions([...transactions, values]);
    saveTransaction(values);
  }

  return (
    <>
      <main data-test="app-home" className={styles.box}>
        <Menu path={location.pathname} />
        <div className={styles.envelope}>
          <Main balance={balance} />
          {location.pathname === '/home' && (
            <Transaction carryOutTransaction={carryOutTransaction} />
          )}
          <Outlet />
          <noscript data-testid="local">{location.pathname}</noscript>
        </div>
        <Extract transactions={transactions} />
      </main>
    </>
  );
}
