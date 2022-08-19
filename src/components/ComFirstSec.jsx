import styled from "styled-components";

const ComFirstSec = () => {
  return (
    <Section>
      <Container>
        <Text>
          <h1>1000 Developers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
            vestibulum malesuada tortor elementum ornare turpis at tempor amet.
            Sit dui amet, leo dia
          </p>
        </Text>
        <Image></Image>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 12vh;
  width: 100%;
  min-height: 100vh;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 4rem 0;
`;

const Text = styled.article`
  width: 48%;
  margin: 0 auto;
  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
`;

const Image = styled.article`
  width: 80%;
  height: 32.5rem;
  margin: 3rem auto 0;
  background-color: #d5d5d5;
`;

export default ComFirstSec;
