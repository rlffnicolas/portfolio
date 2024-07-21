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

const StyledApp = styled.div`
  background-color: ${props => props.theme === 'light' ? '#ede0d4' : '#000'};
  height: 100vh;
  transition: background-color 0.5s;
  overflow: hidden;
  position: relative;

  .motion {
    position: absolute;
    background-color: rgba(50,50,50,0.1);
    background-color: ${props => props.theme === 'light' ? 'rgba(50,50,50,0.1)' : 'rgba(250,250,250,0.2)'}; 
    overflow-y: scroll;
    padding: ${props => props.$togglenavibar ? '1% 2%' : '8% 4%'};
    border-radius: ${props => props.$togglenavibar ? '30px' : '0'};
    left: ${props => props.$togglenavibar ? '20%' : '0'};
    top: ${props => props.$togglenavibar ? '5%' : '0'};
    width: ${props => props.$togglenavibar ? '74%' : '100%'};
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
    transition: all 0.5s;
    left: ${props => props.$togglenavibar? '12%' : '2%'};
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
        left: ${props => props.$togglenavibar? '30%' : '5%'};
        top: ${props => props.$togglenavibar? '4%' : '3%'};
      }
  } 
`

class CustomScrollbars extends Component {
  render() {
    return (
      <Scrollbars
        renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
        renderTrackVertical={props => <div {...props} className="track-vertical"/>}
        renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
        renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
        renderView={props => <div {...props} className="view"/>}>
        {this.props.children}
      </Scrollbars>
    );
  }
}

function App() {

  const {theme} = useTheme();
  const {toggleNavibar, setToggleNavibar} = useToggleNavibar();
  const location = useLocation();
  const outlet = useOutlet();

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
            duration: 0.5
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
