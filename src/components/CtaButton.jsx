import styled from "styled-components";
import { motion } from "framer-motion";

const CtaButton = ({href, children}) => {
    return (
      <Div>
        <a href={href} className="ctaBtn">
          {children}
        </a>
      </Div>
    );
};

const Div = styled(motion.div)`
  .ctaBtn {
   display: inline-block;
    background-color: ${(props) => props.theme.primary};
    padding: 1.4rem 2rem;
    border-radius: 1rem;
    font-size: 1.1rem;
    font-family: "GTWalsheimPro", sans-serif;
    color: #fff;
    min-width: 10rem;
    height: 4rem;
  }
`;


export default CtaButton;