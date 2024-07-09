import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveText = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MovingTextContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  top: 0;
  width: 100%;
  height: 40px;
  overflow: hidden;
  white-space: nowrap;
  background-color: #0B3040;
  color: #fff;
  z-index: 1100; 
`;

const MovingText = styled.p`
  display: inline-block;
  padding: 5px;
  animation: ${moveText} 10s linear infinite;
`;

const MovingTextComponent = () => {
  return (
    <MovingTextContainer>
      <MovingText>Join the moving trend!!! We are offering a massive promo for your wears this festive season...</MovingText>
    </MovingTextContainer>
  );
}

export default MovingTextComponent;
