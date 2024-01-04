import { ReactComponent as Logo } from 'assets/bytebank.svg';
import ModalRegistrationUser from 'components/ModalRegistrationUser';
import ModalLoginUser from 'components/ModalLoginUser';
import Button from 'components/Button';
import avatarUser from 'assets/avatar.svg';
import styles from './Header.module.css';
import BurguerIcon from 'components/Header/BurguerIcon';
import MenuLateral from './BurguerIcon/MenuLateral';
import { useHeaderContext } from 'common/hooks/useHeaderContext';

export default function Head({ path }) {
  const {
    userIsLogged,
    setModalOpenRegistration,
    setModalLoginOpen,
    burguerOpen,
    modalOpenRegistration,
    modalLoginOpen,
    userName,
    toggleHamburguer,
    whenLogin,
    whenLoggingOut,
  } = useHeaderContext();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        {!userIsLogged && (
          <>
            <div className={styles.buttons}>
              <Button
                dataTest="button-register"
                text="Abrir minha conta"
                onClick={() => setModalOpenRegistration(true)}
              />
              <ModalRegistrationUser
                open={modalOpenRegistration}
                whenClose={() => setModalOpenRegistration(false)}
              />
              <Button
                dataTest="button-login"
                text="Já tenho conta"
                kind="secondary"
                onClick={() => setModalLoginOpen(true)}
              />
              <ModalLoginUser
                open={modalLoginOpen}
                whenClose={() => setModalLoginOpen(false)}
                whenLogin={whenLogin}
              />
            </div>
          </>
        )}
        {userIsLogged && (
          <div className={styles.user}>
            <div className={styles.user__info}>
              <p>{`Olá, ${userName}`}</p>
              <img src={avatarUser} alt="Ícone de um avatar de usuário" />
              <Button
                dataTest="button-sair"
                text="Sair"
                onClick={() => whenLoggingOut()}
              />
            </div>
            <div className={styles.hamburguerIcon} onClick={toggleHamburguer}>
              <BurguerIcon />
              {burguerOpen && (
                <MenuLateral
                  path={path}
                  toggleHamburguer={toggleHamburguer}
                  whenLoggingOut={whenLoggingOut}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
