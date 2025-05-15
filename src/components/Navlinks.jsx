import { useState } from "react";
import styled from "styled-components";

const NavigationContainer = styled.nav`
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 15px 16px;
  }
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const Menu = styled.div`
  display: flex;
  gap: 16px;
  padding-right: 8px;
  max-width: 50%;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 400;
  white-space: nowrap;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 26px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  padding: 20px;
  position: absolute;
  top: 70px;
  right: 20px;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
  }
`;

const Navlinks = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <NavigationContainer>
      <Logo>Selin</Logo>

      <Menu>
        <A href="#home">Home</A>
        <A href="#tech">Tech</A>
        <A href="#skills">Skills</A>
        <A href="#projects">Projects</A>
        <A href="#contact">Contact</A>
      </Menu>

      <MobileMenuIcon onClick={toggleMenu}>☰</MobileMenuIcon>

      <MobileMenu open={menuOpen}>
        <A href="#home" onClick={closeMenu}>
          Home
        </A>
        <A href="#tech" onClick={closeMenu}>
          Tech
        </A>
        <A href="#skills" onClick={closeMenu}>
          Skills
        </A>
        <A href="#projects" onClick={closeMenu}>
          Projects
        </A>
        <A href="#contact" onClick={closeMenu}>
          Contact
        </A>
      </MobileMenu>
    </NavigationContainer>
  );
};

export default Navlinks;
