import styled from "styled-components";
import Content from "./Content";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  background-color: white;
  width: 100%;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;

const Text = styled.div`
  display: flex;
  font-size: 20px;
`;

const ContactInfo = styled.div`
  font-size: 20px;
  margin: 15px 0;
`;

const Contact = () => {
  return (
    <Content>
      <ContactContainer>
        <h1>Contact</h1>
        <Text>
          Let’s Work Together! Have a project or opportunity in mind? I’d love
          to hear from you.<br></br>Just drop me a message using the form below
          or email me directly.!
        </Text>

        <ContactInfo>Selin Carbone</ContactInfo>
        <ContactInfo>+46 760370606</ContactInfo>
        <ContactInfo>Selincarbone@outlook.com</ContactInfo>
        <Icons>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/linkedin.png"
            alt="linkedin"
          />
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/github.png"
            alt="github"
          />
        </Icons>
      </ContactContainer>
    </Content>
  );
};

export default Contact;
