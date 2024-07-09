import React from 'react';
import styled from 'styled-components';
import picture from './Assets/picture.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: calc(100% - 96px); 
  top: 100px;
  right:0;
  height: 100%;
  position: relative;
  left: 91px;

  max-width: 651px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 50%;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const TextSmall = styled.p`
  font-size: 14px;
  color: #0B3040;
`;

const TextLarge = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #0B3040;
`;

const Button = styled.button`
  background-color: #7B602A;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0B3040;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const EclipsesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Eclipse = styled.div`
  width: 20px;
  height: 10px;
  background-color: #7B602A;
  border-radius: 50%;
  margin-right: 5px;

  &:last-child {
    margin-right: 0;
  }
`;

const BigDiv = () => {
  return (
    <Container>
      <LeftContent>
        <TextLarge>Wear to wedding</TextLarge>
        <TextSmall>We give couples a perfect touch that they can use for weddings and...</TextSmall>
        <Button>See more</Button>
      </LeftContent>
      <RightContent>
        <Image src={picture} alt="Cute Couple" />
        <EclipsesContainer>
          <Eclipse />
          <Eclipse />
          <Eclipse />
          <Eclipse />
          <Eclipse />
        </EclipsesContainer>
      </RightContent>
    </Container>
  );
};

export default BigDiv;
