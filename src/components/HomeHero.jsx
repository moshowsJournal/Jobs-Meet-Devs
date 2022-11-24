import styled from "styled-components";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";
import { textAnimate, imageAnimate } from "../animation";
import TypeWriterText from "./TypeWriterText";

import image1 from "../assets/pngs/image1.png"
import image2 from "../assets/pngs/image2.png"


const HomeHero = () => {
  return (
    <Section>
      <Container>
        <Text
          initial="hide"
          animate={"show"}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.h1 variants={textAnimate} className="first-head">
            <span>Finding</span> <TypeWriterText />
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
        <motion.div
          className="images"
          initial="hide"
          animate={"show"}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.img
            variants={imageAnimate}
            src={image1}
            alt="image1"
            className="image1"
          />
          <motion.img
            variants={imageAnimate}
            src={image2}
            alt="image2"
            className="image2"
          />
          <motion.img
            variants={imageAnimate}
            src={image1}
            alt="image3"
            className="image3"
          />
          <motion.img
            variants={imageAnimate}
            src={image2}
            alt="image1"
            className="image4"
          />
        </motion.div>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 12vh;
  width: 100%;
`;

const Container = styled(motion.div)`
  position: relative;
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

  .images {
    img {
      position: absolute;
    }
    .image1 {
      left: 18%;
      top: 28%;
    }

    .image2 {
      right: 18%;
      top: 28%;
    }

    .image3 {
      right: 5%;
      top: 55%;
    }

    .image4 {
      left: 5%;
      top: 55%;
    }
  }

  @media screen and (max-width: 40rem) {
    width: 90%;
    .images {
      .image1 {
        top: 8%;
      }

      .image2 {
        top: 8%;
      }

      .image3 {
        top: 90%;
      }

      .image4 {
        top: 90%;
      }
    }
    article {
      width: 100%;
    }
  }
`;

const Text = styled(motion.article)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    margin: 0 auto;
    font-family: "WhyteInktrap", sans-serif;
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 50px;
    color: ${(props) => props.theme.text1};
  }
  .first-head {
    display: flex;
    gap: 0.5rem;
  }
  p {
    font-family: "Open Sans", sans-serif;
    font-size: 1.1rem;
    margin: 2rem 0 4rem;
    color: ${(props) => props.theme.text2};
  }

  @media screen and (max-width: 40rem) {
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export default HomeHero;
