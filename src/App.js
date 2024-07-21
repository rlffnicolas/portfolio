import './App.css';
import React, { useState } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext';
import styled from 'styled-components';
import { Navibar }  from './components';
import { devices } from './deviceSizes';
import { AnimatePresence, motion } from 'framer-motion';

const StyledApp = styled.div`
  background-color: ${props => props.theme === 'light' ? '#ede0d4' : '#000'};
  height: 100vh;
  transition: background-color 0.5s;
  display: flex;

  .navibar-container {
    width: 20%;
  }

  .outlet-container {
    width: 80%;
  }

  .absolute {
    position: absolute;
  }

  .top-0 {
    top: 10%;
  }

    * {
        color: ${props => props.theme === 'light' ? '#7f5539' : '#fff'}; 
        border-color: ${props => props.theme === 'light' ? '#7f5539' : 'rgba(50,50,50,0.5)'} !important;
        
    }

    .row {
      display: flex;
    }

    button.toggle-navibar {
      position: fixed;
      top: 5%;
      z-index: 5;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      box-shadow: none;
      border: none;
      width: 40px;
      cursor: pointer;

      // left: ${props => props.$togglenavibar? '12%' : '2%'};
    }

    button.toggle-navibar > span {
      width: 100%;
      margin: 2px 0;
      height: 2px;
      transition: all 0.5s;
      background-color: ${props => props.theme === 'light' ? '#7f5539' : '#fff'} !important;
    }

    button.toggle-navibar > span:nth-of-type(1) {
      // transform: ${props => props.$togglenavibar? 'rotate(45deg)' : 'none'};
    }

    button.toggle-navibar > span:nth-of-type(2) {
      // transform: ${props => props.$togglenavibar? 'rotate(-45deg) translate(4px, -4px)' : 'none'};
    }

    // button.toggle-navibar > span:nth-of-type(3) {
    //   opacity: ${props => props.$togglenavibar? '0' : '1'};
    //   transform: ${props => props.$togglenavibar? 'rotate(-45deg) translate(8px, -8px)' : 'none'};
    // }

    // @media ${devices.tablet} {
    //     button.toggle-navibar {
    //       left: ${props => props.$togglenavibar? '30%' : '5%'};
    //       top: ${props => props.$togglenavibar? '4%' : '3%'};
    //     }
    // }

    
`

function App() {

  const {theme} = useTheme();
  const [toggleNavibar, setToggleNavibar] = useState(true);
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <StyledApp theme={theme}>
        <button key='toggle-navibar' className='toggle-navibar' onClick={() => {
              setToggleNavibar(!toggleNavibar)
          }}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        <div className='navibar-container'>
          <Navibar className="navibar" />
        </div>
        <AnimatePresence>
          <div className="outlet-container">
          <motion.div
                    key={location.pathname}
                    className="absolute top-0"
                    initial={{ opacity: 0, top: '20%' }}
                    animate={{ opacity: 1, top: '10%' }}
                    exit={{ opacity: 0, top: '0' }}
                    transition={{ duration: 0.5 }}
                >
                   {outlet && React.cloneElement(outlet, { key: location.pathname })}
                </motion.div>
          </div>
        </AnimatePresence>
    </StyledApp>
  );
}

export default App;
