import { useEffect, useState } from 'react';
import { searchTransactions } from '../services/transactions';

export default function useListTransactions() {
  const [transactions, setTransactions] = useState([]);

  async function listTransactions() {
    const transactions = await searchTransactions();
    setTransactions(transactions);
  }

  useEffect(() => {
    listTransactions();
  }, []);

  return [transactions, setTransactions];
}
