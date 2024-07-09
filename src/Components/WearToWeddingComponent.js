import React from 'react';
import styled from 'styled-components';
import wedding from './Assets/wedding.png';

const WearToWeddingSection = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  background-color: #f0f0f0;
  position: relative;
  top: 15px;

  img {
    width: 48%;
  }

  .text {
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .text h2 {
    margin: 0;
    font-size: 2rem;
  }

  .text button {
    background-color: #7B602A;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img,
    .text {
      width: 100%;
      
    }

    
  }
`;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 30%;

`;

const WearToWeddingComponent = () => (
  <WearToWeddingSection>
    <div className="text">
    
      <h2>Wear To Wedding</h2>
      <p>We give couples a perfect touch that they can use to wedding and...</p>
      <button>See more</button>
      
    </div>
    <img src={wedding} alt='cute couple'/>
  </WearToWeddingSection>
);

export default WearToWeddingComponent;
