import styled from "styled-components";
import { motion } from "framer-motion";
import manTypingVid from "../assets/mp4/manTyping.mp4"
import { textAnimate, wordAnimate } from "../animation";

const RecruitmentTime = () => {
    return (
      <Section>
        <Container
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <Video variants={textAnimate}>
            <video src={manTypingVid} autoPlay loop muted />
          </Video>
          <Text variants={textAnimate}>
            <motion.h1
              initial="hide"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.3 }}
            >
              <motion.span variants={wordAnimate}>Recruitment</motion.span>
              <motion.span variants={wordAnimate}>usually</motion.span>
              <motion.span variants={wordAnimate}>takes</motion.span>
              <motion.span variants={wordAnimate}>40</motion.span>
              <motion.span variants={wordAnimate}>days.</motion.span>
              <motion.span variants={wordAnimate}>We</motion.span>
              <motion.span variants={wordAnimate}>will</motion.span>
              <motion.span variants={wordAnimate}>do</motion.span>
              <motion.span variants={wordAnimate}>it</motion.span>
              <motion.span variants={wordAnimate}>in</motion.span>
              <motion.span variants={wordAnimate}>half</motion.span>
              <motion.span variants={wordAnimate}>the</motion.span>
              <motion.span variants={wordAnimate}>time</motion.span>
              <motion.span variants={wordAnimate}>without</motion.span>
              <motion.span variants={wordAnimate}>jeopadizing</motion.span>
              <motion.span variants={wordAnimate}>quality.</motion.span>
            </motion.h1>
          </Text>
        </Container>
      </Section>
    );
};

const Section = styled.section`
    min-height: 60vh;
    width: 100%;
`

const Container = styled(motion.div)`
  width: 85%;
  margin: 0 auto;
  display: flex;
  gap: 6%;
  padding: 4.5rem 0;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  article {
    width: 47%;
  }

  @media screen and (max-width: 40rem) {
    width: 90%;
    flex-direction: column;
    gap: 2rem;
    article {
      width:100%;
    }
  }
`;

const Video = styled(motion.article)`
    video {
        width: 100%;
    }
`
const Text = styled(motion.article)`
  h1 {
    span {
      font-size: 1.8rem;
      font-family: "WhyteInktrap", sans-serif;
      color: ${(props) => props.theme.text1};
      display: inline-block;
      margin-right: 0.4rem;
      margin-bottom: 0.8rem;
    }
  }
`;


export default RecruitmentTime;