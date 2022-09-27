import styled from "styled-components";
import { motion } from "framer-motion";

const CtaButton = ({ href, children, animation }) => {
  return (
    <Div>
      <motion.a variants={animation} href={href} className="ctaBtn">
        {children}
      </motion.a>
    </Div>
  );
};

const Div = styled(motion.div)`
  text-align: center;
  .ctaBtn {
    display: inline-block;
    background-color: ${(props) => props.theme.primary};
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-size: 1.1rem;
    font-family: "GTWalsheimPro", sans-serif;
    color: #fff;
  }
`;

export default CtaButton;
