import React, { createContext, useContext, useState } from 'react';

const ClickableContext = createContext();

export const ClickableProvider = ({ children }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const disableLinks = () => {
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 700);
  };

  return (
    <ClickableContext.Provider value={{ isDisabled, disableLinks }}>
      {children}
    </ClickableContext.Provider>
  );
};

export const useClickable = () => useContext(ClickableContext);
