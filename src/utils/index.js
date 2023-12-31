export const calculateNewBalance = (values, balance) => {
  if (values.transaction === "Depósito") {
    return balance - parseInt(values.value);
  } else {
    return balance + parseInt(values.value);
  }
};
