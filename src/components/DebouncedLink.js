import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useClickable } from '../contexts/ClickableContext';

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  width: 100%;
  display: block;
  padding: 10px;
  margin: 5px 0;
  border-radius: 10px;
  transition: all 0.3s;

  ${props => props.$isActive && `
    transform: scale(1.15);
    transform-origin: left;
    background-color: rgba(200,200,200,0.5);
    transition: all 0.3s;
  `}

  &:hover {
    background-color: rgba(200,200,200,0.5);
    transition: all 0.3s;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.6;
  }

  p.arrow {
    position: absolute;
    right: 20%;
    top: -8%;
    opacity: 0;
    transition: all 0.3s; 
  }

  ${props => props.$isActive && `
    p.arrow {
      opacity: 1; 
      right: 5%;
      transition: all 0.3s; 
    }
  `}
`

const DebouncedLink = ({ to, children, delay = 500, isActive, onClick, ...props }) => {
  const { isDisabled, disableLinks } = useClickable();
  const [clickable, setClickable] = useState(true);

  const handleClick = (event) => {
    if (!clickable || isDisabled) {
      event.preventDefault();
      return;
    }

    setClickable(false);
    disableLinks();
    setTimeout(() => setClickable(true), delay);
    if (onClick) onClick();
  };

  return (
    <StyledLink to={to} onClick={handleClick} $isActive={isActive} disabled={isDisabled} {...props}>
      {children}
      <p className='arrow'>→</p>
    </StyledLink>
  );
};

export default DebouncedLink;
