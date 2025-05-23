import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = ({ children }) => {
  return <Container>{children}</Container>;
};
export default Content;
