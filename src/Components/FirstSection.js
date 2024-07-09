
import React from 'react';
import styled from 'styled-components';
import hero from './Assets/hero.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const MainDiv = styled.div`
  display: flex;
  width: 1300px;
  height: 630px;
  margin: 50px;
  position: relative;
  left: 40px;
  top: 9px;

  @media (max-width: 1024px) {
    width: 90%;
    margin: 20px;
    left: 0;
    top: 60;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    margin: 10px;
    left: 0;
    top: 10px;
  }

  @media (max-width: 480px) {
    margin: 0;
    padding: 10px;
    top: 5px;
  }
`;

const SubDiv = styled.div`
  display: flex;
  width: 827px;
  height: 606px;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const SubDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  width: 469px;
  height: 393px;
  gap: 1px;
  margin-left: 67px;

  @media (max-width: 1024px) {
    width: 90%;
    margin-left: 0;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Text = styled.h1`
  color: #0B3040;

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #FF8A00; 
  font-size: 2rem; 

  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const StarText = styled.p`
  color: #0B3040;
  margin-left: 5px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const EclipseContainer = styled.div`
  margin-top: 616px;
  position: relative;
  margin-right: 32px;
  right: 85%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  @media (max-width: 1024px) {
    margin-top: 40px;
    right: 70%;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    right: 60%;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    right: 50%;
  }
`;

const Eclipse = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${props => props.primary ? '#7B602A' : '#D9D9D9'};
  border-radius: 50%;
  margin: 0 5px;
  transition: transform 0.3s, background-color 0.3s;
  align-self: flex-start;
`;

const Image = styled.img`
  width: 100%; 
  height: auto;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: space-between;
  align-self: flex-end;
  bottom: 0%;
  left: 37%;
  padding: 0;
  gap: 1rem;
  color: white;
  transform: translate(-50%, -50%);
  text-align: center;

  @media (max-width: 1024px) {
    left: 30%;
  }

  @media (max-width: 768px) {
    left: 25%;
  }

  @media (max-width: 480px) {
    left: 20%;
  }
`;

const TextLarge = styled.p`
  font-size: 37px;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const TextSmall = styled.p`
  font-size: 16px; 
  margin-top: 4px;

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (max-width: 480px) {
    font-size: 8px;
  }
`;

const ListItems = styled.li`
  color: #0B3040;
  font-size: 24px;
  font-weight: 100;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const FirstSection = () => {
  return (
    <MainDiv>
      <SubDiv>
        <Image src={hero} alt="Model" />
        <TextContainer>
          <TextLarge>VirgoWears Digital Collection</TextLarge>
          <TextSmall>Do more for yourself by shopping with a world class fashion design company.</TextSmall>
        </TextContainer>
      </SubDiv>
      <SubDiv2>
        <Text>Brown Cardigan Nigerian Made.</Text>
        <StarContainer>
          <Icon icon={faStar} /><Icon icon={faStar} /><Icon icon={faStar} /><Icon icon={faStar} />
          <StarText>4.5(530)</StarText>
        </StarContainer>
        <ul>
          <ListItems>User friendly</ListItems>
          <ListItems>Durable</ListItems>
          <ListItems>Affordable</ListItems>
          <ListItems>Unique</ListItems>
        </ul>
      </SubDiv2>
      <EclipseContainer>
        <Eclipse primary /><Eclipse /> <Eclipse /> <Eclipse /> <Eclipse />
      </EclipseContainer>
    </MainDiv>
  );
};

export default FirstSection;





















// import React from 'react';
// import styled from 'styled-components';
// import myImage from './Assets/manonbrown.png'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

// const MainDiv = styled.div`
// display: flex;
// width: 1300px;
// height:630px;
// margin: 50px;
// position: relative;
// left: 40px;
// top: 95px;
// /* flex-direction: column; */

// `;

// const SubDiv = styled.div`
// display: flex;
// width: 827px ;
// height: 606px;
// position: relative;

// `;


// const SubDiv2 = styled.div`
// display: flex;
// flex-direction: column;
// align-items: flex-start;
//  margin-top: 20px;
// width: 469px;
// height: 393px;
// gap: 1px;
// margin-left: 67px;
// `;


// const Text = styled.h1`
// color:  #0B3040;

// `;


// const StarContainer = styled.div`
// display:flex;
// align-items: center;
// margin-bottom: 10px;
// `;

// const Icon = styled(FontAwesomeIcon)`
//   color: #FF8A00; 
//   font-size: 2rem; 
// `;

// const StarText = styled.p`
// color:  #0B3040;
// margin-left: 5px;
// font-size: 1.5rem;
// display: flex;
// align-items: center;

// `;


// const EclipseContainer = styled.div`
// margin-top: 650px;
// position: relative;
// margin-right: 32px;
// right: 85%;
//   display: flex;
//   justify-content: space-around;
//   align-items: flex-start;

// `;

// const Eclipse = styled.div`
//   width: 15px;
//   height: 15px;
//   background-color: ${props => props.primary ? '#7B602A' : '#D9D9D9'};
//   border-radius: 50%;
//   margin: 0 5px;
//   transition: transform 0.3s, background-color 0.3s;
//   align-self: flex-start;
// `;




// const Image = styled.img`
//   width: 100%; 
//   height: auto; 
// `;

// const TextContainer = styled.div`
// display:flex;
// flex-direction: column;
//   position: absolute;
//   justify-content: space-between;
//   align-self: flex-end;
//   bottom: 0%;
//   left: 37%;
//   padding: 0;
//   gap: 1rem;
//   color: white;
//   transform: translate(-50%, -50%);
//   text-align: center;
// `;

// const TextLarge = styled.p`
//   font-size: 32px;
//   font-weight: 500;
  
// `;

// const TextSmall = styled.p`
//   font-size: 16px; 
// margin-top: 4px;
// `;



// const ListItems = styled.li`
// color:  #0B3040;
// font-size: 24px;
// font-weight: 100;
// `;

// const FirstSection = () => {
//   return (
//      <MainDiv>
// <SubDiv>
//    <Image src={myImage} alt="Model" />
//    <TextContainer>
//         <TextLarge>VirgoWears Digital Collection</TextLarge>
//         <TextSmall>Do more for yourself by shopping with a world class fashion design company.</TextSmall>
//       </TextContainer>

//       </SubDiv>
// <SubDiv2>
//     <Text>
//         Brown Cardigan Nigerian Made.
//       </Text>
//       <StarContainer>
//         <Icon icon={faStar} /><Icon icon={faStar} /><Icon icon={faStar} /><Icon icon={faStar} />
//     <StarText>4.5(530)</StarText>
//       </StarContainer>
//     <ul>
//       <ListItems>User friendly</ListItems>
//     <ListItems>Durable</ListItems>
//     <ListItems>Affordable</ListItems>
//     <ListItems>Unique</ListItems>
//     </ul>
// </SubDiv2>


//       <EclipseContainer>
//       <Eclipse primary /><Eclipse /> <Eclipse />  <Eclipse /> <Eclipse />
//     </EclipseContainer>


//     </MainDiv>
      
//   );
// };

// export default FirstSection;
























































































// import React from 'react';
// import myImage from  './Assets/manonbrown.png'

// const MyComponent = () => {
//   const containerStyle = {
//     position: 'relative',
//     textAlign: 'center',
//     color: 'white',
//   };

//   const imageStyle = {
//     width: '55%', // Adjust as necessary
//     height: 'auto', // Adjust as necessary
    
//   };

//   const textStyle = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     fontSize: '24px', // Adjust as necessary
  //};

  // return (
//     <div style={containerStyle}>
//       <img src={myImage} alt="Description" style={imageStyle} />
//       <div style={textStyle}>Your Text Here</div>
//     </div>
//   );
// };

// export default MyComponent;
