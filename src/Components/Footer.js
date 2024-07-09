import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  height: 220px;
  left: 100px;
  position: relative;
  top: 400px;
  gap: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 90%;
    left: 5%;
    top: 0; /* Adjust as necessary */
  }
`;

const FirstDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 383px;
  height: 202px;
  gap: 30px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const VigoDiv = styled.div`
  width: 133px;
  height: 29px;

  @media (max-width: 768px) {
    width: 100%;
    align-self: flex-start;
  }

`;

const VigoText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 29.05px;
  color: #7b602a;
`;

const SentenceDiv = styled.div`
  width: 383px;
  height: 72px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Sentence = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 29.2px;
  color: #0b3040;
`;

const EmailButton = styled.div`
  display: flex;
  width: 350px;
  height: 41px;
  background-color: #dfeee8;
  gap: 16px;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const Email = styled.input`
  padding: 12px 20px;
  color: #0b3040;
  border: none;
  background-color: #dfeee8;
  outline: none;
  width: 227px;
  height: 15px;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const Button = styled.button`
  background-color: #7b602a;
  color: white;
  border: none;
  border-radius: 8px;
  width: 107px;
  height: 41px;
  padding: 12px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0b3040;
  }
`;

const SecondDiv = styled.div`
  width: 632px;
  height: 220px;
  gap: 22px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 10px;
  }
`;

const SubDivs = styled.div`
  width: 196px;
  height: 220px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const SubText = styled.p`
  color: black;
  line-height: 24.2px;
  font-size: 20px;
  font-weight: 400;
`;

const SubText2 = styled.p`
  color: #0b3040;
  line-height: 24.2px;
  font-size: 20px;
  font-weight: 400;
`;

const Footer = () => {
  return (
    <Container>
      <FirstDiv>
        <VigoDiv>
          <VigoText>VirgoWears</VigoText>
        </VigoDiv>
        <SentenceDiv>
          <Sentence>We are the best when it comes to fashion, we get you covered any day and any time.</Sentence>
        </SentenceDiv>
        <EmailButton>
          <Email placeholder='Type your message' />
          <Button>Submit</Button>
        </EmailButton>
      </FirstDiv>
      <SecondDiv>
        <SubDivs>
          <SubText>Products</SubText>
          <SubText2>T-Shirt</SubText2>
          <SubText2>Jacket</SubText2>
          <SubText2>Short</SubText2>
          <SubText2>Hat</SubText2>
        </SubDivs>
        <SubDivs>
          <SubText>Categories</SubText>
          <SubText2>Men</SubText2>
          <SubText2>Women</SubText2>
          <SubText2>Kids</SubText2>
          <SubText2>Gift</SubText2>
        </SubDivs>
        <SubDivs>
          <SubText>Social Media</SubText>
          <SubText2>Instagram</SubText2>
          <SubText2>Facebook</SubText2>
          <SubText2>YouTube</SubText2>
          <SubText2>Twitter</SubText2>
        </SubDivs>
      </SecondDiv>
    </Container>
  );
};

export default Footer;
