import styled, { css } from "styled-components";
import Content from "./Content";
import image1 from "../assets/image1.png";
import image2 from "../assets/Recipe.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/portfolio.png";

const ProjectContainer = styled.div`
  background-color: #e3c4b14a;
  width: 100%;
  height: fit-content;
  padding-bottom: 100px;
`;

const Wrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const Title = styled.h1`
  font-size: 40px;
  color: black;
  text-align: center;
`;

const ProjectCard = styled.div`
  display: flex;
`;

const ProjectCardInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const H2 = styled.h2`
  font-size: 20px;
  color: black;
`;

const InfoBox = styled.h3`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const Paragraph = styled.p`
  font-size: 16px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: black;
  width: 200px;
  height: 48px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: #e1c1ac;
  }
`;

const ButtonText = styled.span`
  color: white;
  font-size: 16px;
`;

const EarthIcon = () => (
  <span class="material-symbols-rounded" style={{ color: "white" }}>
    captive_portal
  </span>
);

const Earth = styled(EarthIcon)`
  fill: white;
  font-size: 20px;
`;

const imageStyles = css`
  width: 500px;
  height: 300px;
  border-radius: 70px;
`;

const Image1 = styled.img.attrs({
  src: image1,
})`
  ${imageStyles}
`;

const Image2 = styled.img.attrs({
  src: image2,
})`
  ${imageStyles}
`;

const Image3 = styled.img.attrs({
  src: image3,
})`
  ${imageStyles}
`;

const Image4 = styled.img.attrs({
  src: image4,
})`
  ${imageStyles}
`;
const Image5 = styled.img.attrs({
  src: image5,
})`
  ${imageStyles}
`;

const SkillBox = styled.div`
  border: 1px solid black;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  margin: 5px;
  display: inline-block;
`;

const Projects = () => {
  return (
    <Content>
      <ProjectContainer>
        <Title>Projects</Title>
        <Wrapper>
          <ProjectCard>
            <ProjectCardInfo>
              <Image1 />
              <InfoBox>
                <H2>My first project- A Business Webpage</H2>
                <Paragraph>
                  In this project the goal was to build a bla bla bla site
                  because of.. and I used html..css..bla bla{" "}
                </Paragraph>
                <div>
                  <SkillBox>HTML5</SkillBox>
                  <SkillBox>CSS3</SkillBox>
                  <SkillBox>JavaScript</SkillBox>
                </div>

                <Button
                  onClick={() =>
                    window.open("https://airobotscompany.netlify.app/")
                  }
                >
                  <Earth />
                  <ButtonText style={{ width: "100%" }}>
                    Read article
                  </ButtonText>
                </Button>
              </InfoBox>
            </ProjectCardInfo>
          </ProjectCard>
          <ProjectCard>
            <ProjectCardInfo>
              <Image2 />
              <InfoBox>
                <H2>Business Webpage</H2>
                <Paragraph>
                  In this project the goal was to build a bla bla bla site
                  because of.. and I used html..css..bla bla{" "}
                </Paragraph>
                <div>
                  <SkillBox>HTML5</SkillBox>
                  <SkillBox>CSS3</SkillBox>
                  <SkillBox>JavaScript</SkillBox>
                  <SkillBox>API</SkillBox>
                </div>
                <Button
                  onClick={() =>
                    window.open(" https://selinsrecipelibrary.netlify.app")
                  }
                >
                  <Earth />

                  <ButtonText style={{ width: "100%" }}>
                    Read article
                  </ButtonText>
                </Button>
              </InfoBox>
            </ProjectCardInfo>
          </ProjectCard>
          <ProjectCard>
            <ProjectCardInfo>
              <Image3 />
              <InfoBox>
                <H2>Business Webpage</H2>
                <Paragraph>
                  In this project the goal was to build a bla bla bla site
                  because of.. and I used html..css..bla bla{" "}
                </Paragraph>
                <div>
                  <SkillBox>HTML5</SkillBox>
                  <SkillBox>CSS3</SkillBox>
                  <SkillBox>API</SkillBox>
                  <SkillBox>JavaScript</SkillBox>
                  <SkillBox>Typescript</SkillBox>
                </div>
                <Button
                  onClick={() =>
                    window.open("https://rainchecker.netlify.app/")
                  }
                >
                  <Earth />
                  <ButtonText style={{ width: "100%" }}>
                    Read article
                  </ButtonText>
                </Button>
              </InfoBox>
            </ProjectCardInfo>
          </ProjectCard>
          <ProjectCard>
            <ProjectCardInfo>
              <Image4 />
              <InfoBox>
                <H2>Business Webpage</H2>
                <Paragraph>
                  In this project the goal was to build a bla bla bla site
                  because of.. and I used html..css..bla bla{" "}
                </Paragraph>
                <div>
                  <SkillBox>HTML5</SkillBox>
                  <SkillBox>CSS3</SkillBox>

                  <SkillBox>API</SkillBox>
                  <SkillBox>JavaScript</SkillBox>
                  <SkillBox>WCAG</SkillBox>
                </div>
                <Button
                  onClick={() =>
                    window.open("https://web-accessibility-quiz.netlify.app/")
                  }
                >
                  <Earth />
                  <ButtonText style={{ width: "100%" }}>Visit site</ButtonText>
                </Button>
              </InfoBox>
            </ProjectCardInfo>
          </ProjectCard>
          <ProjectCard>
            <ProjectCardInfo>
              <Image5 />
              <InfoBox>
                <H2>Business Webpage</H2>
                <Paragraph>
                  In this project the goal was to build a bla bla bla site
                  because of.. and I used html..css..bla bla{" "}
                </Paragraph>
                <div>
                  <SkillBox>HTML5</SkillBox>
                  <SkillBox>CSS3</SkillBox>

                  <SkillBox>JavaScript</SkillBox>
                  <SkillBox>WCAG</SkillBox>
                  <SkillBox>API</SkillBox>
                  <SkillBox>React.js</SkillBox>
                  <SkillBox>Styled Components</SkillBox>
                </div>
                <Button
                  onClick={() =>
                    window.open("https://web-accessibility-quiz.netlify.app/")
                  }
                >
                  <Earth />
                  <ButtonText style={{ width: "100%" }}>Visit site</ButtonText>
                </Button>
              </InfoBox>
            </ProjectCardInfo>
          </ProjectCard>
        </Wrapper>
      </ProjectContainer>
    </Content>
  );
};

export default Projects;
