import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate, imageAnimate } from "../animation";
import convexTech from "../assets/pngs/convexTech.png";
import group from "../assets/pngs/group.png";
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
            <motion.div variants={textAnimate}>
              <img src={convexTech} alt="convexTech" />
            </motion.div>
          </Testimony>
          <Image
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.img variants={imageAnimate} src={group} alt="group" />
          </Image>
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
  padding: 3.5rem 0;
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
    gap: 6%;
    article {
      width: 47%;
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
  }
`;

export default Why;
