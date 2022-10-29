import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";
import groupPic from "../assets/pngs/groupPic.png";

const AboutSecOne = () => {
  return (
    <Section>
      <Container
        initial="hide"
        animate={"show"}
        transition={{ staggerChildren: 0.5 }}
      >
        <Text>
          <div>
            <motion.h1 variants={textAnimate}>
              We want to bridge the gap between Nigerian talents & employers on
              the global scale by equipping them with battle-tested job
              acquisition & project-crushing skills.
            </motion.h1>
          </div>
        </Text>
        <Image>
          <motion.img variants={textAnimate} src={groupPic} alt="groupPic" />
        </Image>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 12vh;
  width: 100%;
`;

const Container = styled(motion.div)`
  width: 85%;
  margin: 0 auto;
  padding: 4rem 0;
`;

const Text = styled(motion.article)`
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
const Image = styled(motion.article)`
  width: 100%;
  img {
    width: 100%;
  }
`;

export default AboutSecOne;
