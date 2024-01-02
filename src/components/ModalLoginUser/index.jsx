import Button from 'components/Button';
import { useState } from 'react';
import api from 'services/api';
import styles from './ModalLoginUser.module.css';
import illustrationLogin from './assets/ilustracao-login.svg';
import { validateDataForm } from 'validations/validForm';

export default function ModalLoginUser({
  open,
  whenClose,
  whenLogin,
  saveUserName,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    const result = await validateDataForm(user);
    if (!result.valid) {
      setErro({
        path: result.path,
        message: result.message,
      });
      return;
    }

    api
      .post('/public/login', user)
      .then((response) => {
        sessionStorage.setItem('token', response.data.access_token);
        setEmail('');
        setPassword('');
        setErro({
          path: '',
          message: '',
        });
        whenLogin();
        const userName = response.data.user.name;
        saveUserName(userName);
      })
      .catch((erro) => {
        if (erro?.response?.data?.message) {
          setErro({
            path: 'message-erro',
            message: erro.response.data.message,
          });
        } else {
          alert(
            'Aconteceu um erro inesperado ao efetuar login! Contate o suporte'
          );
          whenClose();
        }
      });
  };

  if (!open) {
    return <></>;
  }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className={styles.background__modal}
        onClick={whenClose}
        aria-hidden="true"
      />
      ;
      <div className={styles.window__modal}>
        <button className={styles.close__modal} onClick={whenClose}>
          X
        </button>
        <div className={styles.modal__container}>
          <img
            src={illustrationLogin}
            alt="pessoa ao lado de um dispositivo móvel"
          />
          {erro.path == 'message-erro' ? <span>{erro.message}</span> : ''}
          <p className={styles.modal__description}>Login</p>
          <form onSubmit={onSubmit} className={styles.modal__form}>
            <label htmlFor="email">
              E-mail
              <input
                type="email"
                name="email"
                id="email"
                data-test="email-input"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {erro.path === 'email' ? (
                <span data-test="mensagem-erro">{erro.message}</span>
              ) : (
                ''
              )}
            </label>
            <label htmlFor="password">
              Senha
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                data-test="senha-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {erro.path === 'password' ? (
                <span data-test="mensagem-erro">{erro.message}</span>
              ) : (
                ''
              )}
            </label>
            <Button actionButton="enviar" text="Acessar" />
          </form>
          <div className={styles.link}>
            <a href="/">Esqueci minha senha!</a>
          </div>
        </div>
      </div>
    </>
  );
}
