import React from 'react';
import styled from 'styled-components';
import hero from './Assets/hero.png';

const HeroSection = styled.div`
  position: relative; /* Ensure the section is positioned relative */
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f0f0f0;
  align-items: flex-end; /* Align items towards the base */

  img {
    width: 48%;
    height: auto; /* Maintain aspect ratio */
  }

  .hero-text {
    position: absolute; /* Position the text absolutely */
    bottom: 20px; /* Adjust as needed to position from the bottom */
    right: 20px; /* Adjust as needed to position from the right */
    width: 48%;
    color: #fff; /* Text color */
  }

  .hero-text h2 {
    margin: 0;
    font-size: 2rem;
  }

  .hero-text p {
    font-size: 1rem;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img,
    .hero-text {
      width: 100%;
    }

    .hero-text {
      position: static; /* Reset position to static on smaller screens */
      margin-top: 20px; /* Add margin for spacing */
      text-align: center; /* Center align text */
    }
  }
`;

const HeroComponent = () => (
  <HeroSection>
    <img src={hero} alt="Hero" />
    <div className="hero-text">
      <h2>VirgoWears Digital Collection</h2>
      <p>Do more for yourself by shopping with a world-class fashion designing company.</p>
    </div>
  </HeroSection>
);

export default HeroComponent;
