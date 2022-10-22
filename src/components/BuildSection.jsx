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
              title="Software Engineers (Web and Mobile)"
              description="Highly skilled engineers rigorously trained in web, app, and software
          development; front-end, back-end, and development operations."
            />
            <BuildCard
              image={webDevs}
              title="Product Designers"
              description="We'll introduce you to the best talent for your business. Each talent in our pool is vetted for their expertise, professionalism, and communication skills."
            />
            <BuildCard
              image={fullStack}
              title="Product Managers"
              description="We'll introduce you to the best talent for your business. Each talent in our pool is vetted for their expertise, professionalism, and communication skills."
            />
          </div>
          <div className="card">
            <BuildCard
              image={webDevs}
              title="Dev'Ops Engineers"
              description="Get full-stack web developers ready to build your website or update an existing site."
            />
            <BuildCard
              image={fullStack}
              title="Quality Assurance / Product Tester"
              description="Highly skilled engineers rigorously trained in web, app, and software
          development; front-end, back-end, and development operations."
            />
            <BuildCard
              image={webDevs}
              title="Project Managers"
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
  padding: 3.5rem 0 5rem;
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
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  .card {
    display: flex;
    gap: 3.3%;
  }
`;

export default BuildSection;
