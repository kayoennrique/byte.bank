import { HomeContext } from 'common/context/HomeContext';
import { updateBalance } from 'common/services/balance';
import { saveTransaction } from 'common/services/transactions';
import { calculateNewBalance } from 'common/utils';
import { useContext } from 'react';

export const useHomeContext = () => {
  const { balance, setBalance, transactions, setTransactions } =
    useContext(HomeContext);

  function carryOutTransaction(values) {
    const newBalance = calculateNewBalance(values, balance);
    setBalance(newBalance);
    updateBalance(newBalance);
    setTransactions([...transactions, values]);
    saveTransaction(values);
  }

  return {
    balance,
    transactions,
    carryOutTransaction,
  };
};
