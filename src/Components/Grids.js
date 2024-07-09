import React from 'react';
import styled from 'styled-components';
import pic1 from './Assets/pic1.png';
import pic2 from './Assets/pic2.png';
import pic3 from './Assets/pic3.png';
import pic4 from './Assets/pic4.png';
import pic5 from './Assets/pic5.png';
import pic6 from './Assets/pic6.png';
import pic7 from './Assets/pic7.png';
import pic8 from './Assets/pic8.png';
import pic9 from './Assets/pic9.png';
import pic10 from './Assets/pic10.png';

const WrapperContainer = styled.div`
  width: 1270px;
  height: 678px;
  top: 100px;
  position: relative;
  left: 122px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px; /* Adjust as necessary */

  @media (max-width: 1440px) {
    width: 90%;
    left: 5%;
  }

  @media (max-width: 1024px) {
    width: 80%;
    left: 10%;
  }

  @media (max-width: 768px) {
    width: 95%;
    left: 2.5%;
    gap: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    left: 0;
    gap: 10px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Adjust min-width as necessary */
  gap: 20px; /* Adjust as necessary */
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const GridItem = styled.div`
  background-color: #f9f9f9; /* Light background color */
  border: 3px transparent #0b3040;
  border-radius: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const ItemText = styled.p`
  font-size: 1rem; /* Adjust as necessary */
  color: #0b3040;
  margin-bottom: 10px;
  font-weight: 600;
  line-height: 29.05px;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 5px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 5px;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 10px; /* Adjust as necessary */

  @media (max-width: 768px) {
    margin-bottom: 5px;
    width: 85%;
  }
`;

const AddToCartButton = styled.button`
  background-color: #7b602a;
  color: white;
  border: none;
  border-radius: 8px;
  width: 204px;
  height: 49px;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0b3040;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 45px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 40px;
    font-size: 12px;
  }
`;

const Grids = () => {
  const items = [
    {
      id: 1,
      image: pic1,
      title: 'Item 1',
      text: 'Black Top'
    },
    {
      id: 2,
      image: pic2,
      title: 'Item 2',
      text: 'Round Top'
    },
    {
      id: 3,
      image: pic3,
      title: 'Item 3',
      text: 'White Top'
    },
    {
      id: 4,
      image: pic4,
      title: 'Item 4',
      text: 'Black Shirt'
    },
    {
      id: 5,
      image: pic5,
      title: 'Item 5',
      text: 'White Hoodie'
    },
    {
      id: 6,
      image: pic6,
      title: 'Item 6',
      text: 'Red Hoodie'
    },
    {
      id: 7,
      image: pic7,
      title: 'Item 7',
      text: 'Black Top'
    },
    {
      id: 8,
      image: pic8,
      title: 'Item 8',
      text: 'Blue Jean'
    },
    {
      id: 9,
      image: pic9,
      title: 'Item 9',
      text: 'Collar Hoodie'
    },
    {
      id: 10,
      image: pic10,
      title: 'Item 10',
      text: 'Black Hat'
    },
  ];

  return (
    <WrapperContainer>
      <GridContainer>
        {items.slice(0, 5).map((item) => (
          <GridItem key={item.id}>
            <ItemText>{item.text}</ItemText>
            <ItemImage src={item.image} alt={item.title} />
            <AddToCartButton>Add to Cart</AddToCartButton>
          </GridItem>
        ))}
      </GridContainer>
      <GridContainer>
        {items.slice(5).map((item) => (
          <GridItem key={item.id}>
            <ItemText>{item.text}</ItemText>
            <ItemImage src={item.image} alt={item.title} />
            <AddToCartButton>Add to Cart</AddToCartButton>
          </GridItem>
        ))}
      </GridContainer>
    </WrapperContainer>
  );
};

export default Grids;
