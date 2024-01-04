import { Outlet, useLocation } from 'react-router-dom';
import styles from './App.module.css';

import Extract from './Extract';
import Menu from 'pages/Home/Menu';
import Main from './Main';
import NewTransaction from './NewTransaction';
import { useHomeContext } from 'common/hooks/useHomeContext';

export default function Home() {
  const { balance, transactions, carryOutTransaction } = useHomeContext();
  const location = useLocation();

  return (
    <>
      <main data-test="app-home" className={styles.box}>
        <Menu path={location.pathname} />
        <div className={styles.envelope}>
          <Main balance={balance} />
          {location.pathname === '/home' && (
            <NewTransaction carryOutTransaction={carryOutTransaction} />
          )}
          <Outlet />
          <noscript data-testid="location-pathname">
            {location.pathname}
          </noscript>
        </div>
        <Extract transactions={transactions} />
      </main>
    </>
  );
}
