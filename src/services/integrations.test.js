import api from './api';
import { searchTransactions } from './transactions';

jest.mock('./api');

const mockTransaction = [
    {
      id: 1,
      transaction: 'Depósito',
      amount: '100',
      data: '22/11/2022',
      month: 'Novembro',
    },
  ];

  const mockRequisition = (recurrence) => {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: recurrence,
          });
        }, 200);
      });
    };

  const mockRequisitionErro = (recurrence) => {
    return new Promise((_, reject) => {
        setTimeout(() => {
          reject();
        }, 200);
      });
    };

describe('Requisições para API', () => {
    it('Must return a list of transactions', async () => {
        api.get.mockImplementation(() => mockRequisition(mockTransaction));

        const transactions = await searchTransactions();
        expect(transactions).toEqual(mockTransaction);
        expect(api.get).toHaveBeenCalledWith('/transactions')
    });

    it('Must return an empty list when the request fails', async () => {
        api.get.mockImplementation(() => mockRequisitionErro());

        const transactions = await searchTransactions();

        expect(transactions).toEqual([]);
        expect(api.get).toHaveBeenCalledWith('/transactions')
    });
});