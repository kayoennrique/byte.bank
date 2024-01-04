import React from 'react';
import styles from './FormAccount.module.css';
import illustration from 'assets/ilustracao-minha-conta.svg';
import { validateDataForm } from 'common/validations/validForm';
import api from 'common/services/api';
import { useNavigate } from 'react-router-dom';
import { useModalContext } from 'common/hooks/useModalContext';
import { ModalContext } from 'common/context/ModalContext';

export const FormAccount = () => {
  const { name, email, password, erro, handleChange, onSubmitUpdateUser } =
    useModalContext(ModalContext);

  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  return (
    <div className={styles.container}>
      <div className={styles.top__detail} />
      <h1>Minha conta</h1>
      <div className={styles.envelope}>
        <img
          src={illustration}
          alt="Ilustração de personagem fazendo alterações em um quadro"
        />
        <form
          onSubmit={() =>
            onSubmitUpdateUser(
              event,
              navigate,
              api,
              validateDataForm,
              userId
            )
          }
          className={styles.form}
        >
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Kayo Ennrique"
            onChange={handleChange}
          />
          {erro.path === 'name' ? (
            <span data-test="message-erro">{erro.message}</span>
          ) : (
            ''
          )}
          <label htmlFor="password">Senha</label>
          <input
            type="text"
            name="password"
            value={password}
            placeholder="kayo123"
            onChange={handleChange}
          />
          {erro.path === 'password' ? (
            <span data-test="message-erro">{erro.message}</span>
          ) : (
            ''
          )}
          <button
            type="submit"
            disabled={name === '' || password === '' ? true : false}
            data-test="save-changes-button"
            className={styles.button}
          >
            Salvar alterações
          </button>
        </form>
      </div>
      <div className={styles.detail__bottom} />
    </div>
  );
};
