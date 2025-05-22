import styled from "styled-components";
import Navlinks from "./Navlinks";
import selin from "../assets/SelinProfilePic.png";

const HomeContainer = styled.div`
  text-align: center;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Presentation = styled.h3`
  font-size: 30px;
  color: black;
  font-weight: 500;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Name = styled.h1`
  font-size: 70px;
  color: #c57763;
  margin: 0 0 10px;

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

const ImageContainer = styled.div`
  margin-top: 20px;

  img {
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius: 50%;

    @media (max-width: 480px) {
      width: 200px;
      height: 200px;
    }
  }
`;

const Info = styled.p`
  margin-top: 20px;
  font-weight: 400;
  font-size: 25px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Home = () => {
  return (
    <>
      <Navlinks />
      <HomeContainer>
        <Presentation>Hi there, I’m</Presentation>
        <Name>Selin Carbone</Name>
        <ImageContainer>
          <img src={selin} alt="Selin Carbone" />
        </ImageContainer>
        <Info>
          Creative Fullstack Web Developer with a background in
          <br />
          Visual Marketing and Sales
        </Info>
      </HomeContainer>
    </>
  );
};

export default Home;
