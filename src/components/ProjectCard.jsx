import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 25vw;
  min-width: 280px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: visible;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const Image = styled.img.attrs(() => ({
  loading: "lazy",
}))`
  width: 100%;
  height: auto;
  object-fit: cover;
  max-height: 200px;
`;

const Title = styled.h2`
  font-size: 22px;
  margin: 12px 0 6px;
  min-height: 50px;
  text-align: center;
  word-wrap: break-word;
`;

const Paragraph = styled.p`
  font-size: 16px;
  text-align: center;
  word-wrap: break-word;
  margin-bottom: 12px;
`;

const SkillsWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
`;

const SkillBox = styled.span`
  display: inline-block;
  background: #f0f0f0;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  font-size: 17px;
  background: black;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #c57763;
  }
`;

const ProjectCard = ({
  image,
  title,
  description,
  skills,
  link,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <Card onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
      <SkillsWrapper>
        {skills.map((skill, index) => (
          <SkillBox key={index}>{skill}</SkillBox>
        ))}
      </SkillsWrapper>
      <Button onClick={() => window.open(link, "_blank")}>Visit site</Button>
    </Card>
  );
};

export default ProjectCard;
