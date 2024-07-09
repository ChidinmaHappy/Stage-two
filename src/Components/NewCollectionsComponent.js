import React from 'react';
import Western from './Assets/Western.png';
import complete from './Assets/Complete.png';
import Gobbama from './Assets/Gobbama.png';
import GermanSuit from './Assets/GermanSuit.png';
import Goldboy from './Assets/Goldboy.png';
import BlueHoodie from './Assets/BlueHoodie.png';
import styled from 'styled-components';

const NewCollectionsSection = styled.div`
  text-align: center;
  padding: 40px 20px;

  h1 {
    margin: 0 0 20px 0;
    color: 0b3040;
    font-size: 2.5rem; /* Increase font size for h1 */
  }

  p {
    font-size: 1rem;
    margin: 0 0 40px 0;
  }

  button {
    /* background-color: #000; */
    color: #fff;
    border: none;
    padding: 10px 20px; /* Increase padding for better button visibility */
    cursor: pointer;
    display: inline-block; /* Ensure button behaves as a block element */
    margin-top: 20px; /* Add margin for spacing */
  }

  .collection-item {
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

      /* p {
        font-size: 1rem;
        margin: 5px 0;
        text-align: center;
        color: 0B3040;
      } */

    
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
  font-size: 20px;
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


const NewCollectionsComponent = () => (
  <NewCollectionsSection>
    <h1>New Collections</h1>
    <SentenceDiv>
        <Sentence>Save your money for future use, BY SHOPPING WITH US FOR ALL YOUR AFFORDABLE WEARS, INCLUDING CLASSIC AND CONTEMPORARY WEARS.</Sentence>
    </SentenceDiv>
    <Button>See all collections</Button>
    <div className="collection-item">
      <div className="item">
        <img src={Western} alt="Western Jacket" />
        <h3>Western Jacket</h3>
        <p>₦30,000</p>
        <button>Buy Now</button>
        <button>Add to Cart</button>
      </div>
      {/* Repeat other items */}
    </div>
  </NewCollectionsSection>
);

export default NewCollectionsComponent;
