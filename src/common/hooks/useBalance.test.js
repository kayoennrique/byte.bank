import { renderHook, act } from '@testing-library/react';
import { searchBalance } from '../services/balance';
import useBalance from './useBalance';

jest.mock('../services/balance');

const mockBalance = {
    amount: 100,
};

describe('hooks/useBalance()', () => {
    it('It should return the balance and a function to update it', async () => {
        searchBalance.mockImplementation(() => mockBalance.amount);
      const { result } = renderHook(() => useBalance());
  
      expect(result.current[0]).toEqual(0);
  
      await act(async () => {
        result.current[1]();
      });
  
      expect(result.current[0]).toEqual(mockBalance.amount);
    });
});