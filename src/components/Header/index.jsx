import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ModalRegistrationUser,
  ModalLoginUser,
  Button,
  BurguerIcon,
  MenuLateral,
} from 'components';

import { ReactComponent as Logo } from 'assets/bytebank.svg';
import avatarUser from 'assets/avatar.svg';
import styles from './Header.module.css';

export default function Header({ path }) {
  const [modalRegistrationOpen, setRegistrationOpen] = useState(false);
  const [modalLoginOpen, setModalLoginOpen] = useState(false);
  const [burguerOpen, setBurguerOpen] = useState(false);
  const [userName, setUserName] = useState('');

  let navigate = useNavigate();

  const token = sessionStorage.getItem('token');

  const [userIsLogged, setUserIsLogged] = useState(token != null);

  const toggleHamburguer = () => {
    setBurguerOpen(!burguerOpen);
  };

  const whenLogin = () => {
    setModalLoginOpen(false);
    setUserIsLogged(true);
    navigate('/home');
  };

  const whenLoggingOut = () => {
    setUserIsLogged(false);
    sessionStorage.removeItem('token');
    navigate('/');
  };

  const saveUserName = (userName) => {
    setUserName(userName);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        {!userIsLogged && (
          <>
            <div className={styles.buttons}>
              <Button
                actionButton="register"
                text="Abrir minha conta"
                onClick={() => setRegistrationOpen(true)}
              />
              <ModalRegistrationUser
                open={modalRegistrationOpen}
                whenClose={() => setRegistrationOpen(false)}
              />
              <Button
                actionButton="login"
                text="Já tenho conta"
                kind="secondary"
                onClick={() => setModalLoginOpen(true)}
              />
              <ModalLoginUser
                open={modalLoginOpen}
                whenClose={() => setModalLoginOpen(false)}
                whenLogin={whenLogin}
                saveUserName={saveUserName}
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
                actionButton="sair"
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
