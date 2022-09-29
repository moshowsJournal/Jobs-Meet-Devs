import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";
import WorksCard from "./WorksCard";
import CtaButton from "./CtaButton";
import choose from "../assets/svgs/choose.svg";
import hire from "../assets/svgs/hire.svg";
import interview from "../assets/svgs/interview.svg";

const WorksSection = () => {
  return (
    <Section>
      <Container>
        <motion.div
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.h1 variants={textAnimate} className="head">How It Works</motion.h1>
        </motion.div>
        <Cards>
          <WorksCard
            image={choose}
            title="Choose from our pool of top talents"
            description="We'll introduce you to the best talent for your business. Each talent in our pool is vetted for their expertise, professionalism, and communication skills."
          />
          <WorksCard
            image={interview}
            title="Interview hand-picked candidates"
            description="With more than (put a number) skilled technical professionals at your disposal, easily schedule interviews and meet top professionals that fit within your team."
          />
          <WorksCard
            image={hire}
            title="Hire your top talent"
            description="Select & Contract your Talent. Onboard new team members with seamless contract setup"
          />
        </Cards>
        <CtaButton href="#">Hire</CtaButton>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  min-height: 80vh;
`;

const Container = styled(motion.div)`
  width: 85%;
  margin: 0 auto;
  padding: 3.5rem 0;
  .head {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-size: 2.5rem;
    font-family: "WhyteInktrap", sans-serif;
  }
`;

const Cards = styled(motion.div)`
  margin: 4rem 0 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
export default WorksSection;
