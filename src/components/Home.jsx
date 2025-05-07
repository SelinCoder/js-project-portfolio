import Navlinks from "./Navlinks";
import styled from "styled-components";
import selin from "../assets/selin.jpg";

const HomeContainer = styled.div`
  text-align: center;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* important for horizontal centering */
`;

const Presentation = styled.h3`
  font-size: 30px;
  color: black;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Name = styled.h1`
  font-size: 70px;
  color: #c57763;
  margin: 0px;
  margin-bottom: 10px;
`;

const ImageContainer = styled.div`
  margin-top: 20px;
`;

const Info = styled.p`
  margin-top: 20px;
  font-weight: 400;
  font-size: 25px;
`;

const Home = () => {
  return (
    <>
      <Navlinks />
      <HomeContainer>
        <Presentation>Hi there, I´m </Presentation>
        <Name>Selin Carbone</Name>
        <ImageContainer>
          <img
            src={selin}
            style={{
              height: "500px",
              borderRadius: "500px",
            }}
          />
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
