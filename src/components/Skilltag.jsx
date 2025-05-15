import styled from "styled-components";

const SkillTitle = styled.div`
  background-color: black;
  border: 2px solid white;
  border-radius: 4px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 6px 10px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;

  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 5px 8px;
  }
`;

const SkillsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;

  @media (max-width: 480px) {
    width: 100%;
    align-items: center;
  }
`;

const SkillItem = styled.div`
  background-color: white;
  width: 100%;
  margin: 5px 0;
  padding: 6px 10px;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 15px;
    width: 90%;
  }
`;

const Skilltag = ({ label, skills }) => {
  return (
    <SkillsColumn>
      <SkillTitle>{label}</SkillTitle>
      {skills.map((skill, index) => (
        <SkillItem key={index}>{skill}</SkillItem>
      ))}
    </SkillsColumn>
  );
};

export default Skilltag;
