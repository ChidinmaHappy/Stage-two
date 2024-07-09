import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 651px;
  height: 253px;
  left: 431px;
  top: 1px;
  position: relative;
  gap: 10px;

  @media (max-width: 1024px) {
    width: 80%;
    height: auto;
    left: 0;
    top: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

const TextDiv = styled.div`
  width: 647px;
  height: 91px;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Text = styled.p`
  color: #000;
  line-height: 90.77px;
  text-align: center;
  font-weight: 600;
  font-size: 50px;
  margin-top: 3px;

  @media (max-width: 1024px) {
    font-size: 40px;
    line-height: 70px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 50px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 40px;
  }
`;

const SentenceDiv = styled.div`
  width: 651px;
  height: 87px;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Sentence = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 29.05px;
  text-align: center;
  margin-top: 3px;

  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 27px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 25px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

const Button = styled.button`
  background-color: #7B602A;
  color: white;
  border: none;
  border-radius: 8px;
  width: 230px;
  height: 49px;
  padding: 10px;
  gap: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  @media (max-width: 1024px) {
    width: 200px;
    height: 45px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 40px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 35px;
    font-size: 14px;
  }
`;

const Collections = () => {
  return (
    <Container>
      <TextDiv>
        <Text>New Collections</Text>
      </TextDiv>
      <SentenceDiv>
        <Sentence>Saving your money for future use by shopping with us for all your affordable wears, including classic and contemporary wears.</Sentence>
      </SentenceDiv>
      <Button>See all collections</Button>
    </Container>
  );
};

export default Collections;
