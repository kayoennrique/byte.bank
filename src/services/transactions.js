import api from './api';

export async function searchTransactions() {
  try {
    const resp = await api.get('/transactions');
    return resp.data;
  } catch (err) {
    return [];
  }
}

export async function saveTransaction(newTransaction) {
  try {
    const resp = await api.post('/transactions', newTransaction);
    return resp.status;
  } catch (err) {
    return 'Erro na requisição';
  }
}
