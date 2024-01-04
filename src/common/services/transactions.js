import api from './api';

export async function searchTransactions() {
  const userId = localStorage.getItem('userId');
  try {
    const resp = await api.get(`/users/${userId}/transations`);
    return resp.data;
  } catch (err) {
    return [];
  }
}

export async function saveTransaction(newTransaction) {
  const userId = localStorage.getItem('userId');
  try {
    const resp = await api.post(`/users/${userId}/transations`, newTransaction);
    return resp.status;
  } catch (err) {
    return 'Erro na requisição';
  }
}
