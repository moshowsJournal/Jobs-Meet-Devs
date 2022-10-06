import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";
import BuildCard from "./BuildCard";
import fullStack from "../assets/pngs/fullStack.png";
import webDevs from "../assets/pngs/webDevs.png";

const BuildSection = () => {
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
            Build Your Team
          </motion.h1>
          <motion.p variants={textAnimate} className="subhead">
            Whether you're building a team from scratch or you need help closing
            that one hard to fill position. We connect the best, tested, and
            certified talents to you to meet your business needs.
          </motion.p>
        </motion.div>
        <Cards>
          <div className="card">
            <BuildCard
              image={fullStack}
              title="Full-stacksoftware engineers"
              description="Highly skilled engineers rigorously trained in web, app, and software
          development; front-end, back-end, and development operations."
            />
            <BuildCard
              image={webDevs}
              title="Web Developers"
              description="Get full-stack web developers ready to build your website or update an existing site."
            />
          </div>
          <div className="card">
            <BuildCard
              image={fullStack}
              title="Full-stacksoftware engineers"
              description="Highly skilled engineers rigorously trained in web, app, and software
          development; front-end, back-end, and development operations."
            />
            <BuildCard
              image={webDevs}
              title="Web Developers"
              description="Get full-stack web developers ready to build your website or update an existing site."
            />
          </div>
        </Cards>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
`;
const Container = styled(motion.div)`
  width: 85%;
  margin: 0 auto;
  padding: 3.5rem 0;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  .head {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-size: 2.5rem;
    font-weight: 500;
    font-family: "WhyteInktrap", sans-serif;
  }
  .subhead {
    margin-top: 1rem;
    text-align: center;
    color: ${(props) => props.theme.text2};
    font-family: "Open Sans", sans-serif;
  }
`;

const Cards = styled(motion.div)`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  .card {
    display: flex;
    gap: 2rem;
  }
`;

export default BuildSection;
