import { createContext, useState } from 'react';

export const HeadContext = createContext();

export const HeadProvider = ({ children }) => {
  const [modalOpenRegistration, setModalOpenRegistration] = useState(false);
  const [modalLoginOpen, setModalLoginOpen] = useState(false);
  const [burguerOpen, setBurguerOpen] = useState(false);

  return (
    <HeadContext.Provider
      value={{
        modalOpenRegistration,
        modalLoginOpen,
        burguerOpen,
        setModalOpenRegistration,
        setModalLoginOpen,
        setBurguerOpen,
      }}
    >
      {children}
    </HeadContext.Provider>
  );
};
