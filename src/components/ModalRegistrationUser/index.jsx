import styles from './ModalRegistrationUser.module.css';
import api from 'common/services/api';
import { validateDataForm } from 'common/validations/validForm';
import illustrationRegistration from './assets/ilustracao-cadastro.svg';
import Button from 'components/Button';
import { useModalContext } from 'common/hooks/useModalContext';
import { ModalContext } from 'common/context/ModalContext';

export default function ModalRegistrationUser({ open, whenClose }) {
  const { name, email, password, erro, handleChange, onSubmitRegistration } =
    useModalContext(ModalContext);

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
            <span data-test="message-sucesso">{erro.message}</span>
          ) : (
            ''
          )}
          <p className={styles.modal__description}>
            Preencha os campos abaixo para criar sua conta corrente!
          </p>
          <form
            onSubmit={() =>
              onSubmitRegistration(e, api, whenClose, validateDataForm)
            }
            className={styles.modal__form}
          >
            <label htmlFor="name">
              a
              <input
                type="text"
                id="name"
                data-test="name-input"
                placeholder="Digite seu nome completo"
                name="name"
                value={name}
                onChange={handleChange}
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
                name="email"
                value={email}
                onChange={handleChange}
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
                name="password"
                value={password}
                onChange={handleChange}
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
            <Button dataTest="button-toSend" text="Criar conta" />
          </form>
        </div>
      </div>
    </>
  );
}
