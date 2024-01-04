import { act, renderHook } from '@testing-library/react';
import { searchTransactions } from '../services/transactions';
import useListTransactions from './useListTransactions';

jest.mock('../services/transactions');

const mockTransaction = [
    {
      id: 1,
      transaction: 'Depósito',
      amount: '100',
      data: '22/11/2022',
      month: 'Novembro',
    },
  ];

describe('hooks/useListTransactions.js', () => {
    it('Must return a list of transactions and a function that updates it', async () => {
        searchTransactions.mockImplementation(() => mockTransaction);
        
        const { result } = renderHook(() => useListTransactions());
        expect(result.current[0]).toEqual([]);

        await act(async () => {
            result.current[1]();
          });
      
          expect(result.current[0]).toEqual(mockTransaction);
        });
});