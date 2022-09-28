import styled from "styled-components";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";
import { textAnimate } from "../animation";


const HomeHero = () => {
  return (
    <Section>
      <Container>
        <Text
          initial="hide"
          whileInView={"show"}
          viewport={{once:true,amount: 0.5}}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.h1 variants={textAnimate}>
            Finding <span>High-Value</span>
          </motion.h1>
          <motion.h1 variants={textAnimate}> Nigerian Tech Talents</motion.h1>
          <motion.h1 variants={textAnimate}>Just Got Easy</motion.h1>
          <motion.p variants={textAnimate}>
            Jobs Meet Devs connects companies with top vetted developers,
            designers, product managers, and project managers. Leave the tech
            headache to us and focus on other things that bring the big bucks
          </motion.p>
          <CtaButton href="#" animation={textAnimate}>
            Connect Me
          </CtaButton>
        </Text>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 12vh;
  width: 100%;
`;

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  padding: 2.5rem 0;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  article {
    width: 60%;
    min-height: 75vh;
  }
`;

const Text = styled(motion.article)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-family: "WhyteInktrap", sans-serif;
    font-size: 2.5rem;
    line-height: 50px;
    color: ${(props) => props.theme.text1};
    span {
      color: ${(props) => props.theme.secondary};
    }
  }
  p {
    font-family: "Open Sans", sans-serif;
    font-size: 1.2rem;
    margin: 2rem 0 4rem;
    color: ${(props) => props.theme.text2};
  }
`;

export default HomeHero;
