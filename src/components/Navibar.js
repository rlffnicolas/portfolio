import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import DebouncedLink from './DebouncedLink';
import { ClickableProvider } from '../contexts/ClickableContext';
import { useToggleNavibar } from '../contexts/ToggleNavibarContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import translations from '../translations.json';
import { devices } from '../deviceSizes';
import Switch from '@mui/material/Switch';

const useCheckMobileScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
          setWidth(window.innerWidth);
  }

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  return (width <= 768);
}


const StyledNavibar = styled.div`
  position: fixed;
  top: 2%;
  z-index: 2;
  width: 18%;
  height: 96vh;
  transition: all 0.5s;
  padding-top: 10%;

  left: ${props => props.$togglenavibar ? '0' : '-15%'}; 
  opacity: ${props => props.$togglenavibar ? '1' : '0'}; 
  
  h1 {
    text-align: start;
    font-size: 26px;
    margin-left: 40px;
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 10px 50px 10px 30px;
  }

  ul.row {
    flex-direction: row;
  }

  li {
    list-style-type: none;
    text-align: start;
  }

  button {
    background-color: rgba(200, 200, 200, 0.2);
    border: none;
    transition: background-color 0.5s;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    padding: 3px 6px;
    margin: 0 5px;
  }

  button:hover {
    background-color: rgba(200, 200, 200, 0.6);
    transition: all 0.5s;
  }

  a {
    text-decoration: none;
    width: 100%;
    display: block;
    padding: 10px;
    border-radius: 10px;
  }

  a:hover {
    background-color: rgba(200, 200, 200, 0.5);
  }

  @media ${devices.tablet} {
    width: 80%;
    background-color: ${props => props.theme === 'light' ? '#ede0d4' : '#000'};
    pointer-events: ${props => props.$togglenavibar ? 'initial' : 'none'};
    left: 0;
    top: 0;
    padding-top: 15%;
  }

  a {
    width: 80%;
  }

  ul {
    
    
  }

`;



const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 64,
  height: 34,
  padding: 7,
  marginLeft: 30,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(0)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(26px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));



const Navibar = () => {
  const [activeLink, setActiveLink] = useState(location.pathname == '/' ? '/about' : location.pathname);
  const { language, changeLanguage } = useLanguage();
  const { theme, changeTheme } = useTheme();
  const { toggleNavibar, setToggleNavibar } = useToggleNavibar();
  const { navibar } = translations; 

 


  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
      },
    }),
  };
  const variants2 = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
      },
    }),
  };

  let checked;
  if (theme == 'light') {
    checked = false;
  } else {
    checked = true;
  }

  function handleChangeTheme() {
    if (theme == 'light') {
      changeTheme('dark')
      checked = true;
    } else {
      changeTheme('light')
      checked = false;
    }
  }

  const isMobile = useCheckMobileScreen();


  return (
    <StyledNavibar theme={theme} $togglenavibar={toggleNavibar} >
      <ClickableProvider>

        <motion.h1
          key={language}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          custom={0}
        >
          {navibar[language].name}
        </motion.h1>

        <ul>
          {['/about', '/profile', '/skills', '/apps'].map((path, index) => (
           
              <DebouncedLink
                key={index}
                to={path}
                isActive={activeLink === path}
                onClick={() => {
                  setActiveLink(path);
                  isMobile ? setToggleNavibar(!toggleNavibar) : '';
                }}
              >
                <motion.div 
                  key={language}
                  custom={0.5+index/3}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={variants}
                >
                {navibar[language].menu[path.substring(1)]}
                </motion.div> 
              </DebouncedLink>
          ))}
        </ul>

        <ul className="row">
          {['jp', 'en', 'fr'].map((lang, index) => (
            <motion.li
              key={lang}
              custom={2+index/3}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants2}
            >
              <button onClick={() => {
                changeLanguage(lang);
                isMobile ? setToggleNavibar(!toggleNavibar) : '';
                }}>
                {lang === 'jp' ? '🇯🇵' : lang === 'en' ? '🇬🇧' : '🇫🇷'}
              </button>
            </motion.li>
          ))}
        </ul>

        <motion.div
          key='lightdarkmode'
          custom={3}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants2}
        >
          <MaterialUISwitch onChange={handleChangeTheme} checked={checked} />
        </motion.div>
        
      </ClickableProvider>
    </StyledNavibar>
  );
};


export default Navibar;
