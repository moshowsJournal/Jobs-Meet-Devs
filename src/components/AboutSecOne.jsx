import styled from "styled-components";
import { motion } from "framer-motion";
import groupPic from "../assets/pngs/groupPic.png";

const AboutSecOne = () => {
  return (
    <Section>
      <Container>
        <Text>
          <div>
            <h1>
              We want to bridge the gap between Nigerian talents & employers on
              the global scale by equipping them with battle-tested job
              acquisition & project-crushing skills.
            </h1>
          </div>
        </Text>
        <Image>
          <img src={groupPic} alt="groupPic" />
        </Image>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 12vh;
  width: 100%;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 4rem 0;
`;

const Text = styled.article`
  margin-bottom: 4rem;
  width: 100%;
  div {
    width: 65%;
    margin: 0 auto;
    h1 {
      color: ${(props) => props.theme.text1};
      font-family: "WhyteInktrap", sans-serif;
      font-weight: 500;
      font-size: 2.5rem;
      line-height: 50px;
    }
  }
`;
const Image = styled.article`
  width: 100%;
  img {
    width: 100%;
  }
`;

export default AboutSecOne;
