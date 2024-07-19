import './App.css';
import { useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { About, Profile, Apps, Skills } from './pages';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './contexts/ThemeContext';
import styled from 'styled-components';
import { Navibar }  from './components';
import { useToggleNavibar } from './contexts/ToggleNavibarContext';
import { devices } from './deviceSizes';

const StyledApp = styled.div`
  background-color: ${props => props.theme === 'light' ? '#ede0d4' : '#000'};
  height: 100vh;
  transition: background-color 0.5s;

    * {
        color: ${props => props.theme === 'light' ? '#7f5539' : '#fff'}; 
        transition: all 0.5s;
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

function App() {

  const location = useLocation()
  const {theme} = useTheme();
  const {toggleNavibar, setToggleNavibar} = useToggleNavibar();
  const [ order, setOrder ] = useState([0, 0]);

  return (
    <StyledApp theme={theme} $togglenavibar={toggleNavibar}>
      <AnimatePresence>
          <button key='toggle-navibar' className='toggle-navibar' onClick={() => {
                setToggleNavibar(!toggleNavibar)
            }}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          <Navibar order={order} setOrder={setOrder} />
          <Routes location={location} key={location.pathname}>
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
      </AnimatePresence>
    </StyledApp>
  );
}

export default App;
