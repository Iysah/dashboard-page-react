import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthLink, Container, Logo, NavLinks, Right, NavLink, Wrapper } from './style'
import { FiUnlock } from 'react-icons/fi'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  
  return (
    <Container>
        <Wrapper>
            <Logo>
                <Link to="/">
                    <img src={logo} alt='logo' />
                </Link>
            </Logo>
            <Right>
                <NavLinks>
                    <NavLink to="/" isActive={location.pathname === "/"}>Home</NavLink>
                    <NavLink to="/support" isActive={location.pathname === "/support"}>Support</NavLink>
                    <NavLink to="/contact" isActive={location.pathname === "/contact"}>Contact</NavLink>
                </NavLinks>
                <AuthLink>
                    <Link to="/login"><FiUnlock /> Login</Link>
                    <button onClick={() => navigate("/signup")}>Get Started</button>
                </AuthLink>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar