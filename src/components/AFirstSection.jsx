import styled from "styled-components";

const AFirstSection = () => {
  return (
    <Section>
      <Container>
        <Text>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
            vestibulum malesuada tortor elementum ornare turpis at tempor amet.
            Sit dui amet, leo dia
          </p>
        </Text>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 12vh;
  width: 100%;
  min-height: 60vh;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 8rem 0 6.5rem;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
`;

const Text = styled.article`
  width: 45%;
  margin: 0 auto;
  h1 {
    font-size: 2.5rem;
    line-height: 50px;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.5rem;
    line-height: 30px;
  }
`;

export default AFirstSection;
