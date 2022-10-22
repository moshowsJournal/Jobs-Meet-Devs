import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate, imageAnimate } from "../animation";
import qonveyLogo from "../assets/pngs/qonveyLogo.png";
import testimony from "../assets/pngs/testimony.png";

const Why = () => {
  return (
    <Section>
      <Container>
        <motion.div
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.h1 variants={textAnimate} className="head">
            Why Companies Love Us
          </motion.h1>
        </motion.div>
        <div className="testimonyContainer">
          <Image
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.img variants={imageAnimate} src={qonveyLogo} alt="qonveyLogo" />
          </Image>
          <Testimony
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.h2 variants={textAnimate}>
              Testimony from QonvexTech
            </motion.h2>
            <motion.div variants={textAnimate}>
              <img src={testimony} alt="testimony" className="testimony" />
            </motion.div>
          </Testimony>
        </div>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  min-height: 70vh;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 3.5rem 0 2.5rem;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  .head {
    padding-bottom: 3.5rem;
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-size: 2.5rem;
    font-weight: 500;
    font-family: "WhyteInktrap", sans-serif;
  }
  .testimonyContainer {
    display: flex;
    justify-content: center;
    article {
      width: 45%;
    }
  }
`;

const Testimony = styled(motion.article)`
  h2 {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    color: ${(props) => props.theme.primary};
    margin-bottom: 1rem;
  }
  .testimony {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;

const Image = styled(motion.article)`
  img {
    width: 100%;
    height: 19rem;
  }
`;

export default Why;
