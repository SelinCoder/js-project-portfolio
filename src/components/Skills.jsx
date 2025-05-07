import styled from "styled-components";
import Content from "./Content";
import Skilltag from "./Skilltag";

const SkillsContainer = styled.div`
  background-color: #e1c1ac;
  width: 100%;
  min-height: 100vh; /* fix height conflict */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 16px;
  }
`;

const SkillsTitle = styled.h2`
  color: black;
  text-align: center;
  font-size: 40px;
  margin: 40px 0;

  @media (max-width: 480px) {
    font-size: 28px;
    margin: 30px 0;
  }
`;

const TagContainer = styled.div`
  display: flex;
  gap: 54px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

const Skills = () => {
  const code = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
  ];

  const toolbox = [
    "Visual Studio Code",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "CodePen",
    "Figma",
    "Slack",
  ];

  const upcoming = ["Java", "Python", "C++"];

  const more = [
    "Visuall Merchandising",
    "Branding",
    "Strategy",
    "Process Design",
    "Concept Development",
    "Agile methodology",
  ];

  return (
    <Content>
      <SkillsContainer>
        <SkillsTitle>Skills</SkillsTitle>
        <TagContainer>
          <Skilltag label={"Code"} skills={code} />
          <Skilltag label={"Toolbox"} skills={toolbox} />
          <Skilltag label={"More"} skills={more} />
          <Skilltag label={"Upcoming"} skills={upcoming} />
        </TagContainer>
      </SkillsContainer>
    </Content>
  );
};

export default Skills;
