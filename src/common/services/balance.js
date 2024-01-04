import api from './api';

export async function searchBalance() {
  try {
    const resp = await api.get('/balance');
    return resp.data.amount;
  } catch (err) {
    return 1000;
  }
}

export async function updateBalance(newBalance) {
  api
    .put('/balance', { amount: newBalance })
    .then((resp) => console.log(resp.status))
    .catch((err) => console.log(err));
}
