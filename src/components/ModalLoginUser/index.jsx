import Button from 'components/Button';
import api from 'common/services/api';
import styles from './ModalLoginUser.module.css';
import illustrationLogin from './assets/ilustracao-login.svg';
import { validateDataForm } from 'common/validations/validForm';
import { useModalContext } from 'common/hooks/useModalContext';
import { ModalContext } from 'common/context/ModalContext';

export default function ModalLoginUser({
  open,
  whenClose,
  whenLogin,
}) {
  const { email, password, erro, handleChange, onSubmitLogin } =
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
          <form
            onSubmit={() =>
              onSubmitLogin(
                event,
                api,
                whenClose,
                whenLogin,
                validateDataForm
              )
            }
            className={styles.modal__form}
          >
            <label htmlFor="email">
              E-mail
              <input
                type="email"
                name="email"
                id="email"
                data-test="email-input"
                placeholder="Digite seu email"
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
                name="password"
                id="password"
                placeholder="Digite sua senha"
                data-test="password-input"
                value={password}
                onChange={handleChange}
              />
              {erro.path === 'password' ? (
                <span data-test="message-erro">{erro.message}</span>
              ) : (
                ''
              )}
            </label>
            <Button dataTest="button-toSend" text="Acessar" />
          </form>
          <div className={styles.link}>
            <a href="/">Esqueci minha senha!</a>
          </div>
        </div>
      </div>
    </>
  );
}
