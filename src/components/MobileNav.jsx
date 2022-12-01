import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MobileNav = ({setMobileOpen}) => {
    const clickHandler = () => {
      setMobileOpen(false);
    };

    const mobileAnimation = {
      hidden: {
        opacity: 0,
        x: 100,
      },
      show: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.3,
        },
      },
      exit: {
        opacity: 0,
        x: 100,
      },
    };

    return (
      <MobileNavSection
        variants={mobileAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <nav>
          <MobileNavList>
            <li>
              <Link to="/" onClick={clickHandler}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={clickHandler}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/community" onClick={clickHandler}>
                Community
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={clickHandler}>
                Contact Us
              </Link>
            </li>
          </MobileNavList>
        </nav>
      </MobileNavSection>
    );
};

const MobileNavSection = styled(motion.section)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.primary};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  nav {
    width: 30vw;
    height: 55vh;
  }
`;

const MobileNavList = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  li {
    a {
        color: #fff;
      font-family: "GTWalsheimPro", sans-serif;
      font-size: 1.3rem;
    }
  }
`;


export default MobileNav;