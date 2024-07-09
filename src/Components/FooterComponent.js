import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f8f8f8;

  .footer-section {
    width: 23%;

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
      margin: 10px 0;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin: 5px 0;
      }
    }

    .social-media {
      display: flex;

      img {
        width: 30px;
        margin: 0 5px;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;

    .footer-section {
      width: 100%;
      text-align: center;
      margin: 10px 0;
    }
  }
`;

const FooterComponent = () => (
  <Footer>
    <div className="footer-section">
      <h3>Products</h3>
      <ul>
        <li>T-Shirt</li>
        <li>Jacket</li>
        <li>Short</li>
        <li>Hat</li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Categories</h3>
      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Gift</li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Social Media</h3>
      <ul>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Youtube</li>
        <li>Twitter</li>
      </ul>
    </div>
  </Footer>
);

export default FooterComponent;
