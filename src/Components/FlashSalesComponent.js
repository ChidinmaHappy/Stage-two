import React from 'react';
import styled from 'styled-components';
import man from './Assets/man.png';
import woman from './Assets/woman.png';
import kid from './Assets/kid.png';

const FlashSalesSection = styled.div`
  text-align: center;
  padding: 40px 20px;
  position: relative;
  top: 220px;

  h2 {
    margin: 0 0 20px 0;
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
    margin: 0 0 40px 0;
  }

  .sale-item {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .item {
      width: 23%;
      background-color: #fff;
      border: 1px solid #ddd;
      padding: 20px;
      margin: 10px 0;
      text-align: left;

      img {
        width: 100%;
      }

      h3 {
        font-size: 1.2rem;
        margin: 10px 0;
      }

      p {
        font-size: 1rem;
        margin: 5px 0;
      }

      button {
        background-color: #7B602A;
        color: #fff;
        border: none;
        padding: 10px;
        cursor: pointer;
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    .item {
      width: 100%;
      margin: 10px 0;
    }
  }
`;
const SentenceDiv = styled.div`
  width: 651px;
  height: 87px;
  margin-left: 280px;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Sentence = styled.p`
  font-weight: 400;
  font-size: 30px;
  line-height: 29.05px;
  text-align: center;
  margin-top: 3px;
  color: 0b3040;

  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 27px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 25px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

const Button = styled.button`
  background-color: #7B602A;
  color: white;
  border: none;
  border-radius: 8px;
  width: 230px;
  height: 49px;
  padding: 10px;
  gap: 10px;
  font-size: 20px;
  cursor: pointer;
  

  @media (max-width: 1024px) {
    width: 200px;
    height: 45px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 40px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 35px;
    font-size: 14px;
  }
`;


const FlashSalesComponent = () => (
  <FlashSalesSection>
    <h2>Flash Sales</h2>
    <SentenceDiv>
      <Sentence>Don't miss out on our flash sales! Limited time offers on selected items.</Sentence>
    </SentenceDiv>
    <Button>See all collections</Button>
  </FlashSalesSection>
);

export default FlashSalesComponent;
