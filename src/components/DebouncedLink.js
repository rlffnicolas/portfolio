import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useClickable } from '../contexts/ClickableContext';
import { useToggleNavibar } from '../contexts/ToggleNavibarContext';
import { MaterialSymbol } from 'react-material-symbols';

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  display: block;
  padding: 10px;
  margin: 5px;
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

  .arrow {
    position: absolute;
    right: 20%;
    top: 30%;
    opacity: 0;
    transition: all 0.3s; 
  }

  ${props => props.$isActive && `
    .arrow {
      opacity: 1; 
      right: 5%;
      transition: all 0.3s; 
    }
  `}
`

const DebouncedLink = ({ to, children, delay = 500, isActive, onClick, ...props }) => {

  const { toggleNavibar, setToggleNavibar } = useToggleNavibar();

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
      <MaterialSymbol className="arrow" icon="arrow_forward_ios" />
    </StyledLink>
  );
};

export default DebouncedLink;
