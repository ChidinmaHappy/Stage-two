import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import MovingTextComponent from './MovingText';

const Nav = styled.nav`
  width: 100%;
  background-color: #F3FAFD;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  position: fixed;
  top: 35px;
  left: 0;
  z-index: 1000;
  box-shadow: 0 1px 4px #0B3040;
`;

const NavLogo = styled.div`
  color: #0B3040;
  font-size: 24px;
  font-weight: 600;
  align-content: center;
  line-height: 29.05px;
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #333;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavItem = styled.li`
  color: #0B3040;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #ff6347;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const NavLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const MenuToggle = styled.div`
  display: none;
  color: #0B3040;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  width: 135px;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  color: #0B3040;
  padding: 5px;
  outline: none;
  width: 100px;

  &::placeholder {
    color: #0B3040;
  }
`;

const SearchIcon = styled(FaSearch)`
  color: #0B3040;
  margin-left: 5px;
  cursor: pointer;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  color: #ff6347;
  cursor: pointer;
`;

const CartIcon = styled(FaShoppingCart)`
  font-size: 24px;
  margin-right: 5px;
  color: #0B3040;
`;

const CartText = styled.span`
  font-size: 18px;
  color: #0B3040;
`;

const ProfileIcon = styled(FaUser)`
  font-size: 24px;
  margin-left: 10px;
  color: #0B3040;
  cursor: pointer;
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MovingTextComponent />
      <Nav>
        <NavLogo>VirgoWears</NavLogo>
        <MenuToggle onClick={toggleMenu}>
          ☰
        </MenuToggle>
        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLink href="#home">Men</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about">Women</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#services">Trending</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
        </NavMenu>
        <SearchContainer>
          <SearchInput placeholder="Search" />
          <SearchIcon />
        </SearchContainer>
        <CartContainer>
          <CartIcon />
          <CartText>Cart</CartText>
        </CartContainer>
        <ProfileIcon />
      </Nav>
    </>
  );
}

export default NavBar;
