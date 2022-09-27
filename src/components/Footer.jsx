import styled from "styled-components";
import { motion } from "framer-motion";

const Footer = () => {
  return <StyledFooter>FOOTER</StyledFooter>;
};

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 50vh;
  color: #fff;
  background-color: ${(props) => props.theme.primary};
`;

export default Footer;
