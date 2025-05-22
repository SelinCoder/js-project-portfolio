const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  background-color: white;
  width: 100%;
  text-align: center;

  @media (max-width: 480px) {
    padding: 60px 10px;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const IconLink = styled.a`
  display: inline-block;
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 1.5;
  max-width: 600px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ContactInfo = styled.div`
  font-size: 20px;
  margin: 15px 0;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Contact = () => {
  return (
    <Content>
      <ContactContainer>
        <h1>Contact</h1>
        <Text>
          Let’s work together! Have a project or opportunity in mind? I’d love
          to hear from you. Just drop me a message or email me directly!
        </Text>

        <ContactInfo>Selin Carbone</ContactInfo>
        <ContactInfo>+46 760 370 606</ContactInfo>
        <ContactInfo>selincarbone@outlook.com</ContactInfo>

        <Icons>
          <IconLink
            href="https://www.linkedin.com/in/selincarbone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/linkedin.png"
              alt="LinkedIn"
            />
          </IconLink>
          <IconLink
            href="https://github.com/selincarbone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/github.png"
              alt="GitHub"
            />
          </IconLink>
        </Icons>
      </ContactContainer>
    </Content>
  );
};

export default Contact;
