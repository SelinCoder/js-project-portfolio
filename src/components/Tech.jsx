import styled from "styled-components";
import Content from "./Content";

const TechContainer = styled.div`
  background-color: #e3c4b14a;
  width: 100%;
  min-height: 100vh; /* changed from fixed height to allow content to grow */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;

  @media (max-width: 480px) {
    padding: 30px 16px;
  }
`;

const Paragraph = styled.p`
  width: 900px;
  max-width: 100%; /* ensures it never overflows container */
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Title = styled.h2`
  color: black;
  text-align: center;
  font-size: 40px;
  margin: 0;
  margin-top: 40px;

  @media (max-width: 480px) {
    font-size: 28px;
    margin-top: 30px;
  }
`;

const Tech = () => {
  return (
    <Content>
      <TechContainer>
        <Title>Tech</Title>
        <Paragraph>
          Selin is an exceptional developer known for her innovative solutions
          and exceptional coding abilities. She creates user-friendly
          applications and solves complex issues with ease. Her drive for
          excellence makes her a valuable asset to any project and a standout in
          the technology field.
        </Paragraph>
      </TechContainer>
    </Content>
  );
};

export default Tech;
