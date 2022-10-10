import { useRef } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactUs = () => {
  const formRef = useRef()
  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qnqm6s9",
        "template_ka0yyf7",
        formRef.current,
        "wW-4RCOHqwPVE7KPO"
      )

      e.target.reset()
  };

  return (
    <Section>
      <Container>
        <h1>We'd love to hear from you</h1>
        <FormContainer>
          <form onSubmit={onSubmit} ref={formRef}>
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                id="name"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                id="email"
              />
            </div>
            <div className="form-control text">
              <textarea
                name="message"
                id="message"
                placeholder="Send us a message"
              ></textarea>
            </div>
            <div className="submitBtn__container">
              <button type="submit" className="submitBtn">
                Send Message
              </button>
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
    font-size: 1rem;
    font-family: "Open Sans", sans-serif;
    padding: 1rem;
    background-color: #f9fafc;
    border: 1px solid #e5e9f2;
    border-radius: 8px;
    &:focus {
      outline: none;
      border: 2px solid #333;
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

  .submitBtn__container {
    width: 100%;
    text-align: center;
    margin-top: 1.5rem;
    .submitBtn {
      display: inline-block;
      background-color: ${(props) => props.theme.primary};
      padding: 1rem 2rem;
      border: none;
      border-radius: 1rem;
      font-size: 1.1rem;
      font-family: "GTWalsheimPro", sans-serif;
      color: #fff;
      cursor: pointer;
      &:active {
        transform: scale(0.98);
      }
    }
  }
`;

export default ContactUs;
