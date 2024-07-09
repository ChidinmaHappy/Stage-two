import React from 'react';
import styled from 'styled-components';



const TrendingCollectionsSection = styled.div`
  text-align: center;
  padding: 40px 20px;
  position: relative;
  top: 100px;

  h2 {
    margin: 0 0 50px 0;
    font-size: 3rem;
  }

  p {
    font-size: 21px;
    margin: 0 0 20px 0;
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


const TrendingCollectionsComponent = () => (
  <TrendingCollectionsSection>
    <h2>Trending Collections</h2>

    <SentenceDiv>
      <Sentence>
      Discover the latest trends in fashion with our trending collections. From street wear to formal attire, we've got you covered.
      </Sentence>
    </SentenceDiv>
 
    <Button>See all collections</Button>
    
  </TrendingCollectionsSection>
);

export default TrendingCollectionsComponent;
