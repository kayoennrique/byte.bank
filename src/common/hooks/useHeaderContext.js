import { HeadContext } from 'common/context/HeaderContext';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

export const useHeaderContext = () => {
  const {
    modalOpenRegistration,
    modalLoginOpen,
    burguerOpen,
    setModalOpenRegistration,
    setModalLoginOpen,
    setBurguerOpen,
  } = useContext(HeadContext);

  const userName = localStorage.getItem('userName');

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
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    navigate('/');
  };

  return {
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
  };
};
