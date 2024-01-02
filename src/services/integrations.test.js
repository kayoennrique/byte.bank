import api from './api';
import { searchTransactions, saveTransaction } from './transactions';

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

  const mockRequisitionErro = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
          reject();
        }, 200);
      });
    };

  const mockRequisitionPost = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 201,
        });
      }, 200);
    });
  };    

describe('API requests', () => {
    it('Must return a list of transactions', async () => {
        api.get.mockImplementation(() => mockRequisition(mockTransaction));
        const transactions = await searchTransactions();
        expect(transactions).toEqual(mockTransaction);
        expect(api.get).toHaveBeenCalledWith('/transactions')
    });

    it('Must return an empty list when the request fails', async () => {
      api.post.mockImplementation(() => mockRequisitionErro());
      const status = await saveTransaction(mockTransaction[0]);
      expect(status).toBe('Erro na requisição');
      expect(api.post).toHaveBeenCalledWith('/transactions', mockTransaction[0]);
    });

    it('Must return a status of 201 - (Created) after a POST request', async () => {
      api.post.mockImplementation(() => mockRequisitionPost());
      const status = await saveTransaction(mockTransaction[0]);
      expect(status).toBe(201);
      expect(api.post).toHaveBeenCalledWith('/transactions', mockTransaction[0]);
    });    
});