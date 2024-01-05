import React from 'react';
import styles from './FormAccount.module.css';
import illustration from 'assets/ilustracao-minha-conta.svg';
import { validateDataForm } from 'common/validations/validForm';
import api from 'common/services/api';
import { useNavigate } from 'react-router-dom';
import { useModalContext } from 'common/hooks/useModalContext';
import { ModalContext } from 'common/context/ModalContext';

export const FormAccount = () => {
  const { nome, email, senha, erro, handleChange, onSubmitUpdateUser } =
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
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            value={nome}
            placeholder="Kayo Ennrique"
            onChange={handleChange}
          />
          {erro.path === 'nome' ? (
            <span data-test="message-erro">{erro.message}</span>
          ) : (
            ''
          )}
          <label htmlFor="password">Senha</label>
          <input
            type="text"
            name="password"
            value={senha}
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
            disabled={nome === '' || senha === '' ? true : false}
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
