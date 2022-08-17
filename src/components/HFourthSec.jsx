import styled from "styled-components";

const HFourthSec = () => {
    return (
      <Section>
        <Container>
          <Text>
            <h1>Something Something</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor nec
              arcu id lacus. Sed duis et diam.
            </p>
          </Text>
          <Image></Image>
        </Container>
      </Section>
    );
};

const Section = styled.section`
  width: 100%;
  min-height: 90vh;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 6.5rem 0;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  article {
    width: 50%;
  }
`;

const Text = styled.article`
padding-right: 6rem;
    h1 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
    p {
        font-size: 1.5rem;
    }
`
const Image = styled.article`
    height: 30.7rem;
    background-color: #e5e5e5;
`

export default HFourthSec;