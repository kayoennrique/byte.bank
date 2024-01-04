import useListTransactions from 'common/hooks/useListTransactions';
import useBalance from 'common/hooks/useBalance';
import { createContext } from 'react';

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [balance, setBalance] = useBalance();
  const [transactions, setTransactions] = useListTransactions();

  return (
    <HomeContext.Provider
      value={{ balance, setBalance, transactions, setTransactions }}
    >
      {children}
    </HomeContext.Provider>
  );
};
