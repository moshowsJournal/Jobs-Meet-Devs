import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../assets/pngs/jobsMeetDevsLogo.png";

const Header = () => {
  
  return (
    <MainHeader>
      <Nav>
        <NavLogo>
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </NavLogo>
        <NavList>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/community" activeClassName="active">
              Community
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact Us
            </NavLink>
          </li>
        </NavList>
      </Nav>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled.div``;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin-left: 3rem;
    a {
      color: #383333;
      font-weight: bold;
      &.active {
          color: #3a7cec;
      }
    }
  }
`;

export default Header;
