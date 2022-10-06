import styled from "styled-components";
import { motion } from "framer-motion";

const ContactUs = () => {
    const onSubmit = () =>{

    }

  return (
    <Section>
      <Container>
        <h1>We'd love to hear from you</h1>
        <FormContainer>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <input type="text" placeholder="Your Name" id="name"  />
                    <input type="email" placeholder="Email Address" id="email" />
                </div>
                <div className="form-control text">
                    <textarea name="" id="message" placeholder="Send us a message"></textarea>
                </div>
            </form>
        </FormContainer>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 12vh;
  min-height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    font-family: "WhyteInktrap", sans-serif;
    color: ${(props) => props.theme.text1};
  }
`;

const FormContainer = styled(motion.div)`
  width: 60%;
  .form-control {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    margin-bottom: 1rem;
  }
  input,
  textarea {
    color: #767b86;
    font-size: 0.9rem;
    font-family: "Open Sans", sans-serif;
    padding: 1rem;
    background-color: #f9fafc;
    border: 1px solid #e5e9f2;
    border-radius: 8px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #767b86;
    }
  }

  #name,
  #email {
    width: 50%;
    height: 3.5rem;
  }

  #message {
    resize: none;
    width: 100%;
    height: 14rem;
  }
`;

export default ContactUs;
