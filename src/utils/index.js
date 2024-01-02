export const calculateNewBalance = (values, balance) => {
  if (values.transaction === 'Depósito') {
    return balance + parseInt(values.amount);
  } else {
    return balance - parseInt(values.amount);
  }
};