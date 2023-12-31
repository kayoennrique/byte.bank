import React, { useState } from 'react';
import styles from './Form.module.css';

export default function Formulario({ carryOutTransaction }) {
  const [value, setValue] = useState({ transacao: '', valor: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    const valuesUpdated = { ...value, [name]: value };
    setValue(valuesUpdated);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const dateTransaction = new Date().toLocaleDateString('pt-br');
    const monthTransaction = new Date().toLocaleDateString('pt-br', {
      month: 'long',
    });
    carryOutTransaction({
      ...value,
      data: dateTransaction,
      month: monthTransaction[0].toUpperCase() + monthTransaction.substring(1),
    });
    setValue({ ...value, value: '' });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.caption__options}>Nova Transação</h3>
      <select
        className={styles.group__options}
        onChange={handleChange}
        name="transaction"
        data-testid="select-optins"
      >
        <option defaultValue="Selecione um tipo de transação">
          Selecione um tipo de transação
        </option>
        <option value="Depósito">Depósito</option>
        <option value="Transferência">Transferência</option>
      </select>
      <label htmlFor="value" className={styles.subtitle}>
        Valor
      </label>
      <input
        onChange={handleChange}
        className={styles.field__value}
        type="number"
        value={value.value}
        name="valor"
        id="valor"
        placeholder="Digite um valor"
      />
      <button className={styles.button} type="submit">
        Realizar transação
      </button>
    </form>
  );
}
