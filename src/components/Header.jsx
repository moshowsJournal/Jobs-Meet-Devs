import {useState} from "react"
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { headerAnimate } from "../animation";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mobileNavHandler = () => {
    setMobileOpen(!mobileOpen);
  };

  mobileOpen
    ? document.body.classList.add("fixed")
    : document.body.classList.remove("fixed");

  return (
    <MainHeader>
      <Nav variants={headerAnimate} initial="hide" animate="show">
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
        <MenuBar className={mobileOpen && "active"} onClick={mobileNavHandler}>
          <span></span>
          <span></span>
          <span></span>
        </MenuBar>
        <AnimatePresence>
          {mobileOpen && <MobileNav setMobileOpen={setMobileOpen} />}
        </AnimatePresence>
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

  @media screen and (max-width: 40rem) {
  width: 90%;
  } 
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

  @media screen and (max-width: 40rem) {
    display: none;
  }
`;

const MenuBar = styled.div`
  display: none;
  z-index: 50;
  cursor: pointer;
  transition: all 0.3s linear;
  span {
    background-color: ${(props) => props.theme.primary};
    display: block;
    width: 28px;
    height: 2px;
    border-radius: 9999px;
    transition: all 0.3s ease-in-out;
    &:not(:last-child) {
      margin-bottom: 7px;
    }
  }
  &.active {
    transition-delay: 0.8s;
    transform: rotate(45deg);
    span {
      background-color: #fff;
    }
    span:nth-child(2) {
      width: 0;
    }
    span:nth-child(1),
    span:nth-child(3) {
      transition-delay: 0.4s;
    }
    span:nth-child(1) {
      transform: translateY(9px);
    }
    span:nth-child(3) {
      transform: translateY(-9px) rotate(90deg);
    }
  }

  @media screen and (max-width: 40rem) {
    display: block;
  }
`;

export default Header;
