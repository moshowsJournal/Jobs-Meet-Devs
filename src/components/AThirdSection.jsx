import styled from "styled-components";

const AThirdSection = () => {
    return (
      <Section>
        <Container>
          <article className="top">
            <LeftText>
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              </h1>
            </LeftText>
            <RightText>
              <h1>A sentence that sumarises the points</h1>
              <div>
                <div className="sub-content">
                  <div className="icon"></div>
                  <div className="sub-text">
                    <h3>Something about us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                  </div>
                </div>
                <div className="sub-content">
                  <div className="icon"></div>
                  <div className="sub-text">
                    <h3>Something about us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                  </div>
                </div>
                <div className="sub-content">
                  <div className="icon"></div>
                  <div className="sub-text">
                    <h3>Something about us</h3>
                    <p>Lorem ipsum dolor sit amet, con</p>
                  </div>
                </div>
              </div>
            </RightText>
          </article>
          <article className="the-team">
            <h1>The Team</h1>
            <Images>
              <div></div>
              <div></div>
              <div></div>
            </Images>
          </article>
        </Container>
      </Section>
    );
};

const Section = styled.section`
   width: 100%;
   min-height: 100vh;
`

const Container = styled.div`
width: 85%;
margin: 0 auto;
padding: 5rem 0;
.top {
    display: flex;
    gap:6rem;
}
.the-team {
    margin-top: 2rem;
    h1 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }
}
`
const LeftText = styled.div`
  width: 50%;
  h1 {
    font-size: 2.5rem;
    line-height: 50px;
  }
`;


const RightText = styled.div`
width: 40%;
  h1 {
    font-size: 2.5rem;
    line-height: 48.5px;
    margin-bottom: 1.5rem;
  }

  .sub-content {
    display: flex;
    margin-bottom: 2.5rem;
    .icon {
      width: 5.4rem;
      height: 4.9rem;
      background-color: #d9d9d9;
      margin-right: 1rem;
    }
    .sub-text {
      h3 {
        font-size: 2rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
  }
`;

const Images = styled.div`
display: flex;
justify-content: space-evenly;
    div {
        width: 30%;
        height: 19rem;
        background-color: #d9d9d9;
    }
`

export default AThirdSection;