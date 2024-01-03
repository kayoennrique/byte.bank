import styles from './ModalRegistrationUser.module.css';
import { useState } from 'react';
import api from 'services/api';
import illustrationRegistration from './assets/ilustracao-cadastro.svg';
import Button from 'components/Button';
import { validateDataForm } from 'validations/validForm';

export default function ModalRegistrationUser({ open, whenClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState({});

  const onSubmit = async (event) => {
    event.preventDefault();
    const user = {
      name,
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
      .post('/public/cadastrar', user)
      .then(() => {
        setErro({
          path: 'message-sucess',
          message: 'Usuário cadastrado com sucesso!',
        });
        setName('');
        setEmail('');
        setPassword('');
        setTimeout(() => {
          whenClose();
          setErro({
            path: '',
            message: '',
          });
        }, 1000);
      })
      .catch((erro) => {
        setErro({
          path: 'email',
          message: erro?.response?.data?.message,
        });
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
      <div className={styles.window__modal}>
        <button className={styles.close__modal} onClick={whenClose}>
          X
        </button>
        <div className={styles.modal__container}>
          <img
            src={illustrationRegistration}
            alt="pessoa ao lado de um notebook com cadeado"
          />
          {erro.path == 'message-sucess' ? (
            <span data-test="message-sucess">{erro.message}</span>
          ) : (
            ''
          )}
          <p className={styles.modal__description}>
            Preencha os campos abaixo para criar sua conta corrente!
          </p>
          <form onSubmit={onSubmit} className={styles.modal__form}>
            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                data-test="name-input"
                placeholder="Digite seu nome completo"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              {erro.path === 'name' ? (
                <span data-test="message-erro">{erro.message}</span>
              ) : (
                ''
              )}
            </label>
            <label htmlFor="email">
              E-mail
              <input
                type="email"
                data-test="email-input"
                placeholder="Digite seu email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {erro.path === 'email' ? (
                <span data-test="message-erro">{erro.message}</span>
              ) : (
                ''
              )}
            </label>
            <label htmlFor="password">
              Senha
              <input
                type="password"
                id="password"
                data-test="password-input"
                placeholder="Digite sua senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {erro.path === 'password' ? (
                <span data-test="message-erro">{erro.message}</span>
              ) : (
                ''
              )}
            </label>
            <div className={styles.term__container}>
              <input
                data-test="checkbox-input"
                className={styles.checkbox}
                type="checkbox"
              />
              <p>
                Li e estou ciente quanto às condições de tratamento dos meus
                dados conforme descrito na Política de Privacidade do banco.
              </p>
            </div>
            <Button actionButton="toSend" text="Criar conta" />
          </form>
        </div>
      </div>
    </>
  );
}
