import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import DebouncedLink from './DebouncedLink';
import { ClickableProvider } from '../contexts/ClickableContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import translations from '../translations.json';
import { devices } from '../deviceSizes';


const StyledNavibar = styled.div`
  position: fixed;
  top: 2%;
  z-index: 2;
  width: 18%;
  height: 96vh;
  transition: all 0.5s;
  padding-top: 10%;

  
  h1 {
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 10px 50px 10px 30px;
  }

  ul.row {
    flex-direction: row;
    justify-content: space-around;
  }

  li {
    list-style-type: none;
    text-align: start;
  }

  button {
    background-color: transparent;
    border: none;
    transition: background-color 0.5s;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
  }

  button:hover {
    background-color: rgba(200, 200, 200, 0.5);
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
    width: 40%;
    background-color: ${props => props.theme === 'light' ? '#ede0d4' : '#000'};
    left: 0;
    top: 0;
    padding-top: 15%;
  }

`;

const Navibar = ({ order, setOrder }) => {
  const [activeLink, setActiveLink] = useState(null);
  const { language, changeLanguage } = useLanguage();
  const { theme, changeTheme } = useTheme();
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

  return (
    <StyledNavibar theme={theme} >
      <ClickableProvider>

          <h1>
            {navibar[language].name}
          </h1>

        <ul>
          {['/about', '/profile', '/skills', '/apps'].map((path, index) => (
              <DebouncedLink
                to={path}
                isActive={activeLink === path}
                onClick={() => {
                  setActiveLink(path);
                  setOrder([order[1], index]);
                  
                }}
              >
                {navibar[language].menu[path.substring(1)]}
              </DebouncedLink>
          ))}
        </ul>

        <br />

        <ul className="row">
          {['jp', 'en', 'fr'].map((lang, index) => (
              <button onClick={() => {
                changeLanguage(lang);
               
                }}>
                {lang === 'jp' ? '🇯🇵' : lang === 'en' ? '🇬🇧' : '🇫🇷'}
              </button>
          ))}
        </ul>

        <ul className="row">
          {['light', 'dark'].map((theme, index) => (
              <button onClick={() => {
                changeTheme(theme); 
                
                }}>
                {theme === 'light' ? '☀️' : '🌙'}
              </button>
          ))}
        </ul>
        
      </ClickableProvider>
    </StyledNavibar>
  );
};


export default Navibar;
