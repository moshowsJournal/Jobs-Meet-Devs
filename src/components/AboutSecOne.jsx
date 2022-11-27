import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate, wordAnimate } from "../animation";
import groupPic from "../assets/pngs/groupPic.png";

const AboutSecOne = () => {
  return (
    <Section>
      <Container>
        <Text>
          <div>
            <motion.h1
              initial="hide"
              animate={"show"}
              transition={{ staggerChildren: 0.2 }}
            >
              <motion.span variants={wordAnimate}>We</motion.span>
              <motion.span variants={wordAnimate}>want</motion.span>
              <motion.span variants={wordAnimate}>to</motion.span>
              <motion.span variants={wordAnimate}>bridge</motion.span>
              <motion.span variants={wordAnimate}>the</motion.span>
              <motion.span variants={wordAnimate}>gap</motion.span>
              <motion.span variants={wordAnimate}>between</motion.span>
              <motion.span variants={wordAnimate}>Nigerian</motion.span>
              <motion.span variants={wordAnimate}>talents</motion.span>
              <motion.span variants={wordAnimate}>&</motion.span>
              <motion.span variants={wordAnimate}>employers</motion.span>
              <motion.span variants={wordAnimate}>on</motion.span>
              <motion.span variants={wordAnimate}>the</motion.span>
              <motion.span variants={wordAnimate}>global</motion.span>
              <motion.span variants={wordAnimate}>scale</motion.span>
              <motion.span variants={wordAnimate}>by</motion.span>
              <motion.span variants={wordAnimate}>equipping</motion.span>
              <motion.span variants={wordAnimate}>them</motion.span>
              <motion.span variants={wordAnimate}>with</motion.span>
              <motion.span variants={wordAnimate}>battle-tested</motion.span>
              <motion.span variants={wordAnimate}>job</motion.span>
              <motion.span variants={wordAnimate}>acquisition</motion.span>
              <motion.span variants={wordAnimate}>&</motion.span>
              <motion.span variants={wordAnimate}>project-crushing</motion.span>
              <motion.span variants={wordAnimate}>skills</motion.span>
            </motion.h1>
          </div>
        </Text>
        <Image initial="hide" animate={"show"} transition={{ delay: 1 }}>
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

  @media screen and (max-width: 40rem) {
    width: 90%;
  }
`;

const Text = styled(motion.article)`
  margin-bottom: 4rem;
  width: 100%;
  div {
    width: 65%;
    margin: 0 auto;
    h1 {
      span {
        display: inline-block;
        margin-right: 0.5rem;
        color: ${(props) => props.theme.text1};
        font-family: "WhyteInktrap", sans-serif;
        font-weight: 500;
        font-size: 2.5rem;
        line-height: 50px;
      }
    }
  }

  @media screen and (max-width: 40rem) {
    div {
      width: 100%;
      h1 {
        span {
          font-size: 1.8rem;
        }
      }
    }
  }
`;

const Image = styled(motion.article)`
  width: 100%;
  img {
    object-fit: cover;
    width: 100%;
  }
`;

export default AboutSecOne;
