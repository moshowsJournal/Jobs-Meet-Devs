import { useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../assets/pngs/jobsMeetDevsLogo.png'

const Header = () => {
    const [home, setHome] = useState(true)
    const [about, setAbout] = useState(false)
    const [community, setCommunity] = useState(false)
    const [contact, setContact] = useState(false)

    const homeHandler = () => {
        setHome(true)
        setAbout(false)
        setCommunity(false)
        setContact(false)
    }

    const aboutHandler = () => {
        setHome(false)
        setAbout(true)
        setCommunity(false)
        setContact(false)
    }

    const communityHandler = () => {
        setHome(false)
        setAbout(false)
        setCommunity(true)
        setContact(false)
    }

    const contactHandler = () => {
        setHome(false)
        setAbout(false)
        setCommunity(false)
        setContact(true)
    }
    
    return (
        <MainHeader>
            <Nav>
                <NavLogo>
                    <Link to="/">
                    <img src={logo} alt='Logo'/>
                    </Link>
                </NavLogo>
                <NavList>
                    <li className={home && 'active'} onClick={homeHandler}>
                        <Link to="/"  >
                        Home
                        </Link>
                    </li>
                    <li className={about && 'active'} onClick={aboutHandler}>
                        <Link to="/about">
                        About Us
                        </Link>
                    </li>
                    <li className={community && 'active'} onClick={communityHandler}>
                        <Link to="/community" >
                        Community
                        </Link>
                    </li>
                    <li className={contact && 'active'} onClick={contactHandler}>
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