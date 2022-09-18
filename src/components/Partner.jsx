import styled from "styled-components";

const Partner = () => {
    return (
      <Section>
        <Container>
          <Text>
            <h1>Our esteemed partners</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor nec
              arcu id lacus. Sed duis et diam.
            </p>
          </Text>
          <Images>
            <div className="partner-image"></div>
            <div className="partner-image"></div>
            <div className="partner-image"></div>
          </Images>
        </Container>
      </Section>
    );
};

const Section = styled.section`
  width: 100%;
  min-height: 40vh;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 5rem 0;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  article {
    width: 47%;
  }
`;

const Text = styled.article`
  h1 {
    font-size: 2.5rem;
    line-height: 48.5px;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.primary};
  }

  p {
    font-size: 1.2rem;
    color: ${(props) => props.theme.text2};
    line-height: 30px;
  }
`;

const Images = styled.article`
display: flex;
gap: 2rem;
  .partner-image {
    height: 9.4rem;
    width: 9.4rem;
    border-radius: 50%;
    background-color: #d9d9d9;
  }
`;

export default Partner;