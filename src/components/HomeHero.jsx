import styled from "styled-components";
import HeroImage from "../assets/pngs/heroImage.png";

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
        </Text>
        <Image>
          <img src={HeroImage} alt="hero" />
        </Image>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 12vh;
  width: 100%;
  min-height: 88vh;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 2.5rem 0;
  border-bottom: 0.5px solid rgba(0,0,0,0.1);
  article {
    width: 47%;
  }
`;

const Text = styled.article`
  h1 {
    font-size: 2.5rem;
    line-height: 50px;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.primary};
  }
  p {
    font-size: 1.5rem;
    line-height: 30px;
  }
`;

const Image = styled.article``;

export default HomeHero;
