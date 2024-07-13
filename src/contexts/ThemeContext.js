import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(getThemeDependingOnTime());

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )

    function getThemeDependingOnTime() {
        const date = new Date();
        const morningTime = '06:00:00';
        const eveningTime = '17:00:00';
        var s =  morningTime.split(':');
        var dt1 = new Date(date.getFullYear(), date.getMonth(), date.getDate(),
                    parseInt(s[0]), parseInt(s[1]), parseInt(s[2]));
        var e =  eveningTime.split(':');
        var dt2 = new Date(date.getFullYear(), date.getMonth(), date.getDate(),
                        parseInt(e[0]), parseInt(e[1]), parseInt(e[2]));
        let themeOnStart;
        if (date >= dt1 && date <= dt2) {
            themeOnStart = 'light';
        } else {
            themeOnStart = 'dark';
        }
        return themeOnStart;
    }
};

export const useTheme = () => useContext(ThemeContext);