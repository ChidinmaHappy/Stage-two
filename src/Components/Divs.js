import React from 'react';
import styled from 'styled-components';
import woman from './Assets/woman.png';
import kid from './Assets/kid.png';
import man from './Assets/man.png';

const General = styled.div`
display: flex;
width:600px;
height: 231px;
top: 280px;
position: relative;
/* left: 50px; */
gap:15px;
align-self: flex-start;

`;


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  justify-content: space-between;
  width: 400px;
  height: auto;
  position: relative;
  left: 113px;

  @media (min-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 50px;
  width: 300px;
  height: 231px;
  border-radius: 16px;

  @media (min-width: 768px) {
    width: 100%;
    /* width: calc(33.33% - 20px); Adjust spacing between items */
  }
`;

const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
Width: 237px;
margin: 0;
Height: 156px;
Padding: 10px;
Gap: 10px;

`;


const TextSmall = styled.p`
  font-size: 16px;
  /* width: 40px; */
  line-height: 19.36px;
  margin-top: 8px;
  color: #0B3040;
`;

const TextLarge = styled.p`
  font-size: 24px;
  line-height: 29.05px;
  font-weight: 600;
  color: #0B3040;
`;

const Button = styled.button`
  background-color: #7B602A;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  width: 204px;
  height:49px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0B3040;
  }
`;

const Image = styled.img`
  width: 152px; /* Adjust image size as necessary */
  height: 232px;
  align-self: flex-end; /* Align image to the right side */
  margin-left: auto; /* Push image to the rightmost side */
  margin-top: 0; /* Adjust spacing as necessary */

  @media (min-width: 768px) {
    margin-top: 0; /* Reset top margin on larger screens */
  }
`;

const Divs = () => {
  return (
    <General>
 <Wrapper>
      <GridItem>
      <Div>
      <TextLarge>Ladies Wears</TextLarge>
        <TextSmall>We give the best when it comes to...</TextSmall>
        <Button>See more</Button>
      </Div>
        <Image src={woman} alt="Lady" />
      </GridItem>
      <GridItem>
        <Div>
        <TextLarge>Kiddies Wear</TextLarge>
        <TextSmall>We give the best when it comes to...</TextSmall>
        <Button>See more</Button>
        </Div>
        <Image src={kid} alt="Kiddie" />
      </GridItem>
      <GridItem>
        <Div>
        <TextLarge>Mens Wear</TextLarge>
        <TextSmall>We give the best when it comes to...</TextSmall>
        <Button>See more</Button>
        </Div>
        <Image src={man} alt="Man" />
      </GridItem>
    </Wrapper>
    </General>
   
  );
};

export default Divs;
