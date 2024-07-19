import './App.css';
import { useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { About, Profile, Apps, Skills } from './pages';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './contexts/ThemeContext';
import styled from 'styled-components';
import { Navibar }  from './components';
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

  

    
`

function App() {

  const location = useLocation()
  const {theme} = useTheme();
  const [ order, setOrder ] = useState([0, 0]);

  return (
    <StyledApp theme={theme}>
      <AnimatePresence>
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
