import styled from "styled-components";
import HeroImage from '../assets/pngs/heroImage.png';

const HomeHero = () => {
    return (
        <Section>
            <Container>
                <Text>
                    <h1>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Et vestibulum malesuada tortor elementum ornare turpis at 
                        tempor amet. Sit dui amet, leo dia
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
   width:100%;
   min-height: 88vh;
   padding: 2rem 0;
   border-bottom: 0.5px solid #827F7F;;
`

const Container = styled.div`
  width: 85% ;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 3rem;
  article {
    width: 47%;
  }

`

const Text = styled.article`
    h1 {
        font-size: 2.5rem;
        line-height: 50px;
        margin-bottom: 2rem;
    }
    p {
        font-size: 1.5rem;
    }
`

const Image = styled.article`

`

export default HomeHero;