import React from 'react';
import styled from 'styled-components';
import Western from './Assets/Western.png';
import Complete from './Assets/Complete.png';
import Gobbama from './Assets/Gobbama.png';
import GermanSuit from './Assets/GermanSuit.png';
import Goldboy from './Assets/Goldboy.png';
import BlueHoodie from './Assets/BlueHoodie.png';

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  padding: 70px;
  grid-template-columns: repeat(3, 1fr); /* Adjust number of columns as needed */
  gap: 20px; /* Adjust the gap between grid items */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* One column for mobile view */
    padding: 20px;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: row; /* Adjusted to row */
  width: 100%;
  padding: 10px;
  gap: 20px;
  border: 1px solid #ccc;
  border-radius: 16px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on mobile view */
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column; /* Adjusted to column */
  gap: 9px;
  width: 60%; /* Adjusted to take 60% of the container */

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Text = styled.p`
  font-size: 20px;
  color: #0B3040;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-right: 5px;
  font-size: 20px;
  color: #EFB7B3;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const TextIcon = styled.div`
  display: flex;
  justify-content: space-between;

 
`;

const BuyNowButton = styled.button`
  background-color: #7B602A;
  color: white;
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 49px;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0B3040;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    height: 40px;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%; /* Adjusted to take 40% of the container */
  gap: 10px;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightText = styled.p`
  font-size: 18px;
  color: #666;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const RightText2 = styled.p`
  font-size: 10px;
  color: #707678;

  @media (max-width: 768px) {
    font-size: 8px;
  }
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Amount = styled.span`
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Discount = styled.span`
  font-size: 16px;
  color: red;
  margin-left: 35px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-left: 10px;
  }
`;

const SlashedAmount = styled.span`
  font-size: 16px;
  color: #999;
  text-decoration: line-through;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.span`
  color: #CAA351;
  font-size: 20px;
  margin-right: 5px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ActionButton = styled.button`
  background-color: #F3FAFD;
  color: #0B3040;
  border: 1px solid #CAA351;
  border-radius: 11px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 150px;
  height: 45px;
  font-size: 16px;
  padding: 10px;

  &:hover {
    background-color: orangered;
  }

  @media (max-width: 768px) {
    width: 150px;
     margin-left: 5px;
    height: 40px;
    font-size: 14px;
  }
`;

const CollectionSection = () => {
  // Array of objects representing each grid item with its data including image URL and stars count
  const items = [
    {
      id: 1,
      text: 'Western Jacket',
      text2: '40 items left',
      icons: ['❤️', '🛒'],
      image: Western,
      amount: 'N50,000',
      discount: '-40%',
      slashedAmount: 'N80,000',
      stars: 4,
    },
    {
      id: 2,
      text: 'Complete Wear',
      text2: '48 items left',
      icons: ['❤️', '🛒'],
      image: Complete,
      amount: 'N70,000',
      discount: '-30%',
      slashedAmount: 'N90,000',
      stars: 4,
    },
    {
      id: 3,
      text: 'Gobbama Polo',
      text2: '55 items left',
      icons: ['❤️', '🛒'],
      image: Gobbama,
      amount: 'N55,000',
      discount: '-20%',
      slashedAmount: 'N90,000',
      stars: 4,
    },
    {
      id: 4,
      text: 'German Suit',
      text2: '55 items left',
      icons: ['❤️', '🛒'],
      image: GermanSuit,
      amount: 'N75,000',
      discount: '-30%',
      slashedAmount: 'N99,000',
      stars: 4,
    },
    {
      id: 5,
      text: 'GoldBoy Top',
      text2: '55 items left',
      icons: ['❤️', '🛒'],
      image: Goldboy,
      amount: 'N85,000',
      discount: '-45%',
      slashedAmount: 'N199,000',
      stars: 4,
    },
    {
      id: 6,
      text: 'Blue Hoodie',
      text2: '25 items left',
      icons: ['❤️', '🛒'],
      image: BlueHoodie,
      amount: 'N45,000',
      discount: '-25%',
      slashedAmount: 'N89,000',
      stars: 4,
    },
    // Add more items with different data as needed
  ];

  return (
    <GridContainer>
      {items.map((item) => (
        <GridItem key={item.id}>
          <LeftSide>
            <TextIcon>
              <Text>{item.text}</Text>
              <IconsContainer>
                {item.icons.map((icon, index) => (
                  <Icon key={index}>{icon}</Icon>
                ))}
              </IconsContainer>
            </TextIcon>
            <Image src={item.image} alt={`Image ${item.id}`} />
            <BuyNowButton>Buy Now</BuyNowButton>
          </LeftSide>
          <RightSide>
            <RightText>{item.text}</RightText>
            <RightText2>{item.text2}</RightText2>
            <AmountContainer>
              <Amount>{item.amount}</Amount>
              <Discount>{item.discount}</Discount>
            </AmountContainer>
            <SlashedAmount>{item.slashedAmount}</SlashedAmount>
            <StarsContainer>
              {[...Array(item.stars)].map((_, index) => (
                <Star key={index}>⭐️</Star>
              ))}
            </StarsContainer>
            <ActionButton>Add to Cart</ActionButton>
          </RightSide>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default CollectionSection;





















// import React from 'react';
// import styled from 'styled-components';
// import Western from './Assets/Western.png';
// import Complete from './Assets/Complete.png';
// import Gobbama from './Assets/Gobbama.png';
// import GermanSuit from './Assets/GermanSuit.png';
// import Goldboy from './Assets/Goldboy.png';
// import BlueHoodie from './Assets/BlueHoodie.png';

// const GridContainer = styled.div`
//   display: grid;
//   width: 1310px;
//   height: 760px;
//   padding: 70px;
//   grid-template-columns: repeat(3, 1fr); /* Adjust number of columns as needed */
//   gap: 1px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr; /* One column for mobile view */
//     padding: 20px;
//     width: 150px;
//   }

// `;

// const GridItem = styled.div`
//   display: flex;
//   flex-direction: row; /* Adjusted to row */
//   width: 380px;
//   height: 340px;
//   padding: 5px;
//   gap: 15px;
//   border: 1px solid #ccc;
//   border-radius: 16px;

//   @media (max-width: 768px) {
//     width: 100%;
//     height: auto;
//     flex-direction: column; /* Stack items vertically on mobile view */
//   }

// `;

// const LeftSide = styled.div`
//   display: flex;
//   flex-direction: column; /* Adjusted to column */
//   gap: 9px;
//   width: 60%; /* Adjusted to take half of the container */

//   @media (max-width: 768px) {
//     width: 100%;
//   } 

// `;

// const Text = styled.p`
//   font-size: 20px;
//   color: #0B3040;
//   font-weight: 600;


//   @media (max-width: 768px) {
//     font-size: 16px;
//   }


// `;

// const IconsContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Icon = styled.span`
//   margin-right: 5px;
//   font-size: 20px;
//   color: #EFB7B3;


//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: auto;
//   @media (max-width: 768px){
    
//   }

// `;

// const TextIcon = styled.div`
//   display: flex;
//   justify-content: space-between;
//   /* align-content: flex-start; */
// `;

// const BuyNowButton = styled.button`
//   background-color: #7B602A;
//   color: white;
//   border: none;
//   border-radius: 8px;
//   width: 100%;
//   height: 49px;
//   font-size: 16px;
//   padding: 10px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #0B3040;
//   }

//   @media (max-width: 768px) {
//     font-size: 14px;
//     height: 40px;
//   }

// `;

// const RightSide = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 50%; /* Adjusted to take half of the container */
//   gap: 1px;
//   justify-content: center;
//   margin-left: 10px;

//   @media (max-width: 768px) {
//     width: 100%;
//     margin-left: 0;
//   }

// `;

// const RightText = styled.p`
//   font-size: 18px;
//   color: #666;
//   font-weight: 400;


//   @media (max-width: 768px) {
//     font-size: 14px;
//   }

// `;

// const RightText2 = styled.p`
//   font-size: 10px;
//   color: #707678;

//   @media (max-width: 768px) {
//     font-size: 8px;
//   }

// `;

// const AmountContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Amount = styled.span`
//   font-size: 20px;
//   font-weight: bold;


//   @media (max-width: 768px) {
//     font-size: 16px;
//   }

// `;

// const Discount = styled.span`
//   font-size: 16px;
//   color: red;
//   margin-left: 35px;


//   @media (max-width: 768px) {
//     font-size: 14px;
//     margin-left: 10px;
//   }


// `;

// const SlashedAmount = styled.span`
//   font-size: 16px;
//   color: #999;
//   text-decoration: line-through;
//   margin-top: 5px;


//   @media (max-width: 768px) {
//     font-size: 14px;
//   }

// `;

// const StarsContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Star = styled.span`
//   color: #CAA351;
//   font-size: 20px;
//   margin-right: 5px;


//   @media (max-width: 768px) {
//     font-size: 16px;
//   }


// `;

// const ActionButton = styled.button`
//   background-color: #F3FAFD;
//   color: #0B3040;
//   border: 1px solid #CAA351;
//   border-radius: 11px;
//   padding: 10px 20px;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   width: 150px;
//   height:45px;
//   font-size: 16px;
//   padding: 10px;
//   &:hover {
//     background-color: orangered;
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//     height: 40px;
//     font-size: 14px;
//   }


// `;

// const CollectionSection = () => {
//   // Array of objects representing each grid item with its data including image URL and stars count
//   const items = [
//     {
//       id: 1,
//       title: 'Item 1',
//       text: 'Western Jacket',
//       text2: '40 items left',
//       icons: ['❤️', '🛒'], // Updated icons
//       image: Western,
//       amount: 'N50,000',
//       discount: '-40%',
//       slashedAmount: 'N80,000',
//       stars: 4,
//     },
//     {
//       id: 2,
//       title: 'Item 2',
//       text: 'Complete Wear',
//       text2: '48 items left',
//       icons: ['❤️', '🛒'], // Updated icons
//       image: Complete,
//       amount: 'N70,000',
//       discount: '-30%',
//       slashedAmount: 'N90,000',
//       stars: 4,
//     },
//     {
//       id: 3,
//       title: 'Item 3',
//       text: 'Gobbama Polo',
//       text2: '55 items left',
//       icons: ['❤️', '🛒'], // Updated icons
//       image: Gobbama,
//       amount: 'N55,000',
//       discount: '-20%',
//       slashedAmount: 'N90,000',
//       stars: 4,
//     },
//     {
//       id: 4,
//       title: 'Item 4',
//       text: 'German Suit',
//       text2: '55 items left',
//       icons: ['❤️', '🛒'], // Updated icons
//       image: GermanSuit,
//       amount: 'N75,000',
//       discount: '-30%',
//       slashedAmount: 'N99,000',
//       stars: 4,
//     },
//     {
//       id: 5,
//       title: 'Item 5',
//       text: 'GoldBoy Top',
//       text2: '55 items left',
//       icons: ['❤️', '🛒'], // Updated icons
//       image: Goldboy,
//       amount: 'N85,000',
//       discount: '-45%',
//       slashedAmount: 'N199,000',
//       stars: 4,
//     },
//     {
//       id: 6,
//       title: 'Item 6',
//       text: 'Blue Hoodie',
//       text2: '25 items left',
//       icons: ['❤️', '🛒'], // Updated icons
//       image: BlueHoodie,
//       amount: 'N45,000',
//       discount: '-25%',
//       slashedAmount: 'N89,000',
//       stars: 4,
//     },
//     // Add more items with different data as needed
//   ];

//   return (
//     <GridContainer>
//       {items.map((item) => (
//         <GridItem key={item.id}>
//           <LeftSide>
//             <TextIcon>
//               <Text>{item.text}</Text>
//               <IconsContainer>
//                 {item.icons.map((icon, index) => (
//                   <Icon key={index}>{icon}</Icon>
//                 ))}
//               </IconsContainer>
//             </TextIcon>
//             <Image src={item.image} alt={`Image ${item.id}`} />
//             <BuyNowButton>Buy Now</BuyNowButton>
//           </LeftSide>
//           <RightSide>
//             <RightText>{item.text}</RightText>
//             <RightText2>{item.text2}</RightText2>
//             <AmountContainer>
//               <Amount>{item.amount}</Amount>
//               <Discount>{item.discount}</Discount>
//             </AmountContainer>
//             <SlashedAmount>{item.slashedAmount}</SlashedAmount>
//             <StarsContainer>
//               {[...Array(item.stars)].map((_, index) => (
//                 <Star key={index}>⭐️</Star>
//               ))}
//             </StarsContainer>
//             <ActionButton>More Details</ActionButton>
//           </RightSide>
//         </GridItem>
//       ))}
//     </GridContainer>
//   );
// };

// export default CollectionSection;





















































// import React from 'react';
// import styled from 'styled-components';
// import Western from './Assets/Western.png';
// import Complete from './Assets/Complete.png';
// import Gobbama from './Assets/Gobbama.png';
// import GermanSuit from './Assets/GermanSuit.png';
// import Goldboy from './Assets/Goldboy.png';
// import BlueHoodie from './Assets/BlueHoodie.png';



// const GridContainer = styled.div`
//   display: grid;
//   width: 1313px;
//   height: 784px;
//   top: 1291px;
//   left: 96px;
//   padding: 10px;
//   grid-template-columns: repeat(3, 1fr); /* Adjust number of columns as needed */
//   gap: 22px;
// `;

// const GridItem = styled.div`
//   display: grid;
//   width: 397px;
//   height: 356px;
//   padding: 0px, 10px, 0px, 10px;
//   grid-template-rows: auto auto auto;
//   gap: 10px;
//   border: 1px solid #ccc;
//   border-radius: 16px;
// `;

// const LeftSide = styled.div`
//   display: grid;
//   grid-template-rows: auto auto auto;
//   gap: 5px;
//   width: 237px;
//   height: 336px;
// `;

// const Text = styled.p`
//   font-size: 20px;
//   color: #0B3040;
//   font-weight: 600;
//   ;
// `;

// const IconsContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Icon = styled.span`
//   margin-right: 5px;
//   font-size: 20px;
//   color: #EFB7B3;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: auto;
// `;

// const TextIcon = styled.div`
// display:flex;


// `;


// const BuyNowButton = styled.button`
//   background-color: #7B602A;
//   color: white;
//   border: none;
//   border-radius: 8px;
//   width: 204px;
//   height:49px;
//   font-size: 16px;
//   padding: 10px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #0B3040;
//   }
// `;


// const RightSide = styled.div`
//   display: flex;
//   flex-direction: column;
//   width:142px;
//   height: 164px;
//   gap: 8px;
//   align-items: center;
//   justify-content: center;
// `;

// const RightText = styled.p`
//   font-size: 18px;
//   color: #666;
//   font-weight: 400;

// `;

// const RightText2 = styled.p`
//   font-size: 10px;
//   color: #707678;
  

// `;

// const AmountContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Amount = styled.span`
//   font-size: 20px;
//   font-weight: bold;
// `;

// const Discount = styled.span`
//   font-size: 16px;
//   color: red;
//   margin-left: 5px;
// `;

// const SlashedAmount = styled.span`
//   font-size: 16px;
//   color: #999;
//   text-decoration: line-through;
//   margin-top: 5px;
// `;

// const StarsContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Star = styled.span`
//   color: #CAA351;
//   font-size: 20px;
//   margin-right: 5px;
// `;

// const ActionButton = styled.button`
//   background-color: #28a745;
//   color: white;
//   border: 1px solid #CAA351;
// ;
//   border-radius: 4px;
//   padding: 10px 20px;
//   cursor: pointer;
//   transition: background-color 0.3s;
// width: 40px;
//   &:hover {
//     background-color: #218838;
//   }
// `;

// const CollectionSection = () => {
//   // Array of objects representing each grid item with its data including image URL and stars count
//   const items = [
//     {
//       id: 1,
//       title: 'Item 1',
//       text: 'Western Jacket',
//       text2: '40 items left',
//       icons: ['❤️', '🛒'], // Updated icons
//       image: Western,
//       amount: 'N50,000',
//       discount: '-40%',
//       slashedAmount: 'N80,000',
//       stars: 4,
//     },
//     {
//       id: 2,
//       title: 'Item 2',
//       text: 'Complete Wear',
//       text2: '48 items left',
//       icons: ['❤️', '🛒', ], // Updated icons
//       image: Complete,
//       amount: 'N70,000',
//       discount: '-30%',
//       slashedAmount: 'N90,000',
//       stars: 4,
//     },

//      {
//       id: 3,
//       title: 'Item 1',
//       text: 'Gobbama Polo',
//       text2: '55 items left',
//       icons: ['❤️', '🛒'], // Updated icons
//       image: Gobbama,
//       amount: 'N55,000',
//       discount: '-20%',
//       slashedAmount: 'N90,000',
//       stars: 4,
//     },

//      {
//       id: 4,
//       title: 'Item 4',
//       text: 'German Suit',
//       text2: '55 items left',
//       icons: ['❤️', '🛒'], // Updated icons
//       image: GermanSuit,
//       amount: 'N75,000',
//       discount: '-30%',
//       slashedAmount: 'N99,000',
//       stars: 4,
//     },

//      {
//       id: 5,
//       title: 'Item 5',
//       text: 'GoldBoy Top',
//       text2: '55 items left',
//       icons: ['❤️', '🛒'], // Updated icons
//       image: Goldboy,
//       amount: 'N85,000',
//       discount: '-45%',
//       slashedAmount: 'N199,000',
//       stars: 4,
//     },

//      {
//       id: 6,
//       title: 'Item 6',
//       text: 'Blue Hoodie',
//       text2: '25 items left',
//       icons: ['❤️', '🛒'], // Updated icons
//       image: BlueHoodie,
//       amount: 'N45,000',
//       discount: '-25%',
//       slashedAmount: 'N89,000',
//       stars: 4,
//     },
//     // Add more items with different data as needed
//   ];

//   return (
//     <GridContainer>
//       {items.map((item) => (
//         <GridItem key={item.id}>
//           <LeftSide>
//             <TextIcon>
//             <Text>{item.text}</Text>
//             <IconsContainer>
//               {item.icons.map((icon, index) => (
//                 <Icon key={index}>{icon}</Icon>
//               ))}
//             </IconsContainer>
//             </TextIcon>
           
//             <Image src={item.image} alt={`Image ${item.id}`} />
//             <BuyNowButton>Buy Now</BuyNowButton>
//           </LeftSide>
//           <RightSide>
//             <RightText>{item.text}</RightText>
//             <RightText2>{item.text2}</RightText2>
//             <AmountContainer>
//               <Amount>{item.amount}</Amount>
//               <Discount>{item.discount}</Discount>
//             </AmountContainer>
//             <SlashedAmount>{item.slashedAmount}</SlashedAmount>
//             <StarsContainer>
//               {[...Array(item.stars)].map((_, index) => (
//                 <Star key={index}>⭐️</Star>
//               ))}
//             </StarsContainer>
//             <ActionButton>More Details</ActionButton>
//           </RightSide>
//         </GridItem>
//       ))}
//     </GridContainer>
//   );
// };

// export default CollectionSection;
