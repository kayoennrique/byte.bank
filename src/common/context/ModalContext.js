import { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState({});

  return (
    <ModalContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        erro,
        setErro,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
