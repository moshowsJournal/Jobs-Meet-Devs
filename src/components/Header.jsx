import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const headerAnimation = {
  hide: {
    opacity: 0,
    y: -100,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.5,
    },
  },
};

const Header = () => {
  return (
    <MainHeader>
      <Nav variants={headerAnimation} initial="hide" animate="show">
        <div>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <NavList>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/community" activeClassName="active">
              Community
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" activeClassName="active">
              Contact Us
            </NavLink>
          </li>
        </NavList>
      </Nav>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  font-size: 16px;
  font-family: "GTWalsheimPro", sans-serif;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 12vh;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.1);
`;

const Nav = styled(motion.nav)`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin-left: 3rem;
    a {
      color: ${(props) => props.theme.text1};
      &.active {
        font-weight: bold;
        color: ${(props) => props.theme.primary};
      }
    }
  }
`;

export default Header;
