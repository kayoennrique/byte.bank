import api from './api';

export async function searchBalance() {
  const userId = localStorage.getItem('userId');
  try {
    const resp = await api.get(`/users/${userId}/balance`);
    return resp.data;
  } catch (err) {
    return 1000;
  }
}

export async function updateBalance(newBalance) {
  const userId = localStorage.getItem('userId');
  api
    .put(`/users/${userId}/balance`, { balance: newBalance })
    .then((resp) => console.log(resp.status))
    .catch((err) => console.log(err));
}