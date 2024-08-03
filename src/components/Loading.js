// Loading.js
import React, {useState, useEffect} from 'react';
import Logo from '../assets/images/logo.png'
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const StyledLoading = styled.div`
    background-color: ${props => props.theme === 'light' ? '#ede0d4' : '#000'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;

    img {
        width: 50%;
        margin-top: 5%;
        opacity: ${props => props.loading ? '1' : '0'};
        transform: ${props => props.loading ? 'scale(1.1)' : 'none'};
        transform-origin: bottom right;
        transition: opacity 0.5s, transform 0.8s;
    }
`

const Loading = () => {
    const {theme} = useTheme();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            },1300)
        }, 100);
    });

  return (
    <StyledLoading theme={theme} loading={loading}>
      <img src={Logo} />
    </StyledLoading>
  );
};

export default Loading;