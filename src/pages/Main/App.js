import { Outlet, useLocation } from 'react-router-dom';
import { calculateNewBalance } from '../../utils';
import { saveTransaction } from '../../services/transactions';
import { updateBalance } from '../../services/balance';
import useListTransactions from '../../hooks/useListTransactions';
import useBalance from '../../hooks/useBalance';
import styles from './App.module.css';

import Header from '../../components/Header';
import Extract from '../../components/Extract';
import Menu from '../../components/Menu';
import Main from '../../components/Main';
import Transaction from '../../components/Transaction';

export default function App() {
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
      <Header />
      <main className={styles.box}>
        <Menu path={location.pathname} />
        <div className={styles.envelope}>
          <Main balance={balance} />
          {location.pathname === '/' && (
            <Transaction carryOutTransaction={carryOutTransaction} />
          )}
          <Outlet />
        </div>
        <Extract transactions={transactions} />
      </main>
    </>
  );
}
