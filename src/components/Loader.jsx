import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../assets/pngs/JMD.png";

const Loader = () => {
  return (
    <Container>
      <StyledLogo
        animate={{ scale: 60 }}
        transition={{ delay: 2, duration: 2, ease: [0.6, 0.01, -0.05, 0.9] }}
      >
        <motion.div
          animate={{ x: [-750, 0], opacity: [0, 1], rotate: 360 }}
          transition={{duration: 2}}
          className="logo-image"
        >
          <img src={logo} alt="logo" />
        </motion.div>
        <div className="logo-text">
          <motion.span
            animate={{ y: [-70, 0], opacity: [0, 1] }}
            transition={{ duration: 2 }}
          >
            Jobs
          </motion.span>
          <motion.span
            animate={{ y: [70, 0], opacity: [0, 1] }}
            transition={{ duration: 2.5 }}
          >
            Meet Devs
          </motion.span>
        </div>
      </StyledLogo>
    </Container>
  );
};

const Container = styled(motion.section)`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled(motion.div)`
  /* overflow: hidden; */
  min-width: 20rem;
  position: relative;
  display: flex;
  align-items: center;
  .logo-image {
    position: relative;
    width: 13rem;
    height: 8rem;
    img {
      position: absolute;
      top: 6px;
      left: -20px;
      width: 100%;
      height: 100%;
    }
  }
  .logo-text {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: "GTWalsheimPro", sans-serif;
    position: absolute;
    left: 10rem;
    bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    span {
      color: ${(props) => props.theme.text1};
    }
  }
`;

export default Loader;
