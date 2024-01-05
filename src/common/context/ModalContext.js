import { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');
  const [erro, setErro] = useState({});

  return (
    <ModalContext.Provider
      value={{
        nome,
        setName,
        email,
        setEmail,
        senha,
        setPassword,
        erro,
        setErro,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
