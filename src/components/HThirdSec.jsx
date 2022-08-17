import styled from "styled-components";

const HThirdSec = () => {
    return (
      <Section>
        <Container>
          <Image></Image>
          <Text>
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
          </Text>
        </Container>
      </Section>
    );
};

const Section = styled.section`
  width: 100%;
  min-height: 90vh;
`

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  padding: 6rem 0;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  article {
    width: 50%;
  }
`;

const Image = styled.article`
  height: 28.6rem;
  background-color: #d9d9d9;
`;

const Text = styled.article`
padding-left: 5rem;
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
        background-color:#d9d9d9 ;
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
export default HThirdSec;