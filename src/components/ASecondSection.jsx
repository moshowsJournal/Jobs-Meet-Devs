import styled from "styled-components";

const ASecondSection = () => {
    return (
        <Section>
            <Container>
                <article className="first-image">

                </article>
                <article className="second-image">

                </article>
            </Container>
        </Section>
    );
};

const Section = styled.section`
width: 100%;
min-height: 60vh;
`

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  gap: 4rem;
  padding: 5rem 0;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  article {
    background-color: #d9d9d9;
    min-height: 19rem;
  }
  .first-image {
    width: 60%;
  }
  .second-image {
    width: 30%;
  }
`;

export default ASecondSection;