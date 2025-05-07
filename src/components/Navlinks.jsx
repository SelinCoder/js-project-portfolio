import styled from "styled-components";

const NavigationContainer = styled.div`
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
`;

const Atags = styled.div`
  width: 900px;
  padding: 20px 80px;
  display: flex;
  justify-content: space-between;
`;

const A = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 400;
`;

const Navlinks = () => {
  return (
    <NavigationContainer>
      <Atags>
        <A href="#home">Home</A>
        <A href="#tech">Tech</A>
        <A href="#skills">Skills</A>
        <A href="#projects">Projects</A>
        <A href="#contact">Contact</A>
      </Atags>
    </NavigationContainer>
  );
};

export default Navlinks;
