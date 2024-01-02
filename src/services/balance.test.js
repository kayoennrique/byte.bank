import api from './api';
import { searchBalance } from './balance';

jest.mock('./api');

const mockBalance = {
    amount: 50,
};

const mockRequisition = (recurrence) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: recurrence,
        });
      }, 200);
    });
  };
  
  const mockRequisitionErro = () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject();
      }, 200);
    });
  };

describe('src/services/balance.js', () => {
    it('Must return current balance', async () => {
      api.get.mockImplementation(() => mockRequisition(mockBalance));
      const balance = await searchBalance();
  
      expect(balance).toEqual(mockBalance.amount);
      expect(api.get).toHaveBeenCalledWith('/balance');
      expect(api.get).toHaveBeenCalledTimes(1);
    });
    it('Must return balance of 1000', async () => {
      api.get.mockImplementation(() => mockRequisitionErro());
      const balance = await searchBalance();
  
      expect(balance).toEqual(1000);
      expect(api.get).toHaveBeenCalledWith('/balance');
      expect(api.get).toHaveBeenCalledTimes(1);
    });
  });