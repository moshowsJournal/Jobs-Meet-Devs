import styled from "styled-components";
import { motion } from "framer-motion";


const HomeHero = () => {
  return (
    <Section>
      <Container>
        <Text>
          <h1>Finding High-Value Nigerian Tech Talents Just Got Easy</h1>
          <p>
            Jobs Meet Devs connects companies with top vetted developers,
            designers, product managers, and project managers. Leave the tech
            headache to us and focus on other things that bring the big bucks
          </p>
          <div>
            <a href="#" className="homeHeroLink">Connect me with a top tech talent</a>
          </div>
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
  width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 5rem;
  padding: 2.5rem 0;
  border-bottom: 0.5px solid rgba(0,0,0,0.1);
  article {
    width: 47%;
    min-height: 77vh;
  }
`;

const Text = styled(motion.article)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 2.5rem;
    line-height: 50px;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.primary};
  }
  p {
    font-size: 1.2rem;
    line-height: 30px;
    margin-bottom: 4rem;
    color: ${(props) => props.theme.text2};
  }
  div {
    .homeHeroLink {
      background-color: ${(props) => props.theme.primary};
      padding: 1.3rem 2rem;
      border-radius: 1rem;
      font-size: 1.1rem;
      color: #fff;
      width: 27rem;
      height: 4.5rem;
    }
  }
`;


export default HomeHero;
