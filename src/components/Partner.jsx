import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate, imageAnimate } from "../animation";

const Partner = () => {
    return (
      <Section>
        <Container>
          <Text
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.h1 variants={textAnimate}>Why Companies love us</motion.h1>
            <motion.p variants={textAnimate}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor nec
              arcu id lacus. Sed duis et diam.
            </motion.p>
          </Text>
          <Images
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.div
              variants={imageAnimate}
              className="partner-image"
            ></motion.div>
            <motion.div
              variants={imageAnimate}
              className="partner-image"
            ></motion.div>
            <motion.div
              variants={imageAnimate}
              className="partner-image"
            ></motion.div>
          </Images>
        </Container>
      </Section>
    );
};

const Section = styled.section`
  width: 100%;
  min-height: 40vh;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 5rem 0;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  article {
    width: 47%;
  }
`;

const Text = styled(motion.article)`
  h1 {
    font-family: "WhyteInktrap", sans-serif;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.primary};
  }

  p {
    font-family: "Open Sans", sans-serif;
    color: ${(props) => props.theme.text2};
  }
`;

const Images = styled(motion.article)`
display: flex;
gap: 2rem;
  .partner-image {
    height: 9.4rem;
    width: 9.4rem;
    border-radius: 50%;
    background-color: #d9d9d9;
  }
`;

export default Partner;