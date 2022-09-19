import styled from "styled-components";
import homeHero1 from "../assets/pngs/homeHero1.png";
import homeHero2 from "../assets/pngs/homeHero2.png";
import homeHeroTag from "../assets/svgs/homeHeroTag.svg";


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
        <Image>
          <img src={homeHero1} alt="hero" className="homeHero1" />
          <img src={homeHero2} alt="hero" className="homeHero2" />
          <img src={homeHeroTag} alt="tag" className="homeHeroTag" />
        </Image>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 12vh;
  width: 100%;
  /* min-height: 85vh; */
`;

const Container = styled.div`
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

const Text = styled.article`
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

const Image = styled.article`
overflow: hidden;
position: relative;
img {
  position: absolute;
}
.homeHero1 {
  z-index: 1;
  bottom: 2rem;
}
.homeHero2 {
  top: 2rem;
  right: 6rem;
}
.homeHeroTag {
  z-index: 2;
  bottom: 4rem;
  right: 4rem;
}

`;

export default HomeHero;
