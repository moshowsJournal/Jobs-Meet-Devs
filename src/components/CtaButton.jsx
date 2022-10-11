import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CtaButton = ({ href, children, animation }) => {
  return (
    <Div>
      <motion.a variants={animation} href="#" className="ctaBtn">
        <Link to="/contact-us">{children}</Link>
      </motion.a>
    </Div>
  );
};

const Div = styled(motion.div)`
  text-align: center;
  .ctaBtn {
    display: inline-block;
    font-family: "GTWalsheimPro", sans-serif;
    color: #fff;
    a {
      background-color: ${(props) => props.theme.primary};
      padding: 1rem 2rem;
      border-radius: 1rem;
      font-size: 1.1rem;
      color: inherit;
    }
  }
`;

export default CtaButton;
