import React, { createContext, useContext, useState } from 'react';

const ToggleNavibarContext = createContext();

export const ToggleNavibarProvider = ({children}) => {

    const [toggleNavibar, setToggleNavibar] = useState(true);

    return (
        <ToggleNavibarContext.Provider value={{ toggleNavibar, setToggleNavibar }}>
            {children}
        </ToggleNavibarContext.Provider>
    )
};

export const useToggleNavibar = () => useContext(ToggleNavibarContext);