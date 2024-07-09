import React from 'react';
import styled from 'styled-components';
import visa from './Assets/visa.png';
import masters from './Assets/masters.png';
import BlueHoodie from './Assets/BlueHoodie.png';
import Complete from './Assets/Complete.png';
import GermanSuit from './Assets/GermanSuit.png';

const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f3fafd;
`;


const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #0b3040;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  font-size: 16px;
  color: #0b3040;
  text-decoration: none;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 5px;
  font-size: 16px;
`;

const CartIcon = styled.div`
  display: flex;
  align-items: center;
`;

const CartCount = styled.span`
  font-size: 16px;
  color: #0b3040;
  margin-left: 5px;
`;

const Main = styled.main`
  padding: 20px 0;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #0b3040;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #0b3040;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border-bottom: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  font-size: 18px;
  color: #0b3040;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  font-size: 16px;
  color: #0b3040;
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
`;

const Total = styled.div`
  font-size: 20px;
  color: #0b3040;
  text-align: right;
  margin: 20px 0;
`;

const PaymentMethods = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
`;

const CheckoutButton = styled.button`
  background-color: #7b602a;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 16px;
`;

const ShoppingCart = () => {
  return (
    <Container>
      <Header>
        <Logo>VirgoWears</Logo>
        <Nav>
          <NavLink href="#">Men</NavLink>
          <NavLink href="#">Women</NavLink>
          <NavLink href="#">Kids</NavLink>
          <NavLink href="#">Trending</NavLink>
        </Nav>
        <SearchContainer>
          <SearchInput placeholder="Search" />
          <CartIcon>
            <span role="img" aria-label="cart">🛒</span>
            <CartCount>3</CartCount>
          </CartIcon>
        </SearchContainer>
      </Header>
      <Main>
        <Title>Shopping Cart</Title>
        <Subtitle>Subtotal (3 items)</Subtitle>
        <Table>
          <thead>
            <tr>
              <TableHeader>Items</TableHeader>
              <TableHeader>Quantity</TableHeader>
              <TableHeader>Total</TableHeader>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>
                <ProductImage src={Complete} alt="Complete wear" />
                <div>
                  <div>Complete wear</div>
                  <div>produced by Felicia brand</div>
                </div>
              </TableCell>
              <TableCell>2</TableCell>
              <TableCell>N140,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <ProductImage src={BlueHoodie} alt="Blue Hoodie" />
                <div>
                  <div>Blue Hoodie</div>
                  <div>produced by Dolce brand</div>
                </div>
              </TableCell>
              <TableCell>1</TableCell>
              <TableCell>N45,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <ProductImage src={GermanSuit} alt="German Suit" />
                <div>
                  <div>German Suit</div>
                  <div>produced by Gabina brand</div>
                </div>
              </TableCell>
              <TableCell>3</TableCell>
              <TableCell>N255,000</TableCell>
            </TableRow>
          </tbody>
        </Table>
        <Total>N410,000</Total>
        <PaymentMethods>
          <div>Pay with</div>
          <img src={visa} alt="Visa" />
          <img src={masters} alt="MasterCard" />
        </PaymentMethods>
        <CheckoutButton>Continue to checkout</CheckoutButton>
      </Main>
    </Container>
  );
};

export default ShoppingCart;
