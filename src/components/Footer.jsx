import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Links>
          <div>
            <h3>Company</h3>
            <p>
              <Link to="/about-us">About Us</Link>
            </p>
            <p>
              <Link to="/community">Community</Link>
            </p>
          </div>
          <div>
            <h3>Contact</h3>
            <div>
              <a
                href="http://www.twitter.com/jobsmeetdevs?s=11&t=2eZBYvWDMnMMq7GswVbvqg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter fill="#fff" size="1.4rem" />
              </a>
              <a
                href="http://www.linkedin.com/company/jobs-meet-devs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin fill="#fff" size="1.4rem" />
              </a>
              <a
                href="http://www.instagram.com/jobsmeetdevs?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineInstagram fill="#fff" size="1.4rem" />
              </a>
            </div>
          </div>
        </Links>
        <Line>
        </Line>
        <CopyRight>
          <p>
           Copyright &copy; Jobs Meet Devs
          </p>
        </CopyRight>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 50vh;
  color: #fff;
  background-color: ${(props) => props.theme.primary};
  font-family: "GTWalsheimPro", sans-serif;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 3rem 0;
`;

const Links = styled.article`
  width: 40%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  div {
    h3 {
      font-size: 1.2rem;
      margin-bottom: 1.2rem;
    }
    p {
      margin-bottom: 1.5rem;
      a {
        color: #fff;
      }
    }
    div {
      a {
        margin-right: 1rem;
        svg {
          transform: scale(1);
          transition: transform 0.2s linear;
        }
        &:hover {
          svg {
            transform: scale(1.3);
          }
        }
      }
    }
  }
`;

const Line = styled(motion.article)`
width: 80%;
height: 1px;
background-color: #fff;
margin: 2rem auto;
`

const CopyRight = styled(motion.article)`
text-align: center;
`

export default Footer;
