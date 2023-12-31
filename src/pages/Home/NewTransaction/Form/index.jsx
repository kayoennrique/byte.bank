import React, { useState } from 'react';
import styles from './Form.module.css';

export default function Form({ carryOutTransaction }) {
  const [amount, setAmount] = useState({ typeTransaction: '', amount: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    const valuesUpdated = { ...amount, [name]: value };
    setAmount(valuesUpdated);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const dateTransaction = new Date().toLocaleDateString('pt-br');
    const monthTransaction = new Date().toLocaleDateString('pt-br', {
      month: 'long',
    });
    carryOutTransaction({
      ...amount,
      data: dateTransaction,
      month: monthTransaction[0].toUpperCase() + monthTransaction.substring(1),
    });
    setAmount({ ...amount, amount: '' });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <h3 className={styles.caption__options}>Nova Transação</h3>
        <select
          className={styles.group__options}
          onChange={handleChange}
          name="typeTransaction"
          data-testid="select-opcoes"
          data-test="select-opcoes"
        >
          <option defaultValue="Selecione um tipo de transação">
            Selecione um tipo de transação
          </option>
          <option value="Depósito">Depósito</option>
          <option value="Transferência">Transferência</option>
        </select>
      </div>
      <div className={styles.areaValue}>
        <label htmlFor="amount" className={styles.subtitle}>
          Valor
        </label>
        <input
          onChange={handleChange}
          className={styles.field__value}
          type="number"
          value={amount.amount}
          name="amount"
          id="amount"
          placeholder="Digite um valor"
          data-test="form-input"
        />
        <button
          className={styles.button}
          data-test="realiza-transacao"
          type="submit"
        >
          Realizar transação
        </button>
      </div>
    </form>
  );
}
