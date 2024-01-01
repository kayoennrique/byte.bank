import {calculateNewBalance} from './index';

describe('When I perform a transaction', () => {
    it('Which is a deposit, the balance must increase', () => {
      const transaction = {
        transaction: 'Depósito',
        amount: 50,
      };
  
      const newBalance = calculateNewBalance(transaction, 100);
  
      expect(newBalance).toBe(150);
    });
  
    it('That is a Transfer, the balance should decrease', () => {
      const transaction = {
        transaction: 'Tranferência',
        amount: 50,
      };
  
      const newBalance = calculateNewBalance(transaction, 100);
  
      expect(newBalance).toBe(50);
    });
  });
  
  it('It must return the balance value updated with the income', () => {
    const calculateIncome = jest.fn((balance) => balance + balance * 0.005);
  
    const balance = 100;
  
    const newBalance = calculateIncome(balance);
  
    expect(newBalance).toBe(100.5);
    expect(calculateIncome).toBeCalled();
    expect(calculateIncome).toHaveBeenCalledWith(balance);
  });