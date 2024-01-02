import api from './api';
import { searchTransactions } from './transactions';

jest.mock('./api');

const mockTransaction = [
    {
      id: 1,
      transacao: 'Depósito',
      valor: '100',
      data: '22/11/2022',
      mes: 'Novembro',
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

describe('Requisições para API', () => {
    it('Must return a list of transactions', async () => {
        api.get.mockImplementation(() => mockRequisition(mockTransaction));

        const transactions = await searchTransactions();
        expect(transactions).toEqual(mockTransaction);
        expect(api.get).toHaveBeenCalledWith('/transactions')
    })
});