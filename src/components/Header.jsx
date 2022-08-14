import { useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../assets/pngs/jobsMeetDevsLogo.png'

const Header = () => {
    
    return (
        <MainHeader>
            <Nav>
                <NavLogo>
                    <Link to="/">
                    <img src={logo} alt='Logo'/>
                    </Link>
                </NavLogo>
                <NavList>
                    <li className='active'>
                        <Link to="/"  >
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                        About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/community" >
                        Community
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                        Contact Us
                        </Link>
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
box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.1);
`

const Nav = styled.nav`
width: 85%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
`

const NavLogo = styled.div`

`

const NavList = styled.ul`
display: flex;
align-items: center;
li {
    margin-left: 3rem;
    color: #383333;
    a {
        color:inherit;
    }
    &.active {
            color: #3A7CEC;
            a {
                color: inherit;
                font-weight: bold;
            }
        }
}
`

export default Header;