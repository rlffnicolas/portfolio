import './App.css';
import React, { useState ,Component } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useOutlet } from "react-router-dom";
import { useTheme } from './contexts/ThemeContext';
import styled from 'styled-components';
import { Navibar }  from './components';
import { useToggleNavibar } from './contexts/ToggleNavibarContext';
import { devices } from './deviceSizes';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useLanguage } from './contexts/LanguageContext';

const StyledApp = styled.div`
  body {
    background-color: ${props => props.theme === 'light' ? '#ede0d4' : '#000'};
  }

  background-color: ${props => props.theme === 'light' ? '#ede0d4' : '#000'};
  height: 100vh;
  transition: background-color 0.5s;
  overflow: hidden;
  position: relative;

  .motion {
    position: absolute;
    background-color: ${props => props.theme === 'light' ? 'rgba(50,50,50,0.1)' : 'rgba(250,250,250,0.2)'}; 
    padding: ${props => props.$togglenavibar ? '1% 2%' : '8% 4%'};
    border-radius: ${props => props.$togglenavibar ? '30px' : '0'};
    left: ${props => props.$togglenavibar ? '20%' : '0'};
    top: ${props => props.$togglenavibar ? '5%' : '0'};
    width: ${props => props.$togglenavibar ? '74%' : '92%'};
    height: ${props => props.$togglenavibar ? '90%' : '100%'};
    transition: left 0.5s, width 0.5s, height 0.5s, padding 0.6s, top 0.5s, border-radius 1s;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  .motion::-webkit-scrollbar {
    display: none;
  }

  * {
      color: ${props => props.theme === 'light' ? '#7f5539' : '#fff'}; 
      border-color: ${props => props.theme === 'light' ? '#7f5539' : 'rgba(50,50,50,0.5)'} !important;
  }

  *:not(.arrow, .material-symbols) {
      font-family: "M PLUS 1", sans-serif !important;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal; 
  }

  h1, h2, h3, h4, h5 {
    font-weight: 500 !important;
  }

  button.toggle-navibar {
    position: fixed;
    top: ${props => props.$togglenavibar? '10%' : '5%'};
    z-index: 5;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    box-shadow: none;
    border: none;
    width: 40px;
    cursor: pointer;
    transition: all 0.5s;
    left: ${props => props.$togglenavibar? '14%' : '2%'};
  }

  button.toggle-navibar > span {
    width: 100%;
    margin: 2px 0;
    height: 2px;
    transition: all 0.5s;
    background-color: ${props => props.theme === 'light' ? '#7f5539' : '#fff'} !important;
  }

  button.toggle-navibar > span:nth-of-type(1) {
    transform: ${props => props.$togglenavibar? 'rotate(45deg)' : 'none'};
  }

  button.toggle-navibar > span:nth-of-type(2) {
    transform: ${props => props.$togglenavibar? 'rotate(-45deg) translate(4px, -4px)' : 'none'};
  }

  button.toggle-navibar > span:nth-of-type(3) {
    opacity: ${props => props.$togglenavibar? '0' : '1'};
    transform: ${props => props.$togglenavibar? 'rotate(-45deg) translate(8px, -8px)' : 'none'};
  }

  @media ${devices.tablet} {
      button.toggle-navibar {
        left: ${props => props.$togglenavibar? '65%' : '5%'};
        top: ${props => props.$togglenavibar? '6%' : '3%'};
      }
        
      .motion {
        padding: 30px 2% !important;
        left: ${props => props.$togglenavibar ? '20%' : '0'};
        width: 100% !important;
        top: 0 !important;
        height: 100vh !important;
      }
  } 
`

function App() {

  const {theme} = useTheme();
  const {toggleNavibar, setToggleNavibar} = useToggleNavibar();
  const location = useLocation();
  const outlet = useOutlet();
  const language = useLanguage();

  return (
    <StyledApp theme={theme} $togglenavibar={toggleNavibar}>

      <button key='toggle-navibar' className='toggle-navibar' onClick={() => {
        setToggleNavibar(!toggleNavibar)
      }}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <Navibar />

      <AnimatePresence>
        <motion.div
          key={location.pathname}
          className="motion"
          initial={{ opacity: 0, transform: 'translate(10px, 50px)' }}
          animate={{ opacity: 1, transform: 'translate(0)' }}
          exit={{ opacity: 0, transform: 'translate(-10px, -50px)' }}
          transition={{
            duration: 0.4
          }}
        >
          <Scrollbars>
            {outlet && React.cloneElement(outlet, { key: location.pathname })}
          </Scrollbars>
        </motion.div>
      </AnimatePresence>
    </StyledApp>
  );
}

export default App;
