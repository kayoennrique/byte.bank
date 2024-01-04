import { useEffect, useState } from 'react';
import { searchBalance } from '../services/balance';

export default function useBalance() {
  const [balance, setBalance] = useState(0);

  async function getBalance() {
    setBalance(await searchBalance());
  }

  useEffect(() => {
    getBalance();
  }, [balance]);

  return [balance, setBalance];
}
