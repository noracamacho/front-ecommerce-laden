import React, { useState, useEffect }  from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../assets/LadenTech.png'
import './styles/appNavBar.css'

const AppNavBar = () => {

    const [isLogged, setIsLogged] = useState(false);
    
    useEffect(() => {
        const condition = localStorage.getItem('token') ? true : false;
        setIsLogged(condition);
    }, [])

  return (
    <Navbar className='nav__bar' bg="primary" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to="/"><img className='logo' src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/purchases">Purchases</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/login">{isLogged ? 'Logout' : 'Login'}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavBar