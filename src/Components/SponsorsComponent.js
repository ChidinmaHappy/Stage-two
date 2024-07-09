
import React from 'react';
import styled, { keyframes } from 'styled-components';
import fedex from './Assets/fedex.png';
import apple from './Assets/apple.png';
import Vector from './Assets/Vector.png';
import redhat from './Assets/redhat.png';

const moveRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Sponsors = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  padding: 20px 5px;
  gap: 1rem;

  img {
    width: 30%; /* Maintain aspect ratio */
    height: 30px; /* Reduced height */
    border: 1px solid  #EFD7D7; /* Border for each image */
    padding: 11px; /* Padding around each image */
    animation: ${moveRight} 10s linear infinite; /* Animation properties */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      margin: 10px 0;
      animation: none; /* Disable animation on smaller screens */
    }
  }
`;

const SponsorsComponent = () => (
  <Sponsors>
    <img src={fedex} alt="FedEx" />
    <img src={apple} alt="Apple" />
    <img src={Vector} alt="Twitter" />
    <img src={redhat} alt="RedHat" />
  </Sponsors>
);

export default SponsorsComponent;









